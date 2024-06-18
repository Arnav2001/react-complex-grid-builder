import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './GridViewBuilder.css';

const GridViewBuilder = ({ data }) => {
  const [elements, setElements] = useState([]);
console.log('yoyoyooyoyoyoyo');
  const renderColumns = useCallback(() => {
    let column1 = [];
    let column2 = [];
    const finalRender = [];
    let j = 1;

    for (j; j <= data.length; j++) {
      if (j % 6 === 1) {
        column1.push(
          <div key={j - 1} className="gridDiv1">
            <div
              className="divImg1"
              style={{
                backgroundImage: `url(${data[j - 1].coverImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="bottomDiv">
              <h1 className="headingDiv">
                {data[j - 1].heading.length > 50
                  ? `${data[j - 1].heading.slice(0, 50)}...`
                  : data[j - 1].heading}
              </h1>
              <p className="paraDiv1"> {data[j - 1].writer} </p>
              <div className="bottomBar">
                <div className="bottomBarInner1">
                  <div className="dateDiv1">{data[j - 1].date}</div>
                </div>
                <img
                  src="./arrow.svg"
                  alt="arrow"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        );
      } else if (j % 6 === 3) {
        column1.push(
          <div key={j - 1} className="gridDiv3">
            <div
              className="divImg3"
              style={{
                backgroundImage: `url(${data[j - 1].coverImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="bottomDiv">
              <div className="">
                <h1 className="headingDiv">
                  {data[j - 1].heading.length > 50
                    ? `${data[j - 1].heading.slice(0, 50)}...`
                    : data[j - 1].heading}
                </h1>
                <p className="paraDiv3"> {data[j - 1].writer}</p>
              </div>
              <div className="bottomBar">
                <div className="bottomBarInner3">
                  <div className="dateDiv3">{data[j - 1].date}</div>
                </div>
                <div className="pt-6">
                  <img
                    src="../assets/arrow.svg"
                    alt="arrow"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else if (j % 6 === 2) {
        column2.push(
          <div key={j - 1} className="gridDiv2">
            <div
              className="divImg2"
              style={{
                backgroundImage: `url(${data[j - 1].coverImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="bottomDiv">
              <h1 className="headingDiv">
                {data[j - 1].heading.length > 50
                  ? `${data[j - 1].heading.slice(0, 50)}...`
                  : data[j - 1].heading}
              </h1>
              <p className="paraDiv2">{data[j - 1].writer}</p>
              <div className="bottomBar">
                <div className="bottomBarInner2">
                  <div className="dateDiv2">{data[j - 1].date}</div>
                </div>
                <img
                  src="../assets/arrow.svg"
                  alt="arrow"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        );
      } else if (j % 6 === 4) {
        column2.push(
          <div key={j - 1} className="gridDiv4">
            <div
              className="divImg4"
              style={{
                backgroundImage: `url(${data[j - 1].coverImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="bottomDiv">
              <h1 className="headingDiv">
                {data[j - 1].heading.length > 50
                  ? `${data[j - 1].heading.slice(0, 50)}...`
                  : data[j - 1].heading}
              </h1>
              <p className="paraDiv4">{data[j - 1].writer}</p>
              <div className="bottomBar">
                  <div className="dateDiv4">{data[j - 1].date}</div>
                <img
                  src="../assets/arrow.svg"
                  alt="arrow"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        );
      } else if (j % 6 === 5) {
        column2.push(
          <div key={j - 1} className="gridDiv5">
            <div
              className="divImg5"
              style={{
                backgroundImage: `url(${data[j - 1].coverImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="bottomDiv">
              <h1 className="headingDiv">
                {data[j - 1].heading.length > 50
                  ? `${data[j - 1].heading.slice(0, 50)}...`
                  : data[j - 1].heading}
              </h1>
              <p className="paraDiv5">{data[j - 1].writer}</p>
              <div className="bottomBar">
                <div className="bottomBarInner5">
                  <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                    {data[j - 1].date}
                  </div>
                </div>
                <img
                  src="../assets/arrow.svg"
                  alt="arrow"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        );
      } else if (j % 6 === 0) {
        finalRender.push(
          <div  className="">
            <div key={j - 1} className="gridDivMain">
              <div className="firstColumn">{column1}</div>
              <div className="secondColumn">{column2}</div>
            </div>
            <div className="gridDiv0">
              <div
                className="divImg0"
                style={{
                  backgroundImage: `url(${data[j - 1].coverImg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="bottomDiv">
                <div className="flex w-[50%] items-center">
                  <div className="headingDiv">
                    {data[j - 1].heading.length > 50
                      ? `${data[j - 1].heading.slice(0, 50)}...`
                      : data[j - 1].heading}
                    <div className="paraDiv0">{data[j - 1].writer}</div>
                  </div>
                </div>
                <div className="bottomBar0">
                  <div className="dateDiv0">{data[j - 1].date}</div>
                  <img
                    src="../assets/arrow.svg"
                    alt="arrow"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
        );
        column1 = [];
        column2 = [];
      }
    }

    if (column1.length !== 0 || column2.length !== 0) {
      finalRender.push(
        <div key={j} className="gridDivMain">
          <div className="first-column">{column1}</div>
          <div className="second-column w-fit">{column2}</div>
        </div>
      );
    }

    return <>{finalRender}</>;
  }, [data]);

  useEffect(() => {
    const renderedData = renderColumns();
    setElements(renderedData);
  }, [renderColumns]);

  return <div className="gridMainDiv">{data.length === 0 ? 'No Data Available':elements}</div>;
};

GridViewBuilder.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      coverImg: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      writer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GridViewBuilder;

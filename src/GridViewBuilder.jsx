import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './GridViewBuilder.css';

const GridViewBuilder = ({data}) => {
    const [elements, setElements] = useState([]);
    
    const renderColumns = useCallback(() => {
      let column1 = [];
      let column2 = [];
      const finalRender = [];
      // Calculate the number of iterations required based on the number of objects
      let j = 1;
      // Generate divs for each iteration
      for (j; j <= data.length; j++) {
        console.log("% value ", j % 6);
  
        if (j % 6 === 1) {
          column1.push(
            <Link key={j - 1} href={data[j-1].link}>
              {isTabletView ? (
                <div className="gridDiv1">
                  <div
                    className="divImg1"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="bottomDiv1">
                    <h1 className="headingDiv1">
                      {data[j - 1].heading.length > 50
                        ? `${data[j - 1].heading.slice(0, 50)}...`
                        : data[j - 1].heading}
                    </h1>
                    <p className="paraDiv1"> {data[j - 1].writer} </p>
                    <div className="bottomBar1">
                      <div className="bottomBarInner1">
                        <div className="dateDiv1">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <Image
                        src="../assets/arrow.svg"
                        alt="arrow"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" h-[39.3125rem] w-[37.1875rem] rounded-[24px] border border-selectedBorder">
                  <div
                    className="h-[25.9375rem] w-full rounded-t-[24px]"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="mt-[20px] pl-6 pr-6">
                    <h1 className="content mr-20 text-[34px] font-[800] leading-[40px]">
                      {data[j - 1].heading.length > 50
                        ? `${data[j - 1].heading.slice(0, 50)}...`
                        : data[j - 1].heading}
                    </h1>
                    <p className="content mt-4"> {data[j - 1].writer}</p>
                    <div className="mb-[15px] mt-2 flex items-center justify-between">
                      <div className="flex items-center justify-center gap-2 text-center">
                        <div className="content flex h-[34px] w-[151px] items-center justify-center rounded-[24px] border border-selectedBorder text-center">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <img src="../assets/arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
              )}
            </Link>,
          );
        } else if (j % 6 === 3) {
          column1.push(
            <Link key={j - 1} href={data[j-1].link}>
              {isTabletView ? (
                <div className="gridDiv3">
                  <div
                    className="divImg3"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="bottomDiv3">
                    <div className="">
                      <h1 className="headingDiv3">
                        {data[j - 1].heading.length > 50
                          ? `${data[j - 1].heading.slice(0, 50)}...`
                          : data[j - 1].heading}
                      </h1>
                      <p className="paraDiv3"> {data[j - 1].writer}</p>
                    </div>
  
                    <div className="bottomBar3">
                      <div className="bottomBarInner3">
                        <div className="dateDiv3">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <div className="pt-6">
                        <Image
                          src="../assets/arrow.svg"
                          alt="arrow"
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" h-[53.5rem] w-[37.1875rem] rounded-[24px] border border-selectedBorder">
                  <div
                    className="h-[39rem] w-full rounded-t-[24px]"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="mt-6 pl-6 pr-6">
                    <div className="">
                      <h1 className="content mr-24 text-[34px] font-[800] leading-[40px]">
                        {data[j - 1].heading.length > 50
                          ? `${data[j - 1].heading.slice(0, 50)}...`
                          : data[j - 1].heading}
                      </h1>
                      <p className="content pt-2"> {data[j - 1].writer}</p>
                    </div>
  
                    <div className="flex  justify-between">
                      <div className="flex  items-end justify-center  text-center">
                        <div className="content flex h-[34px] w-[151px] items-center justify-center rounded-[24px] border border-selectedBorder text-center">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <div>
                        <img
                          src="../assets/arrow.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Link>,
          );
        } else if (j % 6 === 2) {
          column2.push(
            <Link key={j - 1} href={data[j-1].link}>
              {isTabletView ? (
                <div className="gridDiv2">
                  <div
                    className="divImg2"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="bottomDiv2">
                    <h1 className="headingDiv2">
                      {data[j - 1].heading.length > 50
                        ? `${data[j - 1].heading.slice(0, 50)}...`
                        : data[j - 1].heading}
                    </h1>
                    <p className="paraDiv2">
                      {data[j - 1].writer}
                    </p>
                    <div className="bottomBar2">
                      <div className="bottomBarInner2">
                        <div className="dateDiv2">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <Image
                        src="../assets/arrow.svg"
                        alt="arrow"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" h-[33.4375rem] w-[31.375rem] rounded-[24px] border border-selectedBorder">
                  <div
                    className="h-[20.25rem] w-full rounded-t-[24px]"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="mt-[6px] pl-6 pr-6">
                    <h1 className="content text-[34px] font-[800] leading-[40px]">
                      {data[j - 1].heading.length > 50
                        ? `${data[j - 1].heading.slice(0, 50)}...`
                        : data[j - 1].heading}
                    </h1>
                    <p className="content"> {data[j - 1].writer}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center gap-2 text-center">
                        <div className="content flex h-[34px] w-[151px] items-center justify-center rounded-[24px] border border-selectedBorder text-center">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <img src="../assets/arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
              )}
            </Link>,
          );
        } else if (j % 6 === 4) {
          column2.push(
            <Link key={j - 1} href={data[j-1].link}>
              {isTabletView ? (
                <div className="gridDiv4">
                  <div
                    className="divImg4"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="bottomDiv4">
                    <h1 className="headingDiv4">
                      {data[j - 1].heading.length > 50
                        ? `${data[j - 1].heading.slice(0, 50)}...`
                        : data[j - 1].heading}
                    </h1>
                    <p className="paraDiv4">
                      {data[j - 1].writer}
                    </p>
                    <div className="bottomBar4">
                      <div className="bottomBarInner4">
                        <div className="dateDiv4">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <Image
                        src="../assets/arrow.svg"
                        alt="arrow"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" h-[29.0625rem] w-[31.375rem] rounded-[24px] border border-selectedBorder">
                  <div
                    className="h-[16.0625rem] w-full rounded-t-[24px]"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="mt-6 pl-6 pr-6">
                    <h1 className="content text-[34px] font-[800] leading-[40px]">
                      {data[j - 1].heading.length > 50
                        ? `${data[j - 1].heading.slice(0, 50)}...`
                        : data[j - 1].heading}
                    </h1>
                    <p className="content pt-2"> {data[j - 1].writer}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center gap-2 text-center">
                        <div className="content flex h-[34px] w-[151px] items-center justify-center rounded-[24px] border border-selectedBorder text-center">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <img src="../assets/arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
              )}
            </Link>,
          );
        } else if (j % 6 === 5) {
          column2.push(
            <Link key={j - 1} href={data[j-1].link}>
              {isTabletView ? (
                <div className="gridDiv5">
                  <div
                    className="divImg5"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="bottomDiv5">
                    <h1 className="headingDiv5">
                      {data[j - 1].heading.length > 50
                        ? `${data[j - 1].heading.slice(0, 50)}...`
                        : data[j - 1].heading}
                    </h1>
                    <p className="paraDiv5">
                      {data[j - 1].writer}
                    </p>
                    <div className="bottomBar5">
                      <div className="bottomBarInner5">
                        <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <Image
                        src="../assets/arrow.svg"
                        alt="arrow"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" h-[29.0625rem] w-[31.375rem] rounded-[24px] border border-selectedBorder">
                  <div
                    className=" h-[16.0625rem] w-full rounded-t-[24px]"
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="mt-6 pl-6 pr-6">
                    <h1 className="content text-[34px] font-[800] leading-[40px]">
                      {data[j - 1].heading.length > 50
                        ? `${data[j - 1].heading.slice(0, 50)}...`
                        : data[j - 1].heading}
                    </h1>
                    <p className="content pt-2"> {data[j - 1].writer}</p>
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center justify-center gap-2 text-center">
                        <div className="content flex h-[34px] w-[151px] items-center justify-center rounded-[24px] border border-selectedBorder text-center">
                          {data[j - 1].date}
                        </div>
                      </div>
                      <img src="../assets/arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
              )}
            </Link>,
          );
        } else if (j % 6 === 0) {
          finalRender.push(
            <div key={j - 1} className="">
              <div className="gridDivMain">
                <div className="">{column1}</div>
                <div className="secondColumn">{column2}</div>
              </div>
              <Link href={data[j-1].link}>
                {isTabletView ? (
                  <div className="gridDiv0">
                    <div
                      className="divImg0"
                      style={{
                        backgroundImage: `url(${data[j - 1].coverImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="bottomDiv0">
                      <div className="flex w-[50%] items-center  ">
                        <div className="headingDiv0">
                          {data[j - 1].heading.length > 50
                            ? `${data[j - 1].heading.slice(0, 50)}...`
                            : data[j - 1].heading}
                          <div className="paraDiv0">
                            {data[j - 1].writer}
                          </div>
                        </div>
                      </div>
                      <div className="bottomBar0">
                        <div className="dateDiv0">
                          {data[j - 1].date}
                        </div>
                        <Image
                          src="../assets/arrow.svg"
                          alt="arrow"
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=" mt-[20px] h-[37.5rem] w-[70.5625rem] rounded-[24px] border border-selectedBorder ">
                    <div
                      className=" h-[25.5625rem] w-full rounded-t-[24px] "
                      style={{
                        backgroundImage: `url(${data[j - 1].coverImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="mt-6 flex justify-between pl-6 pr-6">
                      <div className="flex w-[50%] items-center  ">
                        <div className="content mr-20 text-[34px] font-[800] leading-[40px]">
                          {data[j - 1].heading.length > 50
                            ? `${data[j - 1].heading.slice(0, 50)}...`
                            : data[j - 1].heading}
                          <div className="content pt-2 text-[16px] font-[100]">
                            {data[j - 1].writer}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-6">
                        <div className="content flex h-[34px] w-[151px] items-center justify-center rounded-[24px] border border-selectedBorder text-center">
                          {data[j - 1].date}
                        </div>
                        <img
                          src="../assets/arrow.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            </div>,
          );
          column1 = [];
          column2 = [];
        }
      }
  
      console.log(column1, column2);
      if (column1.length !== 0 || column2.length !== 0) {
        finalRender.push(
          <div key={j - 1} className="mt-4 flex w-fit gap-5">
            <div className="first-column">{column1}</div>
            <div className="second-column w-fit">{column2}</div>
          </div>,
        );
      }
      column1 = [];
      column2 = [];
  
      return <>{finalRender}</>;
    }, [data]);

    useEffect(() => {
      const renderedData = renderColumns();
      setElements(renderedData);
    }, [renderColumns]);


    return <div className="gridMainDiv">
    {elements}
  </div>
};

GridView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      coverImg: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      writer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired
};

export default GridViewBuilder;

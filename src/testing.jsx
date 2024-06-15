"use client";
import React, { useCallback, useEffect, useState } from "react";
import BlogListingMobView from "./blog-listing-mob-view/BlogListingMobView";
import useIsMobile from "@/app/hooks/customHook";
import useIsTabletView from "@/app/hooks/isTabHook";
import Link from "next/link";
import Image from "next/image";
import Spinner from "../spinner/Spinner";

const BlogListingHero = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isLoadMoreAvailable, setIsLoadMoreAvailable] = useState(false);
  const [backendData, setBackendData] = useState([]);
  const [elements, setElements] = useState([]);

  const fetchBlogsData = async () => {
    try {
      const response = await fetch(
        "https://mik4tx7ct3.execute-api.ap-south-1.amazonaws.com/dev/blogs",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setBackendData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    } finally {
      setLoading(false);
    }
  };

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
          <Link key={j - 1} href={`/blogs/${data[j - 1].id}`}>
            {isTabletView ? (
              <div className=" h-[600px] w-[21.875rem] rounded-[24px] border border-selectedBorder">
                <div
                  className="h-[25.9375rem] w-full rounded-t-[24px]"
                  style={{
                    backgroundImage: `url(${data[j - 1].coverImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="pl-3 pr-3 pt-3">
                  <h1 className="content mr-20 text-[20px] font-[800]">
                    {data[j - 1].heading.length > 50
                      ? `${data[j - 1].heading.slice(0, 50)}...`
                      : data[j - 1].heading}
                  </h1>
                  <p className="content text-[12px]"> {data[j - 1].writer} </p>
                  <div className="flex items-center justify-between pt-6">
                    <div className="flex items-center justify-center gap-2 text-center">
                      <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                        {data[j - 1].date}
                      </div>
                    </div>
                    <Image
                      src="/assets/images/blog-page/arrow.svg"
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
                    <img src="/assets/images/blog-page/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            )}
          </Link>,
        );
      } else if (j % 6 === 3) {
        column1.push(
          <Link key={j - 1} href={`/blogs/${data[j - 1].id}`}>
            {isTabletView ? (
              <div className=" h-[810px] w-[350px] rounded-[24px] border border-selectedBorder">
                <div
                  className="h-[39rem] w-full rounded-t-[24px]"
                  style={{
                    backgroundImage: `url(${data[j - 1].coverImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-3">
                  <div className="">
                    <h1 className="content mr-24 text-[20px] font-[800]">
                      {data[j - 1].heading.length > 50
                        ? `${data[j - 1].heading.slice(0, 50)}...`
                        : data[j - 1].heading}
                    </h1>
                    <p className="content pt-2"> {data[j - 1].writer}</p>
                  </div>

                  <div className="flex flex-col  items-end">
                    <div className="flex flex-col items-end justify-center gap-2 text-center">
                      <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                        {data[j - 1].date}
                      </div>
                    </div>
                    <div className="pt-6">
                      <Image
                        src="/assets/images/blog-page/arrow.svg"
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
                        src="/assets/images/blog-page/arrow.svg"
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
          <Link key={j - 1} href={`/blogs/${data[j - 1].id}`}>
            {isTabletView ? (
              <div className=" h-[500px] w-[350px] rounded-[24px] border border-selectedBorder">
                <div
                  className="h-[20.25rem] w-full rounded-t-[24px]"
                  style={{
                    backgroundImage: `url(${data[j - 1].coverImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="pl-6 pr-6 pt-3">
                  <h1 className="content mr-20 text-[20px] font-[800]">
                    {data[j - 1].heading.length > 50
                      ? `${data[j - 1].heading.slice(0, 50)}...`
                      : data[j - 1].heading}
                  </h1>
                  <p className="content pt-2 text-[12px]">
                    {data[j - 1].writer}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-2 pt-3 text-center">
                      <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                        {data[j - 1].date}
                      </div>
                    </div>
                    <Image
                      src="/assets/images/blog-page/arrow.svg"
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
                    <img src="/assets/images/blog-page/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            )}
          </Link>,
        );
      } else if (j % 6 === 4) {
        column2.push(
          <Link key={j - 1} href={`/blogs/${data[j - 1].id}`}>
            {isTabletView ? (
              <div className=" h-[450px] w-[350px] rounded-[24px] border border-selectedBorder">
                <div
                  className="h-[16.0625rem] w-full rounded-t-[24px]"
                  style={{
                    backgroundImage: `url(${data[j - 1].coverImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="pl-6 pr-6 pt-3">
                  <h1 className="content mr-20 text-[20px] font-[800]">
                    {data[j - 1].heading.length > 50
                      ? `${data[j - 1].heading.slice(0, 50)}...`
                      : data[j - 1].heading}
                  </h1>
                  <p className="content pt-2 text-[12px]">
                    {data[j - 1].writer}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-2 pt-5">
                      <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                        {data[j - 1].date}
                      </div>
                    </div>
                    <Image
                      src="/assets/images/blog-page/arrow.svg"
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
                    <img src="/assets/images/blog-page/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            )}
          </Link>,
        );
      } else if (j % 6 === 5) {
        column2.push(
          <Link key={j - 1} href={`/blogs/${data[j - 1].id}`}>
            {isTabletView ? (
              <div className=" h-[430px] w-[350px] rounded-[24px] border border-selectedBorder">
                <div
                  className=" h-[16.0625rem] w-full rounded-t-[24px]"
                  style={{
                    backgroundImage: `url(${data[j - 1].coverImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="pl-6 pr-6 pt-3">
                  <h1 className="content mr-20 text-[20px] font-[800]">
                    {data[j - 1].heading.length > 50
                      ? `${data[j - 1].heading.slice(0, 50)}...`
                      : data[j - 1].heading}
                  </h1>
                  <p className="content pt-2 text-[12px]">
                    {data[j - 1].writer}
                  </p>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center justify-center gap-2 pt-3 text-center">
                      <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                        {data[j - 1].date}
                      </div>
                    </div>
                    <Image
                      src="/assets/images/blog-page/arrow.svg"
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
                    <img src="/assets/images/blog-page/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            )}
          </Link>,
        );
      } else if (j % 6 === 0) {
        finalRender.push(
          <div key={j - 1} className="columns-container">
            <div className="mt-4 flex w-fit gap-5">
              <div className="first-column">{column1}</div>
              <div className="second-column w-fit">{column2}</div>
            </div>
            <Link href={`/blogs/${data[j - 1].id}`}>
              {isTabletView ? (
                <div className=" mt-[20px] h-[37.5rem] w-[710px] rounded-[24px] border border-selectedBorder ">
                  <div
                    className=" h-[25.5625rem] w-full rounded-t-[24px] "
                    style={{
                      backgroundImage: `url(${data[j - 1].coverImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="flex justify-between pl-6 pr-6 pt-6">
                    <div className="flex w-[50%] items-center  ">
                      <div className="content mr-20 text-[25px] font-[800]">
                        {data[j - 1].heading.length > 50
                          ? `${data[j - 1].heading.slice(0, 50)}...`
                          : data[j - 1].heading}
                        <div className="content pt-2 text-[12px] font-[100]">
                          {data[j - 1].writer}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                        {data[j - 1].date}
                      </div>
                      <Image
                        src="/assets/images/blog-page/arrow.svg"
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
                        src="/assets/images/blog-page/arrow.svg"
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
    fetchBlogsData();
  }, []);

  useEffect(() => {
    const splitData = () => {
      console.log(backendData.length);
      if (backendData.length <= 6) {
        setData(backendData);
      } else {
        // Slice the first 6 values
        const slicedList = backendData.slice(0, 6);
        setData(slicedList);
        setIsLoadMoreAvailable(true);
      }
    };
    splitData();
  }, [backendData]);

  useEffect(() => {
    const renderedData = renderColumns();
    setElements(renderedData);
  }, [renderColumns]);

  const loadMoreData = () => {
    setData(backendData);
    setIsLoadMoreAvailable(false);
  };

  const isMobile = useIsMobile();
  const isTabletView = useIsTabletView();

  if (loading) {
    return <Spinner />;
  }

  return backendData.length !== 0 ? (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div>
        <h1
          className={
            isMobile
              ? " heading text-[2.5rem]"
              : isTabletView
                ? " heading text-70"
                : "heading text-110 "
          }
        >
          Explore The
        </h1>
        <div
          className={
            isMobile
              ? "flex h-fit -translate-y-3 -rotate-4 justify-center"
              : isTabletView
                ? "flex h-fit -translate-y-6 -rotate-4 justify-center"
                : "flex h-fit -translate-y-9 -rotate-4 justify-center"
          }
        >
          <img
            src="/assets/images/blog-page/Blog_sticker.svg"
            alt=" blog sticker"
            height={isMobile ? 35 : isTabletView ? 50 : 105.78}
            width={isMobile ? 109.33 : isTabletView ? 210 : 331.05}
          />
        </div>
      </div>

      {isMobile ? (
        <BlogListingMobView blogsData={data} />
      ) : (
        <div className=" flex h-full w-full flex-col  items-center">
          {elements}
        </div>
      )}

      <div className="mb-6 mt-6 flex w-full justify-center">
        {isLoadMoreAvailable && (
          <div
            onClick={loadMoreData}
            className=" content-neue-medium flex h-[40px] w-[150px] cursor-pointer items-center justify-center rounded-[2rem] bg-selected text-center text-[18px] text-[#FFF641] sm:h-[50px] sm:w-[180px] sm:text-[24px] lg:h-[3.8125rem] lg:w-[13.5625rem] lg:text-[28px] xl:text-[30px]"
          >
            Load more
          </div>
        )}
      </div>
    </div>
  ) : (
    <p>No Blogs found</p>
  );
};

export default BlogListingHero;
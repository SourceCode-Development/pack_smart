import React, { useEffect, useRef, useState } from "react";
import slide1 from "../../../assets/images/slide-1.png";
import { Link } from "react-router-dom";
import { isTabView } from "../../../utils/helper";

const CustomSlider = ({ children, autoplaySpeed = 2000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const slideRef = useRef(null);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoplay) {
        setCurrentSlide((prev) => (prev + 1) % childrenArray.length);
      }
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [childrenArray.length, isAutoplay, autoplaySpeed]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };

  return (
    <div
      className="custom-slider"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
      ref={slideRef}
    >
      <div
        className="slider-container"
        style={{
          width: `${100 * childrenArray.length}%`,
          transform: `translateX(-${
            (currentSlide * 100) / childrenArray.length
          }%)`,
        }}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / childrenArray.length}%`,
              width: "100%",
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {childrenArray.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

const bannerData = [
  {
    banner_images: slide1,
    title: "Smart Shoes",
    banner_url: "UP TO 80% OFF",
  },
  {
    banner_images: slide1,
    title: "Smart Watches",
    banner_url: "Exclusive Deals",
  },
  {
    banner_images: slide1,
    title: "New Collection",
    banner_url: "Latest Trends",
  },
];

const TopSectionSlider = () => {
  const [isLoading, setIsLoading] = useState(false);

  //   const bannerData = [];
  const mouseMoved = useRef(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobileScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsMobileScreen(mediaQuery.matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return (
      <div className="slide-loader">
        <img
          src={loader}
          alt="Loading"
          style={{
            maxWidth: isMobileScreen ? "70px" : "150px",
          }}
        />
      </div>
    );
  }

  const handleClick = (url) => {
    // if (!mouseMoved.current && url && url.length > 0) {
    //   window.open(url, "_blank");
    // }
  };

  if (bannerData?.length < 1) {
    return null;
  }

  // if (bannerData?.length === 1) {
  //   return (
  //     <div className="col-12">
  //       <div className="slide-sec">
  //         <Link
  //           onClick={(e) => {
  //             e.preventDefault();
  //             if (bannerData[0]?.banner_url) {
  //               window.open(bannerData[0]?.banner_url, "_blank");
  //             }
  //           }}
  //         >
  //           <img
  //             src={bannerData[0]?.banner_images}
  //             alt=""
  //             style={{
  //               width: "100%",
  //               borderRadius: "20px",
  //             }}
  //           />
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  // if (bannerData?.length === 2) {
  //   return (
  //     <div className="col-12">
  //       <div className="img-sec-double d-flex flex-column flex-md-row justify-content-around">
  //         <Link
  //           onClick={(e) => {
  //             e.preventDefault();
  //             if (bannerData[0]?.banner_url) {
  //               window.open(bannerData[0]?.banner_url, "_blank");
  //             }
  //           }}
  //         >
  //           <img
  //             src={bannerData[0]?.banner_images}
  //             alt=""
  //             style={{ maxWidth: "100%", borderRadius: "20px" }}
  //           />
  //         </Link>
  //         <Link
  //           onClick={(e) => {
  //             e.preventDefault();
  //             if (bannerData[1]?.banner_url) {
  //               window.open(bannerData[1]?.banner_url, "_blank");
  //             }
  //           }}
  //         >
  //           <img
  //             src={bannerData[1]?.banner_images}
  //             alt=""
  //             style={{ maxWidth: "100%", borderRadius: "20px" }}
  //           />
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  // if (bannerData?.length === 3) {
  //   return (
  //     <>
  //       <div className="col-xl-7 col-lg-7 col-md-7">
  //         <div className="slide-sec">
  //           {bannerData.length > 0 &&
  //             bannerData.slice(0, 1).map((item, index) => (
  //               <div key={index} onClick={() => handleClick(item.banner_url)}>
  //                 <img
  //                   src={item?.banner_images}
  //                   // style={{
  //                   //   objectFit: "contain",
  //                   //   width: "100%",
  //                   //   borderRadius: "20px",
  //                   //   cursor: "pointer",
  //                   // }}
  //                   alt=""
  //                 />
  //               </div>
  //             ))}
  //         </div>
  //       </div>
  //       <div className="col-xl-5 col-lg-5 col-md-5">
  //         <div className="img-sec">
  //           <Link
  //             onClick={(e) => {
  //               e.preventDefault();
  //               if (bannerData[bannerData.length - 1]?.banner_url) {
  //                 window.open(
  //                   bannerData[bannerData.length - 1]?.banner_url,
  //                   "_blank"
  //                 );
  //               }
  //             }}
  //           >
  //             <img
  //               src={bannerData[bannerData.length - 1].banner_images}
  //               alt=""
  //               style={{
  //                 width: "100%",
  //                 borderRadius: "20px",
  //                 cursor: "pointer",
  //               }}
  //             />
  //           </Link>
  //           <Link
  //             onClick={(e) => {
  //               e.preventDefault();
  //               if (bannerData[bannerData.length - 2]?.banner_url) {
  //                 window.open(
  //                   bannerData[bannerData.length - 2]?.banner_url,
  //                   "_blank"
  //                 );
  //               }
  //             }}
  //           >
  //             <img
  //               src={bannerData[bannerData.length - 2].banner_images}
  //               alt=""
  //               style={{
  //                 width: "100%",
  //                 borderRadius: "20px",
  //                 cursor: "pointer",
  //               }}
  //             />
  //           </Link>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      {isMobileScreen || isTabView() ? (
        <div className="col-xl-7 col-lg-7 col-md-12">
          <CustomSlider>
            {bannerData.map((item, index) => (
              <div
                className="slide-sec"
                key={index}
                style={{ borderRadius: "10px" }}
                onMouseMove={() => {
                  if (!mouseMoved.current) {
                    mouseMoved.current = true;
                  }
                }}
                onMouseDown={() => (mouseMoved.current = false)}
                onMouseUp={() => handleClick(item.banner_url)}
              >
                <img
                  src={item?.banner_images}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "10px",
                    cursor: "pointer",
                    // height: "200px",
                  }}
                  alt=""
                />
              </div>
            ))}
          </CustomSlider>
        </div>
      ) : (
        <>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <CustomSlider>
              {bannerData.map((item, index) => (
                <div
                  className="slide-sec"
                  key={index}
                  style={{ borderRadius: "20px" }}
                  onMouseMove={() => {
                    if (!mouseMoved.current) {
                      mouseMoved.current = true;
                    }
                  }}
                  onMouseDown={() => (mouseMoved.current = false)}
                  onMouseUp={() => handleClick(item.banner_url)}
                >
                  <img
                    src={item?.banner_images}
                    style={{
                      // objectFit: "cover",
                      width: "100%",
                      cursor: "pointer",
                    }}
                    alt=""
                  />
                </div>
              ))}
            </CustomSlider>
          </div>
          {/* <div className="col-xl-5 col-lg-5 col-md-5">
            <div className="img-sec">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  if (bannerData[bannerData.length - 1]?.banner_url) {
                    window.open(
                      bannerData[bannerData.length - 1]?.banner_url,
                      "_blank"
                    );
                  }
                }}
              >
                <img
                  src={bannerData[bannerData.length - 1].banner_images}
                  alt=""
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                />
              </Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  if (bannerData[bannerData.length - 2]?.banner_url) {
                    window.open(
                      bannerData[bannerData.length - 2]?.banner_url,
                      "_blank"
                    );
                  }
                }}
              >
                <img
                  src={bannerData[bannerData.length - 2].banner_images}
                  alt=""
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default TopSectionSlider;

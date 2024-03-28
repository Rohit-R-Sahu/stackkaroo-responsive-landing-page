"use client";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";

register();

 const SwiperCard = (props) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="2"
        navigation="false"
        pagination="false"
        className="gap-30"
      >
        {props.arr.map((item, i) => (
          <swiper-slide>
            <div className="swiper-container">
              <div className="box-grad">
                <div className="box">
                  <Image className="box-img" src={item.image} />
                  <p>{item.context}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};
export default SwiperCard ;

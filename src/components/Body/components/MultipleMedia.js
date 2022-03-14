import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./multipleMedia.css";

// import required modules
import { Lazy, Pagination } from "swiper";

export function MultipleMedia({ medias }) {

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        modules={[Lazy, Pagination]}
        className="mySwiper"
      >
        {medias.map((media) => {
          if (media.fields.file.contentType === "video/mp4") {
            return (
              <SwiperSlide>
                <video width="100%" height="300" controls>
                  <source src={media.fields.file.url} type="video/mp4"/>
                </video>
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide>
                <img
                  src={media.fields.file.url}
                  width="100%" height="500px"
                  className="swiper-lazy"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
}

import "swiper/css";
import "swiper/css/lazy";
import "./multipleMedia.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React  from "react";
import { Lazy, Pagination } from "swiper";
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";


export function MultipleMedia({ medias }) {
  const isSm = useMediaQuery("(max-width:732px)");
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
                  height = {isSm? "500px" : "1000px"}
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

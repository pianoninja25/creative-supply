'use client'
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"

function ProductionTeam() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500
  }
  return (
    <div className="relative py-10">
      <h2 className="absolute z-10 left-20 top-14 text-3xl font-snowfun text-white">Production Team</h2>
      <Slider {...settings} className="flex justify-evenly items-center px-[2vw] pb-10 pt-16 mx-8 bg-orange"
      >
        <Image src="/about/production-team/1.jpg" alt="1" width={300} height={300} className="rounded-3xl w-[28vw] px-2" loading="lazy" unoptimized />
        <Image src="/about/production-team/2.jpg" alt="2" width={200} height={200} className="rounded-3xl w-[28vw] px-2" loading="lazy" unoptimized />
        <Image src="/about/production-team/3.jpg" alt="3" width={300} height={300} className="rounded-3xl w-[28vw] px-2" loading="lazy" unoptimized />
        <Image src="/about/production-team/4.jpg" alt="4" width={300} height={300} className="rounded-3xl w-[28vw] px-2" loading="lazy" unoptimized />
        <Image src="/about/production-team/5.jpg" alt="5" width={300} height={300} className="rounded-3xl w-[28vw] px-2" loading="lazy" unoptimized />
      </Slider>

    </div>
  )
}

export default ProductionTeam

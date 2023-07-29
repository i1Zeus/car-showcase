"use client";

import Image from "next/image";

import Button from "@/components/button";

const Hero = () => {
  const handelScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or rent a car — quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          proses
        </p>
        <Button
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleCLick={handelScroll}
          disabled={false}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default Hero;

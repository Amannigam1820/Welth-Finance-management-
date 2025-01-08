"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const imageRef = useRef()

    useEffect(()=>{
        const imageElement = imageRef.current
        const handleScroll = () =>{
            const scrollPosition = window.scrollY;
            const scrollThreshold  =100

            if(scrollPosition > scrollThreshold){
                imageElement.classList.add("scrolled")
            }else{
                imageElement.classList.remove("scrolled")
            }
        }
        window.addEventListener("scroll",handleScroll)
        return () =>window.removeEventListener("scroll",handleScroll)
    })


  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-6xl lg:text-[70px] pb-6 gradient-title">
          Manage Your Finances <br /> With Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {" "}
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insight
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              {" "}
              Get Started
            </Button>
          </Link>
          <Link href="https://www.onelabventures.com/">
            <Button size="lg" className="px-8" variant="outline">
              {" "}
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0"> 
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1000}
              height={600}
              alt="Dashboard preview"
              className="rounded-lg shadow-2xl mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

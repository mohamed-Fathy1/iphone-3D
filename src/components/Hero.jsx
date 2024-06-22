import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to("#hero-video", {
      clipPath: "circle(100% at 50% 50%)",
      duration: 1.5,
      ease: "power4.in",
    });
    gsap.to("#cta", { y: -50, opacity: 1, duration: 1, delay: 2 });
  }, []);

  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 760 ? heroVideo : smallHeroVideo
  );

  const handelVideoSize = () =>
    setVideoSrc(window.innerWidth > 760 ? heroVideo : smallHeroVideo);

  useEffect(() => {
    window.addEventListener("resize", handelVideoSize);

    return () => window.removeEventListener("resize", handelVideoSize);
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iphone 15 Pro
        </p>
        <div
          id="hero-video"
          className="md:w-10/12 w-9/12"
          style={{ clipPath: "circle(17% at 50% 50%)" }}
        >
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center translate-y-20 opacity-0"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;

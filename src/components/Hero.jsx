import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="title image" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        playsInline
        muted
      ></video>
      <button>Buy</button>
      <p>From $1499 or $133/mo for 12months</p>
    </section>
  );
};

export default Hero;

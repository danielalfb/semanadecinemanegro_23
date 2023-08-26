import { useMemo, useRef } from "react";
import YouTube from 'react-youtube'
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div style={{width: '100% !important', backgroundColor: 'lightblue', height: '100vh'}}>
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="top-0 w-full bg-top bg-cover" style={{height: '100vh', backgroundImage: `url('https://www.semanadecinemanegro.com.br/mostras/img/filmes/HOMENAGEM_MARTE_UM.jpg')`}} />
          <div>
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <div className="mt-5 p-10 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
             SOBRE
            </div>
          </div>
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <div className="mt-5 p-10 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
              <YouTube videoId="sTnm5jvjgjM"   style={{ width: ' 100%'}} />
            </div>
          </div>

          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
            <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
            <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
              {data.aboutpara}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

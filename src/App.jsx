
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import './index.css'
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'


function App() {
  let[showcontent,setShowContent]=useState(false);
  useGSAP(()=>{
    const tl=gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate:10,
      duration: 2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%",

    })
    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"expo.inOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
      if(this.progress()>=.9){
        document.querySelector('.svg').remove();
        setShowContent(true);
        this.kill();
      }

      }
    })
        
    
  });

  useGSAP(()=>{
    if(!showcontent) return;
gsap.to(".main",{
  scale:1,
  rotate:0,
  duration:2,
  delay:-1,
  ease:"Expo.easeInOut",

});
gsap.to(".sky",{
  scale:1.2,
  rotate:0,
  duration:2,
  delay:-0.8,
  ease:"Expo.easeInOut",

})
gsap.to(".bg",{
  scale:1.1,
  rotate:0,
  duration:2,
  delay:-0.8,
  ease:"Expo.easeInOut",

})
gsap.to(".character",{
  scale:1,
  bottom:"0",
  rotate:0,
  duration:2,
  delay:-0.8,
  ease:"Expo.easeInOut",

})


    const main =document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
      const xMove=(e.clientX/window.innerWidth - .5)* 40;
      gsap.to(".imagesdiv .text",{
        x:`${xMove*0.8}%`
      });
      gsap.to(".sky ",{
        x:xMove,
      });
      gsap.to(".bg",{
        x:xMove*1.7,
      });
    },);
  },[showcontent]);

  return (
    <>
     <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href={"./bg.png"}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
     {showcontent &&(
      <div className='main w-full rotate-[-10deg] scale-[1.7] '>
      <div className='landing relative overflow-hidden w-full h-screen bg-black'>
        <div className='navbar absolute top-0 left-0  z-[10] w-full py-10 px-10'>
          <div className='logo flex gap-8 items-center'>
            <div className='lines'>
              <div className='line flex flex-col space-y-1'>
                <div className='line  w-8 h-1 bg-white'></div>
                <div className='line  w-6 h-1 bg-white'></div>
                <div className='line  w-4 h-1  bg-white'></div>
              </div> 
              </div>
            <h3 className='text-4xl -mt-[7px] leading-none text-white' >RockStar</h3>
          </div>
        </div>
        
        <div className='imagesdiv relative overflow-hidden w-full h-screen'>
          <img className='sky rotate-[-30deg] scale-[1.2] absolute w-full h-full object-cover' src='./sky.png'></img>
          <img className='bg rotate-[-20deg] scale-[1.4] absolute w-full h-full object-cover'src='./bg.png'></img>
          <div className='text absolute flex flex-col gap-3 top-20 left-1/2 -translate-x-1/2 text-white'>
          <h1 className='text-[8rem] leading-none -ml-40 '>grand</h1>
          <h1 className='text-[8rem] leading-none ml-20'>theft</h1>
          <h1 className='text-[8rem] leading-none -ml-40'>auto</h1>
        </div>
       
        <img  className='absolute character rotate-[-30deg] -bottom-[80%] left-1/3 translate-x-1/2  w-[28%] 'src='./girl1.png'></img>
          <img  className='absolute character rotate-[-30deg] -bottom-[80%] left-1/2 -translate-x-1/2  w-[30%] 'src='./girl.png'></img>
          
        </div>
        <div className='btmbar text-white w-full absolute bottom-0 left-0 py-10 px-10 bg-gradient-to-t from from-black to-transparent'>
          <div className='flex gap-4 items-center'>
            <i class="text-4xl ri-arrow-down-fill"></i>
            <h3 className='text-2xl font-[Helvetica_Now_Display]'>Scroll Down</h3>
          </div>

          <img className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-[45px]' src='./ps5.png'></img>
        </div>
      </div>
        <div className='w-full h-screen flex items-center justify-center bg-black'>
          <div className='cntnr text-white flex w-full h-screen items-center'>
            <div className='limg relative w-1/2 h-full'>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
          </div>
          <div className='rg w-[30%] h-full overflow-y-auto py-10'>
            <h1 className='text-5xl '>still running</h1>
            <h1 className='text-5xl '>not hunting</h1>
            <p className='mt-10 text-xl font-[Helvetica_Now_Display]'>Step into a world where neon lights meet endless possibilities. This space celebrates the bold energy and urban edge inspired by city life — fast cars, late nights, and untamed creativity. Here, style and attitude collide, inviting you to explore, create, and live without limits.</p>
            <p className='mt-3 text-xl font-[Helvetica_Now_Display]'>Fuel your nights with raw energy and unapologetic style — welcome to the vibe.</p>
          <button className='bg-yellow-500 mt-10 text-xl px-10 py-10 text-black'>Download now</button>
          </div>
          </div>
          
        </div>
     </div>
     
     )}
    </>
  )
}

export default App

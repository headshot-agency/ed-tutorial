"use client"

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ImageAnimation() {
    const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
       
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

    return (
        <section className='demo-image' ref={main}>
            <div className='image'><img src='https://source.unsplash.com/hx5a_f8JsAU' /></div>
            <div className='image'><img src='https://source.unsplash.com/hx5a_f8JsAU' /></div>
            <div className='image'><img src='https://source.unsplash.com/hx5a_f8JsAU' /></div>
            <div className='image'><img src='https://source.unsplash.com/hx5a_f8JsAU' /></div>
            <div className='image'><img src='https://source.unsplash.com/hx5a_f8JsAU' /></div>
            <div className='image'><img src='https://source.unsplash.com/hx5a_f8JsAU' /></div>
        </section>
    )
}
"use client"

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function BoxAnimation() {
    const main = useRef()
    useLayoutEffect(()=> {
      const ctx = gsap.context((self) => {

      }, main)
    }, [])

    return (
        <section className='panel block-animation wrapper-all' ref={main}>
            <div className='image'><img src='https://source.unsplash.com/hx5a_f8JsAU' /></div>
            <div className='box'>Box 1</div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis.</span>
        </section>
    )
}
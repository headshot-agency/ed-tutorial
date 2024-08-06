"use client"

import { useLayoutEffect, useRef } from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation() {
    const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const brandnames = self.selector('.text');
      brandnames.forEach((brandname) => {
        gsap.from(brandname, {
          x: -1000,
          scrollTrigger: {
            trigger: brandname,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

    return (
        <section className='demo-text' ref={main}>
            <div className='text'>CANALI&PARTNERS</div>
            <div className='text'>CANALI&PARTNERS</div>
            <div className='text'>CANALI&PARTNERS</div>
            <div className='text'>CANALI&PARTNERS</div>
            <div className='text'>CANALI&PARTNERS</div>
            <div className='text'>CANALI&PARTNERS</div>
        </section>
    )
}
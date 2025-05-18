import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

function Latest() {

  const containerRef = useRef(null);
  const proxyRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const proxy = proxyRef.current;

    const draggable = Draggable.create(proxy, {
      type: 'x',
      inertia: true,
      onDrag: function () {
        gsap.to(container, {
          x: this.x,
          duration: 0.1,
        });
      },
    });

    return () => {
      draggable[0].kill();
    };
  }, []);
  return (
       <section className="latest-from-epic">
      <h2>The Latest from Epic</h2>
      <div className="carousel-container" ref={containerRef}>
        {/* Replace with your content */}
        <div className="carousel-item">Item 1</div>
        <div className="carousel-item">Item 2</div>
        <div className="carousel-item">Item 3</div>
        {/* ... */}
      </div>
      <div
        ref={proxyRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          cursor: 'grab',
        }}
      />
    </section>
  )
}

export default Latest
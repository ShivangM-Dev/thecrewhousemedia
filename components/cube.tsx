"use client"

import { useEffect } from "react"
import { animate, svg, stagger } from "animejs"

interface AnimatedLinesProps {
  className?: string
}

export default function AnimatedLines({ className = "" }: AnimatedLinesProps) {
  useEffect(() => {
    // Selects and animates all elements with the '.line' class inside this component
    const lineAnimation = animate(svg.createDrawable(".line"), {
      draw: ["0 0", "0 1", "1 1"],
      ease: "inOutQuad",
      duration: 2000,
      delay: stagger(100),
      loop: true,
    })

    // Cleanup function to stop the animation if the component unmounts
    return () => {
      lineAnimation.pause()
    }
  }, [])

  return (
    <div className={`w-full h-full ${className}`}>
      {/* This is a placeholder SVG structure. 
        Replace the paths/lines below with your own custom SVG vector data. 
        Just ensure your SVG stroke elements have the class "line".
      */}
      <svg
        viewBox="0 0 800 200"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#8b1a06" strokeWidth="4" strokeLinecap="round">
          <path className="line" d="M 100 100 L 300 100" />
          <path className="line" d="M 300 100 L 400 150" />
          <path className="line" d="M 400 150 L 700 50" />
        </g>
      </svg>
    </div>
  )
}
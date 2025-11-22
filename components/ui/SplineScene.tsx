'use client'

import Spline from '@splinetool/react-spline/next'

interface Props {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: Props) {
  return (
    <div
      className={className}
      style={{
        contain: "paint layout",
        willChange: "transform",
      }}
    >
      <Spline
        scene={scene}

        // @ts-ignore - Force render to ensure loop plays
        renderOnDemand={false}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}


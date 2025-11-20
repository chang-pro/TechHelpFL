'use client'

import Spline from '@splinetool/react-spline/next'

interface Props {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: Props) {
  return (
    <Spline 
      scene={scene} 
      className={className}
      // @ts-ignore - Force render to ensure loop plays
      renderOnDemand={false}
    />
  )
}


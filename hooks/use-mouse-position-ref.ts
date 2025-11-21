import { useEffect, useRef } from "react"

export interface MousePosition {
  x: number
  y: number
}

export function useMousePositionRef(
  containerRef: React.RefObject<HTMLElement>
) {
  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [containerRef])

  return mousePositionRef
}


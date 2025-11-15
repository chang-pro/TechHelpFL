"use client"

import { useEffect } from "react"
import { initToolbar } from "@21st-extension/toolbar"

export function ToolbarWrapper() {
  useEffect(() => {
    // Only initialize in development mode
    if (process.env.NODE_ENV !== 'development') {
      return
    }

    // Initialize the toolbar
    const config = {
      plugins: [], // Add your custom plugins here
    }
    
    initToolbar(config)
  }, [])

  return null
}


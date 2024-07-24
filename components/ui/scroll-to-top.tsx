"use client"

import React, { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <Button onClick={scrollToTop} className="bg-aquaTeal-600 text-2xl hover:bg-aquaTeal-700">
          ↑
        </Button>
      )}
    </div>
  )
}

export default ScrollToTop

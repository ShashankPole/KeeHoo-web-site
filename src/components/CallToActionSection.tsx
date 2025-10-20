"use client"

import React from "react"
import { Lock, Palette, FileText, Shield, Mic, Star, Send, Mail } from "lucide-react"
import { useScrollFadeIn } from "@/lib/useScrollFadeIn"
import { FaUnlockKeyhole, FaPalette, FaChartSimple } from "react-icons/fa6";
import { BsShieldLockFill } from "react-icons/bs";
import { RiMic2AiFill } from "react-icons/ri";
import { FaKickstarterK } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";


const backgroundIcons = [
  { icon: <FaUnlockKeyhole className="h-8 w-8 rotate-10" />, position: "top-left" },
  { icon: <FaPalette className="h-8 w-8 -rotate-10" />, position: "top-middle" },
  { icon: <FaChartSimple className="h-8 w-8 " />, position: "top-right" },
  { icon: <BsShieldLockFill className="h-8 w-8 -rotate-20" />, position: "mid-left" },
  { icon: <RiMic2AiFill className="h-8 w-8 rotate-20" />, position: "mid-right" },
  { icon: <FaKickstarterK className="h-8 w-8 -rotate-10" />, position: "bottom-left" },
  { icon: <TbMailFilled className="h-8 w-8 rotate-20" />, position: "bottom-middle" },
  { icon: <RiSendPlaneFill className="h-8 w-8 -rotate-10" />, position: "bottom-right" },
]

export function CallToActionSection() {
  const fadeRef = useScrollFadeIn({ threshold: 0.1 })
  const iconFadeRef = useScrollFadeIn({ threshold: 0.1 })

  return (
    <section 
      ref={fadeRef.ref}
      className={`relative py-32 max-w-7xl mx-auto  bg-white transition-all duration-1500 ease-out ${
        fadeRef.isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Background Icons */}
      <div 
        ref={iconFadeRef.ref}
        className={`absolute inset-0 overflow-hidden pointer-events-none transition-all duration-1500 ease-out ${
          iconFadeRef.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        {/* Top Row */}
        <div 
          className={`absolute top-24 left-56 w-16 h-16 bg-gradient-to-b from-neutral-200 to-neutral-50 rounded-full shadow-lg flex items-center justify-center border border-gray-100 transition-all duration-800 ease-out ${
            iconFadeRef.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-75'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {backgroundIcons[0].icon}
        </div>
        <div 
          className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-neutral-200 to-neutral-50 rounded-full shadow-lg flex items-center justify-center border border-gray-100 transition-all duration-800 ease-out ${
            iconFadeRef.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-75'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {backgroundIcons[1].icon}
        </div>
        <div 
          className={`absolute top-24 right-56 w-16 h-16 bg-gradient-to-b from-neutral-200 to-neutral-50 rounded-full shadow-lg flex items-center justify-center border border-gray-100 transition-all duration-800 ease-out ${
            iconFadeRef.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-75'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {backgroundIcons[2].icon}
        </div>

        {/* Middle Row */}
        <div 
          className={`absolute top-1/2 left-20 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-b from-neutral-200 to-neutral-50 rounded-full shadow-lg flex items-center justify-center border border-gray-100 transition-all duration-800 ease-out ${
            iconFadeRef.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-75'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          {backgroundIcons[3].icon}
        </div>
        <div 
          className={`absolute top-1/2 right-20 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-b from-neutral-200 to-neutral-50 rounded-full shadow-lg flex items-center justify-center border border-gray-100 transition-all duration-800 ease-out ${
            iconFadeRef.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-75'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {backgroundIcons[4].icon}
        </div>

        {/* Bottom Row */}
        <div 
          className={`absolute bottom-16 left-56 w-16 h-16 bg-gradient-to-b from-neutral-200 to-neutral-50 rounded-full shadow-lg flex items-center justify-center border border-gray-100 transition-all duration-800 ease-out ${
            iconFadeRef.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-75'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          {backgroundIcons[5].icon}
        </div>
        <div 
          className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-neutral-200 to-neutral-50 rounded-full shadow-lg flex items-center justify-center border border-gray-100 transition-all duration-800 ease-out ${
            iconFadeRef.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-75'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {backgroundIcons[6].icon}
        </div>
        <div 
          className={`absolute bottom-16 right-56 w-16 h-16 bg-gradient-to-b from-neutral-200 to-neutral-50 rounded-full shadow-lg flex items-center justify-center border border-gray-100 transition-all duration-800 ease-out ${
            iconFadeRef.isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-75'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          {backgroundIcons[7].icon}
        </div>
      </div>

      {/* Main Content */}
      <div 
        className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-5 transition-all duration-1500 ease-out delay-500 ${
          fadeRef.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          Effortless Call{" "}
          <span className="text-orange-500">Scheduling</span>{" "}
          That Makes your Life{" "}
          <span className="text-orange-500">Easier</span>
        </h2>
        
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  )
}

"use client"

import React, { useEffect, useState } from "react"
import {  ChevronDown, ChevronUp } from "lucide-react"

type Solution = {
  id: string
  title: string
  headline: string
  description: string
  image: string
}

const businessSolutions: Solution[] = [
  {
    id: "erp",
    title: "ERP",
    headline: "Simplify operations. Amplify growth",
    description:
      "Integrate and automate your business processes—finance, operations, HR, and supply chain—within a single unified system for better control and real-time insights.",
    image: "/images/technology-bg.png",
  },
  {
    id: "crm",
    title: "CRM",
    headline: "Connect smarter. Serve better. Grow faster.",
    description:
      "Build stronger customer connections by centralizing sales, marketing, and service data—empowering teams to deliver personalized and efficient experiences.",
    image: "/images/retail-bg.png",
  },
  {
    id: "scm",
    title: "SCM",
    headline: "Connect smarter. Serve better. Grow faster.",
    description:
      "Build stronger customer connections by centralizing sales, marketing, and service data—empowering teams to deliver personalized and efficient experiences.",
    image: "/images/manufacturing-bg.png",
  },
]

export function SolutionsPanel() {
  const [filter, setFilter] = useState<'business' | 'technical'>("business")
  const [open, setOpen] = useState<string>("erp")

  const technicalSolutions: Solution[] = [
    {
      id: "agentic-ai",
      title: "Agentic AI",
      headline: "Simplify operations. Amplify growth",
      description:
        "Integrate and automate your business processes—finance, operations, HR, and supply chain—within a single unified system for better control and real-time insights.",
      image: "/images/technology-bg.png",
    },
    {
      id: "data-engineering",
      title: "Data Engineering",
      headline: "Transform data into business intelligence.",
      description:
        "Design and maintain scalable data pipelines that empower analytics, AI models, and real-time decision-making.",
      image: "/images/manufacturing-bg.png",
    },
    {
      id: "cloud",
      title: "Cloud",
      headline: "Scale faster. Operate smarter.",
      description:
        "Adopt secure, cost-efficient cloud infrastructure—public, private, or hybrid—to maximize uptime and performance.",
      image: "/images/retail-bg.png",
    },
    {
      id: "web-app",
      title: "Web Application",
      headline: "Modern apps. Real impact.",
      description:
        "Build responsive, high-performance web applications using cutting-edge frameworks and scalable backends.",
      image: "/images/media-bg.png",
    },
  ]

  const activeSolutions = filter === 'business' ? businessSolutions : technicalSolutions

  useEffect(() => {
    setOpen(activeSolutions[0]?.id || "")
  }, [filter])

  const currentImage = activeSolutions.find(s => s.id === open)?.image || activeSolutions[0].image

  return (
    <section id="solutions" className="py-16 h-full">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-4xl font-extrabold text-neutral-900">Find solutions for putting your ideas into action</h2>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="inline-flex gap-4 rounded-xl ">
          <button
            onClick={() => setFilter('business')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors border border-gray-200 ${
              filter === 'business' ? 'bg-gray-900 text-white' : 'text-gray-700'
            }`}
          >
            Business Solutions
          </button>
          <button
            onClick={() => setFilter('technical')}
            className={`px-4 py-2 rounded-lg bg-[#F5F5F5] text-sm font-semibold transition-colors border border-gray-200 ${
              filter === 'technical' ? 'bg-black text-white' : 'text-gray-700'
            }`}
          >
            Technical Solutions
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-20  items-start">
        {/* Left: Accordion */}
        <div>
          {activeSolutions.map((sln) => (
            <div key={sln.id} className="border-b border-gray-200">
              {/* Row title */}
              <button
                onClick={() => setOpen(open === sln.id ? '' : sln.id)}
                className="w-full ml-6 flex items-center justify-between py-4 text-gray-900 font-bold"
              >
                <span className="text-base">{sln.title}</span>
                <span className="text-xl leading-none">{open === sln.id ? <ChevronUp /> : <ChevronDown />}</span>
              </button>

              {/* Panel */}
              {open === sln.id && (
                <div className="pl-6 pb-6 border-l-3  w-4/5 border-black flex flex-col gap-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">{sln.headline}</div>
                  <p className="text-xs text-gray-600 max-w-xl mb-3 leading-5 font-normal">{sln.description}</p>
                  <a href="#" className="text-xs font-semibold text-gray-900 inline-flex items-center gap-1">
                    Learn more
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Preview image */}
        <div className="w-full">
          <div className="rounded-[28px] overflow-hidden border border-gray-200 bg-gradient-to-tl from-neutral-600 to-neutral-900 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.25)] p-4">
            <div className="rounded-[18px] overflow-hidden">
              <img src={currentImage} alt="Solution preview" className="w-full h-[340px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsPanel



"use client"

import React, { useEffect, useState } from "react"
import { useScrollFadeIn } from "@/lib/useScrollFadeIn"
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
    id: "crm",
    title: "Customer Relationship Management (CRM)",
    headline: "The Intelligent Backbone of Tomorrow's Enterprise",
    description:
      "Elevate customer experience with omnichannel CRM solutions that track every interaction across the buyer journey. Deploy targeted campaigns, automate follow-ups, and deliver personalized service that transforms satisfied customers into brand advocates and revenue multipliers.",
    image: "/images/crm.png",
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    headline: "Connect smarter. Serve better. Grow faster.",
    description:
      "Where AI meets operations. Where insights become action. Build an adaptive organization that evolves with market demands. Your competitive edge isn't just about doing things better—it's about doing better things.",
    image: "/images/erp.png",
  },
  {
    id: "scm",
    title: "Supply Chain Management (SCM)",
    headline: "Connect smarter. Serve better. Grow faster.",
    description:
      "Build stronger customer connections by centralizing sales, marketing, and service data—empowering teams to deliver personalized and efficient experiences.",
    image: "/images/scm.png",
  },
]

export function SolutionsPanel() {
  const [filter, setFilter] = useState<'business' | 'technical'>("business")
  const [open, setOpen] = useState<string>("erp")
  const fadeRef = useScrollFadeIn({ threshold: 0.1 })

  const technicalSolutions: Solution[] = [
    {
      id: "agentic-ai",
      title: "Data General Intelligence",
      headline: "Future-Ready Intelligence Infrastructure",
      description:
        "Modernize your analytics stack with AI-driven automation, federated governance, and self-service capabilities. Democratize data while maintaining enterprise control.",
      image: "/images/datageneral.png",
    },
    {
      id: "data-engineering",
      title: "Modern Enterprise Data Ecosystem",
      headline: "Your Single Source of Truth, Built for Speed",
      description:
        "Scalable architectures that ingest, process, and deliver data where decisions happen. Real-time dashboards. Predictive models. Analytics that evolve with your business. All from one unified platform.",
      image: "/images/dataengineering.png",
    },
    {
      id: "cloud",
      title: "Hybrid & Multi-Cloud Solutions",
      headline: "Freedom to Innovate Without Vendor Lock-In.",
      description:
        "Strategic cloud adoption that balances performance, cost, and compliance. Migrate legacy systems. Build cloud-native applications. Optimize workloads across AWS, Azure, and GCP based on business needs—not vendor contracts.",
      image: "/images/cloud.png",
    },
    {
      id: "web-app",
      title: "Custom Enterprise Applications",
      headline: "Software Engineered for Your Competitive Edge",
      description:
        "Purpose-built web applications that solve problems off-the-shelf software can't. From B2B portals to workforce automation—secure, scalable, and designed for rapid iteration",
      image: "/images/webapplications.png",
    },
  ]

  const activeSolutions = filter === 'business' ? businessSolutions : technicalSolutions

  useEffect(() => {
    setOpen(activeSolutions[0]?.id || "")
  }, [filter])

  const currentImage = activeSolutions.find(s => s.id === open)?.image || activeSolutions[0].image

  return (
    <section
      id="solutions"
      ref={fadeRef.ref}
      className={`py-16 h-full transition-all duration-1500 ease-out ${
        fadeRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="mb-6 text-center ">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 w-2xl text-center mx-auto">Find solutions for putting your ideas into action</h2>
      </div>

      {/* Filters */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex gap-4 rounded-xl ">
          <button
            onClick={() => setFilter('business')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-colors  ${
              filter === 'business' ? 'bg-primary-700 text-white' : 'text-primary-700 bg-[#DAE8F4]'
            }`}
          >
            Business Solutions
          </button>
          <button
            onClick={() => setFilter('technical')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-colors ${
              filter === 'technical' ? 'bg-primary-700 text-white' : 'text-primary-700 bg-[#DAE8F4]'
            }`}
          >
            Technical Solutions
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-20 items-start">
        {/* Left: Accordion */}
        <div>
          {activeSolutions.map((sln) => (
            <div key={sln.id} className="border-b border-gray-200 ">
              {/* Row title */}
              <button
                onClick={() => setOpen(open === sln.id ? '' : sln.id)}
                className="w-full ml-6 flex items-center justify-between py-4 text-gray-900 font-bold"
              >
                <span className="text-base ">{sln.title}</span>
                <span className={`text-xl leading-none transition-transform duration-300 ${open === sln.id ? 'rotate-180' : ''}`}>{open === sln.id ? <ChevronUp /> : <ChevronDown />}</span>
              </button>

              {/* Panel with smooth expand/collapse */}
              <div className={` border-l-3  w-4/5 border-black flex flex-col gap-4 px-6 p-4 overflow-hidden transition-all duration-500 ease-out ${open === sln.id ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1'}`}>
                {/* <div className="text-sm font-semibold text-gray-700 mb-2">{sln.headline}</div> */}
                <p className="text-xs text-gray-600 max-w-xl mb-3 leading-5 font-normal">{sln.description}</p>
                <a href="#" className="text-xs font-semibold text-primary-700 inline-flex items-center gap-1">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Preview image */}
        <div className="w-full">
          <div key={open} className="rounded-[28px] overflow-hidden border border-gray-200 bg-gradient-to-tl from-neutral-600 to-neutral-900 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.25)] p-4 transition-all duration-500 ease-out animate-slide-in-right">
            <div className="rounded-[18px] overflow-hidden">
              <img
                key={open}
                src={currentImage}
                alt="Solution preview"
                className="w-full h-[340px] object-cover object-center transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default SolutionsPanel



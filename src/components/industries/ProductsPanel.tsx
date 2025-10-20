"use client"

import React, {useRef, useState } from "react"
import { Brain, Workflow, GitBranch, Database, Code, Globe, ChevronRight, Network, Shield, FileText, BarChart3, Users, Users2, RefreshCw, ShieldCheck, Zap, Link } from "lucide-react"
import { useScrollFadeIn } from "@/lib/useScrollFadeIn"

type Product = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const bookmyfunProducts: Product[] = [
  { id: "conversational-ai", title: "Conversational AI", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Brain className="h-6 w-6" /> },
  { id: "workflow", title: "Workflow", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Workflow className="h-6 w-6" /> },
  { id: "nextjs", title: "NextJS", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Code className="h-6 w-6" /> },
  { id: "gitlab", title: "GitLab", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <GitBranch className="h-6 w-6" /> },
  { id: "go", title: "Go", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Globe className="h-6 w-6" /> },
  { id: "mongodb", title: "Mongo DB", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Database className="h-6 w-6" /> },
]

const mdmProducts: Product[] = [
  { id: "conversational-ai", title: "Conversational AI", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Brain className="h-6 w-6" /> },
  { id: "graph-intelligence", title: "Graph Intelligence Engine", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Network className="h-6 w-6" /> },
  { id: "core-mdm", title: "Core MDM", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Shield className="h-6 w-6" /> },
  { id: "unified-data", title: "Unified Data Model", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <FileText className="h-6 w-6" /> },
  { id: "data-quality", title: "Data Quality Insights", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <BarChart3 className="h-6 w-6" /> },
  { id: "data-steward", title: "Data Steward Tool", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Users className="h-6 w-6" /> },
]

const workflowProducts: Product[] = [
  { id: "conversational-ai", title: "Conversational AI", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Brain className="h-6 w-6" /> },
  { id: "human-in-loop", title: "Human-in-the-Loop", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Users2 className="h-6 w-6" /> },
  { id: "visual-workflow", title: "Visual Workflow Builder", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <RefreshCw className="h-6 w-6" /> },
  { id: "security-monitoring", title: "Security & Monitoring", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <ShieldCheck className="h-6 w-6" /> },
  { id: "smart-execution", title: "Smart Execution Engine", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Zap className="h-6 w-6" /> },
  { id: "integration-connectivity", title: "Integration & Connectivity", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Link className="h-6 w-6" /> },
]

export function ProductsPanel() {
 
  const [activeTab, setActiveTab] = useState("products")
  const [activeFilter, setActiveFilter] = useState("BookMYFun")
  const [solutionsFilter, setSolutionsFilter] = useState<'business' | 'technical'>("business")
  const [openSolution, setOpenSolution] = useState<string>("erp")
  const solutionsRef = useRef<HTMLDivElement>(null)
  const fadeRef = useScrollFadeIn({ threshold: 0.1 })
  const productsRef = useRef<HTMLDivElement>(null)
 

  const tabs = [
    { id: "industries", label: "Industries" },
    { id: "solutions", label: "Solutions" },
    { id: "products", label: "Products" }
  ]

  const filters = [
    { id: "BookMYFun", label: "BookMYFun" },
    { id: "MDM", label: "MDM" },
    { id: "Workflow", label: "Workflow" }
  ]

  const getCurrentProducts = () => {
    switch (activeFilter) {
      case "MDM": return mdmProducts
      case "Workflow": return workflowProducts
      default: return bookmyfunProducts
    }
  }

  const getFeaturedCardContent = () => {
    switch (activeFilter) {
      case "MDM":
        return {
          title: "MDM",
          description: "Plan smarter, book faster, and experience better — all with BookMyShow"
        }
      case "Workflow":
        return {
          title: "Workflow",
          description: "Plan smarter, book faster, and experience better — all with BookMyShow"
        }
      default:
        return {
          title: "BookMyShow",
          description: "Plan smarter, book faster, and experience better — all with BookMyShow"
        }
    }
  }

  const currentProducts = getCurrentProducts()
  const featuredCardContent = getFeaturedCardContent()
 

  return (
    <section 
    ref={fadeRef.ref}
    className={` py-8 transition-all duration-1500 ease-out ${
      fadeRef.isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-16'
    }`}
  >
      
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     

      {/* Main Title */}
      <div className="text-start p-2">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Explore tools for bringing your vision to life
          </h2>
        </div>

        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-3  space-x-4 py-6  ">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-colors  ${
                activeFilter === filter.id
                  ? 'bg-primary-700 text-white' : 'text-primary-700 bg-[#DAE8F4]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content based on active tab */}
        <div ref={productsRef} id="products-section" className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 py-10" >
          {/* Large Featured Card */}
          <div className="lg:col-span-1 w-80">
            <div className={`rounded-2xl p-8 h-full shadow-md border border-gray-200 relative overflow-hidden ${
              activeFilter === "Workflow" 
                ? "bg-cover bg-center bg-no-repeat" 
                : "bg-white"
            }`}
            style={activeFilter === "Workflow" ? {
              backgroundImage: "url('/images/workflow-bg.png')"
            } : {}}
            >
              {/* Dark overlay for workflow card to ensure text readability */}
              {activeFilter === "Workflow" && (
                <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
              )}
              
              {/* Subtle gradient overlay for other cards */}
              {activeFilter !== "Workflow" && (
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
              )}
              
              <div className="relative z-10 flex flex-col justify-end h-full gap-8 ">
                <div className="mb-4">
                  <h3 className={`text-3xl font-bold mb-4 ${
                    activeFilter === "Workflow" ? "text-white" : "text-gray-900"
                  }`}>
                    {featuredCardContent.title}
                  </h3>
                  <p className={`text-lg font-normal leading-relaxed ${
                    activeFilter === "Workflow" ? "text-gray-200" : "text-gray-500"
                  }`}>
                    {featuredCardContent.description}
                  </p>
                </div>
                <button className={`text-sm px-6 py-3 rounded-lg font-medium transition-colors self-start ${
                  activeFilter === "Workflow" 
                    ? "bg-primary-700 text-white hover:bg-primary-700" 
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}>
                  Explore the product
                </button>
              </div>
            </div>
            
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-4">
              {currentProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl p-6 shadow-md  border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                    fadeRef.isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="flex flex-col items-start space-x-4 gap-4">
                    <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center text-primary-100 flex-shrink-0">
                      {product.icon}
                    </div>
                    <div className="flex-1 ">
                      <h4 className="text-md font-bold text-gray-900 mb-2">
                        {product.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-normal">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      

      {activeTab === "industries" && (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Industries Coming Soon</h3>
          <p className="text-gray-600">We&apos;re working on comprehensive industry solutions for your business needs.</p>
        </div>
      )}

       

   
       
      
    
    
  </section>
      
  )
}

export default ProductsPanel



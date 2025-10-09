"use client"

import React, {useRef, useState } from "react"
import { Brain, Workflow, GitBranch, Database, Code, Globe, ChevronRight } from "lucide-react"
import { useScrollFadeIn } from "@/lib/useScrollFadeIn"

type Product = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const products: Product[] = [
  { id: "conversational-ai", title: "Conversational AI", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Brain className="h-6 w-6" /> },
  { id: "workflow", title: "Workflow", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Workflow className="h-6 w-6" /> },
  { id: "nextjs", title: "NextJS", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Code className="h-6 w-6" /> },
  { id: "gitlab", title: "GitLab", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <GitBranch className="h-6 w-6" /> },
  { id: "go", title: "Go", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Globe className="h-6 w-6" /> },
  { id: "mongodb", title: "Mongo DB", description: "Your AI-powered assistant for smarter event discovery and seamless booking.", icon: <Database className="h-6 w-6" /> },
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
 

  return (
    <section 
    ref={fadeRef.ref}
    className={` bg-[#F9FAFB] transition-all duration-1500 ease-out ${
      fadeRef.isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-16'
    }`}
  >
      
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     

      {/* Main Title */}
      <div className="text-start mb-12">
        
        {/* Filter Buttons */}
        <div className="flex justify-start space-x-4 ml-5">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors border border-gray-200 ${
                activeFilter === filter.id
                  ? "bg-gray-900 text-white"
                  : "bg-[#F5F5F5] text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content based on active tab */}
        <div ref={productsRef} id="products-section" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large Featured Card */}
          <div className="lg:col-span-1 w-80">
            <div className="bg-white rounded-3xl p-8 h-full  shadow-md border border-gray-200 relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col justify-end h-full gap-8 ">
                <p className="text-xl font-normal text-gray-500 mb-6 leading-relaxed">
                  Plan smarter, book faster, and experience better — all with BookMyShow
                </p>
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors self-start">
                  Explore the product
                </button>
              </div>
            </div>
            
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-4">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-3xl p-6 shadow-md  border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                    fadeRef.isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="flex flex-col items-start space-x-4 gap-4">
                    <div className="w-12 h-12 bg-[#000000] rounded-full flex items-center justify-center text-gray-300 flex-shrink-0">
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
          <p className="text-gray-600">We're working on comprehensive industry solutions for your business needs.</p>
        </div>
      )}

       

      {/* See all Products Link */}
      {activeTab === "products" && (
        <div className="mt-12 flex items-center text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
           <div className="w-7 h-7 mr-4 bg-gray-800 rounded-2xl flex items-center justify-center">
           <ChevronRight className="w-5 h-5 text-white" />
           </div>
          <span className="font-medium text-neutral-700">See all Products..</span>
        </div>
      )}
    </div>
  </section>
      
  )
}

export default ProductsPanel



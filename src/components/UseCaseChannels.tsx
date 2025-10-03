"use client"

import React, { useState } from "react"
import { BarChart3, Zap, RefreshCw, Target, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type UseCase = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  bgColor: string
  badge?: number
  hasLiveDemo?: boolean
}

const useCases: UseCase[] = [
  {
    id: "real-time",
    title: "Real-Time Analytics",
    description: "See how we deliver instant insights",
    icon: <BarChart3 className="h-5 w-5" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-600",
    badge: 1,
    hasLiveDemo: true,
  },
  {
    id: "process",
    title: "Process Automation",
    description: "Streamline your workflows with intelligent automation",
    icon: <Zap className="h-5 w-5" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-600",
  },
  {
    id: "data",
    title: "Data Orchestration",
    description: "Coordinate and manage your data pipelines efficiently",
    icon: <RefreshCw className="h-5 w-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-600",
  },
  {
    id: "predictive",
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions",
    icon: <Target className="h-5 w-5" />,
    color: "text-red-600",
    bgColor: "bg-red-600",
  },
]

export function UseCaseChannels() {
  const [selectedCase, setSelectedCase] = useState<UseCase>(useCases[0])
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg">
      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className="w-72 border-r border-neutral-200 bg-gray-50 p-6">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-500">Use Case Channels</h2>
          <nav className="space-y-1">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setSelectedCase(useCase)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                  selectedCase.id === useCase.id ? "bg-indigo-50 border-l-4 border-indigo-600" : "hover:bg-gray-100"
                }`}
              >
                <span className={useCase.color}>{useCase.icon}</span>
                <span
                  className={`flex-1 text-sm font-medium ${
                    selectedCase.id === useCase.id ? "text-indigo-600" : "text-gray-700"
                  }`}
                >
                  {useCase.title}
                </span>
                {useCase.badge && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">
                    {useCase.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          <div className="flex-1 p-8">
            <div className="flex items-start gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${selectedCase.bgColor} text-white`}
              >
                {selectedCase.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-semibold text-gray-900">{selectedCase.title}</h1>
                  {selectedCase.hasLiveDemo && (
                    <span className="flex items-center gap-1.5 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      Live Demo
                    </span>
                  )}
                </div>
                <p className="mt-1 text-gray-600">{selectedCase.description}</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-neutral-200 bg-white p-6">
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Ask about this use case..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
                className="flex-1 border-neutral-200"
              />
              <Button onClick={handleSendMessage} size="icon" className="bg-indigo-600 hover:bg-indigo-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import React, { useState, useRef, useEffect } from "react"
import { BarChart3, Zap, RefreshCw, Target, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useScrollFadeIn } from "@/lib/useScrollFadeIn"

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

type Message = {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
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
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fadeRef = useScrollFadeIn({ threshold: 0.1 })

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }

  useEffect(() => {
    // Only scroll to bottom when new messages are added, not during streaming
    if (messages.length > 0 && !isLoading) {
      const timer = setTimeout(() => {
        scrollToBottom()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [messages.length, isLoading])

  const getUseCaseContext = (useCase: UseCase) => {
    const contexts = {
      "real-time": "Real-Time Analytics: Focus on instant data processing, live dashboards, streaming analytics, and real-time insights for business decision making.",
      "process": "Process Automation: Focus on workflow automation, business process optimization, intelligent automation, and streamlining operations.",
      "data": "Data Orchestration: Focus on data pipeline management, ETL processes, data integration, and coordinating data workflows efficiently.",
      "predictive": "Predictive Analytics: Focus on forecasting, trend analysis, machine learning models, and data-driven predictions for business strategy."
    }
    return contexts[useCase.id as keyof typeof contexts] || useCase.description
  }

  const getStaticResponse = (useCase: UseCase, userMessage: string) => {
    const responses = {
      "real-time": {
        "hello": "Hello! I'm here to help you with Real-Time Analytics. We specialize in instant data processing, live dashboards, and streaming analytics to provide real-time insights for your business decisions.",
        "what": "Real-Time Analytics allows you to process and analyze data as it happens, giving you instant insights into your business operations. This includes live dashboards, streaming data processing, and immediate alerts for critical events.",
        "benefits": "The key benefits include: instant decision-making, early problem detection, improved customer experience, real-time monitoring of KPIs, and the ability to respond quickly to market changes.",
        "how": "We implement real-time analytics using modern technologies like Apache Kafka for streaming, Apache Spark for processing, and custom dashboards for visualization. Our solutions can handle millions of events per second.",
        "cost": "Pricing depends on your data volume and complexity. We offer flexible packages starting from basic real-time monitoring to enterprise-grade solutions. Contact us for a customized quote.",
        "default": "Real-Time Analytics is perfect for businesses that need instant insights. We can help you set up live dashboards, streaming data pipelines, and real-time alerting systems. What specific aspect would you like to know more about?"
      },
      "process": {
        "hello": "Hi there! I'm your Process Automation specialist. We help streamline workflows and optimize business processes using intelligent automation solutions.",
        "what": "Process Automation involves using technology to automate repetitive business tasks and workflows. This includes robotic process automation (RPA), workflow management, and intelligent document processing.",
        "benefits": "Key benefits include: reduced manual errors, increased efficiency, cost savings, improved compliance, faster processing times, and better employee satisfaction by eliminating repetitive tasks.",
        "how": "We analyze your current processes, identify automation opportunities, and implement solutions using tools like UiPath, Microsoft Power Automate, and custom automation scripts.",
        "cost": "Our automation solutions typically pay for themselves within 6-12 months through efficiency gains. We offer both one-time implementations and ongoing support packages.",
        "default": "Process Automation can transform your business operations. We specialize in workflow optimization, document processing, and intelligent automation. What processes would you like to automate?"
      },
      "data": {
        "hello": "Welcome! I'm here to help with Data Orchestration. We specialize in managing and coordinating data pipelines efficiently across your organization.",
        "what": "Data Orchestration involves managing the flow of data from various sources, transforming it, and delivering it to the right destinations. This includes ETL processes, data integration, and pipeline management.",
        "benefits": "Benefits include: improved data quality, faster data processing, better data governance, reduced manual intervention, scalable data infrastructure, and real-time data availability.",
        "how": "We use modern tools like Apache Airflow, dbt, and cloud-native services to build robust data pipelines. Our solutions ensure data quality, monitoring, and easy maintenance.",
        "cost": "Data orchestration solutions vary based on complexity and data volume. We offer both cloud-based and on-premises solutions with flexible pricing models.",
        "default": "Data Orchestration is essential for modern businesses. We help you build reliable, scalable data pipelines that ensure your data is always available when and where you need it. What's your current data challenge?"
      },
      "predictive": {
        "hello": "Hello! I'm your Predictive Analytics expert. We help businesses forecast trends and make data-driven decisions using advanced analytics and machine learning.",
        "what": "Predictive Analytics uses historical data, statistical algorithms, and machine learning to predict future outcomes. This includes forecasting, trend analysis, and predictive modeling.",
        "benefits": "Key benefits include: better decision-making, risk reduction, improved planning, competitive advantage, cost optimization, and the ability to anticipate customer needs.",
        "how": "We use machine learning algorithms, statistical models, and advanced analytics tools to build predictive models. Our solutions can predict customer behavior, market trends, and business outcomes.",
        "cost": "Predictive analytics solutions are customized based on your data and requirements. We offer both consulting services and ongoing model maintenance packages.",
        "default": "Predictive Analytics can give your business a significant competitive edge. We help you build models that predict customer behavior, market trends, and business outcomes. What would you like to predict?"
      }
    }

    const useCaseResponses = responses[useCase.id as keyof typeof responses]
    if (!useCaseResponses) return "I'm here to help you with your business needs. How can I assist you today?"

    const message = userMessage.toLowerCase()
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return useCaseResponses.hello
    } else if (message.includes('what') || message.includes('explain')) {
      return useCaseResponses.what
    } else if (message.includes('benefit') || message.includes('advantage') || message.includes('why')) {
      return useCaseResponses.benefits
    } else if (message.includes('how') || message.includes('implement') || message.includes('work')) {
      return useCaseResponses.how
    } else if (message.includes('cost') || message.includes('price') || message.includes('expensive')) {
      return useCaseResponses.cost
    } else {
      return useCaseResponses.default
    }
  }

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: message,
        role: 'user',
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, userMessage])
      const currentMessage = message
      setMessage("")
      setIsLoading(true)

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            message: `Context: ${getUseCaseContext(selectedCase)}. User question: ${currentMessage}` 
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to get response')
        }

        const reader = response.body?.getReader()
        if (!reader) {
          throw new Error('No response body')
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: '',
          role: 'assistant',
          timestamp: new Date(),
        }

        setMessages(prev => [...prev, assistantMessage])

        const decoder = new TextDecoder()
        let done = false

        while (!done) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone

          if (value) {
            const chunk = decoder.decode(value)
            const lines = chunk.split('\n')

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6)
                if (data === '[DONE]') {
                  done = true
                  break
                }

                try {
                  const parsed = JSON.parse(data)
                  const content = parsed.content || ''
                  
                  if (content) {
                    setMessages(prev => 
                      prev.map(msg => 
                        msg.id === assistantMessage.id 
                          ? { ...msg, content: msg.content + content }
                          : msg
                      )
                    )
                  }
                } catch (e) {
                  // Ignore parsing errors for incomplete chunks
                }
              }
            }
          }
        }
      } catch (error) {
        console.error('Error:', error)
        // Fallback to static responses when API fails
        const staticResponse = getStaticResponse(selectedCase, currentMessage)
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          content: staticResponse,
          role: 'assistant',
          timestamp: new Date(),
        }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div 
      ref={fadeRef.ref}
      className={`mx-auto max-w-6xl transition-all duration-1500 ease-out ${
        fadeRef.isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Laptop Frame */}
      <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl">
        {/* Screen Bezel */}
        <div className="bg-black rounded-2xl p-2">
          {/* Screen */}
          <div className="bg-white rounded-xl overflow-hidden shadow-inner">
            <div className="flex h-[800px]">
              {/* Sidebar */}
              <div className="w-60 border-r border-neutral-200 bg-neutral-50 p-4">
                <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider flex justify-center text-neutral-500">Use Case Channels</h2>
                <nav className="space-y-1">
                  {useCases.map((useCase) => (
                    <button
                      key={useCase.id}
                      onClick={() => setSelectedCase(useCase)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors cursor-pointer ${
                        selectedCase.id === useCase.id ? "bg-white shadow" : "hover:bg-white"
                      }`}
                    >
                      <span className={useCase.color}>{useCase.icon}</span>
                      <span
                        className={`flex-1 text-xs font-semibold tracking-wider ${
                          selectedCase.id === useCase.id ? "text-primary-400" : "text-neutral-500"
                        }`}
                      >
                        {useCase.title}
                      </span>
                      
                    </button>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex flex-1 flex-col bg-white">
                {/* Header */}
                <div className="border-b border-neutral-200 bg-white p-4">
                  <div className="flex items-center gap-4">
                    {/* <div
                      className={`flex h-8 w-8 items-center justify-center rounded-xl ${selectedCase.bgColor} text-white`}
                    >
                      {selectedCase.icon}
                    </div> */}
                    <div className="flex-1">
                      <div className="flex flex-col ">
                        <h1 className="text-lg font-semibold text-neutral-900 tracking-wider">{selectedCase.title}</h1>
                        
                         <p className=" text-sm text-neutral-500">{selectedCase.description}</p>
                      </div>
                    </div>
                    <div>
                      {selectedCase.hasLiveDemo && (
                          <span className="flex items-center gap-1.5 text-sm bg-neutral-50 py-1 px-2 rounded-lg text-neutral-500">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            Live Demo
                          </span>
                        )}
                    </div>
                  </div>
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 scroll-smooth bg-neutral-50">
                  {messages.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-full ${selectedCase.bgColor} text-white mx-auto mb-4`}
                        >
                          {selectedCase.icon}
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to {selectedCase.title}</h3>
                        <p className="text-gray-600 text-sm max-w-sm">
                          Ask me anything about {selectedCase.title.toLowerCase()} and I'll help you understand how we can assist your business.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 pb-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              msg.role === 'user'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <div className="text-sm whitespace-pre-wrap">
                              {msg.content}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 p-3 rounded-lg">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div ref={messagesEndRef} className="h-1" />
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="border-t border-neutral-200 bg-white p-4">
                  <div className="flex items-center gap-3">
                    <Input
                      type="text"
                      placeholder={`Ask about ${selectedCase.title.toLowerCase()}...`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                     className="flex-1 border border-neutral-200 rounded-xl py-6 focus:outline-none focus:ring-0 focus:shadow-none"
                      disabled={isLoading}
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      size="icon" 
                      className="bg-neutral-100 hover:bg-neutral-200 disabled:bg-gray-300 cursor-pointer"
                      disabled={!message.trim() || isLoading}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

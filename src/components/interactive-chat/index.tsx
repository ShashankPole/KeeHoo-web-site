"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Sidebar } from "./sidebar"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { channels, iconComponents } from "./data"
import type { Message } from "./types"

export function InteractiveChat() {
  const [currentChannel, setCurrentChannel] = useState(0)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [autoLoop, setAutoLoop] = useState(false)
  const chatMessagesRef = useRef<HTMLDivElement>(null)
  const hasEnabledAutoRef = useRef(false)

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      scrollToBottom()
    })
  }, [messages])

  useEffect(() => {
    if (autoLoop && messages.length === 0) {
      const timer = setTimeout(() => {
        showChannelDemo(currentChannel)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [currentChannel, autoLoop, messages.length])

  // Start auto demo only after the user scrolls at least once
  useEffect(() => {
    if (hasEnabledAutoRef.current) return
    const onFirstScroll = () => {
      if (hasEnabledAutoRef.current) return
      hasEnabledAutoRef.current = true
      setAutoLoop(true)
      window.removeEventListener("scroll", onFirstScroll)
    }
    window.addEventListener("scroll", onFirstScroll, { passive: true })
    return () => window.removeEventListener("scroll", onFirstScroll)
  }, [])

  const showChannelDemo = async (channelIndex: number) => {
    const channel = channels[channelIndex]

    await typeInInputBox(channel.question)
    addMessage("user", channel.question)
    setInputValue("")

    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      addMessage("ai", channel.response)

      if (autoLoop) {
        const nextChannel = (channelIndex + 1) % channels.length
        setTimeout(() => {
          setCurrentChannel(nextChannel)
          setMessages([])
        }, 4000)
      }
    }, 4000)
  }

  const typeInInputBox = async (text: string) => {
    setInputValue("")
    for (let i = 0; i < text.length; i++) {
      setInputValue((prev) => prev + text[i])
      await new Promise((resolve) => setTimeout(resolve, 40))
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  const addMessage = (type: "user" | "ai", content: string) => {
    setMessages((prev) => [...prev, { type, content }])
  }

  const switchChannel = (index: number) => {
    setCurrentChannel(index)
    setMessages([])
    setAutoLoop(false)
  }

  const sendMessage = () => {
    if (!inputValue.trim() || isTyping) return

    addMessage("user", inputValue)
    setInputValue("")
    setIsTyping(true)
    setAutoLoop(false)

    setTimeout(() => {
      setIsTyping(false)
      const response = `Thank you for your question about **${channels[currentChannel].name}**. Our team can provide detailed answers specific to your needs. You can explore other use cases by clicking the channels on the left.`
      addMessage("ai", response)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  const renderIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents]
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null
  }

  return (
   
    <section className="max-w-7xl mx-auto px-6 ">
    
      <div className="bg-black rounded-3xl p-4 ">
      <div className="">
      
            <div className="flex h-[800px]  rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">
              {/* Sidebar */}
              <Sidebar
                channels={channels}
                currentChannel={currentChannel}
                autoLoop={autoLoop}
                onChannelSwitch={switchChannel}
              />

              {/* Main Chat Area */}
              <div className="chat-main flex-1 flex flex-col bg-white">
                {/* Header */}
                <div className="chat-header border-b border-gray-200 px-6 h-16 flex items-center justify-between bg-[#F5F5F5]">
                  <div className="chat-header-left flex items-center gap-3">
                    <div className="channel-header-icon text-primary bg-neutral-200 p-1 rounded-md">{renderIcon(channels[currentChannel].icon)}</div>
                    <div className="channel-header-info">
                      <h3 className="text-md font-semibold text-gray-900">{channels[currentChannel].name}</h3>
                      <p className="text-xs text-gray-600">{channels[currentChannel].subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <ChatMessages ref={chatMessagesRef} messages={messages} isTyping={isTyping} />

                {/* Input */}
                <ChatInput
                  value={inputValue}
                  isTyping={isTyping}
                  onChange={setInputValue}
                  onSend={sendMessage}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>
          
        </div>
      </div>
  
    </section>
  )
}

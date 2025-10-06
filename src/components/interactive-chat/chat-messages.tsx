import { forwardRef } from "react"
import { Info, Sparkles } from "lucide-react"
import type { Message } from "./types"

interface ChatMessagesProps {
  messages: Message[]
  isTyping: boolean
}

export const ChatMessages = forwardRef<HTMLDivElement, ChatMessagesProps>(({ messages, isTyping }, ref) => {
  return (
    <div
      ref={ref}
      className="chat-messages flex-1 overflow-y-auto px-6 py-4 space-y-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.type === "user" ? "user" : "ai"} ${
            message.type === "user" ? "ml-auto max-w-[70%]" : "mr-auto max-w-[80%]"
          }`}
        >
          {message.type === "ai" && (
            <div className="ai-badge text-xs text-gray-600 mb-2 flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center border border-blue-200">
                <Sparkles className="w-2.5 h-2.5 text-blue-600" />
              </div>
              <span className="font-medium">keehoo ai</span>
            </div>
          )}
          <div
            className={`message-content p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
              message.type === "user" ? "bg-black text-white" : "bg-white text-gray-900 border border-gray-200"
            }`}
          >
            <div className="whitespace-pre-wrap">{message.content}</div>
          </div>
          {message.type === "ai" && (
            <div className="message-sources text-xs text-gray-500 mt-2 flex items-center gap-1">
              <Info className="w-3 h-3" />
              <span>Based on keehoo case studies & client implementations</span>
            </div>
          )}
        </div>
      ))}

      {isTyping && (
        <div className="typing-indicator mr-auto max-w-[80%]">
          <div className="ai-badge text-xs text-gray-600 mb-2 flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center border border-blue-200">
              <Sparkles className="w-2.5 h-2.5 text-blue-600" />
            </div>
            <span className="font-medium">keehoo ai</span>
          </div>
          <div className="typing-content bg-white text-gray-900 p-3 rounded-2xl border border-gray-200 shadow-sm">
            <div className="typing-dots flex gap-1 items-center">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></span>
              <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></span>
              <span className="typing-text text-xs ml-3 text-gray-500 font-medium">keehoo AI is thinking...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

ChatMessages.displayName = "ChatMessages"

import { forwardRef } from "react"
import { Info, Sparkles } from "lucide-react"
import type { Message } from "./types"

interface ChatMessagesProps {
  messages: Message[]
  isTyping: boolean
}

export const ChatMessages = forwardRef<HTMLDivElement, ChatMessagesProps>(({ messages, isTyping }, ref) => {
  const parseAiContent = (text: string) => {
    const nonEmptyLines = text
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0)
    let title = ""
    if (nonEmptyLines[0]?.startsWith("**") && nonEmptyLines[0]?.endsWith("**")) {
      title = nonEmptyLines[0].replaceAll("**", "").trim()
      nonEmptyLines.shift()
    }
    const impactIndex = nonEmptyLines.findIndex((l) => l.startsWith("**Impact:**"))
    let impact = ""
    if (impactIndex !== -1) {
      impact = nonEmptyLines[impactIndex].replace("**Impact:**", "").trim()
      nonEmptyLines.splice(impactIndex, 1)
    }
    return { title, paragraphs: nonEmptyLines, impact }
  }

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
          {message.type === "user" && (
            <div className="message-content p-3 rounded-xl text-xs leading-relaxed border border-gray-200 bg-white shadow-sm ">
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          )}

          {message.type === "ai" && (() => {
            const { title, paragraphs, impact } = parseAiContent(message.content)
            return (
              <div className="w-full">
                <div className="text-[11px] text-gray-600 mb-2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center border border-blue-200">
                    <Sparkles className="w-2.5 h-2.5 text-blue-600" />
                  </div>
                  <span className="font-medium tracking-wide uppercase">KeeHoo AI</span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  {title && <h4 className="text-base font-semibold text-gray-900 mb-3">{title}</h4>}
                  <div className="space-y-4 text-gray-700 text-xs leading-relaxed">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {impact && (
                      <p><span className="font-semibold text-gray-900">Impact:</span> {impact}</p>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex sm:items-start justify-between gap-3">
                    <div className="text-[11px] text-gray-500 flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      <span>Based on keehoo case studies & client implementations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://public.tableau.com/app/profile/valerie1556/viz/DataforaCause-GlobalPeaceScores/DASHBOARD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg text-white bg-black hover:bg-neutral-500 text-xs"
                      >
                        See Demo
                      </a>
                      <button className="px-4 py-2 rounded-lg text-neutral-800 bg-white hover:bg-violet-100 border border-violet-200 text-xs">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      ))}

      {isTyping && (
        <div className="typing-indicator mr-auto max-w-[80%]">
          <div className="text-[11px] text-gray-600 mb-2 flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center border border-blue-200">
              <Sparkles className="w-2.5 h-2.5 text-blue-600" />
            </div>
            <span className="font-medium tracking-wide uppercase">KeeHoo AI</span>
          </div>
          <div className="bg-white text-gray-900 p-4 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex gap-1 items-center">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
              <span className="text-[11px] ml-3 text-gray-500 font-medium">KeeHoo AI is thinking...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

ChatMessages.displayName = "ChatMessages"

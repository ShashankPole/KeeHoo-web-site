import { forwardRef } from "react"
import { Info, Atom, ArrowRight } from "lucide-react"
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
      className="chat-messages bg-neutral-100 flex-1 overflow-y-auto px-16 py-6 space-y-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.type === "user" ? "user" : "ai"} ${
            message.type === "user" ? "ml-auto max-w-[50%]" : "mr-auto max-w-[80%]"
          }`}
        >
          {message.type === "user" && (
            <div className="message-content p-2 px-4 rounded-xl text-sm leading-relaxed bg-white text-black border border-primary-500 shadow-sm">
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          )}

          {message.type === "ai" && (() => {
            const { title, paragraphs, impact } = parseAiContent(message.content)
            return (
              <div className="w-full ">
                <div className="text-xs text-gray-600 mb-2 flex items-center gap-2">
                  <div className="w-5 h-5  rounded-full  flex items-center justify-center">
                    <Atom className="w-4 h-4 animate-slow-spin" />
                  </div>
                  <span className="font-semibold text-neutral-800">keehoo ai</span>
                </div>

                <div className="rounded-xl border border-primary-500 bg-white shadow-sm p-6">
                  {title && <h4 className="text-lg font-semibold text-gray-900 mb-3">{title}</h4>}
                  <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {impact && (
                      <p><span className="font-semibold text-gray-900">Impact:</span> {impact}</p>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex sm:justify-between gap-3">
                    <div className="text-xs text-gray-500 flex border border-neutral-300 p-1.5 rounded-lg items-center gap-1">
                      <Info className="w-3 h-3" />
                      <span>Based on keehoo case studies & client implementations</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <a
                        href="https://public.tableau.com/app/profile/valerie1556/viz/DataforaCause-GlobalPeaceScores/DASHBOARD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg text-white bg-primary-600 hover:bg-primary-700 text-sm flex items-center gap-2"
                      >
                        View Demo 
                        <ArrowRight className="w-4 h-4 -rotate-40" />
                      </a>
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
          <div className="text-xs text-gray-600 mb-2 flex items-center gap-2">
            <div className="w-5 h-5  rounded-full flex items-center justify-center">
              <Atom className="w-4 h-4 animate-slow-spin" />
            </div>
            <span className="font-medium">keehoo ai</span>
          </div>
          <div className="bg-white text-gray-900 p-4 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex gap-1 items-center">
              <span className="w-2 h-2 bg-gray-700 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-700 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
              <span className="w-2 h-2 bg-gray-700 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
              <span className="text-xs ml-3 text-gray-800 font-medium">keehoo AI is thinking...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

ChatMessages.displayName = "ChatMessages"

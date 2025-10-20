"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

interface ChatInputProps {
  value: string
  isTyping: boolean
  onChange: (value: string) => void
  onSend: () => void
  onKeyPress: (e: React.KeyboardEvent) => void
}

export function ChatInput({ value, isTyping, onChange, onSend, onKeyPress }: ChatInputProps) {
  return (
    <div className="chat-input-area px-12 py-5 bg-neutral-100">
      <div className="input-wrapper flex gap-3 items-center  border border-neutral-200 py-2 bg-white rounded-3xl shadow-lg px-6">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Ask anything"
          disabled={isTyping}
          className="flex-1 text-sm  rounded-xl  border-0 focus:ring-0 focus:border-gray-300"
        />
        <Button
          onClick={onSend}
          disabled={!value.trim() || isTyping}
          size="icon"
          className="shrink-0 h-10 w-10 bg-primary-700 flex items-center justify-center hover:bg-primary-500 text-white rounded-full"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

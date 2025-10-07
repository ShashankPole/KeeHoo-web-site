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
    <div className="chat-input-area border-t border-gray-200 px-6 py-4 bg-white">
      <div className="input-wrapper flex gap-3 items-center">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Ask about this use case..."
          disabled={isTyping}
          className="flex-1 text-xs h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl  bg-gray-50"
        />
        <Button
          onClick={onSend}
          disabled={!value.trim() || isTyping}
          size="icon"
          className="shrink-0 h-10 w-10 bg-gray-100 hover:bg-gray-200 rounded-xl"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

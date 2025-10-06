export interface Message {
  type: "user" | "ai"
  content: string
}

export interface Channel {
  icon: string
  name: string
  subtitle: string
  question: string
  response: string
}

"use client"
import { iconComponents } from "./data"
import type { Channel } from "./types"

interface SidebarProps {
  channels: Channel[]
  currentChannel: number
  autoLoop: boolean
  onChannelSwitch: (index: number) => void
}

export function Sidebar({ channels, currentChannel, autoLoop, onChannelSwitch }: SidebarProps) {
  return (
    <div className="chat-sidebar w-72 bg-[#ffffff] border-r border-[#e5e5e5]  flex flex-col">
      <div className="chat-sidebar-header">
        <div className="chat-sidebar-title text-2xl border-b border-[#e5e5e5] h-16 flex items-center justify-center text-center  font-extrabold text-secondary-600 mb-6">
          <img src="/chat_logo.svg" alt="Keehoo AI" className="w-8 h-8 mr-2" />
          Keehoo AI
        </div>
        <ul className="channels-list space-y-2 px-6">
          {channels.map((channel, index) => {
            const IconComponent = iconComponents[channel.icon as keyof typeof iconComponents]

            return (
              <li
                key={index}
                onClick={() => onChannelSwitch(index)}
                className={`channel-item flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  currentChannel === index
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className={`channel-icon p-1 rounded-md ${
                  currentChannel === index ? "bg-white/20" : "bg-white"
                }`}>{IconComponent && <IconComponent className={`w-5 h-5 ${
                  currentChannel === index ? "text-white" : ""
                }`} />}</span>
                <div className="flex-1 min-w-0">
                  <div className="channel-name text-sm font-semibold truncate">{channel.name}</div>
                  <div className={`channel-subtitle text-xs truncate mt-0.5 ${
                    currentChannel === index ? "text-white/80" : "text-gray-500"
                  }`}>
                    {channel.subtitle}
                  </div>
                </div>
                
              </li>
            )
          })}
        </ul>
      </div>
      
      {/* User Profile Section */}
      <div className="mt-auto h-18 flex justify-start ml-6    border-t border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-600">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-800 truncate">UdayaSingh</div>
            <div className="text-xs text-gray-500 truncate">udayasing1@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

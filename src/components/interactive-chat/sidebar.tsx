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
    <div className="chat-sidebar w-80 bg-white border-r border-[#e5e5e5] p-6">
      <div className="chat-sidebar-header">
        <div className="chat-sidebar-title text-md pl-2 font-extrabold text-neutral-600 mb-6 uppercase tracking-wide">
          Keehoo.ai
        </div>
        <ul className="channels-list space-y-2">
          {channels.map((channel, index) => {
            const IconComponent = iconComponents[channel.icon as keyof typeof iconComponents]

            return (
              <li
                key={index}
                onClick={() => onChannelSwitch(index)}
                className={`channel-item flex items-center gap-4 p-3 rounded-xl bg-neutral-50 cursor-pointer transition-all duration-200 hover:shadow-sm ${
                  currentChannel === index
                    ? "bg-white text-primary border border-neutral-200 shadow-md"
                    : "text-muted-foreground hover:bg-accent  border-neutral-200"
                }`}
              >
                <span className="channel-icon">{IconComponent && <IconComponent className="w-5 h-5" />}</span>
                <div className="flex-1 min-w-0">
                  <div className="channel-name text-sm font-semibold truncate">{channel.name}</div>
                  <div className="channel-subtitle text-xs text-muted-foreground truncate mt-0.5">
                    {channel.subtitle}
                  </div>
                </div>
                {index === (currentChannel + 1) % channels.length && autoLoop && (
                  <span className="channel-badge bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center font-medium">
                    1
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

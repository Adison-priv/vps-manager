import { LayoutDashboard, Server, Activity, Settings, Lightbulb, MessageSquareWarning } from "lucide-react"
import Image from "next/image"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-[#070b14] text-white">
      
      {/* SIDEBAR */}
    <div className="w-64 bg-[#0a0f1c] p-6 text-[#f1f5f9]">
      <Image className="mb-8" src="/logo.svg" alt="VPS Manager" width={299} height={60} />

      <nav className="flex flex-col gap-2">
        <p className="text-[10px]">MAIN NAVIGATION</p>

        <a className="flex items-center gap-4 p-2 hover:bg-zinc-700 rounded text-sm" href="/dashboard">
          <LayoutDashboard size={20} />
          Dashboard
        </a>

        <a className="flex items-center gap-4 p-2 hover:bg-zinc-700 rounded text-sm" href="/dashboard/servers">
          <Server size={20} />
          Servers
        </a>

        <a className="flex items-center gap-4 p-2 hover:bg-zinc-700 rounded text-sm">
          <Activity size={20} />
          Monitoring
        </a>

        <a className="flex items-center gap-4 p-2 hover:bg-zinc-700 rounded text-sm">
          <MessageSquareWarning size={20} />
          Logs
        </a>

        <a className="flex items-center gap-4 p-2 hover:bg-zinc-700 rounded text-sm">
          <Lightbulb size={20} />
          Services
        </a>

        <a className="flex items-center gap-4 p-2 hover:bg-zinc-700 rounded text-sm">
          <Settings size={20} />
          Settings
        </a>

      </nav>
    </div>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <div className="h-20 bg-[#0a0f1c] text-[#f1f5f9] flex items-center justify-between px-6">
          
          <div className="flex flex-col">
            <h1 className="text-xl">Good morning, Adisexe</h1>
            <h1 className="text-xs text-[#9e9e9e]">How you feeling today?</h1>
          </div>

          <div className="flex items-center gap-4">

            {/* dzwoneczek */}
            <div className="cursor-pointer hover:bg-zinc-700 p-2 rounded text-lg">
              🔔
            </div>

            {/* user */}
            <div className="flex items-center gap-3 cursor-pointer hover:bg-zinc-700 p-2 rounded">
              <div className="w-7 h-7 bg-zinc-600 rounded-full"></div>
              <span className="text-sm">Adisexe</span>
            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="flex-1 p-10 overflow-auto">
          {children}
        </div>

      </div>

    </div>
  )
}
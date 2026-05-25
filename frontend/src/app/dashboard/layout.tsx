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
    <div className="
      hidden
      lg:flex
      flex-col
      bg-[#0a0f1c]
      text-[#f1f5f9]
      transition-all
      duration-300
      xl:w-64
      w-20
      p-4
    ">

        {/* FULL LOGO */}
        <Image
            className="hidden xl:block mb-8"
            src="/logo.svg"
            alt="VPS Manager"
            width={220}
            height={60}
        />

        {/* ICON LOGO */}
        <div className="xl:hidden flex justify-center mb-8">

            <Image
                src="/logo-icon.svg"
                alt="VPS Manager"
                width={40}
                height={40}
            />

        </div>

        <nav className="flex flex-col gap-2">

            {/* TITLE */}
            <p className="hidden xl:block text-[10px] text-[#7c8aa5] mb-2">
                MAIN NAVIGATION
            </p>

            {/* ITEM */}
            <a
                className="
                  flex items-center
                  xl:gap-4
                  justify-center xl:justify-start
                  p-3
                  hover:bg-[#131c31]
                  rounded-xl
                  text-sm
                  transition-colors
                "
                href="/dashboard"
            >

                <LayoutDashboard
                    size={20}
                    className="shrink-0"
                />

                <span className="hidden xl:block">
                    Dashboard
                </span>

            </a>

            {/* ITEM */}
            <a
                className="
                  flex items-center
                  xl:gap-4
                  justify-center xl:justify-start
                  p-3
                  hover:bg-[#131c31]
                  rounded-xl
                  text-sm
                  transition-colors
                "
                href="/dashboard/servers"
            >

                <Server
                    size={20}
                    className="shrink-0"
                />

                <span className="hidden xl:block">
                    Servers
                </span>

            </a>

            {/* ITEM */}
            <a
                className="
                  flex items-center
                  xl:gap-4
                  justify-center xl:justify-start
                  p-3
                  hover:bg-[#131c31]
                  rounded-xl
                  text-sm
                  transition-colors
                "
            >

                <Activity
                    size={20}
                    className="shrink-0"
                />

                <span className="hidden xl:block">
                    Monitoring
                </span>

            </a>

            {/* ITEM */}
            <a
                className="
                  flex items-center
                  xl:gap-4
                  justify-center xl:justify-start
                  p-3
                  hover:bg-[#131c31]
                  rounded-xl
                  text-sm
                  transition-colors
                "
            >

                <MessageSquareWarning
                    size={20}
                    className="shrink-0"
                />

                <span className="hidden xl:block">
                    Logs
                </span>

            </a>

            {/* ITEM */}
            <a
                className="
                  flex items-center
                  xl:gap-4
                  justify-center xl:justify-start
                  p-3
                  hover:bg-[#131c31]
                  rounded-xl
                  text-sm
                  transition-colors
                "
            >

                <Lightbulb
                    size={20}
                    className="shrink-0"
                />

                <span className="hidden xl:block">
                    Services
                </span>

            </a>

            {/* ITEM */}
            <a
                className="
                  flex items-center
                  xl:gap-4
                  justify-center xl:justify-start
                  p-3
                  hover:bg-[#131c31]
                  rounded-xl
                  text-sm
                  transition-colors
                "
            >

                <Settings
                    size={20}
                    className="shrink-0"
                />

                <span className="hidden xl:block">
                    Settings
                </span>

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
import {
  Cpu,
  MemoryStick,
  HardDrive,
  Network
} from "lucide-react"

import Image from "next/image"
import StatCard from "./StatCard"
import SystemInfo from "./SystemInfo"
import NetworkInfo from "./NetworkInfo"
import ServicesInfo from "./ServicesInfo"
import LastLogin from "./LastLogin"

const cpuData = [
  { usage: 20 },
  { usage: 35 },
  { usage: 28 },
  { usage: 48 },
  { usage: 40 },
  { usage: 55 },
  { usage: 34 },
]

const ramData = [
  { usage: 22 },
  { usage: 28 },
  { usage: 80 },
  { usage: 82 },
  { usage: 86 },
  { usage: 90 },
  { usage: 70 },
  { usage: 50 },
  { usage: 20 },
  { usage: 26 },
  { usage: 23 },
  { usage: 25 },
  { usage: 22 },
]

export default function OverviewTab() {
  return (
    <div className="">
        <div className="space-y-4">

            {/* TOP STATS */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">

                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl min-h-[170px] p-6">
                    <StatCard
                        title="CPU Usage"
                        value="34%"
                        subtitle="4 Cores"
                        color="#6366f1"
                        gradientId="cpu"
                        icon={Cpu}
                        data={cpuData}
                    />
                </div>

                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl min-h-[170px] p-6">
                    <StatCard
                        title="RAM Usage"
                        value="56%"
                        subtitle="6583GB/12246GB"
                        color="#22c55e"
                        gradientId="ram"
                        icon={MemoryStick}
                        data={ramData}
                    />
                </div>

                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl min-h-[170px] p-6">
                    <StatCard
                        title="Disk Usage"
                        value="61%"
                        subtitle="615GB/1000GB"
                        color="#a855f7"
                        gradientId="disk"
                        icon={HardDrive}
                        data={cpuData}
                    />
                </div>

                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl min-h-[170px] p-6">
                    <StatCard
                        title="Network Usage"
                        value="24.5"
                        subtitle="4 Cores"
                        color="#f59e0b"
                        gradientId="network"
                        icon={Network}
                        data={cpuData}
                    />
                </div>

            </div>

            {/* MAIN GRID */}
            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {/* LEFT COLUMN */}
                <div className="col-span-2 flex flex-col gap-4">

                    {/* SYSTEM INFO */}
                    <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl p-6">
                        <SystemInfo />
                    </div>

                    {/* RUNNING SERVICES */}
                    <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl p-6">
                        <ServicesInfo />
                    </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="flex lg:flex-col gap-4">

                    {/* NETWORK & SECURITY */}
                    <div className="flex-1 lg:flex-none bg-[#0f1629] border border-[#1b2540] rounded-2xl p-6">
                        <NetworkInfo />
                    </div>

                    {/* LAST LOGIN */}
                    <div className="flex-1 lg:flex-none bg-[#0f1629] border border-[#1b2540] rounded-2xl p-6">
                        <LastLogin />
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
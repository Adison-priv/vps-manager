import {
  Cpu,
  MemoryStick,
  HardDrive,
  Network,
  ShieldCheck,
  Copy,
  Terminal,
  Lock,
  Disc,
  Clock3,
  SquareTerminal,
  Earth,
  Cloud,
  User,
  Monitor
} from "lucide-react"

import Image from "next/image"
import StatCard from "./StatCard"

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

const systemInfoLeft = [
  {
    icon: Cpu,
    label: "Processor",
    value: "Intel® Xeon® E5-2620",
  },

  {
    icon: MemoryStick,
    label: "RAM",
    value: "Kingston DDR4 5GB",
  },

  {
    icon: HardDrive,
    label: "Disk",
    value: "Samsung SSD 2TB",
  },

  {
    icon: Clock3,
    label: "Uptime",
    value: "12d 4h 32m",
  },
]

const systemInfoRight = [
  {
    icon: SquareTerminal,
    label: "Kernel",
    value: "Linux 5.15.0",
  },

  {
    icon: Cpu,
    label: "Architecture",
    value: "x86_64",
  },

  {
    icon: Earth,
    label: "Region",
    value: "Frankfurt am Main",
  },

  {
    icon: Cloud,
    label: "Virtualization",
    value: "KVM",
  },
]

export default function OverviewTab() {
  return (
    <div className="">
        <div className="space-y-4">

            {/* TOP STATS */}
            <div className="grid grid-cols-4 gap-4">

                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl min-h-[170px]">
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

                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl min-h-[170px]">
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

                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl min-h-[170px]">
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

                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl min-h-[170px]">
                    <StatCard
                        title="Network Usage"
                        value="24.5Mbp/s"
                        subtitle="4 Cores"
                        color="#f59e0b"
                        gradientId="network"
                        icon={Network}
                        data={cpuData}
                    />
                </div>

            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-3 gap-4">

                {/* SYSTEM INFO */}
                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl p-6 col-span-2">

                    {/* HEADER */}
                    <h2 className="text-xl font-semibold text-white mb-8">
                        System Information
                    </h2>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-[250px_1fr_1fr]">

                        {/* LEFT COLUMN */}
                        <div className="flex flex-col items-center justify-center px-6">

                            {/* OS LOGO */}
                            <Image src="/os/ubuntu.svg" width={100} height={100} alt="test"/> {/*TA SEKCJA DO PRZEROBIENIA TZN LOGO W BORDER + TLO I BEZ DIVIDERA MIEDZY LOGIEM I LEWA SEKCJA */}

                            {/* OS INFO */}
                            <div className="mt-5 flex flex-col items-center">

                                <p className="text-xl font-semibold text-white text-center leading-8">
                                    Ubuntu 22.04 LTS
                                </p>

                                <div className="mt-3 px-3 py-1 rounded-lg bg-[#131c31] border border-[#1b2540]">

                                    <span className="text-sm text-[#7c8aa5]">
                                        64-bit
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* CENTER COLUMN */}
                        <div className="border-l border-[#1b2540] px-8">

                            <div className="flex flex-col gap-6">

                                {systemInfoLeft.map((item) => {

                                    const Icon = item.icon

                                    return (

                                        <div
                                            key={item.label}
                                            className="flex items-center gap-4"
                                        >

                                            <Icon size={25} className="text-gray-400"/>

                                            <div className="flex flex-col gap-1">

                                                <p className="text-sm text-[#7c8aa5] leading-none">
                                                    {item.label}
                                                </p>

                                                <p className="text-base text-white leading-5">
                                                    {item.value}
                                                </p>

                                            </div>

                                        </div>

                                    )
                                })}

                            </div>

                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="border-l border-[#1b2540] px-8">

                            <div className="flex flex-col gap-6">

                                {systemInfoRight.map((item) => {

                                    const Icon = item.icon

                                    return (

                                        <div
                                            key={item.label}
                                            className="flex items-center gap-4"
                                        >

                                            <Icon size={25} className="text-gray-400"/>

                                            <div className="flex flex-col gap-1">

                                                <p className="text-sm text-[#7c8aa5] leading-none">
                                                    {item.label}
                                                </p>

                                                <p className="text-base text-white leading-5">
                                                    {item.value}
                                                </p>

                                            </div>

                                        </div>

                                    )
                                })}

                            </div>

                        </div>

                    </div>

                </div>

                {/* NETWORK & SECURITY */}
                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl p-6 h-full">

                    {/* HEADER */}
                    <h2 className="text-xl font-semibold text-white mb-6">
                        Network & Security
                    </h2>

                    {/* LIST */}
                    <div className="flex flex-col">

                        {/* ITEM */}
                        <div className="flex items-center justify-between py-4 border-b border-[#1b2540]">

                            {/* LEFT */}
                            <div className="flex items-center gap-3">

                                <Lock size={18} className="text-[#cbd5e1]" />

                                <p className="text-[#cbd5e1] text-base">
                                    Public IP
                                </p>

                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center gap-3">

                                <p className="text-white text-base">
                                    145.223.72.18
                                </p>

                                <Copy size={16} className="text-[#7c8aa5]" />

                            </div>

                        </div>

                        {/* ITEM */}
                        <div className="flex items-center justify-between py-4 border-b border-[#1b2540]">

                            <div className="flex items-center gap-3">

                                <Lock size={18} className="text-[#cbd5e1]" />

                                <p className="text-[#cbd5e1] text-base">
                                    Private IP
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <p className="text-white text-base">
                                    10.12.9.1
                                </p>

                                <Copy size={16} className="text-[#7c8aa5]" />

                            </div>

                        </div>

                        {/* ITEM */}
                        <div className="flex items-center justify-between py-4 border-b border-[#1b2540]">

                            <div className="flex items-center gap-3">

                                <Terminal size={18} className="text-[#cbd5e1]" />

                                <p className="text-[#cbd5e1] text-base">
                                    SSH Port
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <p className="text-white text-base">
                                    22
                                </p>

                                <Copy size={16} className="text-[#7c8aa5]" />

                            </div>

                        </div>

                        {/* ITEM */}
                        <div className="flex items-center justify-between pt-4">

                            <div className="flex items-center gap-3">

                                <ShieldCheck size={18} className="text-[#cbd5e1]" />

                                <p className="text-[#cbd5e1] text-base">
                                    Firewall
                                </p>

                            </div>

                            {/* STATUS */}
                            <div className="bg-green-500/15 border border-green-500/20 rounded-lg px-3 py-1.5 flex items-center gap-2">

                                <div className="w-2 h-2 rounded-full bg-green-400"></div>

                                <p className="text-green-400 text-sm font-medium">
                                    Enabled
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* RUNNING SERVICES */}
                <div className="col-span-2 bg-[#0f1629] border border-[#1b2540] rounded-2xl p-6">

                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-6">

                        <h2 className="text-xl font-semibold text-white">
                            Running Services
                        </h2>

                        <button className="text-[#7c8aa5] hover:text-white transition text-sm">
                            View all
                        </button>

                    </div>

                    {/* SERVICES GRID */}
                    <div className="grid grid-cols-5 gap-4">

                        {/* SERVICE */}
                        <div className="bg-[#131c31] border border-[#1b2540] rounded-xl p-4">

                            <div className="flex items-start gap-3">

                                <div className="w-10 h-10 rounded-lg bg-[#0f1629] border border-[#1b2540] flex-shrink-0"></div>

                                <div>

                                    <p className="text-white text-lg font-medium">
                                        Docker
                                    </p>

                                    <p className="text-[#7c8aa5] text-sm mt-1">
                                        12 containers
                                    </p>

                                    <p className="text-green-400 text-sm mt-2">
                                        Running
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* SERVICE */}
                        <div className="bg-[#131c31] border border-[#1b2540] rounded-xl p-4">

                            <div className="flex items-start gap-3">

                                <div className="w-10 h-10 rounded-lg bg-[#0f1629] border border-[#1b2540] flex-shrink-0"></div>

                                <div>

                                    <p className="text-white text-lg font-medium">
                                        NGINX
                                    </p>

                                    <p className="text-[#7c8aa5] text-sm mt-1">
                                        Active
                                    </p>

                                    <p className="text-green-400 text-sm mt-2">
                                        Running
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* SERVICE */}
                        <div className="bg-[#131c31] border border-[#1b2540] rounded-xl p-4">

                            <div className="flex items-start gap-3">

                                <div className="w-10 h-10 rounded-lg bg-[#0f1629] border border-[#1b2540] flex-shrink-0"></div>

                                <div>

                                    <p className="text-white text-lg font-medium">
                                        MySQL
                                    </p>

                                    <p className="text-[#7c8aa5] text-sm mt-1">
                                        1 Instance
                                    </p>

                                    <p className="text-green-400 text-sm mt-2">
                                        Running
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* SERVICE */}
                        <div className="bg-[#131c31] border border-[#1b2540] rounded-xl p-4">

                            <div className="flex items-start gap-3">

                                <div className="w-10 h-10 rounded-lg bg-[#0f1629] border border-[#1b2540] flex-shrink-0"></div>

                                <div>

                                    <p className="text-white text-lg font-medium">
                                        SSH
                                    </p>

                                    <p className="text-[#7c8aa5] text-sm mt-1">
                                        Port 22
                                    </p>

                                    <p className="text-green-400 text-sm mt-2">
                                        Active
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* SERVICE */}
                        <div className="bg-[#131c31] border border-[#1b2540] rounded-xl p-4">

                            <div className="flex items-start gap-3">

                                <div className="w-10 h-10 rounded-lg bg-[#0f1629] border border-[#1b2540] flex-shrink-0"></div>

                                <div>

                                    <p className="text-white text-lg font-medium">
                                        UFW
                                    </p>

                                    <p className="text-[#7c8aa5] text-sm mt-1">
                                        Firewall
                                    </p>

                                    <p className="text-green-400 text-sm mt-2">
                                        Enabled
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* LAST LOGIN / ACTIVITY */}
                <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl p-6 h-full">

                    {/* HEADER */}
                    <h2 className="text-xl font-semibold text-white mb-8">
                        Last Login
                    </h2>

                    {/* CONTENT */}
                    <div className="flex items-start gap-5">

                        {/* AVATAR */}
                        <div className="w-16 h-16 rounded-full border border-green-500/40 bg-green-500/10 flex items-center justify-center flex-shrink-0">

                            <User size={28} className="text-green-400" />

                        </div>

                        {/* INFO */}
                        <div className="flex flex-col">

                            {/* USER + STATUS */}
                            <div className="flex items-center gap-6">

                                <p className="text-2xl font-semibold text-white">
                                    root
                                </p>

                                <p className="flex items-center gap-2 text-[#7c8aa5] text-base">
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    <p>2 hours ago</p>
                                </p>

                            </div>

                            {/* IP */}
                            <p className="text-[#cbd5e1] text-lg mt-2">
                                145.223.72.18
                            </p>

                            {/* DEVICE */}
                            <div className="flex items-center gap-2 mt-4">

                                <Monitor size={18} className="text-[#7c8aa5]" />

                                <p className="text-[#7c8aa5] text-base">
                                    Firefox on Linux
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}
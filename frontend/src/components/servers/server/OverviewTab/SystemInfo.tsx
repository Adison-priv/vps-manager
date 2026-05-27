import Image from "next/image"

import {
    Cpu,
    MemoryStick,
    HardDrive,
    Clock3,
    MapPin,
    Cloud,
    SquareTerminal
} from "lucide-react"

import { LucideIcon } from "lucide-react"



type SystemInfoItem = {
    icon: LucideIcon
    label: string
    value: string
}



const systemInfoLeft: SystemInfoItem[] = [
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



const systemInfoRight: SystemInfoItem[] = [
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
        icon: MapPin,
        label: "Region",
        value: "Frankfurt am Main",
    },

    {
        icon: Cloud,
        label: "Virtualization",
        value: "KVM",
    },
]



type SystemInfoColumnProps = {
    items: SystemInfoItem[]
}



function SystemInfoColumn({
    items
}: SystemInfoColumnProps) {

    return (

        <div className="border-l border-[#1b2540] px-8">

            <div className="flex flex-col gap-6">

                {items.map((item) => {

                    const Icon = item.icon

                    return (

                        <div
                            key={item.label}
                            className="flex items-center gap-4"
                        >

                            <Icon
                                size={22}
                                className="text-[#7c8aa5] shrink-0"
                            />

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

    )
}



export default function SystemInfo() {

    return (

        <div className="">

            {/* HEADER */}
            <h2 className="text-xl font-semibold text-white mb-8">
                System Information
            </h2>

            {/* MAIN GRID */}
            <div className="
    grid
    xl:grid-cols-[220px_1fr_1fr]
    gap-8
">

    {/* LOGO COLUMN */}
    <div className="flex flex-col items-center justify-center px-6">

        {/* OS LOGO */}
        <div className="bg-[#131c31] border border-[#1b2540] rounded-2xl p-5 shadow-[0_0_30px_rgba(59,130,246,0.15)]">

            <Image
                src="/os/ubuntu.svg"
                width={80}
                height={80}
                alt="Ubuntu"
            />

        </div>

        {/* OS INFO */}
        <div className="mt-5 flex flex-col items-center">

            <p className="text-xl font-semibold text-white text-center leading-8">
                Ubuntu 22.04 LTS
            </p>

            <div className="mt-3 px-3 py-1 rounded-lg bg-[#0d214e] shadow-[0_0_30px_rgba(59,130,246,0.15)]">

                <span className="text-sm text-[#6690e2]">
                    64-bit
                </span>

            </div>

        </div>

    </div>

    {/* INFO WRAPPER */}
    <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
        xl:col-span-2
    ">

        {/* CENTER */}
        <SystemInfoColumn
            items={systemInfoLeft}
        />

        {/* RIGHT */}
        <SystemInfoColumn
            items={systemInfoRight}
        />

    </div>

</div>

        </div>

    )
}
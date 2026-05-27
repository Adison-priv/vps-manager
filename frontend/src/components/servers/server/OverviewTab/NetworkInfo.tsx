import Image from "next/image"

import {
    Lock,
    Copy,
    HardDrive,
    Clock3,
    ShieldCheck,
    Terminal
} from "lucide-react"

import { LucideIcon } from "lucide-react"



type NetworkInfoItem = {
    icon: LucideIcon
    label: string
    value: string
    type: "copy" | "status"
}



const networkInfoItems: NetworkInfoItem[] = [
    {
        icon: Lock,
        label: "Public IP",
        value: "145.223.72.18",
        type: "copy",
    },

    {
        icon: Lock,
        label: "Private IP",
        value: "10.12.9.1",
        type: "copy",
    },

    {
        icon: Terminal,
        label: "SSH Port",
        value: "22",
        type: "copy",
    },

    {
        icon: ShieldCheck,
        label: "Firewall",
        value: "Enabled",
        type: "status",
    },
]



export default function NetworkInfo() {

    return (

        <div className="">
            {/* HEADER */}
            <h2 className="text-xl font-semibold text-white mb-6">
                Network & Security
            </h2>

            {/* LIST */}
            <div className="flex flex-col">

                {networkInfoItems.map((item, index) => {

                    const Icon = item.icon

                    const isLast = index === networkInfoItems.length - 1

                    return (

                        <div
                            key={item.label}
                            className={`
                                flex items-center flex-col gap-2 xl:flex-row xl:justify-between xl:gap-0
                                ${isLast ? "pt-4" : "py-4 border-b border-[#1b2540]"}
                            `}
                        >

                            {/* LEFT */}
                            <div className="flex items-center gap-3">

                                <Icon
                                    size={18}
                                    className="text-[#cbd5e1]"
                                />

                                <p className="text-[#cbd5e1] text-base">
                                    {item.label}
                                </p>

                            </div>

                            {/* RIGHT */}
                            {item.type === "copy" ? (

                                <div className="flex items-center gap-3">

                                    <p className="text-white text-base">
                                        {item.value}
                                    </p>

                                    <Copy
                                        size={16}
                                        className="text-[#7c8aa5]"
                                    />

                                </div>

                            ) : (

                                <div className="bg-green-500/15 border border-green-500/20 rounded-lg px-3 py-1.5 flex items-center gap-2">

                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>

                                    <p className="text-green-400 text-sm font-medium">
                                        {item.value}
                                    </p>

                                </div>

                            )}

                        </div>
                    )
                })}
            </div>
        </div>

    )
}
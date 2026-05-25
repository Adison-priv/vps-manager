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



type ServicesInfoItem = {
    icon: LucideIcon
    label: string
    value: string
    status: string
}



const servicesInfoItems: ServicesInfoItem[] = [
    {
        icon: Lock,
        label: "Docker",
        value: "12 containers",
        status: "Running",
    },

    {
        icon: Lock,
        label: "NGINX",
        value: "Active",
        status: "Running",
    },

    {
        icon: Terminal,
        label: "MySQL",
        value: "1 instance",
        status: "Running",
    },

    {
        icon: Terminal,
        label: "SSH",
        value: "Port 22",
        status: "Active",
    },

    {
        icon: ShieldCheck,
        label: "UFW",
        value: "Firewall",
        status: "Enabled",
    },
]



export default function ServicesInfo() {

    return (

        <div className="">

           <div className="flex items-center justify-between mb-6">

                <h2 className="text-xl font-semibold text-white">
                    Running Services
                </h2>

                <button className="text-[#7c8aa5] hover:text-white transition text-sm">
                    View all
                </button>

            </div>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 ">
                {servicesInfoItems.map((item, index) => {
                    const Icon = item.icon

                    return (
                        <div className="bg-[#131c31] border border-[#1b2540] rounded-xl p-4">
                            <div className="flex items-start gap-3">

                                <div className="w-10 h-10 rounded-lg bg-[#0f1629] border border-[#1b2540] shrink-0"></div>

                                <div>

                                    <p className="text-white text-lg font-medium">
                                        {item.label}
                                    </p>

                                    <p className="text-[#7c8aa5] text-sm mt-1">
                                        {item.value}
                                    </p>

                                    <p className="text-green-400 text-sm mt-2">
                                        {item.status}
                                    </p>

                                </div>

                            </div>
                        </div>  
                    )
                })}
            </div>
        </div>
    )
}
"use client";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { use, useState, useEffect} from "react"
import { MemoryStick, HardDrive, Cpu, Network, Plus, MoreHorizontal, Server} from "lucide-react"
import AddServerModal from "@/components/servers/AddServerModal";

// const servers = [
//     {
//         id: 1,
//         hostname: "My VPS Server",
//         host: "192.168.1.100",
//         provider: "AWS",
//         region: "Frankfurt",
//         status: "Online",
//         cpuCores: 4,
//         ramTotal: 16,
//         diskTotal: "100 GB",
//         os: "Ubuntu 20.04"
//     }
// ]

type Server = {

    id: string

    hostname: string

    host: string

    port: number

    username: string

    os: string

    region: string

    cpuCores: number

    ramTotal: number

    diskTotal: string

    status: string

}

export default function Dashboard_servers() {
    const [servers, setServers] = useState<Server[]>([])
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    async function fetchServers() {

        try {

            const response = await fetch(
                "http://localhost:3001/servers"
            )

            const data = await response.json()

            setServers(data.servers)

        } catch (error) {

            console.log(error)

        }

    }

    useEffect(() => {

        fetchServers()

    }, [])

    return (
        <div className="">

            <div className="bg-[#0f1629] border border-[#1b2540] rounded-2xl p-8">
                <div className="flex mb-6 items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-wider">Servers <span className="text-[#60a5fa]">({servers.length})</span></h1>
                    <div className="flex items-center gap-4">
                        <input type="text" className="ml-4 bg-[#1b2540] rounded py-2 px-2" placeholder="Search servers..."></input>
                        <button className="ml-auto flex items-center gap-2 rounded-md bg-green-500 px-6 py-2 text-sm text-white transition hover:bg-green-700" onClick={() => setIsOpen(true)}>
                            <Plus size={18} />
                            Add server
                        </button>

                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5">

                    {servers.map((server) => (

                        <div
                            key={server.id}
                            className="group relative overflow-hidden rounded-3xl border border-[#1b2540] bg-gradient-to-b from-[#0f172d] to-[#0b1224] p-5 transition-all duration-300 hover:border-[#2b3c67] hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]"
                        >

                            {/* TOP */}
                            <div className="flex items-start justify-between">

                                {/* LEFT */}
                                <div className="flex items-start gap-4">

                                    {/* ICON */}
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d4ed8]/30 to-[#2563eb]/10 border border-[#2a3c66]">

                                        <Server className="text-[#60a5fa]" size={26} />

                                    </div>

                                    {/* INFO */}
                                    <div>

                                        <div className="flex items-center gap-2">

                                            <h3 className="text-[15px] font-semibold text-white">
                                                {server.hostname}
                                            </h3>

                                            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />

                                        </div>

                                        <p className="mt-1 text-sm text-[#7e8bab]">
                                            {server.host}
                                        </p>

                                        <div className="mt-2 flex items-center gap-2 text-xs text-[#94a3b8]">

                                            <span className="flex items-center gap-1">
                                                🌍 DEDE
                                            </span>

                                            <span className="text-[#334155]">
                                                •
                                            </span>

                                            <span>
                                                🇩🇪 {server.region}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                {/* STATUS */}
                                <div className={`rounded-full px-3 py-1 text-[11px] font-medium border
                                    ${server.status === "Online"
                                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                        : "border-red-500/20 bg-red-500/10 text-red-400"
                                    }`}
                                >
                                    {server.status}
                                </div>

                            </div>

                            {/* STATS */}
                            <div className="mt-6 grid grid-cols-4 gap-3 border-t border-[#1a2338] pt-4">

                                <div>
                                    <p className="text-lg font-semibold text-white">
                                        {server.cpuCores}
                                    </p>

                                    <span className="text-xs text-[#7e8bab]">
                                        vCPU
                                    </span>
                                </div>

                                <div>
                                    <p className="text-lg font-semibold text-white">
                                        {server.ramTotal} GB
                                    </p>

                                    <span className="text-xs text-[#7e8bab]">
                                        RAM
                                    </span>
                                </div>

                                <div>
                                    <p className="text-lg font-semibold text-white">
                                        {server.diskTotal}
                                    </p>

                                    <span className="text-xs text-[#7e8bab]">
                                        SSD
                                    </span>
                                </div>

                                <div>
                                    <p className="text-lg font-semibold text-white">
                                        7d
                                    </p>

                                    <span className="text-xs text-[#7e8bab]">
                                        Uptime
                                    </span>
                                </div>

                            </div>

                            {/* BOTTOM */}
                            <div className="mt-6 flex items-center justify-between border-t border-[#1a2338] pt-4">

                                {/* OS */}
                                <div className="flex items-center gap-2">

                                    <Image
                                        src="/os/ubuntu.svg"
                                        alt="Ubuntu"
                                        width={18}
                                        height={18}
                                    />

                                    <span className="text-sm text-[#cbd5e1]">
                                        {server.os}
                                    </span>

                                </div>

                                {/* ACTIONS */}
                                <div className="flex items-center gap-2">

                                    <button className="rounded-xl border border-[#24304d] bg-[#111827] px-4 py-2 text-sm text-white transition hover:bg-[#172036]">
                                        View details
                                    </button>

                                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#24304d] bg-[#111827] text-[#94a3b8] transition hover:bg-[#172036] hover:text-white">

                                        <MoreHorizontal size={18} />

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}
                </div>

                <AddServerModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    // onServerAdded={fetchServers}
                />
            </div>
        </div>
    )
}
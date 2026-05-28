
"use client"

export const dynamic = "force-dynamic"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import OverviewTab from "@/components/servers/server/OverviewTab/OverviewTab"
import SSHTab from "@/components/servers/server/SSHTab"
import MonitoringTab from "@/components/servers/server/MonitoringTab"
import FilesTab from "@/components/servers/server/SFTPTab"
import LogsTab from "@/components/servers/server/LogsTab"

import { RefreshCw, Square } from "lucide-react"

type Server = {
    id: string
    hostname: string
    host: string
    port: number
    username: string
    os: string
    cpuCores: number
    ramTotal: number
    diskTotal: string
    region: string
    status: string
}

export default function DashboardServersItem() {
    const [activeTab, setActiveTab] = useState("overview")

    const params = useParams()

    const [server, setServer] = useState<Server | null>(null)

    async function fetchServer() {
        if (!params.id) return

        const response = await fetch(`http://localhost:3001/servers/${params.id}`, {
            cache: "no-store"
        })

        const data = await response.json()

        setServer(data.server)

    }

    useEffect(() => {
        fetchServer()
    }, [])
    
    return (
        <div key={server?.id ?? "loading"}>

            {!server ? (

                <div>Loading...</div>

            ) : (

                <>

                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-4">
                            <h1 className="text-3xl font-semibold">{server.hostname}</h1>

                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-xs">
                                ONLINE
                            </span>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm border border-[#1b2540]">
                                <RefreshCw size={15}/>Restart
                            </button>

                            <button className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm border border-[#f32626c5]">
                                <Square size={15} className="text-[#f32626c5]"/>Stop
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-2 border-b border-[#1b2540] pb-3">

                        <button
                            onClick={() => setActiveTab("overview")}
                            className={`px-4 py-2 rounded-lg transition ${
                            activeTab === "overview"
                                ? "bg-[#131c31] text-white"
                                : "text-[#7c8aa5] hover:bg-[#131c31]"
                            }`}
                        >
                            Overview
                        </button>

                        <button
                            onClick={() => setActiveTab("ssh")}
                            className={`px-4 py-2 rounded-lg transition ${
                            activeTab === "ssh"
                                ? "bg-[#131c31] text-white"
                                : "text-[#7c8aa5] hover:bg-[#131c31]"
                            }`}
                        >
                            SSH
                        </button>

                        <button
                            onClick={() => setActiveTab("monitoring")}
                            className={`px-4 py-2 rounded-lg transition ${
                            activeTab === "monitoring"
                                ? "bg-[#131c31] text-white"
                                : "text-[#7c8aa5] hover:bg-[#131c31]"
                            }`}
                        >
                            Monitoring
                        </button>

                        <button
                            onClick={() => setActiveTab("files")}
                            className={`px-4 py-2 rounded-lg transition ${
                            activeTab === "files"
                                ? "bg-[#131c31] text-white"
                                : "text-[#7c8aa5] hover:bg-[#131c31]"
                            }`}
                        >
                            Files
                        </button>

                        <button
                            onClick={() => setActiveTab("logs")}
                            className={`px-4 py-2 rounded-lg transition ${
                            activeTab === "logs"
                                ? "bg-[#131c31] text-white"
                                : "text-[#7c8aa5] hover:bg-[#131c31]"
                            }`}
                        >
                            Logs
                        </button>
                    </div>

                    <div className="mt-6">
                        {activeTab === "overview" && (
                            <OverviewTab/>
                        )}

                        {activeTab === "ssh" && (
                            <SSHTab/>
                        )}

                        {activeTab === "monitoring" && (
                            <MonitoringTab/>
                        )}

                        {activeTab === "files" && (
                            <FilesTab/>
                        )}

                        {activeTab === "logs" && (
                            <LogsTab/>
                        )}
                    </div>

                </>

            )}

        </div>

    )
}
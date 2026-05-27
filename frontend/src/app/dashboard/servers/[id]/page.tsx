"use client"
import { useState } from "react"

import OverviewTab from "@/components/servers/server/OverviewTab/OverviewTab"
import SSHTab from "@/components/servers/server/SSHTab"
import MonitoringTab from "@/components/servers/server/MonitoringTab"
import FilesTab from "@/components/servers/server/SFTPTab"
import LogsTab from "@/components/servers/server/LogsTab"
import { RefreshCw, Square } from "lucide-react"

export default function Dashboard_servers_item() {
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <div className="">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-semibold">instance-20260508-1539</h1>

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
        </div>
    )
}
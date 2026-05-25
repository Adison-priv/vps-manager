"use client";

import { useRouter } from "next/navigation";
import { use, useState} from "react"
import { MemoryStick, HardDrive, Cpu, Network, Plus} from "lucide-react"

export default function Dashboard_servers() {
    const router = useRouter()
    const [open, setOpen] = useState(false)

  return (
    <div className="">
        <h1 className="text-2xl mb-6 font-bold tracking-wider">SERVERS</h1>

        <div className="bg-[#0f1629] rounded-2xl p-4 border border-[#1b2540]">

            <table className="w-full border-separate border-spacing-y-2 text-left">
                <thead>
                    <tr className="text-[#7c8aa5] text-sm">
                        <th className="p-4">ID</th>
                        <th className="p-4">HOSTNAME</th>
                        <th className="p-4">INFORMATION</th>
                        <th className="p-4">STATUS</th>
                        <th className="p-4">ACTION</th>
                    </tr>
                </thead>

                <tbody>

                {/* SERVER #1 */}
                <tr className="bg-[#131c31] hover:bg-[#18233d] transition" onClick={() => router.push('/dashboard/servers/1')}>
                    <td className="p-4 rounded-l-xl">432</td>

                    <td className="p-4">
                        <div className="flex flex-col">
                            <span className="font-medium text-white">
                            VPS-01
                            </span>

                            <span className="text-sm text-[#7c8aa5]">
                            192.168.0.17
                            </span>
                        </div>
                    </td>

                    <td className="p-4 text-[#cbd5e1]">
                        <div className="grid grid-cols-[max-content_max-content] gap-x-6 gap-y-2 text-left">
                            <div className="flex gap-2 items-center">
                                <MemoryStick size={20} className="text-[#353aa1]" /> 16 GB
                            </div>
                            <div className="flex gap-2 items-center">
                                <Cpu size={20} className="text-[#353aa1]"/> 4 Core
                            </div>
                            <div className="flex gap-2 items-center">
                                <HardDrive size={20} className="text-[#353aa1]"/> 500 GB
                            </div>
                            <div className="flex gap-2 items-center">
                                <Network size={20} className="text-[#353aa1]"/> 324.4 MB/s
                            </div>
                        </div>
                    </td>

                    <td className="p-4">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-xs">
                            ONLINE
                        </span>
                    </td>

                    <td className="p-4 rounded-r-xl w-0">
                        <div className="flex gap-2">
                            <button className="bg-[#1b2540] hover:bg-[#24304f] px-3 py-1 rounded-lg text-sm">
                                Start
                            </button>

                            <button className="bg-[#1b2540] hover:bg-[#24304f] px-3 py-1 rounded-lg text-sm">
                                Stop
                            </button>
                        </div>
                    </td>
                </tr>

                {/* SERVER #2 */}
                <tr className="bg-[#131c31] hover:bg-[#18233d] transition">
                    <td className="p-4 rounded-l-xl">634</td>

                    <td className="p-4">
                        <div className="flex flex-col">
                            <span className="font-medium text-white">
                            VPS-02
                            </span>

                            <span className="text-sm text-[#7c8aa5]">
                            192.168.6.53
                            </span>
                        </div>
                    </td>

                    <td className="p-4 text-[#cbd5e1]">
                        <div className="grid grid-cols-[max-content_max-content] gap-x-6 gap-y-2 text-left">
                            <div className="flex gap-2 items-center">
                                <MemoryStick size={20} className="text-[#353aa1]" /> 64 GB
                            </div>
                            <div className="flex gap-2 items-center">
                                <Cpu size={20} className="text-[#353aa1]"/> 8 Core
                            </div>
                            <div className="flex gap-2 items-center">
                                <HardDrive size={20} className="text-[#353aa1]"/> 2.5 TB
                            </div>
                            <div className="flex gap-2 items-center">
                                <Network size={20} className="text-[#353aa1]"/> 324.4 MB/s
                            </div>
                        </div>
                    </td>

                    <td className="p-4">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-xs">
                            ONLINE
                        </span>
                    </td>

                    <td className="p-4 rounded-r-xl w-0">
                        <div className="flex gap-2">
                            <button className="bg-[#1b2540] hover:bg-[#24304f] px-3 py-1 rounded-lg text-sm">
                                Start
                            </button>

                            <button className="bg-[#1b2540] hover:bg-[#24304f] px-3 py-1 rounded-lg text-sm">
                                Stop
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

            <button className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded mt-4" onClick={() => setOpen(true)}><Plus size={20} className="stroke-3"/>Add server</button>
        </div>

        {open && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

                
                <div className="flex flex-col gap-4 bg-[#151a2b] p-6 rounded">
                    <h4>ADD SERVER</h4>

                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" className="bg-[#1b2540] rounded py-1 px-2" placeholder="Hostname"></input>
                        <input type="text" className="bg-[#1b2540] rounded py-1 px-2" placeholder="IP Adress"></input>
                        <input type="text" className="bg-[#1b2540] rounded py-1 px-2" placeholder="Username"></input>
                        <input type="text" className="bg-[#1b2540] rounded py-1 px-2" placeholder="Password"></input>

                        <div className="flex gap-2">
                            <input type="checkbox" className="bg-[#1b2540] "/>
                            Linux
                        </div>
                        
                        <div className="flex gap-2">
                            <input type="checkbox"/>
                            Windows
                        </div>
                    </div>

                    <div className="flex justify-center gap-15">
                        <button className="bg-green-500 py-2 px-4 rounded-md">Add server</button>
                        <button className="bg-red-500 py-2 px-4 rounded-md" onClick={() => setOpen(false)}>Cancel</button>
                    </div>
                        
                </div>
            </div>  
        )}
    </div>
  )
}
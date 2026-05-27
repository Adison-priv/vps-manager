import { Eye, FileKey, KeyRound, Server, ShieldCheck, Upload, X } from "lucide-react"
import { useState } from "react"

type AddServerModalProps = {
    isOpen: boolean
    onClose: () => void
}

export default function AddServerModal({
    isOpen,
    onClose
}: AddServerModalProps) {
    const [authMethod, setAuthMethod] = useState<"password" | "ssh">("password")
    
    if (!isOpen) return null

    return (
        <div className="">
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

                <div className="w-full max-w-2xl rounded-3xl border border-[#1b2540] bg-[#0f1729] shadow-[0_0_60px_rgba(59,130,246,0.12)]">

                    {/* HEADER */}
                    <div className="flex items-start justify-between border-b border-[#1b2540] p-6">

                        <div>

                            <h2 className="text-2xl font-semibold text-white">
                                Add Server
                            </h2>

                            <p className="mt-1 text-sm text-[#7e8bab]">
                                Connect your VPS using SSH credentials
                            </p>

                        </div>

                        <button
                            onClick={onClose}
                            className="text-[#7e8bab] transition hover:text-white"
                        >
                            <X size={22} />
                        </button>

                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                        <div className="space-y-5">

                            {/* IP */}
                            <div>

                                <label className="mb-2 block text-sm text-[#cbd5e1]">
                                    IP Address
                                </label>

                                <input
                                    type="text"
                                    placeholder="e.g. 192.168.1.100"
                                    className="h-12 w-full rounded-2xl border border-[#24304d] bg-[#121b30] px-4 text-white outline-none transition placeholder:text-[#5f6b85] focus:border-blue-500/40"
                                />

                            </div>

                            {/* USERNAME + PORT + OS */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                <div>

                                    <label className="mb-2 block text-sm text-[#cbd5e1]">
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="e.g. root"
                                        className="h-12 w-full rounded-2xl border border-[#24304d] bg-[#121b30] px-4 text-white outline-none transition placeholder:text-[#5f6b85] focus:border-blue-500/40"
                                    />

                                </div>

                                <div>

                                    <label className="mb-2 block text-sm text-[#cbd5e1]">
                                        Port
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue="22"
                                        className="h-12 w-full rounded-2xl border border-[#24304d] bg-[#121b30] px-4 text-white outline-none transition focus:border-blue-500/40"
                                    />

                                </div>

                                <div>

                                    <label className="mb-2 block text-sm text-[#cbd5e1]">
                                        System
                                    </label>

                                    <select className="h-12 w-full rounded-2xl border border-[#24304d] bg-[#121b30] px-4 text-white outline-none transition focus:border-blue-500/40">

                                        <option value="linux">
                                            Linux
                                        </option>

                                        <option value="windows">
                                            Windows (Soon)
                                        </option>

                                    </select>

                                </div>

                            </div>

                            {/* AUTH METHOD */}
                            <div>

                                <label className="mb-3 block text-sm text-[#cbd5e1]">
                                    Authentication Method
                                </label>

                                <div className="grid grid-cols-2 gap-4">

                                    <button
                                        type="button"
                                        onClick={() => setAuthMethod("password")}
                                        className={`flex h-12 items-center justify-center rounded-2xl border text-sm font-medium transition ${
                                            authMethod === "password"
                                                ? "border-blue-500/30 bg-blue-500/15 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                                                : "border-[#24304d] bg-[#121b30] text-[#94a3b8] hover:bg-[#172036] hover:text-white"
                                        }`}
                                    >
                                        Password
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setAuthMethod("ssh")}
                                        className={`flex h-12 items-center justify-center rounded-2xl border text-sm font-medium transition ${
                                            authMethod === "ssh"
                                                ? "border-blue-500/30 bg-blue-500/15 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                                                : "border-[#24304d] bg-[#121b30] text-[#94a3b8] hover:bg-[#172036] hover:text-white"
                                        }`}
                                    >
                                        SSH Key
                                    </button>

                                </div>

                            </div>

                            {/* PASSWORD */}
                            {authMethod === "password" && (
                                <div>

                                    <label className="mb-2 block text-sm text-[#cbd5e1]">
                                        Password
                                    </label>

                                    <div className="relative">

                                        <input
                                            type="password"
                                            placeholder="Enter password"
                                            className="h-12 w-full rounded-2xl border border-[#24304d] bg-[#121b30] px-4 pr-12 text-white outline-none transition placeholder:text-[#5f6b85] focus:border-blue-500/40"
                                        />

                                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7e8bab] hover:text-white">

                                            <Eye size={18} />

                                        </button>

                                    </div>

                                </div>
                            )}

                            {/* SSH KEY */}
                            {authMethod === "ssh" && (

                                <div>

                                    <label className="mb-2 block text-sm text-[#cbd5e1]">
                                        SSH Private Key
                                    </label>

                                    <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#24304d] bg-[#121b30] px-6 py-8 text-center transition hover:border-blue-500/40 hover:bg-[#172036]">

                                        <input
                                            type="file"
                                            accept=".pem,.key,.ppk"
                                            className="hidden"
                                        />

                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/15">

                                            <Upload size={24} />

                                        </div>

                                        <p className="text-sm font-medium text-white">
                                            Upload SSH Key
                                        </p>

                                        <p className="mt-1 text-xs text-[#7e8bab]">
                                            Supports .pem, .key and .ppk files
                                        </p>

                                    </label>

                                </div>

                            )}

                        </div>

                    </div>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between border-t border-white/5 px-6 py-5">
    
                        <div className="flex items-center gap-3">
                            
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                <ShieldCheck size={18} />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-white">
                                    Encrypted & secure
                                </p>

                                <p className="text-xs text-[#7e8bab]">
                                    SSH credentials are safely encrypted
                                </p>
                            </div>

                        </div>

                        <div className="flex items-center gap-3">
                            
                            <button className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white transition hover:bg-white/5">
                                Cancel
                            </button>

                            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90">
                                Add Server
                            </button>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
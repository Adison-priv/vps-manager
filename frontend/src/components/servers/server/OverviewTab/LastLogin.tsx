import { Monitor, User } from "lucide-react";

type LastLoginItem = {
    username: string,
    time: string,
    ip: string,
    device: string,
}

const LastLoginData: LastLoginItem = {
    username: "root",
    time: "2 hours ago",
    ip: "145.223.72.18",
    device: "Firefox on Linux"
}

export default function LastLogin() {

    return (

        <div className="">
           {/* HEADER */}
            <h2 className="text-xl font-semibold text-white mb-8">
                Last Login
            </h2>

            {/* CONTENT */}
            <div className="flex items-start gap-5">

                {/* AVATAR */}
                <div className="hidden lg:flex w-13 h-13 xl:w-16 xl:h-16 rounded-full border border-green-500/40 bg-green-500/10 items-center justify-center shrink-0">

                    <User size={28} className="text-green-400" />

                </div>

                {/* INFO */}
                <div className="flex flex-col">

                    {/* USER + STATUS */}
                    <div className="flex flex-col items-start gap-2 xl:flex-row xl:items-center xl:gap-6">

                        <p className="text-xl xl:text-2xl font-semibold text-white">
                            {LastLoginData.username}
                        </p>

                        <div className="flex items-center gap-2 text-[#7c8aa5] text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <p>{LastLoginData.time}</p>
                        </div>

                    </div>

                    {/* IP */}
                    <p className="text-[#cbd5e1] text-md xl:text-lg mt-2">
                        {LastLoginData.ip}
                    </p>

                    {/* DEVICE */}
                    <div className="flex items-center gap-2 mt-4">

                        <Monitor size={18} className="text-[#7c8aa5]" />

                        <p className="text-[#7c8aa5] text-sm xl:text-base">
                            {LastLoginData.device}
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}
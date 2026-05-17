

export default function Dashboard() {
  return (
    <div className="">
      <h1 className="text-2xl mb-6 font-bold tracking-wider">MAIN PAGE</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-[#0f1629] p-4 rounded-xl">
          <p className="text-sm text-zinc-400">CPU Usage</p>
          <h2 className="text-xl font-bold">34%</h2>
        </div>

        <div className="bg-[#0f1629] p-4 rounded-xl">
          <p className="text-sm text-zinc-400">RAM Usage</p>
          <h2 className="text-xl font-bold">62%</h2>
        </div>

        <div className="bg-[#0f1629] p-4 rounded-xl">
          <p className="text-sm text-zinc-400">Disk</p>
          <h2 className="text-xl font-bold">120GB</h2>
        </div>

        <div className="bg-[#0f1629] p-4 rounded-xl">
          <p className="text-sm text-zinc-400">Servers</p>
          <h2 className="text-xl font-bold">2</h2>
        </div>
      </div>
    </div>
  )
}
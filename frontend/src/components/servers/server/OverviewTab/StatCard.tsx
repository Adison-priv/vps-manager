"use client"

import {
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts"

type StatCardProps = {
  title: string
  value: string
  subtitle: string
  color: string
  gradientId: string
  icon: React.ElementType
  data: { usage: number }[]
}

export default function StatCard({
  title,
  value,
  subtitle,
  color,
  gradientId,
  icon: Icon,
  data
}: StatCardProps) {

  return (
    <div className="">

      {/* TOP */}
      <div className="flex items-start justify-between">

        <div className="flex flex-col gap-2">

          <p className="text-[#7c8aa5] text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-semibold mt-1">
            {value}<span className="text-lg text-[#7c8aa5] font-normal ml-2">MBp/s</span>
          </h2>

          <p className="text-[#7c8aa5] text-sm mt-1">
            {subtitle}
          </p>

        </div>

        <div className="bg-[#131c31] border border-[#1b2540] rounded-lg p-2 shadow-[0_0_30px_rgba(59,130,246,0.15)]">

          <Icon
            size={25}
            style={{ color }}
          />

        </div>

      </div>

      {/* CHART */}
      <div className="h-16 w-full mt-4">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id={`gradient-${gradientId}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor={color}
                  stopOpacity={0.45}
                />

                <stop
                  offset="100%"
                  stopColor={color}
                  stopOpacity={0}
                />

              </linearGradient>
              
            </defs>

            <Area
              type="monotone"
              dataKey="usage"
              stroke={color}
              strokeWidth={2.5}
              fill={`url(#gradient-${gradientId})`}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}
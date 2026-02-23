"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const chartData = [
  { month: "Január", desktop: 186, mobile: 80 },
  { month: "Február", desktop: 305, mobile: 200 },
  { month: "Marec", desktop: 237, mobile: 120 },
  { month: "Apríl", desktop: 273, mobile: 190 },
  { month: "Máj", desktop: 309, mobile: 230 },
  { month: "Jún", desktop: 354, mobile: 268 },
];

export function OrganickyRastChart() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#262626] p-5 shadow-lg">
      <p className="text-[11px] font-medium uppercase tracking-wider text-[#A0A0A0]">
        Google Search Console
      </p>
      <h3 className="mt-1 text-lg font-bold italic text-white md:text-xl">
        Organický rast návštevnosti
      </h3>
      <div className="relative mt-4">
        <div className="h-[220px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.06)"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#A0A0A0", fontSize: 11 }}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                }}
                formatter={(value: number, name: string) => [
                  `${value} tis.`,
                  name === "desktop" ? "Desktop" : "Mobil",
                ]}
                labelFormatter={(label) => label}
              />
              <Bar
                dataKey="desktop"
                fill="#3A4D67"
                radius={[4, 4, 0, 0]}
                name="Desktop"
              />
              <Bar
                dataKey="mobile"
                fill="#ffb400"
                radius={[4, 4, 0, 0]}
                name="Mobil"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-3">
          <div>
            <p className="text-[10px] text-[#A0A0A0]">IMPRESIE</p>
            <p className="mt-0.5 text-base font-bold text-white">+450%</p>
          </div>
          <div>
            <p className="text-[10px] text-[#A0A0A0]">KLIKNUTIA</p>
            <p className="mt-0.5 text-base font-bold text-white">+320%</p>
          </div>
          <div>
            <p className="text-[10px] text-[#A0A0A0]">POZÍCIE 1-3</p>
            <p className="mt-0.5 text-base font-bold text-white">154</p>
          </div>
          <div>
            <p className="text-[10px] text-[#A0A0A0]">CTR</p>
            <p className="mt-0.5 text-base font-bold text-[#ffb400]">5.2%</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-sm">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[#ffb400]/20 text-[#ffb400]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </span>
          <span className="font-medium text-white">
            Trend rastu +5.2% tento mesiac
          </span>
        </div>
        <p className="mt-1 text-[11px] text-[#A0A0A0]">
          Organická návštevnosť (Desktop + Mobil) za posledných 6 mesiacov
        </p>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

const criteria = [
  { label: "Innovation & Originality", score: 92, color: "bg-violet-400" },
  { label: "Technical Complexity", score: 88, color: "bg-teal-400" },
  { label: "ML Performance & Optimization", score: 90, color: "bg-sky-400" },
  { label: "Implementation & Demo", score: 85, color: "bg-amber-400" },
];

export function JudgingBars() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm">
      {criteria.map((item, idx) => (
        <div key={item.label} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-slate-700">{item.label}</span>
            <span className="tabular-nums font-bold text-slate-800">
              {item.score}%
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-md bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.score}%` }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, delay: idx * 0.08 }}
              className={`h-full rounded-md ${item.color}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

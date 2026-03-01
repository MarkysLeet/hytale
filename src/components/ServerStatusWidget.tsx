"use client";

import { Users, Signal } from "lucide-react";
import { motion } from "framer-motion";

interface ServerStatusProps {
  onlinePlayers: number;
  maxPlayers: number;
  isOnline: boolean;
}

export function ServerStatusWidget({ onlinePlayers, maxPlayers, isOnline }: ServerStatusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-flex items-center gap-4 py-2 px-4 rounded-full glass"
    >
      <div className="flex items-center gap-2">
        <div className="relative flex h-3 w-3 items-center justify-center">
          {isOnline ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          )}
        </div>
        <span className="text-sm font-medium tracking-wide">
          {isOnline ? "Сервер онлайн" : "Оффлайн"}
        </span>
      </div>

      <div className="w-px h-4 bg-slate-700/50"></div>

      <div className="flex items-center gap-1.5 text-slate-300">
        <Users size={16} />
        <span className="text-sm font-medium tabular-nums tracking-wider text-foreground">
          {onlinePlayers} <span className="text-slate-500 font-normal">/ {maxPlayers}</span>
        </span>
      </div>

      <div className="flex items-center gap-1 ml-1">
        <Signal size={16} className="text-accent-emerald" />
      </div>
    </motion.div>
  );
}

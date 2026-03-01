"use client";

import { useState, FormEvent, useEffect } from "react";
import { X, ShoppingCart, Loader2 } from "lucide-react";
import { StoreItem } from "@/data/store";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import clsx from "clsx";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: StoreItem | null;
}

export function PurchaseModal({ isOpen, onClose, item }: PurchaseModalProps) {
  const [nickname, setNickname] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setNickname("");
      setIsProcessing(false);
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) return;

    setIsProcessing(true);

    // Simulate API call and payment processing
    setTimeout(() => {
      console.log(`[Mock Purchase] User ${nickname} attempted to buy ${item.name} for ${item.price} руб.`);
      toast.success("Успешно оплачено");
      setIsProcessing(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={!isProcessing ? onClose : undefined}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-accent-gold/5 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800/50 bg-slate-900/50">
            <h3 className="text-xl font-heading font-bold flex items-center gap-2">
              <ShoppingCart size={20} className="text-accent-gold" />
              Оформление заказа
            </h3>
            <button
              onClick={onClose}
              disabled={isProcessing}
              className="text-slate-400 hover:text-white transition-colors disabled:opacity-50"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-6 flex gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 items-center">
              <div
                className="w-16 h-16 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border"
                style={{ borderColor: item.colorHex || '#334155' }}
              >
                {/* Render icon or placeholder if no image exists */}
                {item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-lg opacity-80" />
                ) : (
                   <span className="text-2xl font-bold text-slate-500">?</span>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg leading-tight">{item.name}</h4>
                <p className="text-accent-gold font-bold mt-1">{item.price} руб.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="nickname" className="block text-sm font-medium text-slate-300 mb-2">
                  Никнейм на сервере
                </label>
                <input
                  id="nickname"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Ваш ник (например, PlayerOne)"
                  disabled={isProcessing}
                  required
                  className={clsx(
                    "w-full px-4 py-3 rounded-xl bg-slate-950/50 border outline-none transition-all placeholder:text-slate-600 focus:bg-slate-900",
                    nickname.trim().length > 0
                      ? "border-slate-600 focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald"
                      : "border-slate-700 focus:border-slate-500"
                  )}
                />
              </div>

              <p className="text-xs text-slate-500 leading-relaxed text-balance">
                Внимательно проверяйте никнейм перед оплатой. Товар будет начислен автоматически в течение 5 минут после подтверждения платежа.
              </p>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={!nickname.trim() || isProcessing}
                className={clsx(
                  "relative w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 overflow-hidden transition-all duration-300",
                  nickname.trim() && !isProcessing
                    ? "bg-accent-emerald hover:bg-emerald-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50"
                )}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Обработка...</span>
                  </>
                ) : (
                  <span>Оплатить {item.price} ₽</span>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ChevronRight, Gamepad2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import clsx from "clsx";

import { ServerStatusWidget } from "@/components/ServerStatusWidget";
import { PurchaseModal } from "@/components/PurchaseModal";
import { newsData } from "@/data/news";
import { storeCategories, storeData, StoreCategory, StoreItem } from "@/data/store";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState<StoreCategory>("Ранги");
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  const serverIP = "project-g.gameservers.me";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast.success("IP скопирован", {
      style: {
        background: "#020617",
        border: "1px solid #1e293b",
        color: "#f8fafc",
      }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredStoreData = storeData.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen relative selection:bg-accent-gold/30 selection:text-accent-gold overflow-x-hidden">
      <Toaster position="top-center" expand={true} richColors theme="dark" />

      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background for Premium Fantasy Feel */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute inset-0 bg-gradient-radial from-accent-gold/10 via-slate-900 to-slate-950 opacity-60"></div>
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <ServerStatusWidget isOnline={true} onlinePlayers={142} maxPlayers={500} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 drop-shadow-sm"
          >
            Project G
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium tracking-wide text-balance leading-relaxed"
          >
            Премиальный сервер нового поколения. Открой для себя уникальный мир магии, сражений и бесконечных приключений.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            onClick={copyToClipboard}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl font-bold text-slate-950 bg-accent-gold rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 shadow-[0_0_40px_rgba(245,158,11,0.2)] hover:shadow-[0_0_60px_rgba(245,158,11,0.4)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <Gamepad2 className="relative z-10" />
            <span className="relative z-10">Играть</span>
            <div className="relative z-10 flex items-center justify-center w-8 h-8 ml-2 rounded-full bg-slate-950/20 backdrop-blur-sm">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            onClick={() => {
              document.getElementById("news")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-accent-gold transition-colors animate-bounce cursor-pointer z-20"
          >
            <span className="text-sm font-medium uppercase tracking-widest">Вниз</span>
            <ChevronRight className="rotate-90" size={20} />
          </motion.button>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="relative py-24 md:py-32 bg-slate-950">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                Последние <span className="text-accent-gold">события</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">Узнавайте первыми о свежих обновлениях, турнирах и праздничных ивентах на сервере.</p>
            </div>
            <button className="text-slate-300 hover:text-accent-gold font-medium flex items-center gap-2 transition-colors group">
              Все новости <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {newsData.map((news, idx) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-3xl p-6 flex flex-col h-full overflow-hidden hover:shadow-[0_10px_40px_rgba(245,158,11,0.1)] transition-all duration-300 border-slate-800/80 hover:border-slate-700"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 mb-6 rounded-2xl bg-slate-800/50 overflow-hidden relative border border-slate-800/50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-transparent z-10"></div>
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md bg-slate-950/40 text-white border border-slate-700/50">
                    {news.tag}
                  </div>
                  {/* Subtle hover effect on image area */}
                  <div className="w-full h-full bg-slate-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                    <span className="text-slate-700 font-heading text-4xl opacity-50">PG</span>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-slate-400 mb-6 flex-1 text-balance">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                    <span className="text-sm font-medium text-slate-500">{news.date}</span>
                    <button className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-300 group-hover:bg-accent-gold group-hover:text-slate-950 transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="relative py-24 md:py-32 bg-slate-900 border-t border-slate-800/50 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Магазин <span className="text-accent-gold">Привилегий</span>
            </h2>
            <p className="text-slate-400 text-lg text-balance">Поддержите проект и получите уникальные возможности, косметические предметы и премиум статус на сервере.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {storeCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "relative px-6 py-3 rounded-full text-sm md:text-base font-bold transition-colors duration-300",
                  activeCategory === category
                    ? "text-slate-950"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent-gold rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredStoreData.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-1 overflow-hidden"
                >
                  {/* Glowing border effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                    style={{ background: `radial-gradient(circle at center, ${item.colorHex || '#f59e0b'} 0%, transparent 70%)` }}
                  ></div>

                  <div className="bg-slate-950 rounded-[22px] h-full flex flex-col p-6 relative z-10 border border-slate-800/50">
                    <div
                      className="w-full aspect-square rounded-xl bg-slate-900 border-2 mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500"
                      style={{ borderColor: item.colorHex ? `${item.colorHex}40` : '#334155' }}
                    >
                      <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${item.colorHex || '#f59e0b'} 0%, transparent 70%)` }}></div>
                      <span className="text-5xl font-heading text-slate-700" style={{ color: item.colorHex ? `${item.colorHex}80` : undefined }}>
                        {item.name.charAt(0)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.name}</h3>
                    <p className="text-sm text-slate-400 mb-6 flex-1">{item.description}</p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Стоимость</span>
                        <span className="text-2xl font-heading font-bold" style={{ color: item.colorHex || '#f59e0b' }}>
                          {item.price} <span className="text-sm text-slate-400">руб.</span>
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="px-5 py-2.5 rounded-xl bg-slate-800 text-white font-bold hover:bg-white hover:text-slate-950 transition-colors shadow-lg shadow-black/20"
                      >
                        Купить
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-gold to-yellow-600 flex items-center justify-center text-slate-950 font-heading font-bold text-xl">
                G
              </div>
              <span className="text-xl font-heading font-bold text-white tracking-tight">Project G</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a href="#" className="text-sm font-medium text-slate-400 hover:text-accent-gold transition-colors">Discord</a>
              <a href="#" className="text-sm font-medium text-slate-400 hover:text-accent-gold transition-colors">Правила Сервера</a>
              <a href="#" className="text-sm font-medium text-slate-400 hover:text-accent-gold transition-colors">Публичная Оферта</a>
            </nav>

            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Project G. Все права защищены.
            </div>
          </div>
        </div>
      </footer>

      {/* Purchase Modal */}
      {selectedItem && (
        <PurchaseModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
        />
      )}
    </main>
  );
}

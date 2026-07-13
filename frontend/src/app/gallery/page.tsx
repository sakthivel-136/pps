"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const TOTAL_IMAGES = 34;
const INITIAL_SHOW = 12;
const LOAD_MORE = 12;

export default function Gallery() {
  const [count, setCount] = React.useState(INITIAL_SHOW);
  const [lightbox, setLightbox] = React.useState<number | null>(null);

  const images = Array.from({ length: Math.min(count, TOTAL_IMAGES) }, (_, i) => i + 2);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
.gal-hero{padding:80px 16px 40px;text-align:center}
.gal-hero h1{font-size:clamp(2.5rem,6vw,4rem);font-weight:800;color:#025a0b;margin-bottom:8px}
.gal-hero-line{width:60px;height:3px;background:#d1d5db;margin:0 auto}

.gal-grid{max-width:1280px;margin:0 auto;padding:0 16px 40px;columns:3;column-gap:12px}
@media(max-width:768px){.gal-grid{columns:2;column-gap:8px}}
@media(max-width:480px){.gal-grid{columns:1}}

.gal-item{break-inside:avoid;margin-bottom:12px;border-radius:8px;overflow:hidden;cursor:pointer;position:relative}
@media(max-width:768px){.gal-item{margin-bottom:8px}}
.gal-item img{width:100%;display:block;transition:transform .5s cubic-bezier(0.4, 0, 0.2, 1)}
.gal-item:hover img{transform:scale(1.05)}
.gal-item::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.3),transparent);opacity:0;transition:opacity .4s ease}
.gal-item:hover::after{opacity:1}

.gal-more{display:flex;justify-content:center;padding:20px 0 60px}
.gal-more-btn{background:none;border:2px solid #025a0b;color:#025a0b;padding:12px 32px;border-radius:8px;font-weight:700;font-size:15px;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 6px -1px rgba(2,90,11,.1)}
.gal-more-btn:hover{background:#025a0b;color:#fff;transform:translateY(-2px);box-shadow:0 10px 15px -3px rgba(2,90,11,.2)}

/* Lightbox */
.gal-lb{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.95);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;padding:16px}
.gal-lb img{max-width:90vw;max-height:85vh;border-radius:12px;object-fit:contain;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5)}
.gal-lb-close{position:absolute;top:20px;right:24px;color:#fff;background:none;border:none;font-size:36px;cursor:pointer;line-height:1;z-index:10;transition:transform .2s}
.gal-lb-close:hover{transform:scale(1.1)}
.gal-lb-prev,.gal-lb-next{position:absolute;top:50%;transform:translateY(-50%);color:#fff;background:rgba(255,255,255,.15);backdrop-filter:blur(4px);border:none;font-size:28px;cursor:pointer;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .2s}
.gal-lb-prev:hover,.gal-lb-next:hover{background:rgba(255,255,255,.3);transform:translateY(-50%) scale(1.1)}
.gal-lb-prev{left:24px}
.gal-lb-next{right:24px}
`,
        }}
      />

      <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
        {/* Header */}
        <div className="gal-hero">
          <FadeIn direction="up">
            <h1>Photo Gallery</h1>
            <div className="gal-hero-line" />
          </FadeIn>
        </div>

        {/* Masonry Grid */}
        <div className="gal-grid">
          {images.map((num, i) => (
            <motion.div
              key={num}
              className="gal-item"
              onClick={() => setLightbox(num)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % INITIAL_SHOW) * 0.05 }}
            >
              <img
                src={`/gallery/gallery_${num}.webp`}
                alt={`Gallery photo ${num}`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {count < TOTAL_IMAGES && (
          <FadeIn direction="up" delay={0.2} className="gal-more">
            <button
              className="gal-more-btn"
              onClick={() => setCount((c) => Math.min(c + LOAD_MORE, TOTAL_IMAGES))}
            >
              + Show More
            </button>
          </FadeIn>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="gal-lb"
            onClick={() => setLightbox(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="gal-lb-close" onClick={() => setLightbox(null)}>
              ✕
            </button>
            <button
              className="gal-lb-prev"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) => (v! <= 2 ? TOTAL_IMAGES + 1 : v! - 1));
              }}
            >
              ‹
            </button>
            
            <motion.img
              src={`/gallery/gallery_${lightbox}.webp`}
              alt={`Gallery photo ${lightbox}`}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
            />

            <button
              className="gal-lb-next"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) => (v! >= TOTAL_IMAGES + 1 ? 2 : v! + 1));
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

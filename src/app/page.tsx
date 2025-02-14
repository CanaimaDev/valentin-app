"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [position, setPosition] = useState({ top: "50%", left: "auto", right: "0" });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const moveButton = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsMoving(true);

    let newTop, newLeft;
    do {
      newTop = Math.random() * 80 + 10;
      newLeft = Math.random() * 80 + 10;
    } while (Math.abs(newTop - 50) < 20 && Math.abs(newLeft - 50) < 20);

    setPosition({ top: `${newTop}%`, left: `${newLeft}%`, right: "auto" });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center p-6 overflow-hidden">
      {/* 🎵 Música de fondo */}
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-pink-500 font-semibold text-sm"
        >
          {isPlaying ? "🔇 Pausar música" : "🎶 Reproducir música"}
        </button>
      </div>

      {/* 🎵 Audio en segundo plano */}
      <audio ref={audioRef} loop>
        <source src="/V.mp3" type="audio/mpeg" />
      </audio>

      {/* ✨ Destellos de colores */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => {
          const colors = ["bg-yellow-400", "bg-red-500", "bg-blue-500"];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 ${randomColor} rounded-full`}
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 1,
                scale: 0,
              }}
              animate={{
                opacity: [1, 0.8, 0.5, 0],
                scale: [0, 1.5, 2, 0],
                y: ["0%", "-50%", "-80%", "-100%"],
              }}
              transition={{
                duration: Math.random() * 2 + 1.5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          );
        })}
      </div>

      {/* 🌸 Flores y PNGs flotando */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.img
            key={i}
            src="https://genesistoxical.com/wp-content/uploads/2023/06/Flor_animada_png_vector.png"
            alt="Flor"
            className="absolute w-16 h-16 opacity-80"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.8,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: ["0%", "10%", "-10%", "0%"],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ❤️ Imágenes PNG flotantes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.img
            key={i}
            src="https://static.vecteezy.com/system/resources/previews/036/255/304/non_2x/pink-heart-cartoon-free-png.png"
            alt="Corazón"
            className="absolute w-20 h-20 opacity-80"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.8,
            }}
            animate={{
              y: ["0%", "15%", "-10%", "0%"],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ✨ Título animado */}
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-6xl font-bold text-red-600 drop-shadow-lg animate-pulse"
      >
        
        ¿Quieres ser mi Valentín Mesh? ❤️
      </motion.h1>

      {accepted === null ? (
        <motion.div className="flex gap-6 mt-10 relative w-[300px] h-[100px]">
          {/* Botón "Sí" */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setAccepted(true)}
            className="bg-red-500 text-white text-lg w-28 h-14 rounded-full shadow-xl hover:bg-red-700 transition"
          >
            Sí ❤️
          </motion.button>

          {/* Botón "No" */}
          <motion.button
            onClick={moveButton}
            animate={isMoving ? { x: [0, -10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.3 }}
            style={{
              position: isMoving ? "absolute" : "relative",
              top: isMoving ? position.top : "auto",
              left: isMoving ? position.left : "auto",
            }}
            className="bg-gray-300 text-gray-800 text-lg w-28 h-14 rounded-full shadow-xl hover:bg-gray-400 transition"
          >
            No 😢
          </motion.button>
        </motion.div>
      ) : accepted ? (
        <motion.div className="mt-4 relative">
          {/* 🎇 Explosión de corazones */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.img
              key={i}
              src="https://static.vecteezy.com/system/resources/previews/001/187/511/non_2x/heart-png.png"
              alt="Corazón"
              className="absolute w-6 h-6 opacity-80"
              initial={{ top: "50%", left: "50%", scale: 0 }}
              animate={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, scale: [0, 1.5, 2, 0] }}
              transition={{ duration: Math.random() * 2 + 1.5 }}
            />
          ))}
          <h2 className="text-3xl text-green-600 font-semibold animate-pulse">
            ¡Sabía que dirías que sí! 💕🥰
          </h2>
        </motion.div>
      ) : null}
    </div>
  );
}

"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.muted = true;
        }
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.muted = false;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <Fragment>
            <audio ref={audioRef} autoPlay loop hidden>
                <source src="/assets/music/soft-music.mp3" type="audio/mpeg" />
            </audio>

            {/* ============== FLOATING MUSIC CONTROL ================ */}
            <motion.button
                onClick={togglePlay}
                className="fixed bottom-6 right-6 w-16 h-16 rounded-full
                   bg-white/10 backdrop-blur-xl border border-white/20
                   flex items-center justify-center shadow-xl
                   hover:shadow-purple-500/40 transition-all cursor-pointer z-50"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
            >
                {isPlaying ? (
                    <div className="flex gap-[3px] items-end">
                        {[1, 2, 3].map((bar) => (
                            <motion.div
                                key={bar}
                                className="w-[4px] h-[12px] bg-gradient-to-t from-purple-500 to-pink-400 rounded-sm"
                                animate={{
                                    height: ["6px", "14px", "8px", "12px"],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 0.6,
                                    delay: bar * 0.15,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <FaPlay size={20} className="text-purple-400" />
                )}
            </motion.button>
        </Fragment>
    );
};

export default AudioPlayer;

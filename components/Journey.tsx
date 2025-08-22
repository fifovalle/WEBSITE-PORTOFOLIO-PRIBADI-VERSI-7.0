import Image from "next/image";
import React, { useState } from "react";
// constants
import { journey } from "@/constants/journey";
// components
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTitle,
    DialogClose,
    DialogContent,
} from "@/components/ui/dialog";

const Journey = () => {
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [modalImageAll, setModalImageAll] = useState<string[]>([]);

    return (
        <div className="flex flex-col">
            <h2 className="h2 mb-8">
                Education & <span className="text-accent">Experience</span>
            </h2>

            {journey.map((item, index) => {
                const isPresent = item.years.includes("Present");
                const maxVisible = 2;
                const hasExtra =
                    item.gallery && item.gallery.length > maxVisible;

                return (
                    <div
                        key={index}
                        className="flex items-start gap-12 w-full mb-8"
                    >
                        {/* ============== BULLET POINT ================ */}
                        <div className="flex flex-col w-max justify-start items-center relative">
                            <div className="relative flex items-center justify-center">
                                {isPresent && (
                                    <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75 animate-ping"></span>
                                )}
                                <span
                                    className={`w-3 h-3 rounded-full ${
                                        isPresent ? "bg-green-500" : "bg-accent"
                                    }`}
                                />
                            </div>
                            <div
                                className={`w-[1px] bg-white/10
                                ${
                                    item.gallery && item.gallery.length > 0
                                        ? "h-[300px]"
                                        : "h-[160px]"
                                }
                                ${
                                    index === journey.length - 1 ? "hidden" : ""
                                }`}
                            />
                        </div>

                        {/* ============== TEXT ================ */}
                        <div className="max-w-[500px]">
                            <p
                                className={`mb-3 text-lg ${
                                    isPresent
                                        ? "text-green-500 font-semibold"
                                        : "text-white/50"
                                }`}
                            >
                                {item.years}
                                {isPresent && (
                                    <span className="ml-2 text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-md">
                                        Active
                                    </span>
                                )}
                            </p>
                            <h4 className="text-xl font-semibold mb-2">
                                {item.role}
                            </h4>
                            <p className="text-lg text-white/50">
                                {item.institution}
                            </p>

                            {/* ============== GALLERY ================ */}
                            {item.gallery && item.gallery.length > 0 && (
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    {item.gallery
                                        .slice(0, maxVisible)
                                        .map((img, i) => (
                                            <div
                                                key={i}
                                                className="relative w-full h-32 rounded-lg overflow-hidden cursor-pointer"
                                                onClick={() => {
                                                    if (
                                                        i === maxVisible - 1 &&
                                                        hasExtra
                                                    ) {
                                                        setModalImageAll(
                                                            item.gallery!
                                                        );
                                                    } else {
                                                        setModalImage(img);
                                                    }
                                                }}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${item.role} photo ${
                                                        i + 1
                                                    }`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {i === maxVisible - 1 &&
                                                    hasExtra && (
                                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xl font-bold">
                                                            +
                                                            {item.gallery
                                                                .length -
                                                                maxVisible}
                                                        </div>
                                                    )}
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}

            {/* ============== MODAL IMAGE ================ */}
            <Dialog
                open={!!modalImage}
                onOpenChange={() => setModalImage(null)}
            >
                <DialogContent className="bg-black/90 p-4 rounded-2xl max-w-5xl max-h-[80vh] flex flex-col justify-center items-center">
                    <DialogTitle className="sr-only">Gallery</DialogTitle>
                    {modalImage && (
                        <div className="relative w-full h-[70vh] sm:h-[60vh] md:h-[50vh] mb-4">
                            <Image
                                src={modalImage}
                                alt="Modal photo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}
                    <DialogClose asChild>
                        <Button className="w-32 bg-accent text-white font-semibold hover:bg-accent-hover  hover:text-white/90 transition-colors duration-200 cursor-pointer">
                            Close
                        </Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>

            {/* ============== MODAL ALL IMAGE ================ */}
            <Dialog
                open={modalImageAll.length > 0}
                onOpenChange={() => setModalImageAll([])}
            >
                <DialogContent className="bg-black/90 p-4 rounded-2xl max-w-[90vw] max-h-[90vh] overflow-auto flex flex-col items-center">
                    <DialogTitle className="sr-only">Gallery</DialogTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {modalImageAll.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img}
                                alt={`Gallery photo ${idx + 1}`}
                                onClick={() => setModalImage(img)}
                                className="object-cover rounded-lg cursor-pointer hover:scale-105 transition-all"
                            />
                        ))}
                    </div>
                    <DialogClose asChild>
                        <Button className="w-32 bg-accent text-white font-semibold hover:bg-accent-hover hover:text-white/90 transition-colors duration-200 cursor-pointer mt-4">
                            Close
                        </Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Journey;

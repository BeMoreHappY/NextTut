"use client";
import Image from "next/image";
import photo from "@/app/assets/foto.jpg";
import { useState } from "react";

export default function Home() {
   const [isClicked, setIsClicked] = useState(false);
   return (
      <main className="flex min-h-screen flex-col items-center p-24">
         <h1 className="text-center text-6xl font-black">
            Chcesz zobaczyć dobrą dupę?
         </h1>
         <button
            onClick={() => setIsClicked(!isClicked)}
            className="mb-10 rounded bg-blue-500 px-4 py-2 text-7xl font-bold text-white hover:bg-blue-700"
         >
            Kliknij tutaj
         </button>
         {isClicked && <img src={photo.src} alt="Kladuia" />}
      </main>
   );
}

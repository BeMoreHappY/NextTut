import Image from "next/image";
import photo from "@/app/assets/foto.jpg";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center p-24">
         <h1 className="text-center text-6xl font-black">
            Kladia <span className="text-blue-500">Hlubek</span>
         </h1>
         <img src={photo.src} alt="Kladuia" />
      </main>
   );
}

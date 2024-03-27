'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";
import { redirect } from "next/navigation";
const roboto = Roboto({subsets:['latin'], weight:'900'})

export default function Home() {

  const router = useRouter()
  const handleRoute = (page) => {
    router.push(page)
  }
  return (
    <div>
      <h1 className={roboto.className}>Home</h1>
      <button className="border-2 p-3" onClick={() => handleRoute('/about')}>Go about</button>
      <button className="border-2 p-3" onClick={() => handleRoute('video')}>Go Video</button>
    </div>
  );
}
'use client'
import Link from "next/link";
import {RoundedBtn, SimpleBtn} from "@/components/Btn/Btn"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className="pt-20 px-4">
      <h1>Dashboard</h1>
      <RoundedBtn  text="Go To Dashboard"  onClick={() => router.push("/Dashboard") } />
    
    </main>
  ); 
}


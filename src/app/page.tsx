import Link from "next/link";
import {SimpleBtn} from "@/components/Btn/Btn"
export default function Home() {
  return (
    <main className="pt-20 px-4">
      <h1>Dashboard</h1>
      <SimpleBtn jks={["HelloWorld" , "true"]}/> 
      <Link href="/Dashboard" >go to Dashboard</Link>
    </main>
  );
}


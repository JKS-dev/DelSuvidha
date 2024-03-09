import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20 px-4">
      <h1>Dashboard</h1>
      <Link href="/Dashboard" >go to Dashboard</Link>
    </main>
  );
}


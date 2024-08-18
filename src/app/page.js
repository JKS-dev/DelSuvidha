import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1>Home</h1>
      <Link href={'/dashboard'}>Dashboard</Link>
      <Link href={'/login'}>Login</Link>
    </div>
  )
}
export default Home;
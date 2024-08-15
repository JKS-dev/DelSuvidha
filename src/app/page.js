import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href={'/dashboard'}>Dashboard</Link><br />
      <Link href={'/login'}>Login</Link>
    </>
  )
}
export default Home;
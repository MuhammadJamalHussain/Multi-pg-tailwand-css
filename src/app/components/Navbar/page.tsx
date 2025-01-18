import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-[#567ba0] flex justify-between items-center h-[5vh] text-white font-bold text-lg">
      <h1 className="ml-4 cursor-pointer transition duration-1000 hover:text-[#c2e403]"><Link href="/">Basic Website</Link></h1>
        <ul className="flex list-none">
            <li className="mr-8 cursor-pointer transition duration-1000 hover:text-[#c2e403]"><Link href="/">Home</Link></li>
            <li className="mr-8 cursor-pointer transition duration-1000 hover:text-[#c2e403]"><Link href="/components/About">About</Link></li>
            <li className="mr-8 cursor-pointer transition duration-1000 hover:text-[#c2e403]"><Link href="/components/Contact">Contact</Link></li>
        </ul>
      <h2 className="mr-4 cursor-pointer transition duration-1000 hover:text-[#c2e403]"><Link href="/components/Login">Login</Link></h2>
    </div>
  );
}
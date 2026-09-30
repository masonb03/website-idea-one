'use client'
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex justify-between gap-4 py-2 px-4">
            <div className="flex h-screen overflow-hidden">
                <aside
                className={`text-white transition-all duration-300 flex flex-col ${isOpen ? 'w-32' : 'w-20'}`}
                >
                    <div className="flex gap-4">
                        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="hover:cursor-pointer text-2xl"
                        >
                            {isOpen ? <GiHamburgerMenu /> : <GiHamburgerMenu />}
                        </button>
                        <Link href="/">Logo</Link>
                    </div>
                    <nav className="flex-1 p-4 space-y-2">
                        <Link href="/" className="block p-2 rounded hover:bg-gray-800 transition-all duration-200">
                        {isOpen && <span className="ml-2">Home</span>}
                        </Link>
                        <Link href="/" className="block p-2 rounded hover:bg-gray-800 transition-all duration-200">
                        {isOpen && <span className="ml-2">Playlist</span>}
                        </Link>
                        <Link href="/" className="block p-2 rounded hover:bg-gray-800 transition-all duration-200" >
                        {isOpen && <span className="ml-2">Settings</span>}
                        </Link>
                    </nav>
                </aside>
            </div>
            <div>
                <input 
                className="border border-gray-600 rounded-xl ml-4 px-1 py-1 w-100"
                type="search"
                placeholder="Search for a song, aritst, or playlist..."
                />
            </div>
            <div>
                <Link href="/profile">Profile</Link>
            </div>
        </div>
    )
}
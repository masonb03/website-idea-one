'use client'
import { useState } from "react"
import Link from "next/link"



export default function Sidebar() {
const [isOpen, setIsOpen] = useState(true);

    return(
        <div className="flex h-screen overflow-hidden">
            <aside 
                className={`bg-gray-900 text-white transition-all duration-300 flex flex-col ${
                isOpen ? 'w-64' : 'w-20'
                }`}
            >
                <div>
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-sm bg-gray-800 p-1 rounded hover:bg-gray-700"
                    >
                        {isOpen ? '<' : '>'}
                    </button>
                </div>

                 <nav className="flex-1 p-4 space-y-2">
                    <Link href="/" className="block p-2 rounded hover:bg-gray-800">
                        🏠 {isOpen && <span className="ml-2">Home</span>}
                    </Link>
                    <Link href="/analytics" className="block p-2 rounded hover:bg-gray-800">
                        📊 {isOpen && <span className="ml-2">Analytics</span>}
                    </Link>
                    <Link href="/settings" className="block p-2 rounded hover:bg-gray-800">
                        ⚙️ {isOpen && <span className="ml-2">Settings</span>}
                    </Link>
                </nav>

            </aside>
        </div>
    )
}
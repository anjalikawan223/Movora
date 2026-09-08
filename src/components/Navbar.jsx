import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div>
            <div className="flex items-center space-x-8">
                <Link to="#" className="flex items-center">
                    <img src="/logo.png" alt="MOVORA Logo" className="h-8 object-contain" />
                </Link>
                <Link to="#" className="text-white text-sm font-semibold tracking-wider hover:text-gray-300 transition-colors">
                    MOVIES
                </Link>
                <Link to="#" className="text-white text-sm font-semibold tracking-wider hover:text-gray-300 transition-colors">
                    SERIES
                </Link>
                <Link to="#" className="text-white text-sm font-semibold tracking-wider hover:text-gray-300 transition-colors">
                    KIDS
                </Link>
                <Link to="#" className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 text-sm font-bold tracking-wider hover:from-purple-300 hover:to-pink-500 transition-colors  ml-4">
                    AI MATCHMAKER
                </Link>
            </div>
        </div>
    )
}
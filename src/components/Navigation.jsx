import {  FileSearch } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Navigation() {

    return  <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link className="flex items-center justify-center" to="/home">
      <FileSearch className="h-6 w-6 mr-2" />
      <span className="font-bold">AI Plagiarism Detector</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#"
      >
        Features
      </a>
      <a
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#"
      >
        Pricing
      </a>
      <a
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#"
      >
        About
      </a>
    </nav>
  </header>
}

export default Navigation

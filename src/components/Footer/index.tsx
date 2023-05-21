import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-5 mt-14 bg-slate-950">
      <div className="max-m-[90%] mx-auto flex items-center justify-between">
        <h6 className="text-yellow-500">
          Copyright 2022 — Designed & Developed by Frenify
        </h6>

        <nav>
          <ul className="flex items-center justify-end gap-3">
            <li className="text-yellow-500 hover:text-yellow-600 hover:underline">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="text-yellow-500 hover:text-yellow-600 hover:underline">
              <Link href="#">Cookies</Link>
            </li>
            <li className="text-yellow-500 hover:text-yellow-600 hover:underline">
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

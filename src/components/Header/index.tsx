import NavLinkCustom from "./NavLinkCustom"
import { links } from "./links"

export default function Header() {
  return (
    <header className="p-8 flex align-center justify-between">
      <div className="flex align-center justify-start gap-4">
        <span className="text-gray-50 h-11 w-11 flex align-center justify-center shadow-inner shadow-gray-800 bg-black p-3 rounded-full flex-shrink-0">
          <i className="fa-solid fa-bars text-xl"></i>
        </span>

        <span>
          <p className="font-extrabold text-yellow-200">Metal</p>
          <p className="font-extrabold text-white">Portal</p>
        </span>
      </div>

      <nav>
        <ul className="flex align-center justify-center gap-8">
          {links.map((link) => (
            <NavLinkCustom key={link.label} {...link} />
          ))}
        </ul>
      </nav>

      <button className="border-2 border-gray-200 rounded-lg py-2 px-3 text-gray-200 uppercase text-sm">
        Connect wallet
      </button>
    </header>
  )
}

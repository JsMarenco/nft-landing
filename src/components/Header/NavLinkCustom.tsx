import { FC } from "react"

import Link from "next/link"

const NavLinkCustom: FC<{ label: string; href: string }> = ({
  href,
  label,
}) => {
  return (
    <li className="text-gray-200 hover:underline hover:text-yellow-300 duration-75 block font-bold">
      <Link href={href}>{label}</Link>
    </li>
  )
}

export default NavLinkCustom

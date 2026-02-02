// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Home,
//   MapPin,
//   Image,
//   Info,
//   Phone
// } from "lucide-react";

// const navItems = [
//   { name: "Accueil", href: "/", icon: Home },
//   { name: "Excursions", href: "/Excursions", icon: MapPin },
//   { name: "Galeries", href: "/Galeries", icon: Image },
//   { name: "À propos", href: "/Apropos", icon: Info },
//   { name: "Contact", href: "/Contact", icon: Phone },
// ];

// export default function MobileBottomNav() {
//   const pathname = usePathname();

//   return (
//     <nav className="fixed bottom-0 left-0  right-0 z-50 lg:hidden bg-black backdrop-blur ">
//       <div className="flex justify-around items-center py-2">
//         {navItems.map((item) => {
//           const Icon = item.icon;
//           const active = pathname === item.href;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`flex flex-col text-white items-center text-xs ${
//                 active ? "" : ""
//               }`}
//             >
//               <Icon
//                 size={22}
//                 className={active ? "text-emerald-600 font-semibold" : "" }
//               />
//               <span className={active ? "text-emerald-600 font-semibold" : ""}>{item.name}</span>
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MapPin, Image, Info, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Excursions", href: "/Excursions", icon: MapPin },
  { name: "Galeries", href: "/Galeries", icon: Image },
  { name: "À propos", href: "/Apropos", icon: Info },
  { name: "Contact", href: "/Contact", icon: Phone },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔥 Empêche l’erreur d’hydratation
  if (!mounted) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-black backdrop-blur">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col text-white items-center text-xs"
            >
              <Icon
                size={22}
                className={active ? "text-emerald-600 font-semibold" : ""}
              />
              <span
                className={active ? "text-emerald-600 font-semibold" : ""}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
















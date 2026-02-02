"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
 
  return (
    <html lang="fr">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}





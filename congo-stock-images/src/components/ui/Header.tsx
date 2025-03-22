"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFDD15] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-congostock.png" 
            alt="CongoStock Images" 
            width={200} 
            height={50} 
            className="h-10 w-auto" 
          />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/browse/photos" className="text-gray-600 hover:text-[#003559] transition-colors">
            Photos
          </Link>
          <Link href="/browse/videos" className="text-gray-600 hover:text-[#003559] transition-colors">
            Vidéos
          </Link>
          <Link href="/browse/illustrations" className="text-gray-600 hover:text-[#003559] transition-colors">
            Illustrations
          </Link>
          <Link href="/creator/join" className="text-gray-600 hover:text-[#003559] transition-colors">
            Devenir Créateur
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button className="text-gray-500 hover:text-[#003559] transition-colors">
            <FiSearch size={20} />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button 
              onClick={toggleUserMenu} 
              className="text-gray-500 hover:text-[#003559] transition-colors flex items-center"
            >
              <FiUser size={20} />
            </button>

            {/* User Dropdown */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <Link 
                  href="/auth/signin" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Connexion
                </Link>
                <Link 
                  href="/auth/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Inscription
                </Link>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link 
            href="/cart"
            className="text-gray-500 hover:text-[#003559] transition-colors"
          >
            <FiShoppingCart size={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-500 hover:text-[#003559] transition-colors"
          >
            {mobileMenuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4 container mx-auto px-4">
            <Link 
              href="/browse/photos"
              className="text-gray-600 hover:text-[#003559] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Photos
            </Link>
            <Link 
              href="/browse/videos"
              className="text-gray-600 hover:text-[#003559] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vidéos
            </Link>
            <Link 
              href="/browse/illustrations"
              className="text-gray-600 hover:text-[#003559] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Illustrations
            </Link>
            <Link 
              href="/creator/join"
              className="text-gray-600 hover:text-[#003559] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Devenir Créateur
            </Link>
            <div className="border-t border-gray-200 pt-2">
              <Link 
                href="/auth/signin"
                className="text-gray-600 hover:text-[#003559] transition-colors block py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connexion
              </Link>
              <Link 
                href="/auth/signup"
                className="text-gray-600 hover:text-[#003559] transition-colors block py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inscription
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className="bg-gray-100 text-center p-4">
      <footer>
        <p className="text-gray-700">&copy; 2023 Blog App. All rights reserved.</p>
        <nav className="space-x-4">
          <a href="https://facebook.com" className="text-blue-500 hover:underline">
            <FaFacebook className="inline-block" />
          </a>
          <a href="https://twitter.com" className="text-blue-500 hover:underline">
            <FaTwitter className="inline-block" />
          </a>
          <a href="https://instagram.com" className="text-blue-500 hover:underline">
            <FaInstagram className="inline-block" />
          </a>
        </nav>
      </footer>
    </div>
  )
}

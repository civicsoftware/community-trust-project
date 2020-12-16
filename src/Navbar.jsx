import React from 'react';

function Navbar() {
  return (
    <div class="p-4 bg-gradient-to-l from-purple-600 to-purple-900 text-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between py-1 items-center md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="text-xl">
                TRUST Project
              </span>
            </a>
          </div>
          <nav class="hidden md:flex space-x-10">
            <a href="/avatars" class="text-base font-medium text-gray-300 hover:text-white">
              Avatars
            </a>
            <a href="/library" class="text-base font-medium text-gray-300 hover:text-white">
              Data Library
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
// Footer.js
import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 py-10 w-full flex flex-col items-center">
      <div className="container mx-auto flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* 각 메뉴에 해당하는 섹션 */}
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
            </ul>
          </div>

          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Documentation</li>
              <li>Community</li>
            </ul>
          </div>

          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 저작권 정보 */}
      <div className="mt-8 text-center text-white">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

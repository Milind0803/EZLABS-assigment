import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-900 text-white text-sm">
      <p>© {new Date().getFullYear()} EZ Labs. All rights reserved.</p>
    </footer>
  );
}

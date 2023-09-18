import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-gray-500 text-center">
      <small className="mb-2 block text-xs">&copy; {new Date().getFullYear()} All rights reserved</small>
      <p className="text-xs">
        <span className="font-semibold"> About this website:</span> built with Next.js (App Router and
        Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email,
        Resend, Vercel hosting.
      </p>
    </footer>
  );
}

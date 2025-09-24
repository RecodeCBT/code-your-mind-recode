// src/components/Footer.tsx
export default function Footer() {
  return <footer className="bg-white px-4 text-center border-t border-gray-200 mt-12 py-[10px] my-px">
      <p className="text-sm text-gray-500 mb-2">© 2025 Recode CBT. All rights reserved.</p>

      <a href="https://www.instagram.com/recode_cbt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 text-white text-sm font-semibold shadow-md transition hover:opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" className="w-5 h-5">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9.75 3a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 7.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Z" />
        </svg>
        Follow us on Instagram
      </a>
    </footer>;
}
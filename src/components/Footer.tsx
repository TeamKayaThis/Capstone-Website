export default function Footer() {
  return (
    <footer className="w-full bg-[#333333] text-white py-12 px-8">
      <div className="flex justify-between items-end">
        {/* Left Side: Empty/Placeholder for now */}
        <div className="text-xs text-gray-400">
          {/* Add social media icons here later using Lucide */}
        </div>

        {/* Right Side: Contact Details */}
        <div className="text-right text-xs">
          <p>tktstudios.com</p>
          <p>National University</p>
          <p className="mt-4 text-gray-500">&copy; 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

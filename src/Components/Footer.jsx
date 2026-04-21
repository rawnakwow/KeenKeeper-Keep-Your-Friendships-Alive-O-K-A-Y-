import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a3a32] text-white py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>
        
        {/* Description */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, track, and nurture the 
          relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Social Links</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="p-2 bg-white text-[#1a3a32] rounded-full hover:bg-gray-200 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white text-[#1a3a32] rounded-full hover:bg-gray-200 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-white text-[#1a3a32] rounded-full hover:bg-gray-200 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

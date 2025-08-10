import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function TopNavBar() {
  return (
    <div className="bg-[#50BAAB] font-[Poppins] py-3">
      <div className="mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="text-white text-sm">
            support@borrowin.in
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-teal-100 transition-colors">
              <Facebook className="w-4 h-4 fill-current"/>
            </a>
            <a href="#" className="text-white hover:text-teal-100 transition-colors">
              <Twitter className="w-4 h-4 fill-current" />
            </a>
            <a href="#" className="text-white hover:text-teal-100 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-white hover:text-teal-100 transition-colors">
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
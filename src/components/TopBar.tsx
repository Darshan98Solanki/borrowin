import Facebook from "../assets/icons/facebook.svg"
import Twitter from "../assets/icons/twitter.svg"
import Instagram from "../assets/icons/instagram.svg"
import LinkedIn from "../assets/icons/linkedin.svg"

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
              <img src={Facebook} alt="Facebook" className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-white hover:text-teal-100 transition-colors">
              <img src={Twitter} alt="Twitter" className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-white hover:text-teal-100 transition-colors">
              <img src={Instagram} alt="Instagram" className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-white hover:text-teal-100 transition-colors">
              <img src={LinkedIn} alt="LinkedIn" className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
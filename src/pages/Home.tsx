import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import HeroSection from '../assets/hero-section.svg'
import coin from '../assets/Coin.svg';
import GradientButton from '../components/GradientButton';
import ServiceSection from '../components/home/ServiceSection';
import CustomizableDivider from '../components/dividers/Divider';
import WhyChooseBorrowin from '../components/home/WhyChooseBorrowinSection';
import AboutUs from '../components/home/AboutUs';
import DividerWithCoin from '../components/dividers/DividerWithCoin';
import FAQSection from '../components/home/FAQ';
import Footer from '../components/Footer';

export default function BorrowInLandingPage() {

  return (
    <>
      <TopBar />
      <NavBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Background Circles */}
        <div className="absolute top-10 left-1/8 w-6 h-6 bg-[#A7DDD5] rounded-full opacity-60"></div>
        <div className="absolute top-1/6 right-6 w-24 h-24 bg-[#A7DDD5] rounded-full z-20"></div>
        <div className="absolute top-2/7 z-10 right-3/8 w-16 h-16 bg-[#26837ACC] rounded-full"></div>
        <div className="absolute bottom-12 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-40"></div>

        {/* Background Text & Rectangle */}
        <div className="absolute lg:block right-0 top-0 h-full w-1/2">
          <div className="absolute right-[35%] w-[30%] h-[30%] bg-[#A7DDD5] rounded-b-lg md:right-[52%] md:w-[42%] md:h-[64%]"></div>
          <h1 className="absolute -right-60 top-[50%] -rotate-90 text-[150px] text-teal-100 font-bold opacity-30 tracking-wide z-10">
            borrowin
          </h1>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 col-span-12 lg:ms-16 space-y-6 ">
              <h1 className="text-2xl sm:text-2xl lg:text-4xl font-semibold text-gray-900 leading-tight font-[Poppins]">
                Borrow Smart, Borrow Fast, Borrowin
              </h1>
              <p className="text-base sm:text-lg text-gray-700 font-normal leading-[1.9] tracking-wide">
                Welcome to Borrowin – a digital lending platform built by a trusted NBFC to make borrowing easy, fast, and secure. Whether you need funds for a personal need or a short-term emergency, Borrowin offers instant loan approvals, quick disbursals, and a 100% online process with minimal documentation.
              </p>
              <GradientButton direction="right" displayText="Apply Now" />
            </div>

            <div className="relative lg:col-span-7 col-span-12 w-full flex justify-center">
              <img
                src={HeroSection}
                alt="Professional person"
                className="z-10 w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-xl"
              />

              <div className='bg-[#A7DDD5] w-xl rounded-xl  h-6 -bottom-4 -right-14   absolute z-10'></div>

              <div className="absolute top-5/12 left-1/12 -translate-x-1/12 bg-white shadow-xl rounded-xl px-4 w-72 py-3 z-20">
                <div className="text-sm font-semibold text-gray-900">Rs.10,00,000</div>
                <div className="text-xs text-gray-500">Debited in your account</div>
              </div>

              <div className="absolute top-8/12 left-2/12 -translate-x-1/12 z-20">
                <img src={coin} alt="Coin" className="w-20 h-20" />
              </div>

              <div className="absolute bottom-6 right-0 bg-white shadow-xl rounded-xl px-4 py-3 z-20 w-72">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Two Wheeler Loan</div>
                    <div className="text-xs text-gray-500">Up to</div>
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mt-2">
                    Rs.25,00,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <ServiceSection />
      <CustomizableDivider />
      <WhyChooseBorrowin/>
      <AboutUs/>
      <DividerWithCoin/>
      <FAQSection/>
      <Footer/>
    </>
  );
}
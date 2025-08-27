import NavBar from "../components/NavBar";
import TopNavBar from "../components/TopBar";
import MobileView from "../assets/MobileView.svg"
import GradientButton from "../components/GradientButton";
import FAQSection from "../components/home/FAQ";
import Footer from "../components/Footer";
import FeatureBenifits from "../components/personal-loan/FeatureBenifits";
import DividerWithMobileApp from "../components/dividers/DivierwithMobileApp";
import Documentation from "../components/personal-loan/Documentation";
import LoanSteps from "../components/personal-loan/LoanStepsPurpos";
import { useNavigate } from "react-router-dom";
import ProfileImageDecorator from '../assets/ProfileDecorator.jpg'

export default function PersonalLoan() {
    const avatarSrc = ProfileImageDecorator;
    const navigator = useNavigate();

    return (
        <>
            <TopNavBar />
            <NavBar />

            <div className="relative bg-white overflow-hidden">
                <div className="relative ms-8 ps-6 lg:ps-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* LEFT: text */}
                    <div className="flex flex-col justify-center text-center lg:text-left max-w-6/9">
                        <p className="text-[#01A493] font-semibold mb-2">Personal Loan</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
                            Instant Personal Loan by Borrowin
                        </h1>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Borrowwin provides Instant Personal Loan to salaried individuals
                            like yourself, to fulfill each and every one of your needs! Loans
                            are disbursed from 9 months, all the way up to 1.5 years,
                            depending upon your needs.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Borrowwin ensures that cash is made possible, whenever, and
                            wherever!
                        </p>
                        <div className="w-3/2">
                            <GradientButton displayText="Apply Now" direction="right" onClick={() => { navigator('../general-registartion') }} />
                        </div>
                    </div>

                    {/* ---- Blue/Teal rounded rectangular decorator behind the phone ---- */}
                    <div className="absolute rounded-bl-[36px] right-44 top-0 w-1/4 h-11/12 bg-[#a7dcd5] shadow-inner z-10"
                        style={{ transform: "translateX(4%)" }}
                    />
                    <div className="absolute -left-16 top-12 w-28 h-28 bg-[#50BAAB] rounded-full z-0" />
                    
                    {/* RIGHT: mobile + decorators */}
                    <div className="relative flex justify-center lg:justify-end items-center">

                        <img src={MobileView} alt="" className="w-full h-auto mb-0.5 object-contain z-20" />

                        {/* ---- User popup decorator: avatar + small white card ---- */}
                        <div className="absolute z-0 -left-24 top-8 flex items-start">
                            {/* decorators */}
                            <div className="absolute left-38 -top-16 w-28 h-28 bg-white border-2 border-[#A7DDD5] rounded-full -z-20" />
                            <div className="absolute -left-20 top-124 w-24 h-24 bg-white border-2 border-[#A7DDD5] rounded-full -z-20" />
                            <div className="absolute left-163 top-40 w-28 h-28 bg-[#A7DDD5] rounded-full z-0" />
                            {/* Avatar + ring */}
                            <div className="relative  left-34">
                                {/* outer ring */}
                                <div className="absolute -inset-1 rounded-full border-2 border-[#26837A]"></div>
                                {/* avatar */}
                                {avatarSrc ? (
                                    <img
                                        src={avatarSrc}
                                        alt="user"
                                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                ) : (
                                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-sm font-medium border-2 border-white shadow-sm">
                                        SP
                                    </div>
                                )}

                                {/* online dot */}
                                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF5E7A] rounded-full border-2 border-white" />
                            </div>
                        </div>

                        {/* optional small floating tag near bottom of phone */}
                        <div className="absolute top-9/12 left-1/12 -translate-x-5/12 bg-white shadow-xl rounded-xl px-4 w-72 py-3 z-20">
                            <div className="text-sm font-semibold text-gray-900">Rs.10,00,000</div>
                            <div className="text-xs text-gray-500">Debited in your account</div>
                        </div>
                    </div>
                </div>
            </div>
            <FeatureBenifits />
            <DividerWithMobileApp />
            <Documentation />
            <LoanSteps />
            <FAQSection />
            <Footer />
        </>
    );
}

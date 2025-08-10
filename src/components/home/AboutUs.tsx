import { CheckCheck } from "lucide-react";
import GradientButton from "../GradientButton";
import PlayStore from "../../assets/icons/PlayStore.svg"
import AppStore from "../../assets/icons/AppStore.svg"
import AboutUsDetails from "../../assets/AboutUs.svg"
import Benifits from "../../assets/Benifts.svg"

export default function AboutUs() {

    const benefits = [
        "Free Consulting With Expert saving Money",
        "Online Banking",
        "Investment Report Every Month",
        "Saving Money For The Future",
        "Online Transaction"
    ];

    return (
        <>
            <div className="absolute left-1/2 -translate-x-1/2  w-full flex justify-center">
                <div className="bg-[#50BAAB] w-[70%] rounded-2xl px-6 py-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between flex-wrap gap-y-4">
                            {/* Left Stats */}
                            <div className="flex space-x-6 ms-16">
                                <div className="text-white">
                                    <p className="text-sm font-medium opacity-90">OVER</p>
                                    <p className="text-3xl font-bold">6 Cr</p>
                                    <p className="text-sm opacity-90">App Downloads</p>
                                </div>
                            </div>

                            <div className="flex space-x-6">
                                <div className="text-white">
                                    <p className="text-sm font-medium opacity-90">OVER</p>
                                    <p className="text-3xl font-bold">56 Cr</p>
                                    <p className="text-sm opacity-90">Total Credit Given</p>
                                </div>
                            </div>

                            {/* Right App Store Buttons */}
                            <div className="flex space-x-4 me-16">
                                <img src={PlayStore} alt="" />
                                <div className="w-px h-18 bg-slate-200"></div>
                                <img src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#E7FFFC] min-h-screen mt-16">
                {/* Main Content Section */}
                <div className="mx-20 px-6 pt-38">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Images */}
                        <div className="relative flex flex-col items-start w-100">
                            <img src={AboutUsDetails} alt="" />
                        </div>
                        {/* Right Side - Content */}
                        <div>
                            <div className="mb-6">
                                <p className="text-teal-600 font-semibold mb-2">About Us</p>
                                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                                    Borrow Smart, Borrow Fast, Borrowin
                                </h1>
                                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                    Borrowin is a digital platform that facilitates seamless loan transactions between borrowers and trusted personal loan providers, including NBFCs and Banks. All loan applications on Borrowin are reviewed, approved, and sanctioned by RBI-registered financial institutions.
                                </p>
                                <GradientButton direction="right" displayText="Explore More" />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto py-26">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left Content Section */}
                            <div className="space-y-6">
                                {/* Header */}
                                <div>
                                    <p className="text-teal-600 font-medium mb-2">Perks You Enjoy</p>
                                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                                        What benefits will you get
                                    </h1>
                                </div>

                                {/* Benefits List */}
                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="flex items-center justify-center">
                                                    <CheckCheck className="w-4 h-4 text-teal-600" />
                                                </div>
                                            </div>
                                            <p className="text-gray-700 text-lg font-medium">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Image Section */}
                            <div className="relative">
                                <img src={Benifits} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
import { ArrowRight } from 'lucide-react';
import BorrowinLogo from './Logo';

export default function Footer() {
    return (
        <div className="bg-[#50BAAB14]">
            {/* Top Banner */}
            <div className="bg-[#50BAABCC] px-6 py-8">
                <div className="mx-auto flex items-center justify-center space-x-16">
                    <p className="text-white text-lg">
                        Archive more, worry less. Start your loan journey today with Borrowing
                    </p>
                    <button className="bg-white text-gray-800 px-8 py-3 shadow-gray-500 shadow-md rounded-full font-bold hover:bg-gray-50 transition-colors duration-200">
                        Apply now
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto px-14 py-12">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Logo and Testimonial */}
                    <div className="space-y-8">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <BorrowinLogo width='227' height='91'/>
                        </div>

                        {/* Testimonial Section */}
                        <div className="space-y-6 max-w-6/9">
                            <h2 className="text-3xl font-bold text-gray-900">
                                People are Saying About Do With
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                Everything you need to accept to payment and grow your money of manage anywhere on planet
                            </p>

                            {/* Testimonial */}
                            <div className="">
                                <div className="mb-4">
                                    <span className="text-4xl">"</span>
                                </div>
                                <blockquote className="text-gray-700 leading-relaxed mb-4">
                                    I am very helped by this E-wall at application, my days are very easy to use this application and its very helpful in my life, even I can pay a short time🤩
                                </blockquote>
                                <footer className="flex items-center">
                                    <span className="text-gray-900 font-medium">Borrowin</span>
                                </footer>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Newsletter and Footer Links */}
                    <div className="space-y-8">
                        {/* Newsletter Signup */}
                        <div className="p-6">
                            <h3 className="font-semibold text-gray-900 mb-3">
                                Get started new try our product
                            </h3>
                            <form className="flex w-full max-w-md">
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter your email here"
                                        autoComplete="email"
                                        aria-label="Email address"
                                        className="block w-full rounded-full border-2 border-[#26837A] bg-transparent py-4 pl-6  pr-20 text-base/6 "
                                    />
                                    <div className="absolute inset-y-1 right-1 flex justify-end">
                                        <button
                                            type="submit"
                                            aria-label="Submit"
                                            className="flex aspect-square h-full items-center justify-center rounded-full bg-gradient-to-br from-[#26837A] to-[#50BAAB] text-white transition hover:brightness-110"
                                        >
                                            <ArrowRight />
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>


                        {/* Footer Links */}
                        <div className="grid grid-cols-3 gap-8 ">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Company</h4>
                                <ul className="space-y-4 font-semibold">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About US</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Courses</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Programs</a></li>
                                </ul>
                            </div>

                            {/* Service Column */}
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Service</h4>
                                <ul className="space-y-4 font-semibold">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Business loan</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Personal Loan</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Financial Planning</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Consultation</a></li>
                                </ul>
                            </div>

                            {/* Legal Column */}
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Legal</h4>
                                <ul className="space-y-4 font-semibold">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Term & Conditions</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Security Center</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Corporate Information</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
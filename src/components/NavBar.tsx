import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import GradientButton from "./GradientButton";
import BorrowinLogo from "./Logo";

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <>

        <div className="bg-gray-50 sticky top-0 z-50 shadow">
            <header className="bg-white shadow-sm">
                <div className="mx-auto px-4 sm:px-8 lg:px-10">
                    <div className="flex justify-between items-center py-4">
                        <BorrowinLogo width="150" height="60" />

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-16">
                            <nav className="hidden md:flex space-x-16">
                                <div className="relative group inline-block">
                                    <a href="#" className="text-gray-700 hover:text-teal-600">
                                        Loans
                                        {/* <ChevronDown /> */}
                                    </a>

                                    <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 min-w-[150px] z-10">
                                        <ul className="text-left">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
                                                >
                                                    Personal Loan
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
                                                >
                                                    Business Loan
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
                                                >
                                                    Education Loan
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
                                                >
                                                    Home Loan
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <a href="#" className="text-gray-700 hover:text-teal-600">Credit report</a>
                                <a href="#" className="text-gray-700 hover:text-teal-600">Repayment</a>
                                <a href="#" className="text-gray-700 hover:text-teal-600">About us</a>
                            </nav>

                            <div className="hidden md:flex items-center space-x-4">
                                <GradientButton direction="right" displayText="Sign up" />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t">
                            <nav className="flex flex-col space-y-4">
                                <div className="relative group inline-block">
                                    <a href="#" className="text-gray-700 hover:text-teal-600">
                                        Loans
                                    </a>

                                    <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 min-w-[150px] z-10">
                                        <ul className="text-left">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
                                                >
                                                    Personal Loan
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
                                                >
                                                    Business Loan
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
                                                >
                                                    Education Loan
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-600"
                                                >
                                                    Home Loan
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <a href="#" className="text-gray-700 hover:text-teal-600">Credit report</a>
                                <a href="#" className="text-gray-700 hover:text-teal-600">Repayment</a>
                                <a href="#" className="text-gray-700 hover:text-teal-600">About us</a>
                                <div className="flex items-center space-x-4 pt-4">
                                    <button className="bg-teal-500 text-white px-4 py-2 rounded-lg">
                                        Sign up
                                    </button>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </div>
    </>

}
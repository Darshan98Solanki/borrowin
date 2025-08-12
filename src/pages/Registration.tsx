import React, { useState } from 'react';
import { User } from 'lucide-react';
import BorrowinWhiteLogo from '../components/LogoWhite';
import Card from '../components/Card';
import SecureIcon from '../assets/icons/SecureIconReg.svg'
import OnlineIcon from '../assets/icons/OnlineIconReg.svg'
import ChatIcon from '../assets/icons/ChatIconReg.svg'
import SalariedIcon from '../assets/icons/SalariedIcon.svg'
import ApplicantAgeIcon from '../assets/icons/ApplicantAgeIcon.svg'
import MonthllyCashIcon from '../assets/icons/MonthllyCashIcon.svg'
import MinimumCibilIcon from '../assets/icons/MinimumCibilIcon.svg'
import NoRecentDefaultIcon from '../assets/icons/NoRecentDefaultIcon.svg'
import GradientButton from '../components/GradientButton';
import Checkbox from '../components/formElements/CheckBox';

export default function BorrowinRegistration() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        dateOfBirth: '',
        age: '',
        gender: '',
        address: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        detailsAccurate: false
    });

    const features = [
        {
            icon: OnlineIcon,
            title: "Fully Online Process",
            subtitle: "Apply anytime, anywhere",
            position: "right"
        },
        {
            icon: ChatIcon,
            title: "No Hidden Chargers",
            subtitle: "100% transparency",
            position: "left"
        },
        {
            icon: SecureIcon,
            title: "Secure & Compliant",
            subtitle: "Backed by a trusted network",
            position: "right"
        }
    ];

    const eligibilityCriteria = [
        {
            icon: SalariedIcon,
            text: "Only Salaried individuals are eligible",
            bgColor: "bg-teal-100",
            position: "right"
        },
        {
            icon: ApplicantAgeIcon,
            text: "Applicants aged between 23-60 years",
            bgColor: "bg-orange-100",
            position: "left"
        },
        {
            icon: MonthllyCashIcon,
            text: "Minimum monthly salary of INR. 30K",
            bgColor: "bg-yellow-100",
            position: "right"
        },
        {
            icon: MinimumCibilIcon,
            text: "Minimum CIBIL score of 680+",
            bgColor: "bg-blue-100",
            position: "left"
        },
        {
            icon: NoRecentDefaultIcon,
            text: "No recent defaults in the past 12 months",
            bgColor: "bg-green-100",
            position: "right"
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (currentStep === 1) {
            setCurrentStep(2);
        } else {
            console.log("Final Form Data:", formData);
        }
    };

    const handlePrevious = () => {
        setCurrentStep(1);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 [background:linear-gradient(90deg,#26837A_0%,#50BAAB_100%)]">
            <Card extraCss='w-full mx-36 bg-white overflow-hidden shadow-2xl rounded-lg'>
                <div className="grid lg:grid-cols-5 min-h-[600px] p-2">
                    {/* Left Side - Branding & Features */}
                    <div className="bg-[#50BAAB] text-white lg:col-span-2 p-8 flex flex-col justify-center relative">
                        <div className="mb-8">
                            <div className="flex items-center mb-8">
                                <BorrowinWhiteLogo width='185' height='40' />
                            </div>

                            <h2 className="text-xl font-semibold mb-4">
                                {currentStep === 1 ? "Why choose Borrowin for your loan ?" : "Are you eligible for our loans ?"}
                            </h2>
                            <p className="mb-8">
                                {currentStep === 1 ? "We simplify the instant loan process" : "To qualify for our loans, you must meet specific criteria"}
                            </p>
                        </div>

                        <div className="space-y-6 mx-4">
                            {currentStep === 1 ? (
                                features.map((feature, index) => (
                                    <div key={index} className={`flex ${feature.position === 'right' ? 'justify-end' : 'justify-start'}`}>
                                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/60 rounded-2xl p-4 shadow-[0_0_30px_rgba(255,255,255,0.2)] max-w-xs">
                                            <div className="flex items-center space-x-3">
                                                {
                                                    feature.position === "right" ? (
                                                        <>
                                                            <div className="flex items-center justify-center me-4">
                                                                <img
                                                                    src={feature.icon}
                                                                    width={44}
                                                                    height={44}
                                                                    alt=""
                                                                    className="drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                                                                />
                                                            </div>
                                                            <div className="flex-1 me-6">
                                                                <h3 className="font-semibold text-white text-sm leading-tight">
                                                                    {feature.title}
                                                                </h3>
                                                                <p className="text-white/80 text-xs mt-1">{feature.subtitle}</p>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="flex-1 me-10">
                                                                <h3 className="font-semibold text-white text-sm leading-tight">
                                                                    {feature.title}
                                                                </h3>
                                                                <p className="text-white/80 text-xs mt-1">{feature.subtitle}</p>
                                                            </div>
                                                            <div className="flex items-center justify-center">
                                                                <img
                                                                    src={feature.icon}
                                                                    width={44}
                                                                    height={44}
                                                                    alt=""
                                                                    className="drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                            </div>
                                        </div>
                                    </div>

                                ))
                            ) : (
                                eligibilityCriteria.map((criteria, index) => (
                                    <div key={index} className={`flex ${criteria.position === 'right' ? 'justify-end' : 'justify-start'}`}>
                                        <div className="flex items-center space-x-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/60 rounded-2xl py-1 px-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] ">
                                            {
                                                criteria.position === "right" ? (
                                                    <>
                                                        <p className="text-white text-sm font-semibold flex-1 me-6">{criteria.text}</p>
                                                        <div className="flex items-center justify-center">
                                                            <img
                                                                src={criteria.icon}
                                                                width={40}
                                                                height={40}
                                                                alt=""
                                                                className="drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                                                            />
                                                        </div>
                                                    </>
                                                ) : (<>
                                                    <div className="flex items-center justify-center me-4">
                                                        <img
                                                            src={criteria.icon}
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                                                        />
                                                    </div>
                                                    <p className="text-white text-sm font-semibold flex-1">{criteria.text}</p>
                                                </>)
                                            }
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right Side - Registration Form */}
                    <div className="bg-gray-50 lg:col-span-3 p-8 flex flex-col justify-center relative">
                        {/* Step Indicator */}
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-50">
                            <div className={`relative flex items-center justify-center`}>
                                {currentStep === 1 && (
                                    <div className="absolute w-7 h-7 rounded-full bg-teal-500/20"></div>
                                )}
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold bg-teal-500 z-10 text-white`}>
                                    1
                                </div>
                            </div>
                            <div className="w-8 border-t-2 border-gray-800 border-dashed"></div>
                            <div className={`relative flex items-center justify-center`}>
                                {currentStep === 2 && (
                                    <div className="absolute w-7 h-7 rounded-full bg-teal-500/20"></div>
                                )}
                                <div
                                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold z-10 ${currentStep === 2
                                        ? 'bg-teal-500 text-white'
                                        : 'border border-gray-800 text-gray-600 bg-white'
                                        }`}
                                >
                                    2
                                </div>
                            </div>
                        </div>

                        <div className="w-full mx-auto">
                            {/* User Avatar & Title */}
                            <div className="flex mb-12 mt-18">
                                <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center">
                                    <User className="w-8 h-8 text-white" />
                                </div>
                                <div className='flex justify-center items-center ms-4'>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray">User name</h3>
                                        <p className="text-gray-500 text-xs">useremail12@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {currentStep === 1 ? (
                                <div className="space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name*
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Name as per aadhar"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                        />
                                    </div>

                                    {/* Email and Date of Birth Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Id*
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter here"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Date of Birth*
                                            </label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Age and Gender Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Age
                                            </label>
                                            <input
                                                type="number"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleInputChange}
                                                placeholder="Enter age"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Gender*
                                            </label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white"
                                            >
                                                <option value="">Select</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center mt-12">
                                        <GradientButton direction='right' displayText='Save & Next' extraCss='font-semibold' onClick={handleSubmit} />
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {/* Address */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Address*
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            placeholder="Enter here"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                        />
                                    </div>

                                    {/* Country and State Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Country*
                                            </label>
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white"
                                            >
                                                <option value="">Select</option>
                                                <option value="india">India</option>
                                                <option value="usa">USA</option>
                                                <option value="uk">UK</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                State*
                                            </label>
                                            <select
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white"
                                            >
                                                <option value="">Select</option>
                                                <option value="maharashtra">Maharashtra</option>
                                                <option value="delhi">Delhi</option>
                                                <option value="bangalore">Bangalore</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* City and Pincode Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                City*
                                            </label>
                                            <select
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white"
                                            >
                                                <option value="">Select</option>
                                                <option value="mumbai">Mumbai</option>
                                                <option value="pune">Pune</option>
                                                <option value="nashik">Nashik</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Pincode*
                                            </label>
                                            <input
                                                type="text"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleInputChange}
                                                placeholder="Enter here"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Checkbox */}
                                    <div className="flex items-center space-x-3 mt-6">
                                        <Checkbox 
                                            checked={formData.detailsAccurate}
                                            onChange={(e) => setFormData(prev => ({ ...prev, detailsAccurate: e.target.checked }))}
                                        />
                                        <label className="text-sm text-gray-700">
                                            I confirm that all details are accurate.
                                        </label>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-4 justify-center mt-8">
                                        <button
                                            onClick={handlePrevious}
                                            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 px-12 rounded-lg transition duration-200"
                                        >
                                            Previous Page
                                        </button>
                                        <GradientButton direction='right' displayText='Confirm Details' extraCss='font-semibold' onClick={handleSubmit} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
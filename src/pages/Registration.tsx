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

// Interface for form data
interface FormData {
    fullName: string;
    email: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    address: string;
    country: string;
    state: string;
    city: string;
    pincode: string;
    detailsAccurate: boolean;
}

// Interface for form errors
interface FormErrors {
    fullName?: string;
    email?: string;
    dateOfBirth?: string;
    age?: string;
    gender?: string;
    address?: string;
    country?: string;
    state?: string;
    city?: string;
    pincode?: string;
    detailsAccurate?: string;
}

// Interface for feature items
interface Feature {
    icon: string;
    title: string;
    subtitle: string;
    position: 'left' | 'right';
}

// Interface for eligibility criteria
interface EligibilityCriteria {
    icon: string;
    text: string;
    bgColor: string;
    position: 'left' | 'right';
}

export default function BorrowinRegistration() {
    const [currentStep, setCurrentStep] = useState<1 | 2>(1);
    const [errors, setErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState<FormData>({
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

    const features: Feature[] = [
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

    const eligibilityCriteria: EligibilityCriteria[] = [
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

    const validateStep1 = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = 'Date of birth is required';
        } else {
            const dob = new Date(formData.dateOfBirth);
            const today = new Date();
            const minAgeDate = new Date(
                today.getFullYear() - 18,
                today.getMonth(),
                today.getDate()
            );

            if (dob > minAgeDate) {
                newErrors.dateOfBirth = 'Age must be greater than or equal to 18';
            }
        }


        if (!formData.age) {
            newErrors.age = 'Age is required';
        } else if (Number(formData.age) < 18 || Number(formData.age) > 100) {
            newErrors.age = 'Age must be between 18 and 100';
        }

        if (!formData.gender) {
            newErrors.gender = 'Gender selection is required';
        }

        return newErrors;
    };

    const validateStep2 = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        if (!formData.country) {
            newErrors.country = 'Country selection is required';
        }

        if (!formData.state) {
            newErrors.state = 'State selection is required';
        }

        if (!formData.city) {
            newErrors.city = 'City selection is required';
        }

        if (!formData.pincode.trim()) {
            newErrors.pincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Pincode must be 6 digits';
        }

        if (!formData.detailsAccurate) {
            newErrors.detailsAccurate = 'Please confirm that all details are accurate';
        }

        return newErrors;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { checked } = e.target;
        setFormData(prev => ({
            ...prev,
            detailsAccurate: checked
        }));

        if (errors.detailsAccurate) {
            setErrors(prev => ({
                ...prev,
                detailsAccurate: undefined
            }));
        }
    };

    const handleSubmit = (): void => {
        if (currentStep === 1) {
            const stepErrors = validateStep1();
            if (Object.keys(stepErrors).length > 0) {
                setErrors(stepErrors);
                return;
            }
            setErrors({});
            setCurrentStep(2);
        } else {
            const stepErrors = validateStep2();
            if (Object.keys(stepErrors).length > 0) {
                setErrors(stepErrors);
                return;
            }
            setErrors({});
            console.log("Final Form Data:", formData);
        }
    };

    const handlePrevious = (): void => {
        setErrors({});
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
                                            required
                                            className={`w-full bg-[#50BAAB0F] border-1 border-[#50BAAB] px-3 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.fullName && (
                                            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                                        )}
                                    </div>

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
                                                required
                                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                            )}
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
                                                required
                                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.dateOfBirth && (
                                                <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Age*
                                            </label>
                                            <input
                                                type="number"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleInputChange}
                                                placeholder="Enter age"
                                                required
                                                min="18"
                                                max="100"
                                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none ${errors.age ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            />
                                            {errors.age && (
                                                <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Gender*
                                            </label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleInputChange}
                                                required
                                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white ${errors.gender ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {errors.gender && (
                                                <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-center mt-12">
                                        <GradientButton direction='right' displayText='Save & Next' extraCss='font-semibold py-3' onClick={handleSubmit} />
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6">
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
                                            required
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none ${errors.address ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        />
                                        {errors.address && (
                                            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Country*
                                            </label>
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                required
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white ${errors.country ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            >
                                                <option value="">Select Country</option>
                                                <option value="india">India</option>
                                                <option value="usa">USA</option>
                                                <option value="uk">UK</option>
                                            </select>
                                            {errors.country && (
                                                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                State*
                                            </label>
                                            <select
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                required
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white ${errors.state ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            >
                                                <option value="">Select State</option>
                                                <option value="maharashtra">Maharashtra</option>
                                                <option value="delhi">Delhi</option>
                                                <option value="bangalore">Bangalore</option>
                                            </select>
                                            {errors.state && (
                                                <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                City*
                                            </label>
                                            <select
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                required
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white ${errors.city ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            >
                                                <option value="">Select City</option>
                                                <option value="mumbai">Mumbai</option>
                                                <option value="pune">Pune</option>
                                                <option value="nashik">Nashik</option>
                                            </select>
                                            {errors.city && (
                                                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                                            )}
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
                                                required
                                                pattern="[0-9]{6}"
                                                maxLength={6}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none ${errors.pincode ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            />
                                            {errors.pincode && (
                                                <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 mt-6">
                                        <Checkbox
                                            checked={formData.detailsAccurate}
                                            onChange={handleCheckboxChange}
                                        // required
                                        />
                                        <div>
                                            <label className="text-sm text-gray-700">
                                                I confirm that all details are accurate.*
                                            </label>
                                            {errors.detailsAccurate && (
                                                <p className="text-red-500 text-xs mt-1">{errors.detailsAccurate}</p>
                                            )}
                                        </div>
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
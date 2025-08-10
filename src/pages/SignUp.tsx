import React, { useState } from 'react';
import { CircleCheckBig } from 'lucide-react';
import Card from '../components/Card';
import IndiaFlag from '../assets/country/India.svg';
import OTPmodel from '../assets/newOTPmodel.svg';
import SignUpForm from '../components/formElements/SignUpForm';
import OTPVerify from '../components/formElements/OTPVerify';

export default function SignUp() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [countryCode, setCountryCode] = useState("+91");
    const [showOTP, setShowOTP] = useState(false);

    const features = [
        "For Salaried and Self-Employed",
        "From ₹10,000 upto ₹40,000",
        "100% Online Process",
        "Quick Approval",
        "20-Minute Disbursal",
        "Direct Bank Transfer"
    ];

    const countries = [
        { code: "+91", flag: IndiaFlag, name: "India" }, // Fixed: removed object wrapper
        { code: "+1", flag: IndiaFlag, name: "United States" }, // Use USFlag when available
        { code: "+44", flag: IndiaFlag, name: "United Kingdom" }, // Use UKFlag when available
        { code: "+61", flag: IndiaFlag, name: "Australia" }, // Use AustraliaFlag when available
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fullNumber = `${countryCode}${mobileNumber}`;
        console.log("Submitted Number:", fullNumber);
        setShowOTP(true);
    };

    const selectedCountry = countries.find(c => c.code === countryCode) ?? countries[0];

    console.log("show otp", showOTP);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 [background:linear-gradient(90deg,#26837A_0%,#50BAAB_100%)]">
            <div className="w-full mx-36 bg-white overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 min-h-[calc(100vh-9rem)]">
                    {/* Left Side - Features */}
                    <div className="flex flex-col rounded-r-4xl justify-center text-white relative [background:linear-gradient(90deg,#50BAAB_0%,#26837A_100%)]">
                        <div className="relative justify-center items-center flex">
                            {showOTP ?
                                <img src={OTPmodel} alt="OTP Model" className="w-3/4 h-auto" />
                            :
                                <div>
                                    <h1 className="text-xl lg:text-2xl font-bold mb-8">
                                        Flexible Personal Loan
                                    </h1>

                                    <div className="space-y-4">
                                        {features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <div className="flex-shrink-0 w-5 h-5 bg-opacity-20 rounded-full flex items-center justify-center">
                                                    <CircleCheckBig />
                                                </div>
                                                <span className="text-lg font-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white min-w-full flex flex-col justify-center relative">
                        <div className="mx-auto">
                            <Card extraCss='rounded-l-4xl shadow-2xl min-w-full -ms-12 pb-2 -mt-6 pr-12'>
                                {!showOTP ? <SignUpForm
                                    countries={countries}
                                    selectedCountry={selectedCountry}
                                    countryCode={countryCode}
                                    mobileNumber={mobileNumber}
                                    isChecked={isChecked}
                                    onCountryChange={setCountryCode}
                                    onMobileNumberChange={setMobileNumber}
                                    onTermsChange={setIsChecked}
                                    onSubmit={handleSubmit}
                                /> :
                                    <OTPVerify
                                        title="OTP"
                                        subtitle='We have sent the varification code to your mobile number'
                                        showOTP={showOTP}
                                        setShowOTP={setShowOTP}
                                    />}
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
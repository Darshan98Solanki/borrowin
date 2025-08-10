import type React from "react";
import BorrowinLogo from "../Logo";
import Checkbox from "./CheckBox";

// Country object type
interface Country {
    code: string;
    name: string;
    flag: string;
}

interface SignUpFormProps {
    countries: Country[];
    selectedCountry: Country;
    countryCode: string;
    mobileNumber: string;
    isChecked: boolean;

    // Handlers
    onCountryChange: (value: string) => void;
    onMobileNumberChange: (value: string) => void;
    onTermsChange: (checked: boolean) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

    // Optional props for customization
    title?: string;
    buttonLabel?: string;
    privacyPolicyUrl?: string;
    termsUrl?: string;
}

export default function SignUpForm({
    countries,
    selectedCountry,
    countryCode,
    mobileNumber,
    isChecked,
    onCountryChange,
    onMobileNumberChange,
    onTermsChange,
    onSubmit,
    title = "Verify your mobile number",
    buttonLabel = "Get OTP",
    privacyPolicyUrl = "#",
    termsUrl = "#",
}: SignUpFormProps) {
    return (
        <div className="mx-20 my-6">
            {/* Logo */}
            <div className="text-center flex justify-center">
                <BorrowinLogo width="300" height="110"/>
            </div>

            {/* Title */}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>

            {/* Form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(e);
                }}
                className="max-w-md mx-auto p-4"
            >
                {/* Label */}
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile number
                </label>

                {/* Input Group */}
                <div className="flex rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-teal-500 bg-white">
                    {/* Country Code Select */}
                    <div className="relative w-24">
                        <div className="flex items-center px-3 py-3 bg-white h-full">
                            <img
                                src={selectedCountry?.flag}
                                alt={selectedCountry?.name}
                                className="w-5 h-3 mr-1 object-cover rounded-sm"
                            />
                            <select
                                value={countryCode}
                                onChange={(e) => onCountryChange(e.target.value)}
                                className="bg-white focus:outline-none text-sm font-medium text-gray-800 cursor-pointer w-full"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                    backgroundPosition: "right 0.2rem center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "1em 1em",
                                    paddingRight: "1.2rem",
                                    appearance: "none",
                                }}
                            >
                                {countries.map((c) => (
                                    <option key={c.code} value={c.code} className="py-2 px-3">
                                        {c.code}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-px bg-gray-300"></div>

                    {/* Phone Number Input */}
                    <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => onMobileNumberChange(e.target.value)}
                        placeholder="Enter number"
                        className="flex-1 px-4 py-3 focus:outline-none bg-white text-gray-800 min-w-0"
                    />
                </div>

                {/* Terms */}
                <div className="my-6">
                    <label className="flex items-start space-x-3 cursor-pointer">
                        <Checkbox checked={isChecked} onChange={(e) => onTermsChange(e.target.checked)} />
                        <span className="text-xs text-gray-600 leading-relaxed">
                            By continuing, you agree to Borrowin's{" "}
                            <a href={privacyPolicyUrl} className="text-teal-600 hover:underline">
                                privacy policy
                            </a>{" "}
                            and{" "}
                            <a href={termsUrl} className="text-teal-600 hover:underline">
                                Terms & Conditions
                            </a>
                            . You also authorize us to retrieve your credit report and
                            communicate with you via phone, e-mail, WhatsApp etc.
                        </span>
                    </label>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${isChecked && mobileNumber.length >= 10
                            ? "[background:linear-gradient(90deg,#26837A_0%,#50BAAB_100%)]"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                    disabled={!isChecked || mobileNumber.length < 10}
                >
                    {buttonLabel}
                </button>
            </form>
        </div>
    );
}

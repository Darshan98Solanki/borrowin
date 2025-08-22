import React from 'react';
import GradientButton from '../GradientButton';
import NavButton from '../NavButton';
import { allowedRegex } from '../../pages/Verification';

interface EmailVerificationProps {
    email: string;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContinue: () => void;
    handlePreviousPage: () => void;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({
    email,
    handleEmailChange,
    handleContinue,
    handlePreviousPage
}) => {

    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Title */}
            <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-12">
                    Confirm Your Email
                </h2>
                <p className="text-xs text-gray-600 max-w-md mb-4">
                    We’ll send a 6-digit OTP to the email address below for verification. Please confirm if it’s correct. If needed, you can edit it before continuing.
                </p>
            </div>

            {/* PAN Input */}
            <div className="w-full max-w-md">
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="borrowin@gmail.com"
                    className="w-full px-4 py-2 border-1 bg-white border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50BAAB] focus:border-[#50BAAB] text-sm tracking-wider"
                />
            </div>

            {/* Buttons */}
            <div className="max-w-md space-y-3 mt-30 ">
                <GradientButton direction='right' displayText='Continue' onClick={handleContinue} extraCss='w-full py-2 font-semibold' disabled={!allowedRegex.test(email)} />
                <NavButton goTo={{ page: "loanAmount" }} setPage={handlePreviousPage}>Previous Page</NavButton>
            </div>
        </div>
    );
};

export default EmailVerification;
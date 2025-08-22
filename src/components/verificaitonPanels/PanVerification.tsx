import React from 'react';
import GradientButton from '../GradientButton';
import NavButton from '../NavButton';

interface PANVerificationProps {
    panNumber: string;
    handlePANChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContinue: () => void;
    handlePreviousPage: () => void;
}

const PANVerification: React.FC<PANVerificationProps> = ({
    panNumber,
    handlePANChange,
    handleContinue,
    handlePreviousPage
}) => {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Title */}
            <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-12">
                    Add PAN Number
                </h2>
                <p className="text-xs text-gray-600 max-w-md mb-4">
                    Your information is encrypted and used only for identity verification in compliance with government regulations.
                </p>
            </div>

            {/* PAN Input */}
            <div className="w-full max-w-md">
                <input
                    type="text"
                    value={panNumber}
                    onChange={handlePANChange}
                    placeholder="0000000000"
                    maxLength={10}
                    className="w-full px-4 py-1 border-1 bg-white border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50BAAB] focus:border-[#50BAAB] text-md tracking-wider uppercase"
                />
            </div>

            {/* Buttons */}
            <div className="max-w-md space-y-3 mt-30 ">
                <GradientButton direction='right' displayText='Continue' onClick={handleContinue} extraCss='w-full py-2 font-semibold' disabled={!panNumber || panNumber.length !== 10} />
                <NavButton goTo={{ page: "loanAmount" }} setPage={handlePreviousPage}>Previous Page</NavButton>
            </div>
        </div>
    );
};

export default PANVerification;
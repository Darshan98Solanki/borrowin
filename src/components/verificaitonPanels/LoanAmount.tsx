import React from 'react';
import GradientButton from '../GradientButton';
import NavButton from '../NavButton';

interface LoanAmountProps {
    loanAmount: string;
    handleLoanAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContinue: () => void;
    handlePreviousPage: () => void;
}

export default function LoanAmount({loanAmount,handleLoanAmountChange,handleContinue,handlePreviousPage}:LoanAmountProps){
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Title */}
            <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                    Enter Loan Amount
                </h2>
            </div>

            {/* Loan Amount Input */}
            <div className="w-full max-w-md space-y-4">
                <div className="">
                    <label htmlFor="loanAmount" className="block text-xs text-gray-600 mb-2">
                        Enter Expected Loan Amount
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            ₹
                        </span>
                        <input
                            id="loanAmount"
                            type="text"
                            value={loanAmount}
                            onChange={handleLoanAmountChange}
                            placeholder="6,00,000"
                            className="w-full pl-8 pr-4 py-2 border border-teal-600 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#50BAAB] focus:border-[#50BAAB] text-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="text-center max-w-md mt-16">
                <p className="text-gray-600 text-sm">
                    Kindly specify the loan amount you wish to apply for.
                </p>
            </div>

            {/* Buttons */}
            <div className="w-full max-w-md space-y-3">
                <GradientButton direction='right' displayText='Continue' onClick={handleContinue} extraCss='w-full py-2 font-semibold' disabled={!loanAmount}/>
                <NavButton goTo={{ page: "accessLocation" }} setPage={handlePreviousPage}>Previous Page</NavButton>
            </div>
        </div>
    );
};
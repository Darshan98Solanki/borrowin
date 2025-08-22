import React from 'react';
import type { EmploymentType } from '../../pages/Verification';
import NavButton from '../NavButton';
import GradientButton from '../GradientButton';

interface IncomeDetailsProps {
    employmentType: EmploymentType | null;
    monthlyIncome: string;
    handleEmploymentTypeChange: (type: EmploymentType) => void;
    handleIncomeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContinue: () => void;
    handlePreviousPage: () => void;
}

export default function IncomeDetails({
    employmentType,
    monthlyIncome,
    handleEmploymentTypeChange,
    handleIncomeChange,
    handleContinue,
    handlePreviousPage
}: IncomeDetailsProps) {
    const isFormValid = employmentType && monthlyIncome.trim() !== '';
    
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Title */}
            <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-10">
                    Income Details
                </h2>
                <p className="text-xs text-gray-600 max-w-md leading-relaxed text-left">
                    Verifying your income improves your chances of getting better loan offers and faster approval.
                </p>
            </div>

            {/* Form Content */}
            <div className="w-full max-w-md space-y-6">
                {/* Employment Type */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Employment type
                    </label>
                    <div className="flex space-x-4">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="employmentType"
                                value="salaried"
                                checked={employmentType === 'salaried'}
                                onChange={() => handleEmploymentTypeChange('salaried')}
                                className="w-4 h-4 text-[#50BAAB] focus:ring-[#50BAAB] focus:ring-2"
                            />
                            <span className="ml-2 text-sm text-gray-700">Salaried</span>
                        </label>

                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="employmentType"
                                value="selfEmployed"
                                checked={employmentType === 'selfEmployed'}
                                onChange={() => handleEmploymentTypeChange('selfEmployed')}
                                className="w-4 h-4 text-[#50BAAB] focus:ring-[#50BAAB] focus:ring-2"
                            />
                            <span className="ml-2 text-sm text-gray-700">Self employed</span>
                        </label>

                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="employmentType"
                                value="business"
                                checked={employmentType === 'business'}
                                onChange={() => handleEmploymentTypeChange('business')}
                                className="w-4 h-4 text-[#50BAAB] focus:ring-[#50BAAB] focus:ring-2"
                            />
                            <span className="ml-2 text-sm text-gray-700">Business</span>
                        </label>
                    </div>
                </div>

                {/* Monthly Income */}
                <div>
                    <label htmlFor="monthlyIncome" className="block text-sm font-semibold text-gray-700 mb-3">
                        Monthly salary/income
                    </label>
                    <div className="relative">
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2  text-2xl">
                            ₹
                        </span>
                        <input
                            id="monthlyIncome"
                            type="text"
                            value={monthlyIncome}
                            onChange={handleIncomeChange}
                            placeholder="00,000.00"
                            className="w-full pl-8 pr-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#50BAAB] text-lg bg-transparent transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="max-w-md space-y-3 mt-14 ">
                <GradientButton direction='right' displayText='Continue' onClick={handleContinue} extraCss='w-full py-2 font-semibold' disabled={!isFormValid}/>
                <NavButton goTo={{ page: "verifyDocuments", docStep: "email" }} setPage={handlePreviousPage}>Previous Page</NavButton>
            </div>
        </div>
    );
};
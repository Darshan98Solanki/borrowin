import { Check } from 'lucide-react';
import React from 'react';

type DocumentStep = "pan" | "aadhar" | "income" | "email" | "salary" | "generalInfo";

interface DocumentStepsPanelProps {
    currentStep: DocumentStep;
}

const DocumentStepsPanel: React.FC<DocumentStepsPanelProps> = ({ currentStep }) => {
    const steps = [
        { id: 'pan', label: 'Add PAN Number' },
        { id: 'aadhar', label: 'Add Aadhar Number' },
        { id: 'email', label: 'Email Verification' },
        { id: 'income', label: 'Income Details' },
        { id: 'salary', label: 'Upload Salary Proof' },
        { id: 'generalInfo', label: 'General Information' }
    ];

    const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);
    const currentStepIndex = getCurrentStepIndex();

    return (
        <div className="w-80 bg-[#50BAAB] p-12 rounded-xl text-white relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="z-10 absolute -top-3 left-0 w-34 h-34 rounded-full -translate-x-16 translate-y-16 bg-gradient-to-tr from-white/90 to-[#50BAAB] opacity-50"></div>
            <div className="z-10 absolute right-9 -bottom-12 w-42 h-42 rounded-full translate-x-12 bg-gradient-to-tr from-white/90 to-[#50BAAB] opacity-70"></div>


            {/* Header */}
            <div className="relative z-20 mb-12">
                <h2 className="text-sm font-medium">Few steps</h2>
                <h3 className="text-xl font-semibold">Of your loan process</h3>
            </div>

            {/* Steps Container */}
            <div className="relative z-20">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-white/30"></div>

                {/* Steps */}
                <div className="space-y-8">
                    {steps.map((step, index) => {
                        const isCompleted = index < currentStepIndex;
                        const isCurrent = index === currentStepIndex;

                        return (
                            <div key={step.id} className="flex items-center relative">
                                {/* Step Circle */}
                                <div
                                    className={`
                                        flex items-center justify-center w-6 h-6 rounded-full border-2 z-10
                                        ${isCompleted ? 'bg-white border-white' : ''}
                                        ${isCurrent ? 'bg-white border-white' : ''}
                                        ${!isCompleted && !isCurrent ? 'border-white bg-[#50BAAB]' : ''}
                                    `}
                                >
                                    {isCompleted && (
                                        <Check className='text-[#50BAAB]'/>
                                    )}
                                    {isCurrent && (
                                        <div className="w-2.5 h-2.5 bg-[#50BAAB] rounded-full"></div>
                                    )}
                                </div>

                                {/* Step Label */}
                                <span
                                    className={`ml-4 text-sm font-semibold ${isCompleted || isCurrent ? 'text-white' : 'text-white/70'
                                        }`}
                                >
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DocumentStepsPanel;

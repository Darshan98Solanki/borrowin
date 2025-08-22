import React, { useRef } from 'react';
import GradientButton from '../GradientButton';
import NavButton from '../NavButton';

interface OTPVerificationProps {
    otp: string[];
    handleOTPChange: (index: number, value: string) => void;
    handleContinue: () => void;
    handlePreviousPage: () => void;
    handleResendOTP: () => void;
    resendTimer: number;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
    otp,
    handleOTPChange,
    handleContinue,
    handlePreviousPage,
    handleResendOTP,
    resendTimer
}) => {

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleInputChange = (index: number, value: string) => {
        // Only allow single digit
        if (value.length <= 1 && /^\d*$/.test(value)) {
            handleOTPChange(index, value);

            // Move to next input if value is entered
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        // Move to previous input on backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);

        for (let i = 0; i < pastedData.length && i < 6; i++) {
            handleOTPChange(i, pastedData[i]);
        }

        // Focus on the next empty input or the last input
        const nextEmptyIndex = pastedData.length < 6 ? pastedData.length : 5;
        inputRefs.current[nextEmptyIndex]?.focus();
    };

    const isOTPComplete = otp.every(digit => digit !== '');

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-lg font-semibold text-gray-800 mb-12">
                    OTP Verification
                </h2>
                <p className="text-xs text-gray-600 max-w-md text-left leading-relaxed">
                    A 6-digit OTP has been sent to your registered mobile number. Kindly enter it below to confirm your identity and proceed with your account setup.
                </p>
            </div>

            {/* OTP Input Fields */}
            <div className="flex space-x-3">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => { inputRefs.current[index] = el; }}
                        type="text"
                        placeholder='-'
                        value={digit}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        maxLength={1}
                        className="w-10 h-10 bg-white border-1 border-teal-400 rounded-lg text-center text-lg font-mediume focus:outline-none focus:ring-2 focus:ring-[#50BAAB] focus:border-[#50BAAB] transition-colors"
                    />
                ))}
            </div>

            {/* Resend OTP */}
            <div className="text-center mb-10">
                {resendTimer > 0 ? (
                    <p className="text-sm text-gray-600">
                        Resend code in: <span className="text-[#50BAAB] font-semibold">{formatTime(resendTimer)}</span>
                    </p>
                ) : (<>
                    <p className="text-sm text-gray-600">
                        Don't recieve the code?
                        <button
                            onClick={handleResendOTP}
                            className="text-sm ms-2 text-[#50BAAB] hover:text-[#45a599] font-semibold underline"
                        >
                            Resend code
                        </button>
                    </p>
                </>
                )}
            </div>

            {/* Buttons */}
            <div className="max-w-md space-y-3 mt-8">
                <GradientButton direction='right' displayText='Continue' onClick={handleContinue} extraCss='w-full py-2 font-semibold' disabled={!isOTPComplete} />
                <NavButton goTo={{ page: "verifyDocuments", docStep: "pan" }} setPage={handlePreviousPage}>Previous Page</NavButton>
            </div>
        </div>
    );
};

export default OTPVerification;
import { useEffect, useState } from "react";
import BorrowinLogo from "../Logo";
import NotificationPopUp from "../NotificationPopUp";


interface OTPVerifyProps {
    title: string;
    subtitle?: string;
    showOTP?: boolean;
    setShowOTP?: (show: boolean) => void;
}

export default function OTPVerify(
    { 
        title,
        subtitle,
        showOTP,
        setShowOTP
    }: OTPVerifyProps
) {

    type OtpValues = [string, string, string, string];


    const [otpValues, setOtpValues] = useState<OtpValues>(['', '', '', '']);
    const [countdown, setCountdown] = useState(59);
    const [showNotification, setShowNotification] = useState(false);


    const handleOtpChange = (index: number, value: string): void => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtpValues: OtpValues = [...otpValues];
            newOtpValues[index] = value;
            setOtpValues(newOtpValues);

            // Auto focus next input
            if (value && index < 3) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleOtpSubmit = () => {
        const otp = otpValues.join('');
        console.log("OTP:", otp);
        setShowNotification(true);
        // alert(`OTP Verified: ${otp}`);
    };

    useEffect(() => {
        let interval: number;
        if (showOTP && countdown > 0) {
            interval = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [showOTP, countdown]);

    return (
        <div className="mx-20 my-6">
            <div className="text-center flex justify-center">
                <BorrowinLogo width="300" height="110"/>
            </div>

            <div className="text-center mb-5">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>

            {subtitle && (
                <div className="text-center mb-6">
                    <p className="text-gray-600">{subtitle}</p>
                </div>
            )}

            <div className="flex justify-center space-x-3 mb-6">
                {otpValues.map((value, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
                    />
                ))}
            </div>

            {/* Send OTP Button */}
            <button
                onClick={handleOtpSubmit}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${otpValues.every(val => val !== '')
                    ? '[background:linear-gradient(90deg,#26837A_0%,#50BAAB_100%)] focus:ring-offset-2'
                    : 'bg-gray-300 cursor-not-allowed'
                    }`}
                disabled={!otpValues.every(val => val !== '')}
            >
                Send OTP
            </button>

            {/* Resend Code */}
            <div className="text-center mt-4">
                {countdown > 0 ? (
                    <span className="text-sm text-gray-600">
                        Resend code in{' '}
                        <span className="text-teal-600 font-semibold">
                            00:{countdown.toString().padStart(2, '0')}
                        </span>
                    </span>
                ) : (
                    <button
                        onClick={() => setCountdown(59)}
                        className="text-sm text-teal-600 hover:underline font-medium"
                    >
                        Resend code
                    </button>
                )}
            </div>
            {/* Back to Phone Number */}
            <div className="text-center mt-2">
                <button
                    onClick={() => setShowOTP?.(false)}
                    className="text-sm text-gray-500 hover:underline"
                >
                    Change phone number
                </button>
            </div>
            {showNotification && <NotificationPopUp onClose={() => setShowNotification(false)} />}
        </div>
    )
}
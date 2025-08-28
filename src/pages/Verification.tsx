import TopNavBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import EnableLocationSteps from '../components/verificaitonPanels/EnableLocationSteps';
import React, { useState } from 'react';
import AccessLocation from '../components/verificaitonPanels/AccessLocation';
import ManualLocationAccess from '../components/verificaitonPanels/ManualLocation';
import LoanAmount from '../components/verificaitonPanels/LoanAmount';
import DocumentStepsPanel from '../components/verificaitonPanels/DocumentSteps';
import PANVerification from '../components/verificaitonPanels/PanVerification';
import OTPVerification from '../components/verificaitonPanels/OTPverify';
import AadharVerification from '../components/verificaitonPanels/AadharVerification';
import EmailVerification from '../components/verificaitonPanels/EmailVerification';
import IncomeDetails from '../components/verificaitonPanels/IncomeDetails';

export interface LocationResult {
    id: string;
    name: string;
    address: string;
}

type Page = "accessLocation" | "manualLocation" | "loanAmount" | "verifyDocuments" | "otpVerification";
type DocumentStep = "pan" | "aadhar" | "income" | "email" | "salary" | "generalInfo";
export type EmploymentType = 'salaried' | 'selfEmployed' | 'business';
export type locationPermissionState = 'idle' | 'requesting' | 'granted' | 'denied';

export interface State {
    page: Page;
    docStep?: DocumentStep;
}

export const emailRegex = /^[a-zA-Z0-9._+@]*$/;
export const allowedRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Vefication() {
    const [currentPage, setCurrentPage] = useState<State>({ page: "accessLocation", docStep: 'pan' })
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState<LocationResult | null>(null);
    const [searchResults] = useState<LocationResult[]>([
        { id: '1', name: 'Gandhinagar', address: '402, Main street, Lorem' },
        { id: '2', name: 'Gandhinagar', address: '402, Main street, Lorem' }
    ]);

    const [locationStatus, setLocationStatus] = useState<locationPermissionState>('idle');
    const [_coordinates, setCoordinates] = useState<{ lat: number, lng: number } | null>(null);
    const [loanAmount, setLoanAmount] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
    const [resendTimer, setResendTimer] = useState(59);
    const [employmentType, setEmploymentType] = useState<EmploymentType | null>(null);
    const [monthlyIncome, setMonthlyIncome] = useState('');

    const handleLocationRequest = async () => {
        setLocationStatus('requesting');

        try {
            const position = await getCurrentPosition();
            setCoordinates({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            setLocationStatus('granted');
            setCurrentPage({ page: "loanAmount" })
        } catch (error) {
            setLocationStatus('denied');
            handleLocationError(error as GeolocationPositionError);
        }
    };

    const getCurrentPosition = (): Promise<GeolocationPosition> => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            });
        });
    };

    const handleLocationError = (error: GeolocationPositionError) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert('Please allow location access in your browser settings');
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Location information is unavailable');
                break;
            case error.TIMEOUT:
                alert('Location request timed out');
                break;
            default:
                alert('An error occurred while requesting location');
        }
    };

    const handleUseCurrentLocation = () => {
        handleLocationRequest();
        setSearchQuery('Using current location...');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        // In a real app, you'd debounce this and call a geocoding API
    };

    const handleLocationSelect = (location: LocationResult) => {
        setSelectedLocation(location);
        setSearchQuery(location.name);
    };

    const handleConfirmLocation = () => {
        if (selectedLocation) {
            console.log('Location confirmed:', selectedLocation);
            setCurrentPage({ page: 'loanAmount' })
        }
    };

    const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Remove non-numeric characters except commas
        let value = e.target.value.replace(/[^\d,]/g, '');

        // Format number with commas
        const numericValue = value.replace(/,/g, '');
        if (numericValue) {
            value = Number(numericValue).toLocaleString('en-IN');
        }

        setLoanAmount(value);
    }

    const handlePANChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Convert to uppercase and only allow alphanumeric characters
        const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (value.length <= 10) {
            setPanNumber(value);
        }
    };

    const handleAadharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Convert to uppercase and only allow alphanumeric characters
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length <= 12) {
            setAadharNumber(value);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Convert to uppercase and only allow alphanumeric characters
        const value = e.target.value.toLowerCase();

        if (emailRegex.test(value) || value === "") {
            setEmail(value);
        }
    };

    // change income handlers
    const handleEmploymentTypeChange = (type: EmploymentType) => {
        setEmploymentType(type);
    };

    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/[^\d,.]/g, '');

        const parts = value.split('.');
        if (parts[0]) {
            parts[0] = Number(parts[0].replace(/,/g, '')).toLocaleString('en-IN');
        }

        value = parts.length > 1 ? `${parts[0]}.${parts[1]}` : parts[0];

        setMonthlyIncome(value);
    };


    // otp functions

    const handleOTPChange = (index: number, value: string) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleResendOTP = () => {
        setResendTimer(59);
        setOtp(new Array(6).fill(''));
    };

    React.useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        if (resendTimer > 0 && currentPage.page === "otpVerification") {
            interval = setInterval(() => {
                setResendTimer(timer => timer - 1);
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [resendTimer, currentPage]);

    const resetTimerOTP = () => {
        setResendTimer(59);
        setOtp(new Array(6).fill(''))
    }

    const handlePreviousPageOtp = () => {

        resetTimerOTP()
        console.log(currentPage)
        if (currentPage.page === 'otpVerification' && currentPage.docStep === 'pan')
            setCurrentPage({ page: 'verifyDocuments', docStep: 'pan' })
        else if (currentPage.page === 'otpVerification' && currentPage.docStep === 'aadhar')
            setCurrentPage({ page: "verifyDocuments", docStep: "aadhar" })
        else if (currentPage.page === 'otpVerification' && currentPage.docStep === 'email')
            setCurrentPage({ page: "verifyDocuments", docStep: "email" })

    }
    const handleContinuePageOtp = () => {

        if (currentPage.page === 'otpVerification' && currentPage.docStep === 'pan')
            setCurrentPage({ page: 'verifyDocuments', docStep: 'aadhar' })
        else if (currentPage.page === 'otpVerification' && currentPage.docStep === 'aadhar')
            setCurrentPage({ page: 'verifyDocuments', docStep: 'email' })
        else if (currentPage.page === 'otpVerification' && currentPage.docStep === 'email')
            setCurrentPage({ page: 'verifyDocuments', docStep: 'income' })
    }

    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <TopNavBar />
            <NavBar />
            <div className="min-h-screen flex items-center justify-center p-4 bg-[#EFEFEF] overflow-hidden relative">
                {/* Background decorative circles */}
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full -translate-y-16 bg-gradient-to-b from-white/90 to-[#50BAAB]"></div>
                <div className="absolute bottom-32 right-62 w-44 h-44 rounded-full translate-y-28 bg-gradient-to-tr from-white/90 to-[#50BAAB] opacity-80"></div>
                <div className="absolute top-1/3 right-0 w-48 h-48 rounded-full translate-x-24 bg-gradient-to-tr from-white/90 to-[#50BAAB] opacity-70"></div>

                {/* Main Content */}
                <Card extraCss='w-4xl mx-36 bg-white overflow-hidden shadow-2xl rounded-lg flex p-4 space-x-4'>
                    {
                        (currentPage.page === 'accessLocation' || currentPage.page === 'manualLocation') ?
                            <EnableLocationSteps /> :
                            currentPage.page === 'verifyDocuments' || currentPage.page === 'otpVerification' ?
                                <DocumentStepsPanel currentStep={currentPage.docStep || 'pan'} /> : ""
                    }
                    {/* Right Panel */}
                    <div className="flex-1 p-12 flex flex-col items-center justify-center bg-[#EDF8F6] rounded-xl h-full">
                        {currentPage.page === "accessLocation" && (
                            <AccessLocation
                                locationStatus={locationStatus}
                                handleLocationRequest={handleLocationRequest}
                                setCurrentScreen={() => {
                                    setCurrentPage({ page: "manualLocation" })
                                }}
                            />
                        )}
                        {currentPage.page === "manualLocation" && (
                            <ManualLocationAccess
                                searchQuery={searchQuery}
                                searchResults={searchResults}
                                selectedLocation={selectedLocation}
                                handleSearchChange={handleSearchChange}
                                handleLocationSelect={handleLocationSelect}
                                handleConfirmLocation={handleConfirmLocation}
                                handleUseCurrentLocation={handleUseCurrentLocation}
                                setCurrentScreen={() => {
                                    setCurrentPage({ page: "accessLocation" })
                                    setSearchQuery('');
                                    setSelectedLocation(null);
                                }}
                            />
                        )}

                        {currentPage.page === "loanAmount" && (
                            <LoanAmount
                                loanAmount={loanAmount}
                                handleLoanAmountChange={handleLoanAmountChange}
                                handleContinue={() => { setCurrentPage({ page: "verifyDocuments", docStep: "pan" }) }}
                                handlePreviousPage={() => { setCurrentPage({ page: "accessLocation" }) }}
                            />
                        )}

                        {currentPage.page === "verifyDocuments" && currentPage.docStep === "pan" && (
                            <PANVerification
                                panNumber={panNumber}
                                handlePANChange={handlePANChange}
                                handleContinue={() => {
                                    setCurrentPage({ page: "otpVerification", docStep: "pan" });
                                }}
                                handlePreviousPage={() => {
                                    setCurrentPage({ page: "loanAmount" });
                                }}
                            />
                        )}

                        {currentPage.page === "verifyDocuments" && currentPage.docStep === "aadhar" && (
                            <AadharVerification
                                aadharNumber={aadharNumber}
                                handleAadharChange={handleAadharChange}
                                handleContinue={() => {
                                    resetTimerOTP()
                                    setCurrentPage({ page: "otpVerification", docStep: "aadhar" });
                                }}
                                handlePreviousPage={() => {
                                    resetTimerOTP()
                                    setCurrentPage({ page: "verifyDocuments", docStep: "pan" });
                                }}
                            />
                        )}

                        {currentPage.page === "verifyDocuments" && currentPage.docStep === "email" && (
                            <EmailVerification
                                email={email}
                                handleEmailChange={handleEmailChange}
                                handleContinue={() => {
                                    resetTimerOTP()
                                    setCurrentPage({ page: "otpVerification", docStep: "email" });
                                }}
                                handlePreviousPage={() => {
                                    resetTimerOTP()
                                    setCurrentPage({ page: "verifyDocuments", docStep: "aadhar" });
                                }}
                            />
                        )}

                        {currentPage.page === "verifyDocuments" && currentPage.docStep === "income" && (
                            <IncomeDetails
                                employmentType={employmentType}
                                monthlyIncome={monthlyIncome}
                                handleEmploymentTypeChange={handleEmploymentTypeChange}
                                handleIncomeChange={handleIncomeChange}
                                handleContinue={() => { }}
                                handlePreviousPage={() => {
                                    setCurrentPage({ page: "verifyDocuments", docStep: "email" });
                                }}
                            />
                        )}

                        {currentPage.page === "otpVerification" && (
                            <OTPVerification
                                otp={otp}
                                handleOTPChange={handleOTPChange}
                                handleContinue={handleContinuePageOtp}
                                handlePreviousPage={handlePreviousPageOtp}
                                handleResendOTP={handleResendOTP}
                                resendTimer={resendTimer}
                            />
                        )}

                    </div>
                </Card>
            </div>
        </div>
    );
}
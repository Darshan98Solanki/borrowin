import phoneImage from '../../assets/LoanStepsMobileModel.svg';
import GradientButton from '../GradientButton';

import travel from '../../assets/icons/travel.svg';
import education from '../../assets/icons/education.svg';
import emergency from '../../assets/icons/emergency.svg';
import shopping from '../../assets/icons/shopping.svg';
import wedding from '../../assets/icons/wedding.svg';
import hobbies from '../../assets/icons/hobbies.svg';
import renovation from '../../assets/icons/home renovation.svg';

const LoanSteps = () => {
    const steps = [
        'Sign up using your mobile number.',
        'Enter your basic information & check eligibility.',
        'Verify your profile by uploading KYC documents.',
        'Provide your bank account details.',
        'Choose your loan amount and tenure.',
        'Get the loan disbursed directly into your bank account.'
    ];

    return (
        <div className="bg-[#E7FFFCCC] py-16 px-6 md:px-20 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
                Get a Personal Loan in a Few Easy Steps
            </h2>
            <p className="text-center max-w-5xl mx-auto text-gray-600 mb-12">
                Applying for a KreditBee personal loan has never been easier. Follow these simple steps to
                quickly complete your application and get your loan disbursed directly into your bank account.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                {/* Phone Image */}
                <div className="w-full">
                    <img src={phoneImage} alt="Mobile" className="w-full h-[490px]" />
                </div>

                {/* Steps */}
                <div className="flex flex-col space-y-1 w-full">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 flex items-center justify-center bg-[#35C2AA] text-white rounded-full text-sm font-semibold">
                                    {index + 1}
                                </div>
                                {index !== steps.length - 1 && (
                                    <div className="h-10 border-l-2 border-dashed border-gray-400"></div>
                                )}
                            </div>
                            <p className="text-sm md:text-base">{step}</p>
                        </div>
                    ))}

                    {/* CTA Button */}
                    <div className='mt-8 w-full'>
                        <GradientButton direction='right' displayText='Check Eligibility' />
                    </div>
                </div>
            </div>
            {/* Purpose & Uses */}
            <section className="py-10 px-4 bg-[#e6fdfc] text-center mt-18">
                <h2 className="text-2xl font-bold mb-4">Purpose And Uses</h2>
                <p className="text-gray-600 mb-8 max-w-5xl mx-auto">
                    Applying for a KreditBee personal loan has never been easier. Follow these simple steps to quickly complete your application and get your loan disbursed directly into your bank account.
                </p>

                <div className="flex flex-col items-center space-y-6">
                    {/* First Row - 4 items */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { label: "Travel", img: travel },
                            { label: "Education", img: education },
                            { label: "Emergency", img: emergency },
                            { label: "Shopping", img: shopping },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-10 px-8 py-3">
                                <img src={item.img} alt={item.label} className="w-12 h-12 mb-2" />
                                <span className="font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - 3 items */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { label: "Wedding", img: wedding },
                            { label: "Hobbies", img: hobbies },
                            { label: "Home Renovation", img: renovation },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-md flex items-center justify-center space-x-10 px-8 py-3">
                                <img src={item.img} alt={item.label} className="w-12 h-12 mb-2" />
                                <span className="font-medium text-center">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LoanSteps;

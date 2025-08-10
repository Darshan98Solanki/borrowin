import MobileModel from '../../assets/Mobile-model.svg'
import UnsecureLoan from '../../assets/icons/UnsecuredLoan.svg'
import TwoWeelerLoan from '../../assets/icons/TowWeelerLoan.svg'
import BusinessLoan from '../../assets/icons/BusinessLoan.svg'
import LoanAgainstProperty from '../../assets/icons/LoanAgainstProperty.svg'

export default function ServiceSection() {
    return (
        <div className="py-18">
            <div className="mx-10 px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-16">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                        What We Offer
                    </h1>
                    <p className="text-lg text-gray-600 mx-auto font-semibold leading-relaxed">
                        Explore a range of fast, flexible, and transparent loan options — all in one place.
                        Whether personal or professional, Borrowin has you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4 mb-30">
                            <img src={UnsecureLoan} alt="Unsecured Personal Loan" className="" />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Unsecured Personal Loan
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Quick, short-term loans for personal use — medical emergencies, travel, education,
                                    or household needs. Fast approval with flexible repayment.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <img src={BusinessLoan} alt="Business Loan" className="" />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Business Loan
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Expand your business with a loan from ₹6,000 to ₹5 Lakhs, featuring flexible
                                    repayment from 6 to 48 months. Quick approval, hassle-free process, and funds
                                    to help your business grow seamlessly.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-cente">
                        <div className="relative">
                            <img
                                src={MobileModel}
                                alt="Mobile Model"
                                className="w-full max-w-xs object-contain"
                            />

                            <div className="absolute top-full left-0 w-full max-h-[50%] overflow-hidden">
                                <img
                                    src={MobileModel}
                                    alt="Reflection"
                                    className="w-full max-w-xs object-contain transform scale-y-[-1] opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-white/0" />
                            </div>
                        </div>
                    </div>


                    <div className="space-y-8">
                        <div className="flex items-start space-x-4 mb-30">
                            <img src={TwoWeelerLoan} alt="Twoweeler Loan" className="" />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Two Wheeler Loan
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Finance your dream ride in Bangalore with loans up to ₹5 Lakhs and flexible
                                    tenures up to 60 months. Quick approval, hassle-free process, and easy
                                    repayment for your convenience.
                                </p>
                            </div>
                        </div>


                        <div className="flex items-start space-x-4">
                            <img src={LoanAgainstProperty} alt="Loan against property" className="" />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Loan Against Property
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Leverage your property as collateral for a loan up to ₹1 Crores with
                                    repayment tenures of up to 20 years. Enjoy competitive interest rates
                                    from 12%, available across major cities in South India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
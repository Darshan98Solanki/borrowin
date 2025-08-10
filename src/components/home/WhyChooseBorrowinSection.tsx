import EasyRepayment from "../../assets/icons/EasyRepayment.svg"
import LowerInterRate from "../../assets/icons/LowerinterestRate.svg"
import FastProcess from "../../assets/icons/FastProcess.svg"
import SafeSecureTRansaction from "../../assets/icons/SafeSecureTransaction.svg"
import ColletralFeess from "../../assets/icons/CollectralFees.svg"

export default function WhyChooseBorrowin() {
    const features = [
        {
            icon: EasyRepayment,
            title: "Easy Repayment Options",
            description: "Repay the loan amount in easy EMI with flexible tenure options"
        },
        {
            icon: LowerInterRate,
            title: "Lower Interest Rates",
            description: "Get loans for multiple purposes at lower interest rates to suit your needs"
        },
        {
            icon: FastProcess,
            title: "Fast Processing and Disbursal",
            description: "Apply online, check your eligibility and get money directly in your bank in 10 minutes"
        },
        {
            icon: SafeSecureTRansaction,
            title: "Safe, Secure and Transparent",
            description: "Our loan application process is fully secured and safe and there are no hidden charges."
        },
        {
            icon: ColletralFeess,
            title: "Collateral Free",
            description: "No collateral is required to apply for our personal loans."
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-2xl font-bold text-gray-900 mb-4">
                        Why choose borrowin?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.slice(0, 3).map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="mb-6">
                                <img src={feature.icon} alt="" />
                            </div>

                            <div className="text-left">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="md:col-span-2 lg:col-span-3 flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6/9">
                            {features.slice(3, 5).map((feature, index) => (
                                <div
                                    key={index + 3}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                >

                                    <div className="mb-6">
                                        <img src={feature.icon} alt="" />
                                    </div>

                                    <div className="text-left">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
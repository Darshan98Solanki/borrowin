import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Can I access my medical records through the app?",
            answer: "Yes, you can securely access your complete medical records through our app. All your health information, test results, prescriptions, and appointment history are available 24/7 with secure login authentication."
        },
        {
            question: "Is my personal and medical information secure?",
            answer: "Absolutely. We use bank-level encryption and comply with HIPAA regulations to ensure your personal and medical information is completely secure. Your data is encrypted both in transit and at rest, and we never share your information without your explicit consent."
        },
        {
            question: "Is my personal and medical information secure?",
            answer: "Yes, we implement multiple layers of security including end-to-end encryption, secure servers, regular security audits, and strict access controls to protect all your sensitive health information."
        },
        {
            question: "How do I schedule an appointment with a doctor?",
            answer: "Scheduling an appointment is simple! You can book through our app by selecting your preferred doctor, choosing an available time slot, and confirming your appointment. You'll receive instant confirmation and reminders before your visit."
        }
    ];

    const toggleFAQ = (index: number | null) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mx-16 px-6 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQs</h2>
                <p className="text-gray-600 text-lg leading-relaxed  mx-auto">
                    Have questions? We're here to assist! Explore our detailed FAQs section for clear and concise answers to common inquiries about our health services.
                </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                        >
                            <span className="text-gray-900 font-medium text-lg pr-4">
                                {faq.question}
                            </span>
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-teal-500 rounded-md flex items-center justify-center text-white transition-transform duration-200">
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4" />
                                    ) : (
                                        <Plus className="w-4 h-4" />
                                    )}
                                </div>
                            </div>
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-5">
                                <div className="pt-2 border-t border-gray-200">
                                    <p className="text-gray-600 leading-relaxed mt-3">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* View More Link */}
            <div className="mt-8">
                <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center transition-colors duration-200">
                    <Plus className="w-4 h-4 mr-1" />
                    View More FAQs
                </button>
            </div>
        </div>
    );
}
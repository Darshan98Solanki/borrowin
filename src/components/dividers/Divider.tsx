import LcCheck from '../../assets/icons/LcCheck.svg'

interface CustomizableDividerProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

export default function CustomizableDivider(props: CustomizableDividerProps) {
    return (
        <div className="h-32 bg-[linear-gradient(to_right,rgba(80,186,171,1)_0%,rgba(80,186,171,0.5)_33%,rgba(80,186,171,0.6)_66%,rgba(80,186,171,1)_100%)] flex items-center">
            <div className="container mx-auto px-4 grid grid-cols-3 items-center gap-10">
                <div className="-mt-30 ms-20">
                    <img
                        src={LcCheck}
                        alt="Check Icon"
                        className="w-42"
                    />
                </div>
                <div className="text-center space-y-2 text-black">
                    <h2 className="text-lg md:text-2xl font-bold ">
                        Know your Credit Score now!
                    </h2>
                    <p className="text-sm">
                        Check for detailed report & insights!
                    </p>
                </div>
                <div className="flex items-start">
                    <button className="bg-white text-gray-800 px-8 py-2 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
                        Get Report
                    </button>
                </div>
            </div>
        </div>
    );
}
import Coin from '../../assets/coin.svg';
import Qs from '../../assets/qs.svg';

export default function DividerWithCoin() {

    return <>
        <div className="absolute ms-10 -mt-16">
            <img src={Coin} alt="Coin Icon" className="w-36 h-36 mx-auto" />
        </div>
        <div className="h-48 bg-[linear-gradient(to_right,rgba(80,186,171,1)_0%,rgba(80,186,171,0.5)_33%,rgba(80,186,171,0.6)_66%,rgba(80,186,171,1)_100%)] flex items-center">
            <div className="container mx-auto px-4 text-center">
                <div className="mx-auto space-y-5">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                        Get started in a few simple clicks
                    </h2>
                    <p className="text-sm text-gray-700">
                        Evaluate the loan amount you are eligible for and choose an EMI plan that works for you.
                    </p>
                    <button className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200 font-medium">
                        Check Eligibility
                    </button>
                </div>
            </div>
        </div>
        <div className="absolute right-0 -mt-16">
            <img src={Qs} alt="Question Icon" className="w-36 h-36 me-28" />
        </div>
    </>

}
import PlayStore from "../../assets/icons/PlayStore.svg"
import AppStore from "../../assets/icons/AppStore.svg"

export default function DividerWithMobileApp() {
    return <>
        <div className="w-full py-8 px-6 flex items-center justify-center bg-[linear-gradient(to_right,rgba(80,186,171,1)_0%,rgba(80,186,171,0.5)_33%,rgba(80,186,171,0.6)_66%,rgba(80,186,171,1)_100%)]">
            {/* Left Text */}
            <div className="flex space-x-60">
                <p className="text-black font-semibold text-2xl mt-2">
                    Download mobile application now
                </p>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <img src={AppStore} alt="Mobile Icon" className="w-32" />
                    <div className="w-px h-14 bg-slate-200"></div>
                    <img src={PlayStore} alt="Mobile Icon" className="w-32" />
                </div>
            </div>
        </div>

    </>

}
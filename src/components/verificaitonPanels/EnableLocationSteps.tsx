export default function EnableLocationSteps() {

    return <div className="flex-1 relative rounded-xl bg-gradient-to-br from-[#50BAAB] to-[#50BAAB] p-12 text-white overflow-hidden">

        {/* Background decorative elements */}
        <div className="absolute -top-3 left-0 w-40 h-40 rounded-full -translate-x-16 translate-y-16 bg-gradient-to-tr from-white/90 to-[#50BAAB] opacity-80"></div>
        <div className="absolute right-9 -bottom-12 w-52 h-52 rounded-full translate-x-12 bg-gradient-to-tr from-white/90 to-[#50BAAB] opacity-70"></div>

        {/* Foreground content */}
        <div className="relative z-10">
            <h1 className="text-xl font-bold mb-4 leading-tight">
                Few steps<br />
                before we begin
            </h1>

            <div className="mt-14 text-center flex flex-col items-center mx-10">
                <h2 className="text-xl font-semibold mb-6">Enable Location Access</h2>

                <div className="space-y-4 text-sm leading-relaxed max-w-md">
                    <p>
                        To ensure secure and accurate KYC verification, we need access to your location.
                    </p>
                    <p>
                        This helps us offer personalized loan plans and comply with regulatory requirements.
                    </p>
                </div>

                <p className="text-sm mt-6 italic opacity-90 max-w-md">
                    (You can also choose to enter your location manually if preferred.)
                </p>
            </div>

        </div>
    </div>
}
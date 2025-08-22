import type { locationPermissionState } from "../../pages/Verification";
import LocationIcon from "../../assets/icons/AccessLocation.svg"
import GradientButton from "../GradientButton"
import NavButton from "../NavButton";

type AccessLocationProps = {
    locationStatus: locationPermissionState
    handleLocationRequest: () => void;
    setCurrentScreen: () => void;
    isLoading?: boolean;
};

export default function AccessLocation({ locationStatus, handleLocationRequest, setCurrentScreen, isLoading }: AccessLocationProps) {

    return <>

        <div className="text-center max-w-sm flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-gray-800 mb-12">
                Access Your Location
            </h2>

            <div className="mb-8">
                <img src={LocationIcon} width={160} alt="Location Icon" />
            </div>

            <p className="text-gray-600 mb-12 text-sm w-6/10">
                Please allow us to access your location services
            </p>

            {/* Action Buttons */}
            <div className="space-y-4 w-full flex flex-col items-center">
                <GradientButton
                    direction="right"
                    displayText={locationStatus === 'requesting' ? "Requesting access..." : "Allow location service"}
                    extraCss="w-full py-2 text-sm font-semibold"
                    onClick={handleLocationRequest}
                    disabled={locationStatus === 'requesting'}
                />
                <NavButton goTo={{ page: "accessLocation" }} setPage={setCurrentScreen}>
                    Enter location manually
                </NavButton>
            </div>
        </div>

    </>

}
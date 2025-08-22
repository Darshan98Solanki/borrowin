import { Navigation, Search } from "lucide-react";
import GradientButton from "../GradientButton";
import type { LocationResult } from "../../pages/Verification";
import NavButton from "../NavButton";

interface ManualLocationProps {
    searchQuery: string;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleUseCurrentLocation: () => void;
    searchResults: LocationResult[];
    handleLocationSelect: (location: LocationResult) => void;
    selectedLocation: LocationResult | null;
    handleConfirmLocation: () => void;
    setCurrentScreen: () => void;
}

export default function ManualLocationAccess({
    searchQuery,
    handleSearchChange,
    handleUseCurrentLocation,
    searchResults,
    handleLocationSelect,
    selectedLocation,
    handleConfirmLocation,
    setCurrentScreen,
}: ManualLocationProps) {
    return (
        <div className="max-w-sm w-full">
            <h2 className="text-lg font-bold text-gray-800 mb-12 text-center">
                Search your location
            </h2>

            {/* Search Input */}
            <div className="mb-4 relative">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Enter here"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-4 py-2 bg-[#50BAAB33] border border-teal-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Use Current Location Button */}
            <button
                onClick={handleUseCurrentLocation}
                className="w-full flex items-center space-x-2 py-2 mb-6 bg-teal-50 text-teal-600 rounded-lg text-sm font-medium hover:bg-teal-100 transition-colors"
            >
                <Navigation className="w-4 h-4 ms-4 text-teal-600 fill-current" />
                <span>Use my current location</span>
            </button>

            {/* Search Results */}
            <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-600 mb-3">
                    Search Result
                </h3>
                <div className="space-y-2">
                    {searchResults.map((result) => (
                        <div
                            key={result.id}
                            onClick={() => handleLocationSelect(result)}
                            className={`p-3 rounded-lg cursor-pointer transition-colors ${selectedLocation?.id === result.id
                                ? "bg-teal-100 border border-teal-200"
                                : "bg-gray-100 hover:bg-gray-200"
                                }`}
                        >
                            <div className="font-medium text-gray-800 text-sm">
                                {result.name}
                            </div>
                            <div className="text-xs text-gray-500">
                                {result.address}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                <GradientButton
                    direction="right"
                    displayText="Confirm Location"
                    extraCss="w-full py-2 text-sm font-semibold"
                    onClick={handleConfirmLocation}
                    disabled={!selectedLocation}
                />
                <NavButton goTo={{ page: "accessLocation" }} setPage={setCurrentScreen}>
                    Back to location access
                </NavButton>
            </div>
        </div>
    );
}

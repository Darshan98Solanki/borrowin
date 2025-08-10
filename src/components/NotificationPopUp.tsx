import { Check, X } from "lucide-react";

export default function NotificationPopUp({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 backdrop-blur-xs">
      <div className="relative p-6 text-center rounded-4xl shadow-lg w-[350px] py-18 bg-white border border-white/30">
        
        {/* Decorative green background shape */}
        <div className="absolute top-1/2 left-1/2 w-74 h-68 bg-[#3FE082] rounded-3xl z-[-1] -translate-x-[50%] -translate-y-[50%]" />


        {/* Green circle with check icon */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="bg-green-100 rounded-full p-3 border-4 border-white/30">
            <div className="bg-[#3FE082] rounded-full p-2">
              <Check className="w-6 h-6 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          className="absolute top-3 right-3 hover:text-red-400"
          onClick={onClose}
        >
          <X />
        </button>

        {/* Text content */}
        <div className="mt-8 space-y-6">
          <p className="text-sm text-[#494848]">Verification completed</p>
          <p className="text-lg font-bold mt-1 text-[#494848]">
            User verified successfully
          </p>
        </div>
      </div>
    </div>
  );
}

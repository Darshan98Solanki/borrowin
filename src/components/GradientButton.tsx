export type Direction = 'left' | 'right';

type GradientButtonProps = {
    direction: Direction;
    displayText: string;
    extraCss?:string;
    onClick?: () => void;
    disabled?:boolean
}

export default function GradientButton({ direction, displayText, extraCss='py-3', onClick, disabled }: GradientButtonProps) {
    const gradientClass =
        direction === 'left'
            ? '[background:linear-gradient(90deg,#26837A_0%,#50BAAB_100%)]'
            : '[background:linear-gradient(90deg,#50BAAB_0%,#26837A_100%)]';

    return (
        <button
            className={`text-white ${direction==='left'?'font-semibold':''} ${disabled?'':'cursor-pointer'} px-10 rounded-lg shadow-md transition hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${gradientClass} ${extraCss}`}
            onClick={onClick} disabled={disabled}
        >
            {displayText}
        </button>
    );
}


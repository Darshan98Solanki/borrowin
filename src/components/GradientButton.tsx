export type Direction = 'left' | 'right';

type GradientButtonProps = {
    direction: Direction;
    displayText: string;
}

export default function GradientButton({ direction, displayText }: GradientButtonProps) {
    const gradientClass =
        direction === 'left'
            ? '[background:linear-gradient(90deg,#26837A_0%,#50BAAB_100%)]'
            : '[background:linear-gradient(90deg,#50BAAB_0%,#26837A_100%)]';

    return (
        <button
            className={`text-white ${direction==='left'?'font-semibold':''} px-10 py-3 rounded-lg shadow-md transition hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${gradientClass}`}
        >
            {displayText}
        </button>
    );
}


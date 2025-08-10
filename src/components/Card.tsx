export default function Card({ children , extraCss }: React.PropsWithChildren<{ extraCss: string }>) {
    return (
        <div className={`bg-white z-30 ${extraCss}`}>
            {children}
        </div>
    );
}

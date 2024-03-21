export default function CardBox({ children,className='' }) {
    return (
        <div className={`backdrop-blur-sm bg-white bg-opacity-60 w-full rounded-lg shadow-md ${className}`}>
            {children}
        </div>
    );
}

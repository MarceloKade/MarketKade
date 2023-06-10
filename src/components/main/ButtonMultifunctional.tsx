interface ButtonMultifunctionalProps {
    title: string;
    className?: string;
}

export function ButtonMultifunctional({ title, className }: ButtonMultifunctionalProps) {
    const buttonClasses = `${className}`;

    return (
        <div className={`cursor-pointer ${buttonClasses}`}>
            <p>{title}</p>
        </div>
    );
}

interface ButtonSectionProps {
    title: string;
    className?: string;
}

export function ButtonSection({ title, className }: ButtonSectionProps) {
    const buttonClasses = `${className}`;

    return (
        <div className={`font-semibold text-[20px] bg-gradient-to-r bg-[#F1F0F0] ${buttonClasses}`}>
            <h3>{title}</h3>
        </div>
    );
}

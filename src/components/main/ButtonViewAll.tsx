interface ButtonViewAllProps {
    title: string;
    className?: string;
}

export function ButtonViewAll({ title, className }: ButtonViewAllProps) {
    const buttonClasses = `${className}`;

    return (
        <div className={`cursor-pointer font-semibold text-[20px] bg-gradient-to-r bg-[#F1F0F0] ${buttonClasses}`}>
            <h3>{title}</h3>
        </div>
    );
}

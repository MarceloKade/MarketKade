interface ButtonViewAllProps {
    title: string;
    className?: string;
}

export function ButtonViewAll({ title, className }: ButtonViewAllProps) {
    const buttonClasses = `${className}`;

    return (
        <div className={`cursor-pointer font-semibold text-[20px] bg-gradient-to-r bg-[rgba(241,240,240,1)] transition-colors duration-1000 delay-100 hover:bg-[rgba(241,240,240,0.4)] ${buttonClasses}`}>
            <h3>{title}</h3>
        </div>
    );
}

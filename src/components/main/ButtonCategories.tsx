interface ButtonCategoriesProps {
    title: string;
    className?: string;
}

export function ButtonCategories({ title, className }: ButtonCategoriesProps) {
    const buttonClasses = `${className}`;

    return (
        <div className={`cursor-pointer font-semibold text-[15.04px] bg-[rgba(241,240,240,1)] transition-colors duration-1000 delay-100 hover:bg-[rgba(241,240,240,0.4)]  border-2 border-solid border-[rgba(2,6,13,1)] hover:border-[rgba(2,6,13,0.2)] ${buttonClasses}`}>
            <h3>{title}</h3>
        </div>
    );
}

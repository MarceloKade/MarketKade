interface ButtonCategoriesProps {
    title: string;
    className?: string;
}

export function ButtonCategories({ title, className }: ButtonCategoriesProps) {
    const buttonClasses = `${className}`;

    return (
        <div className={`cursor-pointer font-semibold text-[15.04px] bg-[#F1F0F0] ${buttonClasses}`}>
            <h3>{title}</h3>
        </div>
    );
}

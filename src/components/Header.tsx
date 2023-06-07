import { Logo } from "./header/Logo";

export function Header() {
    return (
        <div className="flex flex-col justify-center items-center w-auto h-16 bg-red-700 mt-7">
            <Logo />
        </div>
    );
}
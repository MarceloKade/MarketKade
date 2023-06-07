import { CarButton } from "./header/CarButton";
import { HomeButton } from "./header/HomeButton";
import { Input } from "./header/Input";
import { Logo } from "./header/Logo";
import { ProfileButton } from "./header/ProfileButton";

export function Header() {
    return (
        <div className="flex justify-center items-center h-[58.16px] mt-[27px] mr-[3px] ml-[3px]">
            <Logo />
            <HomeButton />
            <Input />
            <ProfileButton />
            <CarButton />
        </div>
    );
}
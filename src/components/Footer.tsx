export function Footer() {
    return (
        <div className="flex justify-center w-[1308px] h-[351px] mt-[14.99px] ml-[64px] bg-[#F1F0F0]">
            <div className="relative flex justify-center gap-16 w-[648.99px] h-[136.78px] mt-[49px] z-10">
                <div className="flex flex-col gap-1">
                    <h4 className="font-semibold text-[14px]">Conheça-nos</h4>
                    <a target="__blank" href="" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="mt-2 text-[12px]">Sobre nós</p></a>
                    <a target="__blank" href="" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="text-[12px]">Contate-nos</p></a>
                    <a target="__blank" href="" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="text-[12px]">Ganhe MarketKade</p></a>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="font-semibold text-[14px]">Política</h4>
                    <a target="__blank" href="" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="mt-2 text-[12px]">Segurança</p></a>
                    <a target="__blank" href="" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="text-[12px]">Privacidade</p></a>
                    <a target="__blank" href="" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="text-[12px]">Termos de uso</p></a>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="font-semibold text-[14px]">Ajuda</h4>
                    <a target="__blank" href="" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="mt-2 text-[12px]">Membro</p></a>
                    <a target="__blank" href="" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="text-[12px]">Pagamentos</p></a>
                    <a target="__blank" href="" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="text-[12px]">Conta</p></a>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="font-semibold text-[14px]">Social</h4>
                    <a target="__blank" href="https://www.linkedin.com/in/marcelokade" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="mt-2 text-[12px]">LinkedIn</p></a>
                    <a target="__blank" href="https://github.com/MarceloKade" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="text-[12px]">GitHub</p></a>
                    <a target="__blank" href="https://www.facebook.com/marcelo.cardosokade" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="text-[12px]">Facebook</p></a>
                </div>

            </div>
            <div className="absolute">
                <div className="w-[1260px] mt-[180px] border-t-[1px] border-slate-950"></div>

                <div className="flex flex-col">
                    <div className="mt-[26.92px] ml-[82px] flex flex-col gap-1">
                        <h4 className="font-semibold text-[14px]">Envie-nos um e-mail</h4>
                        <a href="mailto:marcelo.kade@gmail.com" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="mt-2 text-[12px]">marcelo.kade@gmail.com</p></a>
                    </div>
                    <div className="relative flex flex-col items-center -mt-14">
                        <h4 className="absolute text-[#58A0E2] font-bold text-[30.08px]">
                            Market<span className="text-[#454D4A]">Kade</span>
                        </h4>
                    </div>
                    <div className="absolute mt-[26.92px] ml-[1080px] flex flex-col gap-1">
                        <h4 className="font-semibold text-[14px]">Contato</h4>
                        <a href="https://wa.me/5554999880177" className="transition-colors duration-1000 delay-100 hover:text-sky-500"><p className="mt-2 text-[12px]">54 999880177</p></a>
                    </div>
                </div>
            </div>
        </div >
    );
}
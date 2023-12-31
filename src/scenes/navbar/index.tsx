import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { SelectedPage } from '@/shared/types';
import Logo from '@/assets/Logo.png';
import Link from "./Link";
import ActionButton from '@/shared/ActionButton';
import useMediaQuery from '@/hooks/useMediaQuery';
import { auth, provider, app } from "@/firebase";
import { signInWithPopup } from "firebase/auth";
import { signInWithGoogle } from "@/firebase";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}

export const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const [user, setUser] = useState<string | null>(localStorage.getItem("name"));  

    const handleLogout = () => {
        localStorage.clear();
        setUser(null)
    }

    return (
        <nav>
            <div 
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={Logo}/>

                       {/* Right Side */}

                     {isAboveMediumScreens ?  (<div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                {user !== null ? (<><h2>Hello <span className="font-bold">{user}</span></h2><button type="button" onClick={handleLogout} className="bg-primary-300 rounded-md p-2">Logout</button></>) : (<button type="button" onClick={signInWithGoogle}>
                                    Google SignIn
                                </button>)}  
                                
                                
                                <ActionButton 
                                    setSelectedPage={setSelectedPage}
                                >Become one of us</ActionButton>
                            </div>
                        </div>) : (
                        <button 
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>)}
                    </div>
                </div>
            </div>
            {/* MOBILE MENU */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    <div  className="flex justify-end p-12">
                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                                <Link page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                </div>
            )}
        </nav>
    )
}

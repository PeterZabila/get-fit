import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <section id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* IMAGE MAIN HEADE */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADING */}
                    <div className="md:-mt-20">
                    <div className="relative">
                <div 
                    className="before:absolute before:-top-20  before:-left-20 before:z-[-1]            md:before:content-evolvetext">
                    <img alt="home-page-text" src={HomePageText} />
                </div>
                </div>
                        <p className="mt-8 text-sm">Super innovative competetice fitness gym training program for beginners and professional athletes worldwide for everybody in the club and so on and so on  welcome guys and girls also</p>
                    </div>
                    {/* ACTIONS */}
                    <div className="mt-8 flex items-center gap-8">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join immediatelly
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn more</p>
                        </AnchorLink>
                    </div>
                </div>
                {/* IMAGE */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="home-pageGraphic" />
                </div>
            </div>
            {/* SPONSORS */}
            {isAboveMediumScreens &&
                (
                    <div className="h-[150px] w-full bg-primary-100 py-10">
                        <div className="mx-auto w-5/6">
                            <div className="flex w-3/5 items-center justify-between gap-8">
                                <img src={SponsorRedBull} alt="rb-sp" />
                                <img src={SponsorForbes} alt="fb-sp" />
                                <img src={SponsorFortune} alt="ft-sp" />
                            </div>
                        </div>
                    </div>
                )
            }
            
        </section>
    )
}

export default Home

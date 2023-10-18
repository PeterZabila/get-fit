import { HText } from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import { Benefit } from "@/scenes/benefits/Benefit";
import { SelectedPage, BenefitType } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "Modern Equipment",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100 Different Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Professional Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div 
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    className="md:w-3/5 md:my-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>More than just a gym</HText>
                    <p className="my-5 text-sm">
                        Happy to offer you first class service in sports and training. Our professional consultants will put you through paces and make Schwaznegger from you.
                    </p>
                </motion.div>

                <motion.div 
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                    >
                        {benefits.map((benefit) => (
                            <Benefit 
                            benefit={benefit} 
                            key={benefit.title}
                            setSelectedPage={setSelectedPage}
                            />
                        ))}
                </motion.div>
                    <div className="mt-16 item-center justify-between gap-20 md:mt-28 md:flex">
                        <img 
                            className="mx-auto"
                            src={BenefitsPageGraphic} alt="benefits-page-graphic" 
                        />
                        <div>
                            <div className="relative">
                                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                    <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            hidden: { opacity: 0, x: 50 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        <HText>
                                            Millions of successfull members getting{""}
                                            <span className="text-primary-500">FIT</span>
                                        </HText>
                                    </motion.div>
                                </div>
                            </div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facere. Ab ipsum reiciendis, enim facilis adipisci deserunt nihil cupiditate inventore! Culpa tempore nemo veritatis aliquam voluptas quam rem explicabo quo!</p>
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, maiores commodi adipisci quo fuga delectus iusto iure porro tempora illo enim distinctio similique eos aut! Tenetur, magni quam. Eveniet, maxime.</p>
                            </motion.div>
                            <div className="relative mt-16">
                                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                    <ActionButton setSelectedPage={setSelectedPage}>
                                        Join now
                                    </ActionButton>
                                </div>
                            </div>

                        </div>
                    </div>
            </motion.div>
        </section>
    )
}

export default Benefits

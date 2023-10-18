/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { SelectedPage } from '@/shared/types';
import { HText } from "@/shared/HText";
import { SyntheticEvent } from 'react';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();
   
    const onSubmit = async (e: SyntheticEvent) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section 
            id="contactus"
            className='mx-auto w-5/6 pt-24 pb-32'
        >
         <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
             <motion.div
                className='md:w-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                >
                    <HText>
                        <span className='text-primary-500'>Join now </span>
                         GET IN SHAPE
                    </HText>
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum rerum a sequi quibusdam, doloribus in itaque nulla accusantium quo dicta veniam et facilis adipisci alias! Autem aspernatur cupiditate porro?
                    </p>
            </motion.div>

            {/* FORM & IMAGE */}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <form 
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/0c6b522545c2a25aae6c447137b6981d"
                            method="POST"
                        >
                            <input 
                                type="text" 
                                placeholder="NAME" 
                                className={inputStyles}
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "Maximum length of the field is 100 characters"}
                                </p>
                            )}
                           <input 
                                type="text" 
                                placeholder="EMAIL" 
                                className={inputStyles}
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "pattern" && "Invalid email format"}
                                </p>
                            )}
                            
                            <textarea 
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                className={inputStyles}
                                {...register("message", {
                                    required: true,
                                    maxLength: 500,
                                })}
                            />
                            {errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === "required" && "This field is required"}
                                    {errors.message.type === "maxLength" && "Maximum length of the field is 500 characters"}
                                </p>
                            )}

                            <button 
                                type="submit"
                                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                            >SUBMIT</button>
                        </form>
                    </motion.div>
                    <motion.div 
                        className='relative mt-16 basis-2/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className='w-full md:before:content-evolvetext before:-bottom-20 before:-right-10 before:z-[-1]'>
                            <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className='w-full'/>
                        </div>
                    </motion.div>
                </div>
        </motion.div>   
        </section>
    )
}

export default ContactUs

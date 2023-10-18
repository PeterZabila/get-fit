import { motion } from 'framer-motion';
import Logo from '@/assets/Logo.png'

const Footer = () => {
    return (
        <footer className='bg-primary-100 py-16'>
            <div
                className='justify-content mx-auto w-5/6 gap-16 md:flex'
            >
                <div className='mt-16 basis-1/2 md:mt-0'>
                    <img src={Logo} alt="logo" />
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sit optio fugiat repudiandae odio exercitationem distinctio accusantium? Laudantium optio rem, suscipit magnam omnis neque inventore impedit nesciunt totam, eaque qui!</p>
                    <p>All rights reserved</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>Links</h4>
                    <ul>
                        <li className='my-5'>qwerty zserhytjyj</li>
                        <li className='my-5'>ytrewq zesrydhtrjy</li>
                        <li className='my-5'>asdfgh zdrfyghj</li>
                    </ul>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact us</h4>
                    <ul>
                        <li className='my-5'><a href=''>Facebook</a> Facebook</li>
                        <li className='my-5'><a rel="noreferrer noopener" href='https://www.facebook.com/petro.zabila'>Instagram</a></li>
                        <li className='my-5'><a href="tel:+380631353552">+38(063)135-35-52</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react';
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
    return (
        <AnchorLink
            className='rounded-md gb-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white' 
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}

export default ActionButton

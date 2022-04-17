import React from 'react';
import facebook from '../../Component/images/logopack/icons8-facebook-48.png';
import twitter from '../../Component/images/logopack/icons8-twitter-50.png';
import youtube from '../../Component/images/logopack/icons8-youtube-48.png';
import insta from '../../Component/images/logopack/icons8-instagram-48.png';
import github from '../../Component/images/logopack/icons8-github-48.png';

const Footer = () => {
    return (
        <div className='d-flex justify-content-between bg-dark mt-5 px-4 py-4'>
            <p className='text-white'>Copyright © 2022 Soho WordPress Theme. All Rights Reserved.</p>
            <div>
                <span className='me-2 text-white'>+1 800 356 17 49</span>
                <span className='me-2'><img src={facebook} alt="" /></span>
                <span className='me-2'><img src={youtube} alt="" /></span>
                <span className='me-2'><img src={github} alt="" /></span>
                <span className='me-2'><img src={insta} alt="" /></span>
                <span className='me-2'><img src={twitter} alt="" /></span>

            </div>
        </div>
    );
};

export default Footer;
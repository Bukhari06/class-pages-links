// app/services/page.tsx

import React from 'react';
import Link from 'next/link';
import styles from '../about/homepage.module.css';


const ServicesPage = () => {
    return (


        
        <div className={styles.container}>
            <h1>Hêllð £rïêñÐ§ ï†§ mê Rµkh§åñå Jåßßår</h1>
            <br />
            <h1 className={styles.title}> 𝕊𝕖𝕣𝕧𝕚𝕔𝕖𝕤</h1>
        <br />
<h1>Dear  we are here for your help  , 
    <p>
    if u have any kind of problem feel free,</p>
    <p>to ask about that, we can even provide </p>
    <p>you all classes' syllabus notes,  </p>
    <p>Thank you for visiting 
        <div className="text-pink-500">𝓂𝓎 𝓌𝑒𝒷𝓈𝒾𝓉𝑒</div></p> 
</h1>
<br />
            <ul className='Rukh'>
                <li className={styles.navItem}><Link href="/">Home</Link></li>
                <li className={styles.navItem}><Link href="/about">About</Link></li>
                <li className={styles.navItem}><Link href="/services">Services</Link></li>
                <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
                </ul>


        </div>
    );
};

export default ServicesPage;

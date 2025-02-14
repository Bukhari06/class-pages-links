// app/about/page.tsx

import React from 'react';
import styles from '../about/homepage.module.css';
import Link from 'next/link';

const AboutPage = () => {
    return (

        
        <div className={styles.container}>
                        <p>Hêllð £rïêñÐ§ ï†§ mê Rµkh§åñå Jåßßår.</p>
                        <br />

                        <h1 className={styles.title}>About Me</h1>
                        <br />

                        <h2> I am web developer and  designer,</h2>
                        <>I am learning AI Artificial Intelligence,</>
                        <>at Sindh governore house .... </>
                        <> My Class Teacher is <span className='text-yellow-200'><pre>sir Hamza Alvi</pre></span></>
                        <br />


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

export default AboutPage;

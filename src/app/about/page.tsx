// app/about/page.tsx

import React from 'react';
import styles from '../about/homepage.module.css';
import Link from 'next/link';

const AboutPage = () => {
    return (

        
        <div className={styles.container}>
                        <p>Hêllð £rïêñÐ§ ï†§ mê Rµkh§åñå Jåßßår.</p>
                        <br />

                        <h2> I am web developer and  designer,</h2>
                        <p>I am learning AI Artificial Intelligence,</p>
                        <p>at Sindh governore house .... </p>
                        <p> My Class Teacher is <span className='text-yellow-200'><pre>sir Hamza Alvi</pre></span></p>
                        <br />
            <h1 className={styles.title}>About Us</h1>
<br />


<button><Link href= '/'>HomePage</Link></button>
        
        </div>
    );
};

export default AboutPage;

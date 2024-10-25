// app/contact/page.tsx
import styles from '../about/homepage.module.css';
import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <div className={styles.container}>

<p>Hêllð £rïêñÐ§ ï†§ mê Rµkh§åñå Jåßßår.</p>
<br />
            <h1 className={styles.title}>ℂ𝕠𝕟𝕥𝕒𝕔𝕥</h1>
            <br />
            <p>If you have any questions or any query or would like to reach me out, </p>
            <p>please feel free to contact me !</p>
           
            
            <form className={styles.form}>
                <div>
                <br />
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input className = 'text-black' type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input className = 'text-black' type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <br />
                    <textarea className = 'text-black' id="message" name="message" required></textarea>
                </div>
                <button type="submit" className={styles.button}>Send</button>
            </form>
            <br />

            <p>𝓐𝓵𝓽𝓮𝓻𝓷𝓪𝓽𝓲𝓿𝓮𝓵𝔂, 𝔂𝓸𝓾 𝓬𝓪𝓷 𝓻𝓮𝓪𝓬𝓱 𝓶𝓮 𝓪𝓽:</p>
            <br />
            <p>Visit at my office : </p>
            <p> #289 RM Advocates RiceCanal Larkana </p>
            <p>Email: rukh1223@gmail.com</p>
            <p>call : (0912)3456789</p>
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

export default ContactPage;

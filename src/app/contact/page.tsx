// app/contact/page.tsx
import styles from '../about/homepage.module.css';
import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <div className={styles.container}>

<p>Hêllð £rïêñÐ§ ï†§ mê Rµkh§åñå Jåßßår.</p>
<br />
            <h1 className={styles.title}>ℂ𝕠𝕟𝕥𝕒𝕔𝕥 ℙ𝕒𝕘𝕖</h1>
            <br />
            <p>If you have any questions or would like to reach out, please fill out the form below:</p>
           
            
            <form className={styles.form}>
                <div>
                <br />
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <br />
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className={styles.button}>Send</button>
            </form>
            <p>𝓐𝓵𝓽𝓮𝓻𝓷𝓪𝓽𝓲𝓿𝓮𝓵𝔂, 𝔂𝓸𝓾 𝓬𝓪𝓷 𝓻𝓮𝓪𝓬𝓱 𝓶𝓮 𝓪𝓽:</p>
            <p>Email: rukh1223@gmail.com</p>
            <p>Phone: (0912)3456789</p>

<br />

            <button><Link href= '/'>HomePage</Link></button>

        </div>
    );
};

export default ContactPage;

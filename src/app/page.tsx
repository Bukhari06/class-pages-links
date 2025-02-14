// app/page.tsx

import React from 'react';
import Link from 'next/link';
import styles from '../app/About/homepage.module.css';




const HomePage = () => {
    return (
        <div className={styles.container}>

<div className='MyIntro'>
Hêllð £rïêñÐ§ ï†§ mê Rµkh§åñå Jåßßår</div>
<br />
            <h1 className={styles.title}>𝕋𝕙𝕚𝕤 𝕚𝕤 𝕄𝕪 ℕ𝕖𝕩𝕥.𝕁𝕤 𝕎𝕖𝕓𝕊𝕚𝕥𝕖<p className='text-cyan-500'>ᵢ'ᵥₑ cᵣₑₐₜₑd ₜₕᵢₛ wₑb₋ₛᵢₜₑ wᵢₜₕ ₘᵤcₕ ₕₐᵣd wₒᵣₖ ₐₙd ₛₜᵣᵢᵥₑ, ₐₙd ᵢₜ gᵢᵥₑₛ gᵣₑₐₜ ₕₐₚₚᵢₙₑₛₛ ₜₒ ₘₑ ₜₒ ₕₐᵥₑ ₘₐₖₑ ᵢₜ ₜₒ ᵢₜₛ cₒₘₚₗₑₜᵢₒₙ, bᵤₜ ₛₜᵢₗₗ ₜₕₑᵣₑ ᵢₛ ₗᵢₙgₑᵣᵢₙg ₘₑₘₒᵣy ₒf ₜₒᵤgₕₙₑₛₛ ᵢₜ ₜₒₒₖ ₜₒ bₑ cᵣₑₐₜₑd.
                
            </p>
                
            </h1>
            <br />
            <div className='bg'></div>

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

export default HomePage;

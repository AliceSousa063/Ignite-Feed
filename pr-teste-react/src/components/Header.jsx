import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.png'
//console.log(igniteLogo);

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logotipo"></img>
            <strong>Ignite Feed</strong>
        </header>
    );
}
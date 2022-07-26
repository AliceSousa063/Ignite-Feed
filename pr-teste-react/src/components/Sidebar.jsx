//import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>

            <img className={styles.cover} hasBorder={true}  src="https://images.unsplash.com/photo-1587024669552-a0e531121cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80"/>
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/alicesousa063.png"/>
                
                <strong>Alicee Souzza</strong>
                <span>Web Developer</span>

            </div>

            <footer>

                <a href='#'>
                <PencilLine/>
                Editar perfil</a>
            </footer>
        </aside>
    );
}
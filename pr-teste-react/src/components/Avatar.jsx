import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}){
    //const hasBorder = props.hasBorder !== false;
    return(
        //<img className={styles.hasBorder ? styles.avatarWithBorder : styles.avatar} 
        //src={props.src}/>
        <img className={styles.hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src}/>

    )
}
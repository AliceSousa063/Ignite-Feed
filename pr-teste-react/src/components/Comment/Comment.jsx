import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/alicesousa063.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alice Lima</strong>
                            <time title="30 de Agosto ás 14:00h" dataTime="2022-30-08 14:00:37">
                            Cerca de uma hora atrás 
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                
                    <p>Muito top, ameeei </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                            Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>

    )
}
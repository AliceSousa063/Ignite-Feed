import { Avatar } from './Avatar'
import { Comment } from './Comment/Comment'
import styles from './Post.module.css'
import {} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns/esm'
import { LineSegment } from 'phosphor-react'

const comments = [
    1,
    2,
    3,
];

export function Post({author, publishedAt, content}){
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'",{
        locale: ptBR,
    })

    function handleCreateNewComment (){
        console.log('oi')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatar_url}/>
                    <div className={styles.authorInfo}>
                        
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div> 

                <time title="" dateTime="2022-05-11 08:13::30">
                {publishedDateFormatted}
                </time>
                
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragrafh'){
                        return <p>{line.content}</p>;
                    } else if (line.type == 'link'){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
             
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder= "Deixe aqui seu comentário..."/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>
         
        </article>
    )
}
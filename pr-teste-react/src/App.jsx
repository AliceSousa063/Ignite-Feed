import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

//import { useState } from 'react'
import './styles.css'
import styles from './App.module.css';

//author: {avatar_url: "", name:"", role:"" }
//publishedAt: Date
//contente: String

const posts = [
  {
    id:1,
    author:{
      avatar_url: "https://github.com/heliribeiro.png",
      name: "Heli Ribeiro",
      role: "Dev.Backend, UX Software",
    },
    content:[
      {type:'paragrafh', content:'Fala galeraa 👋',},
      {type:'paragrafh', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2022-05-08'),
  },
  {
    id:2,
    author:{
      avatar_url: "https://github.com/willianspraciano.png",
      name: "Willian S. Praciano",
      role: "Dev.Backend, UX Software",
    },
    content:[
      {type:'paragrafh', content:'Fala galeraa 👋',},
      {type:'paragrafh', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2022-06-28'),
  },
];


export function App() {
  return (
    <div>      
          <Header/>

        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {posts.map(post=>{
              return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
            }
            )}
          </main>
        </div>
    </div>
    
  )
}
import React, { Component } from 'react';

import './style.css';
import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Iann Santos",
          avatar: "https://avatars3.githubusercontent.com/u/32558503?s=460&v=4"
        },
        date: "28 Out 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcmap, inclusive 80% do nosso time de devs é composto por alunos do bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord. (Sério, me chamem mesmo, este comentário é real!)"
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Iann Santos",
          avatar: "https://avatars3.githubusercontent.com/u/32558503?s=460&v=4"
        },
        date: "27 Out 2019",
        content: "Esse é o meu primeiro desafio de React.JS no bootcamp, estou muito animado!!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Tá ficando show Iann!!"
          },
          {
            id: 2,
            author: {
              name: "Robson Marques",
              avatar: "https://avatars3.githubusercontent.com/u/861751?s=400&v=4"
            },
            content: "Parabéns Iann, conte com a gente pra passar para o próximo nível na sua carreira."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Diego Fernandes",
          avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
        },
        date: "26 Out 2019",
        content: "O bootcamp GoStack é um treinamento imersivo nas tecnologias mais quentes do mercado, são elas: React.JS, React Native e Node.JS",
        comments: [
          {
            id: 1,
            author: {
              name: "Iann Santos",
              avatar: "https://avatars3.githubusercontent.com/u/32558503?s=460&v=4"
            },
            content: "Estou participando e aprendendo MUITO, o treinamento é realmente muito bom!! Parabéns a todos vocẽs da Rocketseat!! #boracodar"
          }
        ]
      }
    ]
  }

  render() {
    return (
      <ul>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
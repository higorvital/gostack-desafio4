import React, {Component} from 'react'
import Post from './Post'
import {PostListDiv} from '../styles/postlist'

class PostList extends Component{
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "Conteúdo do comentário"
              }
            ]
          },
          {
            id: 2,
            author: {
              name: "Gabriel Lisboa",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Fala galera, beleza?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Clara Lisboa",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "Conteúdo do comentário"
              },
              {
                id: 2,
                author: {
                  name: "Cezar Toledo",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "Conteúdo do comentário"
              },
            ]
          },
        ]
      }

      render(){
          return (
            <PostListDiv>
                {this.state.posts.map(post=> 
                <Post 
                key={post.id}
                post={post}
                />)}
            </PostListDiv>          
          )
      }
}

export default PostList
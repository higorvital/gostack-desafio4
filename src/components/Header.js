import React from 'react'
import {FaUserCircle, FaFacebook} from 'react-icons/fa'
import {HeaderDiv} from '../styles/header.js'

function Header(){
    return (
        <HeaderDiv>
            <FaFacebook color="#fff" size={20} className="facebook_logo"/>
            <div>
                <a href="#">Meu Perfil</a>
                <FaUserCircle color="#fff" size={20} className="user_circle"/>
            </div>
        </HeaderDiv>
    )
}

export default Header
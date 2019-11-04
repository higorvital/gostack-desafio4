import React from 'react'
import {FaUserCircle, FaFacebook} from 'react-icons/fa'
import {HeaderDiv} from '../styles/header.js'

function Header(){
    return (
        <HeaderDiv>
            <img src="https://i.imgur.com/KDIDiSE.png" />
            <div>
                <a href="#">Meu Perfil</a>
                <FaUserCircle color="#fff" size={20} className="user_circle"/>
            </div>
        </HeaderDiv>
    )
}

export default Header
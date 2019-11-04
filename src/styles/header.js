import styled from 'styled-components'


export const HeaderDiv = styled.div`
    background: #4a90e2;
    position: relative;
    width: 100%;
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;

    div {
        display: flex;
        justify-items: center;
    }

    img {
        height: 24px;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-weight: 800;
        font-size: 16px;
        margin-right: 10px;
    }
`
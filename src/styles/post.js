import styled from 'styled-components'

export const PostDiv = styled.li`

    padding: 20px 15px;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);

    #user{
        display: flex;
        flex-direction: row;
        align-items: center;
        
        div {
            margin-left: 10px;
            display: flex;
            flex-direction: column;


            span {
                margin-top: 5px;
                color: #aaa;
                font-size: 13px;
            }
        }
    }
    
    & + li{
        margin-top: 20px;
    }


    #content{
        padding: 20px 10px;
        padding-bottom: 30px;

        border-bottom: 1px solid #eee;

    }

    ul {
        list-style: none;
    }


`
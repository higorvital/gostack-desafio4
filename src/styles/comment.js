import styled from 'styled-components'

export const CommentDiv = styled.li`

    display: flex;
    flex-direction: row;
    margin: 20px 15px;
    align-items: center;

    img {
        margin-right: 10px;
    }

    div {
        background: #f2f2f2;
        width: 100%;
        padding: 15px 10px;
        border-radius: 20px;

        p {
            
            font-size: 14px;
            span {
                font-weight: bold;
           }
        }

        
    }

`
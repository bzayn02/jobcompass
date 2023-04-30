import styled from 'styled-components';

export const ModalStyled=styled.div`
position: fixed;
left: 0;
top:-100%;
right:0;
bottom:0;
background-color: rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: z-index 9999;
;
transition: top 0.5s ease-out;

&.open{
    top:0;
}
`
export const PageStyled=styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    width:70%;
    height: 80%;
    background-color: white;
    h1{
        text-align: center;
    }
    button{
        margin: 3em;
        width: fit-content;
        align-items: center;
        align-content: center;
        align-self: center;
    }

`
export const FormStyled=styled.form`
    display: flex;  
    flex-direction:column;
    width:100%;
    /* height: 60px; */
    color: black;
    
    input{
        width:40%;
        margin: 10px;

    }
    .form-group{
        
        padding: 1em 5em 1em 5em;
        
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    
`
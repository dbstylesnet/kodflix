import styled from 'styled-components'

const Figure = styled.div`
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    transition: all 0.3s cubic-bezier(.47,0,.74,.71);
    
    align-items: flex-start;
    &:hover {
        cursor: pointer;  
        transform: scale(1.15, 1.15);
        box-shadow: 0px 0px 4px rgba(0,0,0,0.3);
        transition: all 0.3s cubic-bezier(.47,0,.74,.71);
    }
    &:hover label {
        background: rgba(0, 0, 0, .7);  
        cursor: pointer;  
        transition: background 300ms ease-in-out;
    }
    &:active label {
        background: rgba(0, 0, 0, .9);  
        transition: background 300ms ease-in-out;
    } 

    label {
        position: absolute;
        width: 100%;
        height: 15%;
        background: rgba(0, 0, 0, .5);
        color: white;
        display: flex;
        align-self: flex-end;
        justify-content: center;
        align-items: center;
        transition: background 300ms ease-in-out;
        font-family: courier;
        font-size: 18px;
        bottom: 0;
    }

    img {
        max-width: 100%;
        height: 100%;
        width: auto;
    }
`

export { Figure }

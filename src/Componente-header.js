import { LitElement,html,css } from "lit-element";

class Header extends LitElement{
    static get styles(){
        return css`
       header{
         background-color:black;
         width:100%;
        height:70px; 
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23) ; }  
        h1{
        margin-top:0%;    
         font-family:monospace;
        color:white;
        text-align:center;
        padding: 20px 12px 12px 45px;
        }  
    }
`;}

    render(){
        return html`
        <header>
         <h1>Componente Menu</>
        </header>`;
    }

}
customElements.define('component-header',Header);
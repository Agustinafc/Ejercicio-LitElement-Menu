
import { LitElement,html,css } from "lit-element";
import './componente-pagina1';
import './componente-pagina2';
import './componente-pagina3';
class ComponenteMenu extends LitElement{
     static get properties(){
         return{
         }
     }

     constructor(){
         super();
     
     }
      static get styles(){
         return css`
         .li-menu{
            list-style: none;
            background-color:#bb2e31 ;
            width:15%;
            border-bottom: 1px solid #B6B6B6;
            padding: 25px 20px 12px 20px;
            
            
         }
         .li-menu:hover{
            background-color:rgb(236, 149, 149);
            cursor:context-menu;
         }
         #principal{
        position:absolute;
        margin-top:5%;
        margin-left:30%;
        margin-right:20px;
        text-align:justify;
        width:60%;
        
         }
         h2{
             text-align:center;

         }
        .ul-menu{
            position:absolute;
            margin-left: -2.6%;
            margin-top:0%;
            width:100%
            
        }
         `; 
      }
    render(){
        return html`
       
        <article id="principal">
        <h2>Hola soy la pagina Principal</h2>
        <p>Es un hecho establecido hace demasiado
         tiempo que un lector se distraerá con el contenido
          del texto de un sitio mientras que mira su diseño. 
          El punto de usar Lorem Ipsum es que tiene una distribución 
          más o menos normal de las letras, al contrario de usar textos 
          como por ejemplo "Contenido aquí, contenido aquí". Estos textos 
          hacen parecerlo un español que se puede leer. Muchos paquetes de 
          autoedición y editores de páginas web usan el Lorem Ipsum como 
          su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" 
          va a dar por resultado muchos sitios web que usan este texto si
           se encuentran en estado de desarrollo. Muchas versiones han evolucionado
            través de los años, algunas veces por accidente, otras veces 
            a propósito (por ejemplo insertándole humor y cosas por el estilo).</p></article>
               
        <ul class="ul-menu">
        <li class="li-menu"><a @click="${this.pagina1}">Pagina1</a></li>
        <li class="li-menu"><a @click="${this.pagina2}">Pagina2</a></li>
        <li class="li-menu"><a @click="${this.pagina3}">Pagina3</a></li>
        </ul>
        
        `;

    }
pagina1(){
        let principal = this.shadowRoot.getElementById('principal');
        this.shadowRoot.querySelector('component-page1');
        principal.innerHTML="<component-page1></component-page1>";
    }
    pagina2(){
        let principal = this.shadowRoot.getElementById('principal');
       this.shadowRoot.querySelector('component-page2');
        principal.innerHTML="<component-page2></component-page2>";
    }
    pagina3(){
        let principal = this.shadowRoot.getElementById('principal');
         this.shadowRoot.querySelector('component-page3');
         principal.innerHTML="<component-page3></component-page3>";
    }

}
  customElements.define('menu-c',ComponenteMenu);

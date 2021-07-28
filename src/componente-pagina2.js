import { LitElement,html,css } from "lit-element";


 export class Pagina2 extends LitElement{
    static get styles(){
        return css`
        h2{
            text-align:center;
        }
       
        `;
    }
    
    render(){
        return html`
        
        <h2>Hola soy la pagina 2</h2>
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
            a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
            <p>Sin embargo, las referencias a la frase "Lorem Ipsum" se pueden encontrar en la Edición de la Biblioteca Clásica Loeb de 1914 del De Finibus en las secciones 32 y 33. Fue en esta edición del De Finibus en la que H. Rackman tradujo el texto.</p>
        `;
    }
 }
 customElements.define('component-page2', Pagina2);
interface Persona {
   nombreCompleto: String;
   edad : number;
   direccion : Direccion;
}
interface Direccion {
   pais : string;
   casaNo : number;
}

export const ObjetosLiterales = () => {

   const persona: Persona = {
      nombreCompleto: 'Fernando', 
      edad : 22,
      direccion :{
         pais : 'Colombia',
         casaNo : 13
      }
      
   }
   return (
   <>
   <h3>ObjetosLiterales</h3>
      <code>
         <pre>
            { JSON.stringify( persona, null, 2 )}
         </pre>
      </code>
   
   </>
   )
}




export const TiposBasicos = () => {

      //Se le puede asignar dos posibles tipos de dato a una variable con | Tuberia
   const nombre : string = 'Fernando';
   const edad : number = 35;
   const estaActivo : boolean = false;




   return (
   <>
      <h3>Tipos basicos</h3>
      
      {nombre}, {edad}, {(estaActivo )? 'activo' : 'no activo'}
   </> 
   )
}

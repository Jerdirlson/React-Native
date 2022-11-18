

export const TiposBasicos = () => {

      //Se le puede asignar dos posibles tipos de dato a una variable con | Tuberia
   let nombre1 : String = 'yeye';
   const nombre : string = 'Fernando';
   const edad : number = 35;
   const estaActivo : boolean = false;

   const variableString :String = 'Tipo String ';
   const variableStringnumero : String = 'Tipo Numero: ';
   const variableEntero : number = 1234;
   let estado :boolean = false;
   const variableTipoBoolean : String = 'Tipo Booleano: ';
   const poderes : String[]  = [];


   return (
   <>
      <h3>Tipos basicos</h3>
      {nombre}, {nombre1}, {edad}, {(estaActivo )? 'activo' : 'no activo'}
   <hr/>
   <h3>Tipos basicos de variables</h3>
   {variableString}{nombre},{variableStringnumero}{variableEntero},{variableTipoBoolean}{(estado)? 'true' : 'false'}
   <hr/>
   <h3>Array de strings: </h3>
   {poderes.join(', ')}
   

   </>

   )
}

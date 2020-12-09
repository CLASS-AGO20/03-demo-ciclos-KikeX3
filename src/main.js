export default class App {

    sumarParesFor(){

        let suma = 0;

        for( let i = 1 ; i <= 20 ; i = i + 1 ){

            if ( i % 2 === 0 ){

                suma = suma + i ;
            }
       
            // Tambien se puede modificar para que i valga 0,
            // seguido de que se le sume de a 2 en ves de a 1
            // y así podríamos quitar el if y solo dejar la operacion suma

        }

        return suma;
        
    }

    contarImparesFor(inicio, fin){

        let impares = 0 ;

        for( let o = inicio ; o <= fin ; o ++ ) {
            
            if( o % 2 !== 0 ){

               impares ++; 
           
            }
        }
        return impares;
    }

    sumarParesWhile(){

        let i = 1;
        
        let suma = 0;
        
        while( i <= 20){

            if ( i % 2 ===0){
                suma = suma + i;
            }
            
            i ++;
        }
        return suma;
    }

    contarImparesWhile(inicio , fin){

        let i = inicio;
        let contar = 0; 
        
        while(i <= fin){

            if(i % 2 !== 0 ){
                contar ++;
            }

            i ++;

        }
        return contar;
    }

    sumarParesDo(){
        
        let i = 1;
        let suma = 0;
        
        do {
            if (i%2 === 0){
                suma = suma + i;
            }
          
            i++;
        
        } while(i <= 20);

        return suma;
    }

    contarImparesDo(inicio, fin){

        
        if (inicio > fin){
            let t = inicio;
            inicio = fin;
            fin = t;
        }
        
        let i = inicio;
        let impar = 0;
      
        do{
            if(i % 2 !== 0){
                impar++;
            }
            i++;
        }while(i <= fin);
        
        return impar;
    }
}

let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(5, 10));

console.log(app.sumarParesWhile());

console.log(app.contarImparesWhile(5,10));

console.log(app.sumarParesDo());

console.log(app.contarImparesDo(5,11));
console.log(app.contarImparesDo(11,5));

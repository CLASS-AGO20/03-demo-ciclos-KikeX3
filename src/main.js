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

        for( let i = inicio; 1 <= fin ; i = i +1){
            
            if( i % 2 != 0 ){

                impares = impares + i; 
           
            }
        }
        return impares;
    }
}

let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(5,10));

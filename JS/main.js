//VARIABLES
let user;
let pass;
let bandera1 = false;
let category;
let total = [];

let costFinal = 0;
const listOfProducts = [
    {id:1, description: "Poto", price:80, tipo: 1}, 
    {id:2, description: "Cintas", price:120, tipo: 1}, 
    {id:3, description: "Lirio de la paz", price:150, tipo: 1}, 
    {id:4, description: "Lengua de suegra", price:95, tipo: 1}, 
    {id:5, description: "Hiedra", price:120, tipo: 2}, 
    {id:6, description: "Lirio azul", price:315, tipo: 2}, 
    {id:7, description: "Jazmín chino", price:65, tipo: 2}, 
    {id:8, description: "Clavel", price:25, tipo: 2}
]

let listOfProductsFilter = [];

//LOGIN
do{
if(bandera1==true){
    alert("Usuario o contraseña incorrecta");
}
user = prompt("Ingrese su usuario");
pass= prompt("Ingrese su contraseña");
bandera1=true;
}while((user.toLowerCase()!="coderhouse")||(pass!=1234))

//FUNCIONES
let concat = (product) => {
    total.push(product);

}

let add = (cost) => {
    costFinal = costFinal + cost;
}

//PROGRAMA
while(category!=0){

    category = parseInt(prompt("Seleccione el tipo de planta que desea adquirir:\n 1-Plantas de interior\n 2-Plantas de exterior\n 0-Salir"))


    if((category==1)||(category==2)){
        listOfProductsFilter = listOfProducts.filter((product) =>product.tipo === category)
        product = prompt(`Seleccione el ejemplar:\n${listOfProductsFilter[0].id}-${listOfProductsFilter[0].description} $${listOfProductsFilter[0].price}\n${listOfProductsFilter[1].id}-${listOfProductsFilter[1].description} $${listOfProductsFilter[1].price}\n${listOfProductsFilter[2].id}-${listOfProductsFilter[2].description} $${listOfProductsFilter[2].price}\n${listOfProductsFilter[3].id}-${listOfProductsFilter[3].description} $${listOfProductsFilter[3].price}`);

    }
    
    else if(category==0){
        alert(`Usted adquirió ${total.length} ejemplares:`)

        total.forEach(element => {
            alert(element.description + " $" + element.price)
        });
        
        alert("El costo final es $" + costFinal);
        continue;
    }

    else{
        alert("Opción incorrecta")
    }

    switch(product){
        case "1": 
        concat(listOfProducts[0]);
        add(listOfProducts[0].price);
        break;

        case "2": 
        concat(listOfProducts[1]);
        add(listOfProducts[1].price);
        break;

        case "3": 
        concat(listOfProducts[2]);
        add(listOfProducts[2].price);
        break;

        case "4": 
        concat(listOfProducts[3]);
        add(listOfProducts[3].price);
        break;

        case "5": 
        concat(listOfProducts[4]);
        add(listOfProducts[4].price);
        break;

        case "6": 
        concat(listOfProducts[5]);
        add(listOfProducts[5].price);
        break;

        case "7": 
        concat(listOfProducts[6]);
        add(listOfProducts[6].price);
        break;

        case "8": 
        concat(listOfProducts[7]);
        add(listOfProducts[7].price);
        break;
    }

}

// //VARIABLES
// let user;
// let pass;
// let bandera1 = false;
// let category;
// let product;
// let total = " ";
// let cost;
// let costFinal = 0;

// //LOGIN
// do{
// if(bandera1==true){
//     alert("Usuario o contraseña incorrecta");
// }
// user = prompt("Ingrese su usuario");
// pass= prompt("Ingrese su contraseña");
// bandera1=true;
// }while((user.toLowerCase()!="coderhouse")||(pass!=1234))

// //FUNCIONES
// let concat = (product) => {
//     total = total + product + " ";
//     return (total);
// }

// let add = (cost) => {
//     costFinal = costFinal + cost;
//     return (costFinal);
// }

// //PROGRAMA
// while(category!=0){

//     category = prompt("Seleccione el tipo de planta que desea adquirir:\n 1-Plantas de interior\n 2-Plantas de exterior\n 0-Salir")

//     if(category==1){
//         product = prompt("Seleccione el ejemplar:\n1-Poto $80\n2-Cintas $120\n3-Lirio de la paz $150\n4-Lengua de suegra $95");
//     }
//     else if(category==2){
//         product = prompt("Seleccione el ejemplar:\n5-Hiedra $120\n6-Lirio azul $315\n7-Jazmin chino $65\n8-Clavel $25");
//     }
//     else if(category==0){
//         alert("Usted adquirió los siguientes ejemplares:" + total + "\nEl costo final es $" + costFinal);
//     }
//     else{
//         alert("Opción incorrecta")
//     }

//     switch(product){
//         case "1": 
//         total = concat("Poto");
//         costFinal = add(80);
//         break;

//         case "2": 
//         total = concat("Cintas");
//         costFinal = add(120);
//         break;

//         case "3": 
//         total = concat("Lirio de la paz");
//         costFinal = add(150);
//         break;

//         case "4": 
//         total = concat("Lengua de suegra");
//         costFinal = add(95);
//         break;

//         case "5": 
//         total = concat("Hiedra");
//         costFinal = add(120);
//         break;

//         case "6": 
//         total = concat("Lirio azul");
//         costFinal = add(315);
//         break;

//         case "7": 
//         total = concat("Jazmin chino");
//         costFinal = add(65);
//         break;

//         case "8": 
//         total = concat("Clavel");
//         costFinal = add(25);
//         break;
//     }

// }


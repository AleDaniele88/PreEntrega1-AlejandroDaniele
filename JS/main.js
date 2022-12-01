//VARIABLES
let user;
let pass;
let bandera1 = false;
let category;
let product;
let total = " ";
let cost;
let costFinal = 0;

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
    total = total + product + " ";
    return (total);
}

let add = (cost) => {
    costFinal = costFinal + cost;
    return (costFinal);
}

//PROGRAMA
while(category!=0){

    category = prompt("Seleccione el tipo de planta que desea adquirir:\n 1-Plantas de interior\n 2-Plantas de exterior\n 0-Salir")

    if(category==1){
        product = prompt("Seleccione el ejemplar:\n1-Poto $80\n2-Cintas $120\n3-Lirio de la paz $150\n4-Lengua de suegra $95");
    }
    else if(category==2){
        product = prompt("Seleccione el ejemplar:\n5-Hiedra $120\n6-Lirio azul $315\n7-Jazmin chino $65\n8-Clavel $25");
    }
    else if(category==0){
        alert("Usted adquirió los siguientes ejemplares:" + total + "\nEl costo final es $" + costFinal);
    }
    else{
        alert("Opción incorrecta")
    }

    switch(product){
        case "1": 
        total = concat("Poto");
        costFinal = add(80);
        break;

        case "2": 
        total = concat("Cintas");
        costFinal = add(120);
        break;

        case "3": 
        total = concat("Lirio de la paz");
        costFinal = add(150);
        break;

        case "4": 
        total = concat("Lengua de suegra");
        costFinal = add(95);
        break;

        case "5": 
        total = concat("Hiedra");
        costFinal = add(120);
        break;

        case "6": 
        total = concat("Lirio azul");
        costFinal = add(315);
        break;

        case "7": 
        total = concat("Jazmin chino");
        costFinal = add(65);
        break;

        case "8": 
        total = concat("Clavel");
        costFinal = add(25);
        break;
    }

}


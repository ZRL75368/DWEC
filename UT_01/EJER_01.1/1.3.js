// creamos un objeto producto y cliente con sus propiedades
const producto = {
    nombre : "Manzana",
    precio : 1
}

const cliente = {
    nombreCliente : "Teo",
    esPremium : false
}

// los combinamos en un objeto pedido mediante Spread Operator
const pedido = {...producto, ...cliente}
console.log(pedido);

// creamos un nuevo objeto y lo combinamos con proucto
const cliente2 = {
    nombre : "Teo"
}

const pedido2 = {...producto, ...cliente2}
console.log(pedido2);
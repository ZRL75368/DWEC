const producto = {
    nombre : "Manzana",
    precio : 1
}

const cliente = {
    nombreCliente : "Teo",
    esPremium : false
}

const pedido = {...producto, ...cliente}
console.log(pedido);

const cliente2 = {
    nombre : "Teo"
}

const pedido2 = {...producto, ...cliente2}
console.log(pedido2);
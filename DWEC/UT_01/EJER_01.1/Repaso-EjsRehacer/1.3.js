const producto = {
    nombre: 'IPhone 17',
    precio: 1300
};

const cliente = {
    nombreCliente: 'Juan',
    esPremium: false
};

const pedido = {
    ...producto, ...cliente
};

console.log(pedido);

const cliente2 = {
    nombre: 'Pepe'
};

const pedidoProducto = {
    ...producto, ...cliente2
};

console.log(pedidoProducto);

// Al mostrar pedidoProducto se ve como solo sale una variable nombre, y coge el ultimo valor asignado a ella que es 'Pepe'
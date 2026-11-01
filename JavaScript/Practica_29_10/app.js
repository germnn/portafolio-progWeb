const productos = [{
        nombre: "Laptop",
        categoria: "Tecnología",
        precio: 15000,
        stock: 4,
        descuento: 10
    },
    {
        nombre: "Mouse",
        categoria: "Tecnología",
        precio: 450,
        stock: 0,
        descuento: 0
    },
    {
        nombre: "Mochila",
        categoria: "Accesorios",
        precio: 850,
        stock: 8,
        descuento: 15
    },
    {
        nombre: "Audífonos",
        categoria: "Tecnología",
        precio: 1200,
        stock: 3,
        descuento: null
    },
    {
        nombre: "Termo",
        categoria: "Accesorios",
        precio: 500,
        stock: 12,
        descuento: 5
    }
];

// Punto 1

function estaDisponible(producto) {
    return producto.stock > 0;
}
console.log("Punto 1: \n", estaDisponible(productos))

// Punto 2
const calcularPrecioFinal = function(producto) {
    if (producto.descuento == null || producto.descuento == 0)
        return producto.precio
    else
        return producto.precio - (producto.precio * (producto.descuento / 100))
}
console.log("\nPunto 2: \n", calcularPrecioFinal(productos))

// Punto 3
const crearDescripcion = (producto) => {
    return `${producto.nombre} cuesta $${producto.precio} y tiene ${producto.stock} unidades disponibles.`
}
console.log("\nPunto 3: \n", crearDescripcion(productos))

// Punto 4
const { nombre, precio, stock } = productos[0]
console.log("Punto 4: \n")
console.log(`Producto: ${nombre}, Precio: $${precio} y Stock: ${stock}`)


// Punto 5
const productosResumen = productos.map((prod) => ({
    nombre: prod.nombre.toUpperCase(),
    precioOriginal: prod.precio,
    precioFinal: calcularPrecioFinal(prod),
    disponibilidad: estaDisponible(prod) ? "Disponible" : "Agotado"
}))
console.log("Punto 5: \n", productosResumen)

//Punto 6
const productosActualizados = productos.map(p => ({
    ...p,
    estado: p.stock > 0 ? "Con existencias" : "Sin existencias"
}))
console.log("Punto 6: \n", productosActualizados)

// Punto 7
const productosDisponibles = productos.filter(p => p.stock > 0 && p.precio <= 1500)
console.log("Punto 7: \n", productosDisponibles)

// Punto 8
const productosTecnologia = productos.filter(p => p.categoria === "Tecnología" && p.stock > 0)
console.log("Punto 8: ", productosTecnologia)


// Punto 9
const productosConDescuento = productos
    .filter(p => p.descuento != null && p.descuento > 0)
    .map(p => `${p.nombre}: $${calcularPrecioFinal(p)}`)
console.log("Punto 9: ", productosConDescuento)

// Punto 10
const productosDisponiblesBaratos = productos
    .filter(p => estaDisponible(p) && calcularPrecioFinal(p) < 1000)
    .map(p => p.nombre)
console.log("Punto 10: ", productosDisponiblesBaratos)

// Punto 11
const productosAccesorios = productos.filter(({ categoria, stock }) => categoria === "Accesorios" && stock > 5)
console.log("\nPunto 11: \n", productosAccesorios)
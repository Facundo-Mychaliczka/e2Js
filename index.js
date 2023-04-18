const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  }
]

pizzas.forEach((pizza) => {
  let id = pizza.id
  if (id %2) {
    console.log(`${pizza.nombre} es impar y tiene id ${pizza.id}`);
  }else {
  }
});

pizzas.forEach(pizza => {
  let precio = pizza.precio

  if (precio < 600) {
    console.log(`${pizza.nombre} vale menos de $600, vale $${pizza.precio}`);
  }
});


pizzas.forEach(pizza => {
  console.log(`${pizza.nombre} tiene un valor de $ ${pizza.precio}`);
});


const ingredientesDeCadaPizza = pizzas.filter((pizzas) => {
  return pizzas.nombre && pizzas.ingredientes;
});

ingredientesDeCadaPizza.forEach((pizzas) => {
  console.log(`La ${pizzas.nombre} contiene ${pizzas.ingredientes}`);
})
const empleados = [
  {
    id: 1,
    nombre: "Pepe",
  },
  {
    id: 2,
    nombre: "Marta",
  },
  {
    id: 3,
    nombre: "Pedro",
  },
];

const sueldos = [
  {
    id: 1,
    sueldo: 1500,
  },
  {
    id: 2,
    sueldo: 3000,
  },
];

const getEmpleadoById = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);

  if (empleado) {
    callback(null, empleado);
    return;
  }
  callback(new Error("El empleado no existe"));
};

const getSueldoById = (id, callback) => {
  const sueldo = sueldos.find((s) => s.id === id);

  if (sueldo) {
    callback(null, sueldo);
    return;
  }
  callback(`El sueldo con id ${id} no existe`);
}; // buscar el salario y si no tiene salario mostrar mensaje.

const id = 2;

getEmpleadoById(id, (error, empleado) => {
  if (error) {
    console.log("ERROR!!!!!!!!!!!........");
    console.log(error);
    return;
  }

  getSueldoById(id, (error, sueldo) => {
    if (error) {
      console.log("ERROR!!!!!!!!!!!........");
      console.log(error);
      return;
    }

    console.log(
      `El empleado: ${empleado.nombre} tiene un sueldo de ${sueldo.sueldo}`
    );
  });
});

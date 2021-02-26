const empleados = [
  {
    id: 1,
    nombre: 'Pepe'
  },
  {
    id: 2,
    nombre: 'Marta'
  },
  {
    id: 3,
    nombre: 'Pedro'
  }
]

const sueldos = [
  {
    id: 1,
    sueldo: 1500
  },
  {
    id: 2,
    sueldo: 3000
  },
]

const getEmpleadoById = async (id) => {

  try {
    const empleado = empleados.find( (e) => e.id === id );

    if(empleado){
      return empleado;
    }
    throw new Error(`El empleado con id ${id} no existe`);
  } catch (error){
    throw error;
  }
}

const getSueldoById = async (id) => {

  try {
    const sueldo = sueldos.find( (e) => e.id === id );
    
    if(sueldo){
      return (sueldo);
    }
    throw new Error(`El sueldo con id ${id} no existe`);
  } catch (error) {
      throw error;
  }
}
const id = 5;

const getDatosCompletosEmpleados = async (id) => {

  try {

    const empleado = await getEmpleadoById(id);
    const sueldo = await getSueldoById(id);
    //return (`El empleado con id:${id} es ${empleado.nombre} y tiene un sueldo de ${sueldo.sueldo}`);
    return {
      id,
      nombre: empleado.nombre,
      sueldo: sueldo.sueldo
    }
  }catch (err) {
    console.log(err);
  }
}

getDatosCompletosEmpleados(id)
.then(data => console.log(`El empleado con id ${data.id} es ${data.nombre} y tiene un sueldo ${data.sueldo}`))
.catch(err => console.log(err.message));
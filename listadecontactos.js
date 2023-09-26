/*const listaDeContactos = [
  'Jeronimo Betancourt',
  'Manuela Cossio',
  'Juan Navia',
  'Salome Rodríguez',
  'Samantha Serna',
  'Lucas Jones',
  'Pablo Reyes',
  'Manuela Reinoso',
];

function agregarContacto(nombreApellido) {
  listaDeContactos.push(nombreApellido);
}

agregarContacto('Mathias Vargas');
agregarContacto('Ana Sofia Castro');

function eliminarContacto(nombreApellido) {
  const indice = listaDeContactos.indexOf(nombreApellido);
  if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
    console.log(
      `${nombreApellido} ha sido eliminado de la lista de contactos.`
    );
  }
}
eliminarContacto('Manuela Cossio');

function imprimirContactos() {
for (let i = 0; i < listaDeContactos.length; i++) 
{
  console.log(listaDeContactos[i]);
}
}

imprimirContactos()*/

const listaDeContactos = [
  {
    id: 1,
    nombres: 'Jeronimo',
    apellidos: 'Betancourt',
    telefono: '123-456-7890',
    email: 'jerob@gmail.com',
    ubicacion: ['Tulua', 'Cra 40']
  },
  {
    id: 2,
    nombres: 'Manuela',
    apellidos: 'Cossio',
    telefono: '987-654-3210',
    email: 'manuelac@gmail.com',
    ubicacion: ['Tulua', 'Cll 26']
  },
  {
    id: 3,
    nombres: 'Samantha',
    apellidos: 'Serna',
    telefono: '316-320-6080',
    email: 'sserna@gmail.com',
    ubicacion: ['Tulua', ' Corregimiento San Rafael'],
  },
  {
    id: 4,
    nombres: 'Lucas',
    apellidos: 'Jones',
    telefono: '987-031-2518',
    email: 'joneslucas@gmail.com',
    ubicacion: ['Cali', 'Av 100']
  },
  {
    id: 5,
    nombres: 'Juan Pablo',
    apellidos: 'Reyes',
    telefono: '325-491-1111',
    email: 'jpkings@gmail.com',
    ubicacion: ['Tulua', 'Cra 40'],
  },
  {
    id: 6,
    nombres: 'Manuela',
    apellidos: 'Reinoso',
    telefono: '315-655-2478',
    email: 'manureinoso@gmail.com',
    ubicacion: ['Tulua', 'Cra 27'],
  },
];

function agregarContacto(id, nombres, apellidos, telefono, email, ubicacion) {
  const nuevoContacto = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    email: email,
    ubicacion: ubicacion,
    
  };
  listaDeContactos.push(nuevoContacto);
}

agregarContacto(7, 'Juan Andres', 'Navia', '315-555-5151', 'juananavia@gmail.com', ['Tulua', 'Cll 30']);
agregarContacto(8, 'Salome', 'Rodríguez', '321-440-8521', 'rodriguezsalo@gmail.com', ['Buga', 'Cll 25']);

function eliminarContacto(id) {
  const indice = listaDeContactos.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) {
    const nombreApellido = `${listaDeContactos[indice].nombres} ${listaDeContactos[indice].apellidos}`;
    listaDeContactos.splice(indice, 1);
    console.log(`${nombreApellido} ha sido eliminado de la lista de contactos.`);
  }
}

eliminarContacto(5); // Eliminar por ID
eliminarContacto(10); // Intentar eliminar un contacto que no existe por ID

function imprimirContactos() {
  listaDeContactos.forEach((contacto) => {
    console.log(`ID: ${contacto.id}`);
    console.log(`Nombre completo: ${contacto.nombres} ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log(`Email: ${contacto.email}`);
    console.log(`Ubicación: ${contacto.ubicacion.join(',')}`);
    console.log('------------------------');
  });
}

imprimirContactos();

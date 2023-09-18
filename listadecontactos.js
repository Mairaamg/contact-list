const listaDeContactos = [
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

imprimirContactos()
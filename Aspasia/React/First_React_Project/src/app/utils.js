export const shuffleArray = (array) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// Obtener la ID del personaje desde la URL de la API de Star Wars
export const getIdFromUrl = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2]; // Devuelve la penúltima parte de la URL, que es la ID del personaje
};

// Generar enlaces de paginación basados en la cantidad total de elementos y elementos por página
export const getPaginationLinks = (elementsAmount, elementsPerPage) => {
  const pagesAmount = Math.ceil(elementsAmount / elementsPerPage); // Calcular el número total de páginas
  const linksData = [];
  
  for (let i = 0; i < pagesAmount; i++) {
    linksData.push(i); // Crear un array de números de página (0, 1, 2, ...)
  }
  
  return linksData;
};

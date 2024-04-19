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

export const getIdFromUrl = (url) => url.substring(url.lastIndexOf('/', url.lastIndexOf('/') - 1) + 1, url.lastIndexOf('/'));

export const getPaginationLinks = (elementsAmount, elementsPerPage, firstElement = 1) => {
    const pagesAmount = elementsAmount / elementsPerPage;
    const linksData = []
    for (let i = 0; i < pagesAmount; i++) {
        linksData.push(firstElement + i);
    }
    return linksData;
};
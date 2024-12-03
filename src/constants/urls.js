export const getData = (pageNumber) => {
    return `https://test.create.diagnal.com/data/page${pageNumber}.json`
}

export const getImages = (imageName) => {
    return `https://test.create.diagnal.com/images/${imageName}`
}

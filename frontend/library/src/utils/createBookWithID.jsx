import uniqid from "uniqid";

const createBookWithID = (newBook, source) => {
    return {
        ...newBook,
        source,
        isFavorite: false,
        id: uniqid(),
    };
};

export default createBookWithID;

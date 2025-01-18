import uniqid from "uniqid";

const createBookWithID = (newBook) => {
    return {
        ...newBook,
        isFavorite: false,
        id: uniqid(),
    };
};

export default createBookWithID;

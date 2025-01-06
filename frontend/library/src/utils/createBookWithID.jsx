import uniqid from "uniqid";

const createBookWithID = (book) => {
    return {
        ...book,
        isFavorite: false,
        id: uniqid(),
    };
};

export default createBookWithID;

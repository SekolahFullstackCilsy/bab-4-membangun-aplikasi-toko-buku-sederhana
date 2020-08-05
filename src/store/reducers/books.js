import * as actionTypes from "../actions/actionTypes";

const initialState = {
  books: [],
  book: {},
  booksInCart: [],
};

const book = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case actionTypes.GET_BOOK:
      return {
        ...state,
        books: action.payload,
      };
    case actionTypes.GET_BOOK_BY_ID:
      return {
        ...state,
        book: action.payload,
      };
    case actionTypes.UPDATE_BOOK:
      return {
        ...state,
      };
    case actionTypes.DELETE_BOOK:
      return {
        ...state,
      };
    case actionTypes.ADD_TO_CART:
      console.log("action.payload", action.payload);
      return {
        ...state,
        booksInCart: [...state.booksInCart, action.payload],
        //booksInCart: state.booksInCart.push(action.payload),
      };
    default:
      return initialState;
  }
};

export default book;

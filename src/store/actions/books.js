import * as actionTypes from "./actionTypes";
import axios from "axios";
import { ENDPOINT, access_token } from "../../utils/globals";

export const addToCart = (book) => {
  console.log("actionTypes.ADD_TO_CART", actionTypes.ADD_TO_CART);
  return {
    type: actionTypes.ADD_TO_CART,
    payload: book,
  };
};

export const getListBook = () => {
  const request = axios.get(`${ENDPOINT}/book/findAll`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      return dispatch({
        type: actionTypes.GET_BOOK,
        payload: response.data,
      });
    });
  };
};

// get book by id
export const getBookById = (id) => {
  // http request
  const request = axios.get(`${ENDPOINT}/book/findById/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  // redux thunk untuk dispatch
  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionTypes.GET_BOOK_BY_ID,
        payload: response.data,
      });
    });
  };
};

export const updateBook = (data) => {
  const request = axios.post(`${ENDPOINT}/book/update`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionTypes.UPDATE_BOOK,
        payload: response.data,
      });

      return dispatch(getListBook());
    });
  };
};

export const deleteBook = (id) => {
  const request = axios.delete(`${ENDPOINT}/book/deleteById/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionTypes.DELETE_BOOK,
        payload: response.data,
      });
    });

    return dispatch(getListBook());
  };
};

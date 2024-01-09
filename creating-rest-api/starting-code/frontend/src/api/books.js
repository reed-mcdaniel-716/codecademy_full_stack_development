// TODO: Import API_ENDPOINT
import { API_ENDPOINT } from "./index";

// TODO: Create the addNewBook function that takes in newTitle, newStart, and newEnd as arguments. Inside the function, create a POST request for the new book. Store the response as a JSON in a variable called newBook and return it at the end of the function.
export const addNewBook = async (newTitle, newStart, newEnd) => {
  const resp = await fetch(`${API_ENDPOINT}/books`, {
    method: "POST",
    body: JSON.stringify({
      title: newTitle,
      start: newStart,
      end: newEnd,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newBook = await resp.json();
  return newBook;
};

// TODO: Create the getBooks function that retrieves all of the books that have been saved to the back-end API
export const getBooks = async () => {
  const resp = await fetch(`${API_ENDPOINT}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const books = await resp.json();
  return books;
};

// TODO: Create the updateBook function that takes the arguments id, newTitle, newStart, newEnd. Inside of the function, create a PUT request for the specified book to be updated. Return the status of the response at the end of the function.
export const updateBook = async (id, newTitle, newStart, newEnd) => {
  const resp = await fetch(`${API_ENDPOINT}/books/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: newTitle,
      start: newStart,
      end: newEnd,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return resp.status;
};

// TODO: Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.
export const deleteBook = async (id) => {
  const resp = await fetch(`${API_ENDPOINT}/books/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return resp.status;
};

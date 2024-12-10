import { useState } from "react";
import { requestWrapper } from "./helpers/requestsWrapper";

export function useGetBooks() {
    const [books, setBooks] = useState([]);
    requestWrapper("http://localhost:8080/api/books").then(data => {
        setBooks(data);
    });
    return books;
}
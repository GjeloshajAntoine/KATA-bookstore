import styled from "styled-components";
import { BookItem } from "./BookItem";

const StyledBooksList = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`;

export function BooksList({books}) {
    return (<StyledBooksList>
        {books.map(({name, author, price}, idx) => (
            <BookItem key={idx} name={name} author={author} price={price} />
        ))}
    </StyledBooksList>);
}
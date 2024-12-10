import { BookItem } from "./BookItem";


export function BooksList({books}) {
    return (<div>
        {books.map(({name, author, price}, idx) => (
            <BookItem key={idx} name={name} author={author} price={price} />
        ))}
    </div>);
}
import { BookItem } from "./BookItem";


export function BooksList({books}) {
    return (<div>
        {books.map(({title, author, price}, idx) => (
            <BookItem key={idx} title={title} author={author} price={price} />
        ))}
    </div>);
}
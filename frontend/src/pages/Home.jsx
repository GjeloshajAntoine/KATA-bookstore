import { BooksList } from "../components/BooksList";
import { Header } from "../components/Header";
import { useGetBooks } from "../services/hooks";


export function Home() {
    const books = useGetBooks();
    
    return (
        <div>
            <Header />
            <BooksList books={books} />
        </div>
    )
}
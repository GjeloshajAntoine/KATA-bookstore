import { render } from '@testing-library/react';
import { test, expect } from 'vitest'
import { Cart } from '../../components/Cart';


test("Check book name appears in the cart list",() => {
    const testBooks = [{
        name: "Selected book",
        author: "Test",
        price: 5
    }];
    const { queryByText } = render(<Cart books={testBooks}/>);
    expect(queryByText("Selected Book")).toBeTruthy();
});

test("Check number counter matches the number of books in the cart",() => {
    const testBooks = [{
        name: "Selected book",
        author: "Test",
        price: 5
    },
    {
        name: "Second book",
        author: "Second author",
        price: 10
    }
    ];
    const { queryByText } = render(<Cart books={testBooks}/>);
    expect(queryByText("books: 2")).toBeTruthy();
});
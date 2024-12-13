import { render } from '@testing-library/react';
import { test, expect } from 'vitest'
import { Cart } from '../../components/Cart';


test("Check boot name appears in the cart list",() => {
    const testBooks = [{
        name: "Selected book",
        author: "Test",
        price: 5
    }];
    const { queryByText } = render(<Cart books={testBooks}/>);
    expect(queryByText("Selected Book")).toBeTruthy();
});
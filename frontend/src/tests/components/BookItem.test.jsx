import { render } from '@testing-library/react';
import { test, expect } from 'vitest'
import { BookItem } from '../../components/BookItem';


test("Book has title", () => {
    const { queryByText } = render(<BookItem title={"Example title"} author="" price="5" id="1"/>);
    expect(queryByText("Example title")).toBeTruthy();

});
import { Header } from "../../components/Header";
import { render } from '@testing-library/react';
import { test, expect } from 'vitest'


test("Header has a title", () => {
    const { queryByText } = render(<Header />);
    expect(queryByText("Book Store")).toBeTruthy();
});
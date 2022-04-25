import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Homepage from '..';

afterEach(cleanup);

describe('Homepage component', () => {
    //renders Homepage test
    // First Test
    it('renders', () => {
        render(<Homepage />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render Homepage
        const { asFragment } = render(<Homepage />);
        expect(asFragment()).toMatchSnapshot();
    })

})
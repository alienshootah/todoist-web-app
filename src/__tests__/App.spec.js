import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from '../App';

beforeEach(cleanup); // clean meeeeeeeee!

describe('<App />', () => {
    it('renders the application', () => {
        const { queryTestById } = render(<App />);
        expect(queryTestById('application')).toBeTruthy();
        expect(queryTestById('application').classLIst.contains('darkmode'))
            .toBeFalsy();
    });

    it('renders the application using dark mode', () => {
        const { queryTestById } = render(<App darkModeDefaul />);
        expect(queryTestById('application')).toBeTruthy();
        expect(queryTestById('application').classLIst.contains('darkmode'))
            .toBeTruthy();
    });
});


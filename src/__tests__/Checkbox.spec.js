import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox';

beforeEach(cleanup); // clean the DOM!

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    update: jest.fn(),
                })),
            })),
        })),
    },
}));

describe('<Checkbox />', () => {
    describe('Success', () => {
        it('renders the task checkbox', () => {
            const { queryByTestId } = render(
            <Checkbox id="1" taskDesc="Finish this tutorial series!" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
        });

        it('it renders the task checkbox and a accepts a onClick', () => {
            const { queryByTestId } = render(
                <Checkbox id="1" taskDesc="Finish this tutorial series!" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEven.click(queryByTestId('checkbox-action'));
        });

        it('it renders the task checkbox and a accepts a onKeyDown', () => {
            const { queryByTestId } = render(
                <Checkbox id="1" taskDesc="Finish this tutorial series!" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEven.keyDown(queryByTestId('checkbox-action'));
        });
    });
});
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { AddProject } from '../components/AddProject';
import { useSelectedProjectValue } from '../context';

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(),
    useProjectsValue: jest.fn(() => ({
        projects: [
            {
                name: '🎸 Music',
                projectsId: '2',
                userId: 'aM9MoVCGrpVdGEAwmbDYZzzCd022',
                docId: 'wake-up1'
            },
            {
                name: '♭ Test',
                projectsId: '-Lzqms7i------------',
                userId: 'aM9MoVCGrpVdGEAwmbDYZzzCd022',
                docId: 'wake-up2'
            },
            {
                name: '☔ Weather',
                projectsId: '-LzrDooV------------',
                userId: 'aM9MoVCGrpVdGEAwmbDYZzzCd022',
                docId: 'wake-up3'
            },
            {
                name: '🎧 Second',
                projectsId: '2-LzqlTwX------------',
                userId: 'aM9MoVCGrpVdGEAwmbDYZzzCd022',
                docId: 'wake-up4'
            },
            {
                name: '☃ Yes',
                projectsId: '2',
                userId: '-LzpfyF_------------',
                docId: 'wake-up5'
            },
            
        ],
        setProjects: jest.fn(),
    })),
}));

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                add: jest.fn(() => Promise.resolve('I am resolved!')),
            })),
        })),
    },
}));

beforeEach(cleanup); 

describe('<AddProject />', () => {
    describe('Success', () => {
        it('renders <AddProject />', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
        });

        it('renders <AddProject /> and adds a project using onClick', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();

            fireEvent.change(queryByTestId('project-name'), {
                target: { value: 'Best project in the world!' },
            });
            expect(queryByTestId('project-name').value)
                    .toBe('Best project in the world!'
            );
            fireEvent.click(queryByTestId('add-project-submit'));
        });

        it('renders <AddProject /> and adds a project using onKeyDown', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();

            fireEvent.change(queryByTestId('project-name'), {
                target: { value: 'Best project in the world!' },
            });
            expect(queryByTestId('project-name').value)
                    .toBe('Best project in the world!'
            );
            fireEvent.keyDown(queryByTestId('add-project-submit'));
        });

        it('hides the project overlay when cancelled using onClick', () => {
            const { queryByTestId, getByText } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();
            
            fireEvent.click(getByText('Cancel'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });

        it('hides the project overlay when cancelled using onKeyDown', () => {
            const { queryByTestId, getByText } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();
            
            fireEvent.keyDown(getByText('Cancel'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });

        it('hides the project overlay using onClick singular and reverce action', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();
            
            fireEvent.click(queryByTestId('add-project-action'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });

        it('hides the project overlay using onKeyDown singular and reverce action', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeTruthy();
            
            fireEvent.keyDown(queryByTestId('add-project-action'));
            expect(queryByTestId('add-project')).toBeTruthy();
            expect(queryByTestId('add-project-inner')).toBeFalsy();
        });
    });
});
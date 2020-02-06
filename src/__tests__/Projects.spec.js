import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Projects } from '../components/Projects';

beforeEach(cleanup); // thanks!

jest.mock('../content', () => ({
    useSelectedProjectValue: jest.fn(() => ({
        setSelectedProject: jest.fn(() => 'INBOX'),
    })),
    useProjectsValue: jest.fn(() => ({
        projects: [
            {
                name: '🎸 Music',
                projectId: '2',
                userId: 'aM9MoVCGrpVdGEAwmbDYZzzCd022',
                docId: 'michael-scott',
            },
        ],
    })),
}));



describe('<ProjectOverlay />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Success', () => {
        it('render the projects', () => {
            const { queryByTestId } = render(<Projects />);
            expect(queryByTestId('project-action')).toBeTruthy();
        });

        it('renders the projects with an active project using onClick', () => {
            const { queryByTestId } = render(<Projects activeValue="1" />);
            expect(queryByTestId('project-action')).toBeTruthy();

            fireEvent.click(queryByTestId('project-action'));
            expect(
                queryByTestId('project-action-parent').classList.contains('active')
            ).toBeTruthy();
        });

        it('renders the projects with an active project using onKeyDown', () => {
            const { queryByTestId } = render(<Projects activeValue="1" />);
            expect(queryByTestId('project-action')).toBeTruthy();

            fireEvent.keyDown(queryByTestId('project-action'));
            expect(
                queryByTestId('project-action-parent').classList.contains('active')
            ).toBeTruthy();
        });

        it('renders the projects with no active value', () => {
            const { queryByTestId } = render(<Projects activeValue="1" />);
            expect(queryByTestId('project-action')).toBeTruthy();

            fireEvent.keyDown(queryByTestId('project-action'));
            expect(
                queryByTestId('project-action-parent').classList.contains(
                    'sidebar__project'
                )
            ).toBeTruthy();
        });
    });
});


import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Tasks } from '../components/Tasks';
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
    })),
}));

jest.mock('../hooks', () => ({
    useTasks: () => ({
        tasks: [
            {
                id: '3',
                archived: false,
                date: '30/01/2020',
                projectID: '-LzrDooV------------',
                task: 'assss',
                userId: 'aM9MoVCGrpVdGEAwmbDYZzzCd022',
            },
        ],
    }),
}));

beforeEach(cleanup);

describe('<Tasks />', () => {
    afterEach(() => {
        jest.claerAllMocks();
    });

    it('renders tasks', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => 'INBOX'),
            SelectedProject: 'INBOX',
        }));
        
        const { queryByTestId } = render(<Tasks />);
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('Inbox');
    });

    it('renders a task with a project title', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => '1'),
            selectedProject: '1'
        }));
        
        const { queryByTestId } = render(<Tasks />);
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('🎸 Music');
    });

    it('renders a task with a project title', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => 'INBOX'),
            selectedProject: 'INBOX',
        }));
        
        const { queryByTestId } = render(<Tasks />);
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('Inbox');
    });
});
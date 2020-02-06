import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTask';

export const Header = ({ darkMode, setDarkMode }) => {
    const [shouldShowMain, setShouldShowMain] = useState();
    const [showQuickAddTask, setShowQuickAddTask] = useState();

    return (
    <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="Todoist" />
            </div>
            <div className="settings">
                <ul>
                    <li className="settings__add">
                        <button 
                            aria-label="Quick Add Task"
                            type="button"
                            onClick={() => {
                                setShowQuickAddTask(true); 
                                setShouldShowMain(true);
                            }}
                            onKeyDown={() => {
                                setShowQuickAddTask(true); 
                                setShouldShowMain(true);
                            }}
                            data-testid="quick-add-task-action" 
                        >+</button>
                    </li>
                    <li className="settings_darkmode">
                        <button 
                            aria-label="Darkmode on/off"
                            type="button"
                            onClick={() => setDarkMode(!darkMode)}
                            onKeyDown={() => setDarkMode(!darkMode)}
                            data-testid="dark-mode-action"
                        >
                            <FaPizzaSlice />
                        </button>
                        
                    </li>
                </ul>
            </div>
        </nav>

        <AddTask 
            showAddTaskMain={false}
            shouldShowMain={shouldShowMain}
            showQuickAddTask={showQuickAddTask}
            setShowQuickAddTask={setShowQuickAddTask}
        />
    </header>
    )
};
import React, { useState } from 'react'
import Todo from '../Sections/Todo/Todo'
import InProgress from '../Sections/Inprogress/InProgress'
import "./home.css"
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from "uuid";

const todoData = [
    {
        id: uuidv4(),
        project: "Project A",
        message: 0
    },
    {
        id: uuidv4(),
        project: "Project B",
        message: 2
    },
    {
        id: uuidv4(),
        project: "Project C",
        message: 1
    },
    {
        id: uuidv4(),
        project: "Project M",
        message: 0
    },
    {
        id: uuidv4(),
        project: "Project K",
        message: 2
    }
];

const inProgressData = [
    {
        id: uuidv4(),
        project: "Project G",
        message: 2
    },
    {
        id: uuidv4(),
        project: "Project P",
        message: 0
    },
    {
        id: uuidv4(),
        project: "Project F",
        message: 0
    },
    {
        id: uuidv4(),
        project: "Project Z",
        message: 0
    }
];

const reviewData = [
    {
        id: uuidv4(),
        project: "Project W",
        message: 14
    },
    {
        id: uuidv4(),
        project: "Project T",
        message: 10
    },
    {
        id: uuidv4(),
        project: "Project U",
        message: 6
    },
    {
        id: uuidv4(),
        project: "Project Q",
        message: 0
    },
    {
        id: uuidv4(),
        project: "Project V",
        message: 2
    }
];

const doneData = [
    {
        id: uuidv4(),
        project: "Project D",
        message: 14
    },
    {
        id: uuidv4(),
        project: "Project N",
        message: 10
    },
    {
        id: uuidv4(),
        project: "Project X",
        message: 6
    },
    {
        id: uuidv4(),
        project: "Project R",
        message: 0
    }
];


const Home = () => {


    const [todos, setTodos] = useState(todoData)
    const [inProgress, setInProgress] = useState(inProgressData)



    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            <div className='home-main-container'>
                <div>
                    <Todo todos={todos} />
                </div>
                <div>
                    <InProgress inProgress={inProgress} />
                </div>
            </div>
        </DragDropContext>
    )
}

export default Home
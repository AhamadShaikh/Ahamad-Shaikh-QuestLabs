import React, { useEffect, useState } from 'react'
import Todo from '../Sections/Todo/Todo'
import InProgress from '../Sections/Inprogress/InProgress'
import Review from '../Sections/Review/Review'
import Done from '../Sections/Done/Done'
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
    const [review, setReview] = useState(reviewData)
    const [done, setDone] = useState(doneData)

    const [inputValue, setInputValue] = useState("")
    const [show, setShow] = useState(false)


    const handleAddCard = () => {
        if (!inputValue.trim()) {
            return;
        }

        const newCard = {
            id: uuidv4(),
            project: inputValue,
            message: 0
        };

        console.log(newCard);

        setTodos([...todos, newCard]);
        setInputValue("");
        if (inputValue !== "") {
            setShow(false)
        }
    };


    const onDragEnd = (result) => {
        const { destination, source } = result;

        console.log(result);

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        let add;
        let todo = todos;
        let progressTodo = inProgress;
        let reviewTodo = review
        let doneTodo = done

        if (source.droppableId === "TodoList") {
            add = todo[source.index];
            todo.splice(source.index, 1);
        } else if (source.droppableId === "InProgressList") {
            add = progressTodo[source.index];
            progressTodo.splice(source.index, 1);
        } else if (source.droppableId === "ReviewList") {
            add = reviewTodo[source.index]
            reviewTodo.splice(source.index, 1)
        } else if (source.droppableId === "DoneList") {
            add = doneTodo[source.index];
            doneTodo.splice(source.index, 1);
        }

        if (destination.droppableId === "TodoList") {
            todo.splice(destination.index, 0, add);
        } else if (destination.droppableId === "InProgressList") {
            progressTodo.splice(destination.index, 0, add);
        } else if (destination.droppableId === "ReviewList") {
            reviewTodo.splice(destination.index, 0, add);
        } else if (destination.droppableId === "DoneList") {
            doneTodo.splice(destination.index, 0, add);
        }

        setInProgress(progressTodo);
        setTodos(todo);
        setReview(reviewTodo)
        setDone(doneTodo)
    };



    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            <div className='home-main-container'>
                <div>
                    <Todo todos={todos} handleAddCard={handleAddCard} inputValue={inputValue} setInputValue={setInputValue} show={show} setShow={setShow} />
                </div>
                <div>
                    <InProgress inProgress={inProgress} />
                </div>
                <div>
                    <Review review={review} />
                </div>
                <div>
                    <Done done={done} />
                </div>
            </div>
        </DragDropContext>
    )
}

export default Home
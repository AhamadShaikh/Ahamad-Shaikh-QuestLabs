import React, { useState } from 'react'
import TodoCard from '../../Components/TodoCard'
import { BsThreeDots } from "react-icons/bs";
import "./todo.css"
import { Droppable } from 'react-beautiful-dnd';

const Todo = ({ todos, handleAddCard, inputValue, setInputValue, show, setShow }) => {

    const handleAddCardBtn = () => {
        setShow(!show)
    }

    return (
        <div className='todo'>
            <Droppable droppableId='TodoList'>
                {
                    (provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <div className='todo-header'>
                                <div>
                                    <b>Todo</b>
                                </div>
                                <div>
                                    <BsThreeDots />
                                </div>
                            </div>
                            <div className='todo'>
                                {
                                    todos?.map((ele, ind) => (
                                        <TodoCard key={ind} item={ele} index={ind} />
                                    ))
                                }
                            </div>
                            {provided.placeholder}
                            {
                                show ? (
                                    <div className='create-card'>
                                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                        <button onClick={handleAddCard}>Add a card</button>
                                    </div>
                                ) :
                                    (
                                        <div className='addCardBtn'>
                                            <button onClick={handleAddCardBtn}>+ Add a card</button>
                                        </div>
                                    )
                            }


                        </div>
                    )
                }

            </Droppable>

        </div>
    )
}

export default Todo
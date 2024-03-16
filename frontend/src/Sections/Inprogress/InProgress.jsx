import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import "./inProgress.css";
import { Droppable } from 'react-beautiful-dnd';
import TodoCard from '../../Components/TodoCard';

const InProgress = ({ inProgress }) => {
    return (
        <div className='InProgress'>
            <Droppable droppableId='InProgressList'>
                {
                    (provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <div className='InProgress-header'>
                                <div>
                                    In Progress
                                </div>
                                <div>
                                    <BsThreeDots />
                                </div>
                            </div>
                            <div className='InProgress'>
                            {
                                inProgress?.map((item,ind) => (
                                    <TodoCard key={item.id}  item={item} index={ind}/>
                                ))
                            }
                            </div>
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    );
}

export default InProgress;

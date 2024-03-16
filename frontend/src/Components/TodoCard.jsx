import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import { FiAlignLeft } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import "./todoCard.css";

const TodoCard = ({ item, index }) => {
    if (!item || !item.id) {
        console.error("Invalid item object:", item);
        return null; 
    }

    return (
        <Draggable draggableId={item.id.toString()} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className='todo-card-main'>
                        <div className={`color-bar`}></div>
                        <p>{item.project}</p>
                        <div className='container-2'>
                            <div><FiAlignLeft /></div>
                            <div className='message'>
                                <div><FaRegMessage /></div>
                                <div>{item.message}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
}

export default TodoCard;

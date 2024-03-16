import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import "./done.css"
import { Droppable } from 'react-beautiful-dnd';
import TodoCard from '../../Components/TodoCard';

const Done = ({ done }) => {

  return (
    <div className='Done'>
      <Droppable droppableId='DoneList'>
        {
          (provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className='Done-header'>
                <div>
                  <b>Done</b>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className='Done'>
                {
                  done?.map((ele, ind) => (
                    <TodoCard key={ind} item={ele} index={ind} />
                  ))

                }
              </div>
              {provided.placeholder}
              <div className='addCardBtn'>
                <button>+ Add a card</button>
              </div>
            </div>
          )
        }

      </Droppable>

    </div>
  )
}

export default Done
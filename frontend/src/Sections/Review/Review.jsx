import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import "./review.css"
import { Droppable } from 'react-beautiful-dnd';
import TodoCard from '../../Components/TodoCard';

const Review = ({ review }) => {

  return (
    <div className='Review'>
      <Droppable droppableId='ReviewList'>
        {
          (provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className='Review-header'>
                <div>
                  <b>Reviews</b>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className='Review'>
                {
                  review?.map((ele, ind) => (
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

export default Review
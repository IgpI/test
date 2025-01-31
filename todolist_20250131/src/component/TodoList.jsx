import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {
  return (
    <div className="todoList">
        <div className="todos">
            {taskList.map(task => {
                    <div className="todo">
                        <div className="todoText">
                        <span>{task.text}</span>
                        </div>
                        <div className='icons'>
                            <button>
                                bbbb
                            </button>
                            <button>
                                cccc
                            </button>
                        </div>
                    </div>
            })}
        </div>
    </div>
  );
};

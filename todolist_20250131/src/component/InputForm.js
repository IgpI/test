import React, { useState } from 'react'

export const InputForm = ({taskList,setTaskList}) => {

  const [inputText,setInputText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
        /*スプレッドフォーム ...は以前の情報が入っている*/
        ...taskList,
        {
            text:inputText
        }
    ]);
    console.log(taskList);
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className="InputForm">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button>
                aaaaa
            </button>
        </form>
    </div>
  )
}


import { Title } from './component/Title';
import { InputForm } from './component/InputForm';
import { TodoList } from './component/TodoList';
import { useState } from 'react';

function App() {
const [taskList,setTaskList] = useState([]);

  return (
    <div className="body">
      <Title/>
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;

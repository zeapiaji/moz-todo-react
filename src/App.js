import Todo from "./components/Todo";

function App(props) { 
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));
  
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText= `${taskList.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = {id: `todo-${nanoid()}`, name, completed: false};
    setTasks([...tasks, newTask]);
   }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {

      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
   }

  function deleteTask(id) { 
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
   }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input"
          className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input type="text"
         name="new-todo-input" 
         className="input input__lg" 
         autoComplete="off" 
         />
         <button type="submit" className="btn btn__primary btn__lg">
          Add
         </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn"
        aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>All</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn"
        aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn"
        aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Complete</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>

      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">  
        <Todo />
        <Todo />
        <Todo />
      </ul>

    </div>
  )
 }

export default App;

// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
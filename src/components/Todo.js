const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteTodo = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completedTodo = () => {
        
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }
        ));

    }

    return ( 
        <div>
            <div className="todo">
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                    <button className="complete-btn" onClick={completedTodo}>
                        <i className="fas fa-check"></i>
                    </button>
                    <button className="trash-btn" onClick={deleteTodo}>
                        <i className="fas fa-trash"></i>
                    </button>
            </div>
        </div>
     );
}
 
export default Todo;
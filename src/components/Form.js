
const Form = ({input, setInput, todos, setTodos, setStatus}) => {

    const userText = (e) => {
        setInput(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
             {text: input, completed: false, id: Math.random()*100}
        ]);
        setInput('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            <form>
                <div className="input-txt">
                    <input value={input} type="text" className="todo-input" onChange={userText} />
                    <button onClick={submitTodo} className="todo-button" type="submit" >
                        <i className="fas fa-plus-square"></i>
                    </button>
                </div>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
            </div>
            </form>
        </div>
     );
}
 
export default Form;
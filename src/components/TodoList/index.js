import React , { useState} from 'react';
import './style.css';


const TodoList = ({todo, setTodo}) => {
    const [edit,setEdit] = useState("")
    const [value,setValue] = useState("")



    //Функциия для уданения задач
        function deleteTodo(id) {
            let newTodo = [...todo].filter(item => item.id !== id)
            setTodo(newTodo)
        }

        function statusTodo(id) {
            let newTodo = [...todo].filter(item => {
                if(item.id === id){
                    item.status = !item.status
                }
              return item
            })
            setTodo(newTodo)
        }

        //Функциия для изменения задач
        function editTodo(id , title){
            setEdit(id)
            setValue(title)
        }
        //Функциия для сохранений задач

        function seveTodo(id){
        let newTodo = [...todo].map((item) => {
         if(item.id === id){
            item.title = value
        }
            return item
        })
           setTodo(newTodo)
           setEdit("")
        }



    return (
        <div className='todo-list'>
        {todo.map((item) => (
                <div key={item.id}>
                    {edit === item.id ? (
                        <div> 
                        <input className='set-name' placeholder='Изменить' value={value} onChange={e => setValue(e.target.value)}/>
                        </div>
                    ) : (
                        <div style={{textDecoration : item.status ? 'line-through' : 'none'}}>
                        {item.title}
                        </div>
                        )}
                      {edit === item.id ? (
                    <div>
                         <button className='save-todo' onClick={() => seveTodo(item.id)}>Сохранить</button>
                    </div>
                    ) : (
                    <div>
                <button className='delete-todo'  onClick={() => deleteTodo(item.id)}>Удалить</button>
                <button className='edit-todo' onClick={() => editTodo(item.id , item.title)}>
                    Изменить
                </button>
                <button className='status-todo' onClick={() => statusTodo(item.id)}>Сделано</button>
                    </div>
                   )}
                </div>
                
            ))}
        </div>
    )
}

export default TodoList;
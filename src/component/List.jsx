import { useContext, useMemo, useState } from 'react';
import './List.css';
import Todoitem from './Todoitem';
import { TodoDispatchContext, TodoStateContext } from '../App';

const List = ()=>{
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const todos = useContext(TodoStateContext);

    const [search,setSearch] = useState("");

    const searchChange = (e)=>{
        setSearch(e.target.value);
        console.log(search);
    }

    const filterdSearch = ()=>{
        if(search===""){
            return todos;
        }
        return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const getFilterdSearch = filterdSearch();

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((item)=>item.isDone).length;
        const notDoneCount = totalCount-doneCount;
        return { totalCount, doneCount, notDoneCount};
    },[todos]);

    return (
        <div className="list">
            <h4>Todo List 🧶</h4>
            <div>total : {totalCount}</div>
            <div>done : {doneCount}</div>
            <div>not done : {notDoneCount}</div>
            <input value={search} onChange={searchChange} type="text" placeholder="검색어를 입력하세요"/>
            <div className='todosWrapper'>
                {
                    getFilterdSearch.map((todo)=>{
                        return <Todoitem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
                    })   
                }
            </div>
        </div>
    )
};

export default List;
import { useState, useRef, useReducer} from 'react'
import './App.css'
import Header from './component/Header'
import Editor from './component/Editor'
import List from './component/List'
import Exam from './component/exam'
import { createContext, useMemo } from 'react'

const reducer=(state, action)=>{
  switch(action.type){
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : return state.map((item)=>(item.id === action.targetId)?{...item, isDone: !item.isDone,}:item);
    case "DELETE" : return state.filter((item)=>action.targetId!==item.id);
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {

  const mokData = [
    {
      id:3,
      isDone:false,
      content: "3번입니다다",
      date: new Date().toDateString()
    },
    {
      id:2,
      isDone:false,
      content: "2번입니다다",
      date: new Date().toDateString()
    },
    {
      id:1,
      isDone:false,
      content: "1번입니다다",
      date: new Date().toDateString()
    },
  ]

  const [todos, dispatch] = useReducer(reducer,mokData);

  const idRef = useRef(4);

  const onCreate = (content)=>{
    dispatch({
      type:"CREATE",
      data : {
        id:idRef.current++,
        isDone:false,
        content:content,
        date: new Date().toDateString()
      }
    })
    console.log(todos);
  }

  const onUpdate = (targetId)=>{
    dispatch({
      type:"UPDATE",
      targetId : targetId,
      }
    )
  }

  const onDelete = (targetId)=>{
    dispatch({
      type:"DELETE",
      targetId: targetId,
    })
  }

  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete};
  },[]);

  return (
    <div className='app'>
      {/* <Exam /> */}
      <Header />
      <TodoStateContext value={todos}>
        <TodoDispatchContext value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext>
      </TodoStateContext>
    </div>
  )
}

export default App;

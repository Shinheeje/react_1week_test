import { useState } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState([])

  const [done, setDone] = useState([])

  const [title, setTitle] = useState('')
  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const [body, setBody] = useState('')
  const bodyChangeHandler = (event) => {
    setBody(event.target.value)
  }

  const clickTodoRemoveHandler = (id) => {
    const removeTodo = todo.filter((e) => {
      return e.id !== id
    })

    setTodo(removeTodo)
  }

  const clickDoneRemoveHandler = (id) => {
    const removeDone = done.filter((e) => {
      return e.id !== id
    })
    setDone(removeDone)
  }

  const clickAddHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: body,
      isDone: false
    }

    setTodo([...todo, newTodo])
  }


  const clickcompleteHandler = (id) => {
    const completedTodo = todo.find((e) => e.id === id);
    const newTodo = todo.filter((e) => e.id !== id);
    setDone([...done, completedTodo]);
    setTodo(newTodo);
  }

  const clickCancelHandler = (id) => {
    const canceledTodo = done.find((e) => e.id === id);
    const newDone = done.filter((e) => e.id !== id);
    setTodo([...todo, canceledTodo]);
    setDone(newDone);
  }

  return (
    <div className='container'>
      <header>
        <p>My Todo List</p>
        <p>React</p>
      </header>

      <div className='inputBox_wrap'>
        <div className='inputBox'>
          <span>제목</span>
          <input value={title} onChange={titleChangeHandler} />

          <span>내용</span>
          <input value={body} onChange={bodyChangeHandler} />
        </div>


        <button onClick={clickAddHandler}>추가하기</button>
      </div>

      <h1>Working.. 🔥</h1>
      <div className='working'>
        {
          todo.map((item) => {
            return (
              <div className='workingBox'>
                <div className='workingBoxItem'>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <div className='workingButton'>
                    <button className='remove' onClick={() => clickTodoRemoveHandler(item.id)}>삭제하기</button>
                    <button onClick={() => clickcompleteHandler(item.id)}>완료</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <h1>Done..! 🎉</h1>
      <div className='done'>
        {
          done.map((item) => {
            return (
              <div className='doneBox'>
                <div className='doneBoxItem'>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <div className='doneButton'>
                    <button className='remove' onClick={() => clickDoneRemoveHandler(item.id)}>삭제하기</button>
                    <button onClick={() => clickCancelHandler(item.id)}>취소</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
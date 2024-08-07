import {useState,useRef} from 'react';
import TodoBoard from './components/TodoBorad';
import Header from './components/header';
import './components/reset.css'
import './components/todo-item.css'


function App() {
  const [todo, setTodo] = useState('');
  const [lists, setLists]=useState( [{
    id:1,
    todo:'첫번째 할일',
  },{
    id:2,
    todo:'두번째 할일',
  },{
    id:3,
    todo:'세번째 할일',
  }]);

  const ch= (e)=>{
    setTodo(e.target.value)
  };

  //추가
  let addId = useRef(4)

  function addItem(){
    let list = {
      id : addId.current,
      todo
    }
    setLists([...lists,list])
    setTodo('')
    addId.current++;
  }
  //수정
  const updateItem = (updatedItem) => {
    setLists(lists.map((list) => (list.id === updatedItem.id ? updatedItem : list)));
  };

  //삭제
  const deleteBtn = (targetId)=>{
  setLists(
    lists.filter((list)=>list.id !== targetId))
  }
  return (
    <>
    <section>
    <div className='App'>
      <Header />
      <div className='flex'>
        <input className='todoPlus' type='text' value={todo} onChange={ch} placeholder='할일을 입력하세요'/>
        <button className='todoPlusBtn' onClick={addItem}>추가</button>
      </div>  
    </div>
    <div>
      <TodoBoard addItem={addItem} lists={lists} deleteBtn={deleteBtn} updateItem={updateItem}/>
    </div>
    </section>
    </>
  );
}

export default App;

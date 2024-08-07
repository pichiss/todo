
const EventList =({list,deleteBtn})=>{
    function onDeleteBtn(){
        let id= list.id
        deleteBtn(id)
    };
    return(
        <div className="flex">
        <li className="todoitem"><div><span>{list.id}</span>{list.todo} </div></li>
        <div className="flex">
        <button>수정</button>
        <button onClick={onDeleteBtn}>삭제</button>            
        </div>
        </div>
    )
}

const TodoBoard = ({lists,deleteBtn})=>{
    return(
        <div className="all">
            <h1>Todo List</h1>
            <ul>
            {/* {update ?         
             <span>{content}</span>   
            : 
                <div>
                    <textarea className="editText" name="content" value={editCont} onChange={editChange}></textarea>
                </div>
            } */}
                {lists.map((list)=> <EventList key={list.id} list={list} deleteBtn={deleteBtn}/>)}
            </ul>
            
        </div>
    )
}

export default TodoBoard;
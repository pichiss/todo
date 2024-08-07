import {useState,useEffect} from 'react';


const TodoBoard = ({lists,deleteBtn,updateItem})=>{
    const [update, setUpdate] = useState(true);
    const [editdo, setEditdo] = useState({});
    
    useEffect(() => {
        if (lists.length > 0) {
            setEditdo(lists[0]);
        }
    }, [lists]);

    // 수정버튼
    function editBtn(){
        setUpdate(!update)
    }
    //수정
    function editChange(e) {
        setEditdo({ ...editdo, todo: e.target.value });
    }

    // 수정 저장
    function saveBtn(){
        if(window.confirm(`변경 하시겠습니까?`)){
            updateItem(editdo);
            editBtn()
         }
        }

    // 수정취소
    function cancleBtn(){
        setUpdate(!update)
        }
        
    // 삭제
    function onDeleteBtn(){
        let id= editdo.id
        deleteBtn(id)
    }

    return(
        <div className="all">
            <h1>Todo List</h1>
            {update? 
            <div>
                    {lists.map((list)=>
                    <div className='flex'key={list.id}>
                    <div className='todoitem'><span>{list.id}</span>{list.todo}</div>
<button onClick={() => { setEditdo(list); editBtn(); }}>수정</button>
                            <button onClick={() => onDeleteBtn(list.id)}>삭제</button>
                    </div>
                    )}
                </div>
                :
                <div>
                    <textarea className="todoPlus" name="content" value={editdo.todo} onChange={editChange}></textarea>
                    <button className='todoPlusBtn' onClick={saveBtn}>저장</button>
                    <button className='todoPlusBtn' onClick={cancleBtn}>취소</button>
                </div>
            }
        </div>
    )
}

export default TodoBoard;
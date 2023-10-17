import React, {useState} from 'react'


const TodoApp = () => {

    const [input, setInputs] = useState({ todo: ""});
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [updatetodo, setUpdateTodo] = useState("");
    const [showtodo, setShowTodo] = useState(false);
    const handleChange = (e)=>{
        setInputs({
            ...input,[e.target.name]: e.target.value,
        })
    }
   
    const addTodo = (e)=>{
        // console.log(todo)
        e.preventDefault();
        if(edit)
        {
            const updateData = data;
            Object.assign(updateData[updatetodo],input)
            setData([...updateData]);
            setEdit(false)
            setInputs({
                todo:""
            })
        }

        else{
            setData([...data, input])
        setInputs({
            todo:""
        })
        setShowTodo(true);
        }
      
    }
    console.log(data);

    const deleteTodo = (index)=>{
        console.log(index);
        const filterTodo = data.filter((item ,i)=>i!==index)
        setData(filterTodo);
    }

    const editTodo = (index)=>{
        const tempdata = data[index];
        setInputs({
            todo:tempdata.todo
        })
        setEdit(true)
        setUpdateTodo(index)
    }

  return (
    <>
    <div className='item'>
       
    {/* <table border={2} align='center'> */}
        
   
        
        
        <form onSubmit={addTodo}>
            <input type='text' name='todo' placeholder='Enter Todo Name' value={input.todo}  onChange={handleChange} className='forminput' /> 
            {
                edit?
                <button className='upbtn' type='submit'>
                Update
        </button>:
         <button className='setbtn' type='submit'>
         Add
 </button>
            }
        </form>  
    </div>
    <div>
       {
        showtodo?
        <table align='center' border={2} className='todo'>
        <tr>
            <th colSpan={4}>Todo</th>
        </tr>
        {
            data.map((item,id)=>(
                <tr key={id}>
                    <td>{id+1}</td>
                <td>{item.todo}</td>
                <td><button onClick={()=>editTodo(id)}>Edit</button></td>
                <td><button onClick={()=>deleteTodo(id)}>Delete</button></td>
                </tr>
            ))
        }
    </table>: <h3 align="center">No Todo Available!</h3>
       }
    </div>
    
    
    </>
  )
}

export default TodoApp

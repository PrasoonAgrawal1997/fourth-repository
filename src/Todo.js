import React from 'react';
import { connect } from 'react-redux';
import { fetchTodoData } from './RouterAction';


function Todo(props){
    return(
        <div>
            <button onClick={props.fetchTodoData}>Todos Data</button>
            <h1>
            <ul>
                {props.users.map(el => (
                <> 
                <li>{el.id}</li>
                <li>{el.userId}</li>
                <li>{el.title}</li>
                <li>{(el.completed)?"true":"false"}</li> 
                <h1>-------------------------------</h1>
                </>
                ))}
            </ul>
            </h1>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        users:state.users
    }
} 

const mapDispatchToProps=dispatch=>{
    return{
        fetchTodoData: () => dispatch(fetchTodoData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

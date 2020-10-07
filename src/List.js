import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actionIndex';


function List(props){
    return(
        <div>
            <button onClick={props.fetchData}>Click here</button>
            <h1>
            <ul> 
                {props.users.map(el => (
                <li key={el.id}>{el.title}</li> 
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
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

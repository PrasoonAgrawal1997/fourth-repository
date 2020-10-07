import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from './RouterAction';


function User(props){
    return(
        <div>
            <button onClick={props.fetchUserData}>Users Data</button>
            <h1>
            <ul> 
                {props.users.map(el => (  
                <> 
                <li>{el.id}</li>
                <li>{el.name}</li>  
                <li>{el.username}</li>
                <li>{el.email}</li>
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
        fetchUserData: () => dispatch(fetchUserData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

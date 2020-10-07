import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbumData  } from './RouterAction';

function Album(props){
    return(
        <div>
            <button onClick={props.fetchAlbumData}>Album Data</button>
            <h1>
            <ul>
                {props.users.map(el => (
                <> 
                <li>{el.id}</li>
                <li>{el.userId}</li>
                <li>{el.title}</li>
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
        fetchAlbumData: () => dispatch(fetchAlbumData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);

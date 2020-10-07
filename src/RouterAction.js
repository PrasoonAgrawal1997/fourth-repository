export const DATA_LOADED = "DATA_LOADED"

const fetchUsersSuccess=users=>{
    return{
        type: "DATA_LOADED", 
        payload: users
    }
} 


export function fetchUserData() {
        return function(dispatch){
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => { 
                dispatch(fetchUsersSuccess(json))
    } 
    ) 
}
};

export function fetchTodoData() {
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => {
            dispatch(fetchUsersSuccess(json))
} 
)
}
};

export function fetchAlbumData() {
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(json => {
            dispatch(fetchUsersSuccess(json))
}
)
}
};

  
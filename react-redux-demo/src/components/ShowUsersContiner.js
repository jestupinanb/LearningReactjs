import React, { useEffect, useState } from 'react'
import { fetchUsers, userSuccess } from '../redux'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import axios from 'axios'
/* const llamame = (message)=>{
    console.log("in a function message: "+message)
} */

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ShowUsersContiner(props) {
    //const userData = useSelector(state => state.users);
    const dispatch = useDispatch()

    /* console.log("ShowUsersContiner")
    console.log(userData.users[0] && userData.users[0].name) */
    useEffect(
        () =>{
            //dispatch(userSuccess([{name:'pepe'},{name:'pepa'}]))
        },[]
    )

    const [count, setCount] = useState(0);
    const [userData, setUserData] = useState(0);

    const users = async() =>{
        try {
            console.log("Antes de 1 seg")
            await timeout(1000)
            console.log("Despues de 1 seg")
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const users = response.data
            //dispatch(userSuccess(users))
            console.log(users)
            //setCount(users[0].name)
            setUserData(users)
        } catch (error) {
            const errorMsg = error.message
        }
    }

    useEffect(() => {
        //document.title = `You clicked ${count} times`;
        //users()
        //setCount(3)
    });

    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
                <div>
                    <h1>SHOW USERS CONTINER</h1>
                    <h2>User list</h2>
                    <div>
                        {
                            userData && userData.users && userData.users.map(user => <p key={user.name}> {user.name} </p>)
                        }
                    </div>
                    <h1>CLICKED</h1>
                    <div>
                        <p>You clicked {props.count} times</p>
                        {/* <button onClick={() => setCount(count + 1)}>
                            Click me
                        </button> */}
                        <p>{count} </p>
                    </div>
                </div>
            )
}

const mapStateToProps = state => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUsers2: () => dispatch(userSuccess([{ name: 'pepe' }, { name: 'pepa' }]))
    }
}

export default ShowUsersContiner
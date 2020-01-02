import React,{useEffect} from 'react'
import { fetchUsers,userSuccess } from '../redux'
import {connect} from 'react-redux'

/* const llamame = (message)=>{
    console.log("in a function message: "+message)
} */

function UserContiner({userData,fetchUsers,fetchUsers2}) {
    useEffect(() =>{
        console.log("efecto usado");
        fetchUsers2();
        //llamame("esto es un mensage")
    },[]
    )
    return userData.loading ? (
        <h2>Loading</h2>
    ):userData.error ? (
        <h2>{userData.error}</h2>
    ):(
        <div>
            <h2>User list</h2>
            <div>
                {
                    userData && userData.users && userData.users.map(user => <p key={user.name}> {user.name} </p> )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData:state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUsers2: () => dispatch(userSuccess([{name:'pepe'},{name:'pepa'}]))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContiner)
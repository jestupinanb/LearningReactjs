import React,{useEffect,useState} from 'react'
import { fetchUsers,userSuccess } from '../redux'
import { useSelector,useDispatch } from 'react-redux'
import {connect} from 'react-redux'
import axios from 'axios'

/* const llamame = (message)=>{
    console.log("in a function message: "+message)
} */

function UserContiner({userData,fetchUsers,fetchUsers2}) {
    const dispatch = useDispatch()
    const [number, setNumber] = useState(1)

    useEffect(() =>{
        //console.log(userData)
        //dispatch(userSuccess([{name:'pepe'},{name:'pepa'}]))
        //fetchUsers2();
        //llamame("esto es un mensage")
        //setNumber(3)
        let ignore = false;
        if (!ignore){
            console.log("im in")
            fetchUsers();
        }
        return () =>{ignore = true}
    }
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
            <p>{number}</p>
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
import { FormControl, InputLabel,FormGroup, Input,Button,makeStyles, Typography } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import { editUser, getUsers } from "../Service/Api";
import { useHistory,useParams } from "react-router-dom";
const useStyle = makeStyles({
    container:{
        width:'50%',
        margin:'5px 0 0 25%',
        '& > *':{
            marginTop:'20px'
        }
    }
})


const initialValues = {
    name:'',
    email:'',
    phone:''
}
const EditUser = ()=>{
    const [user, setUser] = useState(initialValues);
    const {name, email, phone} = user;
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
       loadUserData(); 
    },[])
    const loadUserData= async ()=>{
       const response = await getUsers(id);
       setUser(response.data);
    }

    const onValueChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const editUserDetails = async ()=>{
        await editUser(id,user);
        history.push('/');
    }
    const classes = useStyle();
    return(
      <FormGroup className = {classes.container}>
          <Typography variant = 'h4'  >Edit User</Typography>
          <FormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange= {(e)=>onValueChange(e)} name = 'name' value = {name}/>
          </FormControl>
          <FormControl>
              <InputLabel>Email</InputLabel>
              <Input onChange= {(e)=>onValueChange(e)} name = 'email' value = {email} />
          </FormControl>
          <FormControl>
              <InputLabel>Phone</InputLabel>
              <Input onChange= {(e)=>onValueChange(e)} name = 'phone' value = {phone} />
          </FormControl>
         <Button variant = "contained" onClick = {()=>editUserDetails()} color='primary'>Edit User</Button>
      </FormGroup>
    )
}
export default EditUser;
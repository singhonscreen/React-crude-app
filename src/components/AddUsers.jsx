import { FormControl, InputLabel,FormGroup, Input,Button,makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { addUser } from "../Service/Api";
import { useHistory } from "react-router";
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
const AddUsers = ()=>{
    const [user, setUser] = useState(initialValues);
    const {name, email, phone} = user;
    const history = useHistory();

    const onValueChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const addUserDetails = async ()=>{
        await addUser(user);
        history.push('/');
    }
    const classes = useStyle();
    return(
      <FormGroup className = {classes.container}>
          <Typography variant = 'h4'  >Add User</Typography>
          <FormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange= {(e)=>onValueChange(e)} name = 'name' />
          </FormControl>
          <FormControl>
              <InputLabel>Email</InputLabel>
              <Input onChange= {(e)=>onValueChange(e)} name = 'email' />
          </FormControl>
          <FormControl>
              <InputLabel>Phone</InputLabel>
              <Input onChange= {(e)=>onValueChange(e)} name = 'phone' />
          </FormControl>
         <Button variant = "contained" onClick = {()=>addUserDetails()} color='primary'>Add User</Button>
      </FormGroup>
    )
}
export default AddUsers;
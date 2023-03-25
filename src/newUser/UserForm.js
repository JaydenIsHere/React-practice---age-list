import style from './UserForm.module.css'
import {useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
function UserForm(props){
const [nameInput,setNameInput] = useState('');
const [ageInput,setAgeInput] = useState('');
const [isValid,setIsValid] = useState(true);
const [errorMessage,setErrorMessage] = useState({})


const closeErrorMessage = () =>{
    setIsValid(prev => !prev)
}

const updateNameInputValue = (e) =>{
    setNameInput(e.target.value)
}

const updateAgeInputValue = (e) =>{
    setAgeInput(e.target.value)
}

const content = !isValid ? <ErrorModal errorMessage={errorMessage} closeErrorMessage={closeErrorMessage}/> : "";

const createNewUser = (e) =>{
    e.preventDefault();

    if(nameInput.trim().length === 0 || ageInput.trim().length === 0){
        setErrorMessage(  {title:'Wrong input',
        message:'Your answers cannot be empty '})
        setIsValid(prev => !prev)
        return
    }

    if(+ageInput < 0 ){
        setErrorMessage(
            {title:'Wrong age input',
        message:'Your age cannot less than 0'}
        )
        setIsValid(prev => !prev)
        return
    }
const newuser ={
name:nameInput,
age:ageInput,
id:Math.random().toString()
}

props.updateAllUsers(newuser);

setNameInput('');
setAgeInput('');
}
    return (
        <>
    
    {content}
    <Card className={style.input}>
        <form className={style.userForm} onSubmit={createNewUser}>
            <div className={style.user_input_control}>
            <label>User Name</label>
            <input type='text' value={nameInput} onChange={updateNameInputValue}/>
            </div>

            <div className={style.user_input_control}>
            <label>User Age</label>
            <input type='text'  value={ageInput} onChange={updateAgeInputValue}/>
            </div>

            <div className={style.user_input_control_btn}>
            <Button type="submit">Create New</Button>
            </div>
        </form>
    </Card>
    </>
    )
}

export default UserForm
import styled from './UsersItem.module.css'

function UsersItem(props){

    return(
        <div className={styled.usersitem}>
        <p>{`${props.name} `}</p>
        <p>{`${props.age} years old this year`}</p>
        </div>
    )
}

export default UsersItem
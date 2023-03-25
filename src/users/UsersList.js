import UsersItem from "./UsersItem";

function UsersList({users}){
return <>
{users.map(user =>(

<UsersItem name ={user.name} age={user.age} key={user.id}/>

))}
</>
}

export default UsersList
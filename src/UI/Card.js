import classes from './Card.module.css'
//stateless component

function Card(props){
return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
}

export default Card
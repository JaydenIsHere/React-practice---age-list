import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    const closeErrorController = () =>{
        props.closeErrorMessage();
        }
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.errorMessage.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.errorMessage.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={closeErrorController}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
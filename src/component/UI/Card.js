import './Card.css';

// arrow 함수
const Card = (props) => {
    const classes= 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;
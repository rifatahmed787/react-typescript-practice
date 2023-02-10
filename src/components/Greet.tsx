type Greeting={
    name: string,
    message ?: number
    isLoggedIn: boolean
}

const Greet = (props: Greeting) => {
    const {message=0}=props
    return (
        <div>
            {
                props.isLoggedIn ?  <h1>Hey {props.name}! you have {message} unread message</h1>: "welcome to typescript"
            }
            
        </div>
    );
};

export default Greet;
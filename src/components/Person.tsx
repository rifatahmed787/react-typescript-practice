type PersonProps={
    name:{
        first: string
        last: string
        age: number
    }
}

const Person = (props:PersonProps) => {
    return (
        <div>
            <h1>{props.name.first} {props.name.last} {props.name.age}</h1>
        </div>
    );
};

export default Person;
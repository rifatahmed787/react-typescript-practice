type personListProps={
    persons:{
        first:string
        last: string
    }[]
}

const PersonList = (props:personListProps) => {
    return (
        <div>
            {props.persons.map(person=>{
                return(
                    <h1>{person.first} {person.last}</h1>
                )
            })}
        </div>
    );
};

export default PersonList;
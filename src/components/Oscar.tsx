type oscarProps={
    children: React.ReactNode
}

const Oscar = (props: oscarProps) => {
    return (
        <div>
           <h1>{props.children}</h1> 
        </div>
    );
};

export default Oscar;
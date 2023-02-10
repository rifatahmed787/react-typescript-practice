type headingProps={
    children: string
}

const Heading = (props: headingProps) => {
    return (
        <div>
            <h1>{props.children}</h1>
        </div>
    );
};

export default Heading;
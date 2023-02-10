type statusProps={
    status: "loading" | "success" | "error"
}

const Status = (props: statusProps) => {
    let message
    if(props.status==="loading"){
        message="loading..."
    }else if(props.status==="success"){
        message="success"
    }else if(props.status==="error"){
        message="error fetching data"
    }
    return (
        <div>
            <h1>Status - {message}</h1>
        </div>
    );
};

export default Status;
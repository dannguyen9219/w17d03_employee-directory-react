export default function Show(props) {
    return (
        <div className="homepage">
            <h1>{props.info.img}</h1>
            <h1>{props.info.name}</h1>
            <h1>{props.info.title}</h1>
            <h1>{props.info.callMobile}</h1>
            <h1>{props.info.email}</h1>
        </div>
    )
};
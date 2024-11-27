export default function addValueButton(props) {
    return (
        <>
            <button onClick={() => props.onClick(props.count)}>{props.name}</button>
        </>
    )
}

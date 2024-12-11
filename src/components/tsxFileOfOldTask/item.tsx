export default function Item({title, desc}: {title: string, desc: string}) {
    return (
        <>
            <h2>{title}</h2>
            <p>{desc}</p>
        </>
    )
}
export function Customer(props : {title: string, desc: string}) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </>
    )
}

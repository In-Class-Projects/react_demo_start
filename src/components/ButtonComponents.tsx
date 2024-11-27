import {ReactNode} from "react";

export default function ButtonComponents(props : {children: ReactNode}) {
    return (
        <>
            <button>{props.children}</button>
        </>
    )
}

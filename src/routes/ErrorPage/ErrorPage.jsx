import { useRouteError } from "react-router-dom"

export function ErrorPage(){
    const error = useRouteError()

    return (
        <>
            <h1>Ops... Ocorreu um erro inesperado!</h1>
            <p>{error.statusText}</p>
        </>
    )
}
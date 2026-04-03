import { Card } from "./Card";

export function RenderData(props){
    return (
        <>
            {!props.UserData ? (
                <h1>Loading...</h1>
            ): (
                props.UserData.length === 0 ? (
                    <h1>No Users Found!!</h1>
                ):
                (
                    props.UserData.map((user)=>{
                        return <Card key={user.id}  user = {user} id = {user.id} onDelete={props.onDelete} />
                    })
                )
            )}
        </>
    )
}
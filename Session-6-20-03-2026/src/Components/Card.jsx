import "../CSS/Card.css"


export function Card(props) {
    return (
        <>
            <div className="Card" key={props.id}>
                <img src={props.user.image} alt="User_" height={"100px"} />
                <p><b>FirstName</b> : {props.user.firstName}</p>
                <p><b>MiddleName</b> : {props.user.maidenName}</p>
                <p><b>LastName</b> : {props.user.lastName}</p>
                <p><b>Age</b> : {props.user.age}</p>
                <p><b>Gender</b> : {props.user.gender}</p>
                <button onClick={()=> props.onDelete(props.id)} >Remove User</button>
                <br />
            </div>
        </>
    )
}
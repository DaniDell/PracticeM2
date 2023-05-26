///componente DUM

const UserCard = ({id,name, email}) => {
    return(
        <div >
        <br />
            <h2>{id}</h2>
            <h2>{name}</h2>
            <span>{email}</span>
        

        </div>
    )
}

export default UserCard;
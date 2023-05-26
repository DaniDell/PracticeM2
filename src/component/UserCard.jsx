

const UserCard = ({id,name, email}) => {
    return(
        <div>
        
            <h1>{id}</h1>
            <h2>{name}</h2>
            <span>{email}</span>
            

        </div>
    )
}

export default UserCard;
///componente DUM
import { Link } from 'react-router-dom';

const UserCard = ({id,name, email}) => {
    return(
        <div >
        <br />
            <h2>{id}</h2>
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
          </Link>
            <span>{email}</span>
        

        </div>
    )
}

export default UserCard;
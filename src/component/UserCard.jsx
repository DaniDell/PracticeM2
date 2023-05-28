// ///componente DUM
// import { Link } from 'react-router-dom';

// const UserCard = ({id,name, email}) => {
//     return(
//         <div >
//         <br />
//             <h2>{id}</h2>
//             <Link to={`/detail/${id}`}>
//             <h2>{name}</h2>
//           </Link>
//             <span>{email}</span>
        

//         </div>
//     )
// }

// export default UserCard;


import { connect } from "react-redux";
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from "../redux/actions";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  // componentDidUpdate --> actualización
  // componentDidUnmount --> desmontaje

  render() {
    const { id, name, email } = this.props;

    return (
      <div>
        <br />
        <h2>{id}</h2>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <span>{email}</span>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  };
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(UserCard);

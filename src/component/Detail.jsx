import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail, cleanState } from "../redux/actions";

const Detail = () => {
    
    //const [character, setCharacter] = useState({})
    // console.log('soy el character detail', character);
    const dispatch = useDispatch();
    const userDetail = useSelector (state => state.userDetail)
    const { id } = useParams();

    useEffect(() => {
       dispatch(getUserDetail(id))
       return () => dispatch(cleanState())
     }, [id, dispatch]);

    return(
        <>
        <h1 >CHARACTER DETAILS:</h1>
       <h1> {userDetail.name}</h1>
       <h1> {userDetail.email}</h1>
        </>
    )
}

export default Detail;
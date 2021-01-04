import {useEffect}from "react"
import {useHistory} from "react-router-dom"

const UnProtectedPage = () =>{
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token) {
          history.push("/feed");
        }
            
      }, [history]);
}
export default UnProtectedPage
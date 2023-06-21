import { useParams, useNavigate } from "react-router-dom";
import {USERS} from '../../constants'

export const Profile = () =>{
   const navigate = useNavigate()

   const params = useParams()
   const handleClickBack = () =>{
      navigate('/', {replace:true})
   } 
   console.log(params);
   const user = USERS.find((user) => user.id === Number(params.id) )
   console.log(user);
   return (
      <section>
         <div>Имя: {user.firstName} {user.lastName}</div>
         <div>Email: {user.email} </div>
         <div>Пол: {user.gender} </div>
         <button onClick={handleClickBack}> Назад</button>
      </section>
   )
}


     
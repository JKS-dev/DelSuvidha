import { useRTDB_Fetch } from "./RTDBFetch"


export function UserData(props) {
  const UserData = useRTDB_Fetch();
  const data = props.data;
  var Data;



  UserData.map((user) => {

    data === "name" ?
      Data = user.name
      : data === "email" ?
        Data = user.email
        : data === "last_login" ?
          Data = user.last_login
          : Data = "--"

  })



  return (
    Data
  )

}
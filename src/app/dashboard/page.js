"use client"

import withRole from '@/components/WithRole';
import useUserStore from '../lib/userStore';
import Admin from '@/components/Admin';
import Educator from '@/components/Educator';
import Student from '@/components/Student';




const Dashboard = () =>{
  const { currentUser } = useUserStore();

    if(currentUser.role === 'Admin'){
      return(<Admin />)
    }if(currentUser.role === 'Student'){
      return(<Student />)
    }if(currentUser.role === 'Educator'){
      return(<Educator />)
    }else return(<h1>Access Denied</h1>)


}
export default withRole(Dashboard);

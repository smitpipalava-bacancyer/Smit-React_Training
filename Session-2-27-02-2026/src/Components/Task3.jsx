import { useEffect, useState } from 'react'

function Task3() {
  const [userId , setUserId] = useState(0);
  const [userData , setUserData] = useState(null);

  const setUserIdFunction = (e)=>{
    setUserId(Number(e.target.value));
  }

  useEffect(()=>{
    if(!userId){
      return;
    }

    let isActive = true;

    const fetchData = async ()=>{
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        const data = await response.json();

        if(isActive){
          setUserData(data);
        }

      }catch(err){
        console.log(err);
      }
    }
    
    fetchData();


    return ()=>{
      isActive = false;
    }
  },[userId]);

  return (
    <>
      <h1>User Viewer</h1>

      <input type="id" value={userId} onChange={setUserIdFunction}/>
    
      <hr />

      {userData ? (
        <>
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Company: {userData.company?.name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>

  )
}

export default Task3;
import React from 'react'
import ProfileDetail from './profileDetails';
import MyRaffle from './myRaffle';


const ProfilePage = () => {
  return (
    <div className='flex lg:flex-row max-lg:flex-col py-[50px] md:px-[130px] max-md: px-[20px] gap-[50px]'>
        <ProfileDetail />
        <MyRaffle />
    </div>
  )
}

export default ProfilePage;

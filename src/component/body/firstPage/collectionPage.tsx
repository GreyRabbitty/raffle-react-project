import React from 'react'
import Detail from './detail';
import BodyInfo from './bodyInfo';
import BodyInfoBelow from './bodyInfoBelow';

const  CollectionPage = () => {
  return (
    <div className='py-[50px] md:px-[130px] px-[20px]'>
         <Detail />
         <BodyInfo />
         <BodyInfoBelow />
    </div>
  )
}

export default CollectionPage;

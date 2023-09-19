import React from 'react'
import MyRafflePart from './myRafflePart';
import WinPart from './winPart';
import NftOwned from './nftOwned';

const MyRaffle = () => {
  return (
    <div className='flex flex-col gap-[32px] w-full'>
        <MyRafflePart />
        <WinPart />
        <NftOwned />
    </div>
  )
}

export default MyRaffle;

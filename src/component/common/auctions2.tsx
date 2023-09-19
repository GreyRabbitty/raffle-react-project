import React from 'react'
import { HiOutlineTicket } from 'react-icons/hi'

interface auction2Prop {
    imgSrc: string
}

const Auctions2:React.FC<auction2Prop> = ({ imgSrc }) => {
  return (
    <div className='p-[2px] auction2-border relative min-w-[180px]'>
        <div className='flex flex-col gap-[16px] px-[12px] pt-[12px] pb-[16px] auction2-style '>
            <div>
                <div className='flex justify-center items-center p-[12px] rounded-tl-[24px] rounded-br-[24px] bg-red-600 h-[56px] w-[56px] absolute top-0 left-0'>
                    <img src='./crown.png' alt='crown png' className='h-[32px] w-[32px]'></img>
                </div>
                <img src={ imgSrc} alt="avatar png" className=' w-full h-full' />
            </div>
            <div className='flex flex-col gap-[4px] text-white'>
                <p className='text-[14px] font-bold leading-[20px]'>$8,782</p>
                <p className='text-[18px] font-bold leading-[24px]'>King Punk 2023 Edition </p>
            </div>
            <div className='flex flex-row gap-[4px]'>
                <HiOutlineTicket color='red' />
                <p className='text-[12px] text-white font-normal leading-[16px]'>Won with 50 Ticket(s)</p>
                <p className='text-[10px] font-normal leading-[16px] text-[#676A71]'>60.98 chance</p>
            </div>
        </div>
    </div>
  )
}

export default Auctions2;

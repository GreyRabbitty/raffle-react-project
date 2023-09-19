import React from 'react'
import { BiLeftArrowAlt, BiLogoTelegram, BiShareAlt, BiDotsVertical } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'

const BodyHeaderBtnGroup = () => {
  return (
    <div className='flex mb-[32px] pt-[50px] md:px-[130px] px-[20px]'>
        <div className='flex items-center gap-[8px] border rounded-full border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-b-[3px] py-[15px] pl-[16px] pr-[24px] border-[#292C31] mr-auto'>
            <BiLeftArrowAlt size={'20px'} color='white'/>
            <p className='text-white p-0'>Back</p>
        </div>
        <div className='ml-auto flex items-center gap-[8px]'>
            <div className='flex items-cente border rounded-full border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-b-[3px] p-[13px] border-[#292C31]'>
                <AiOutlineTwitter size={'24px'} color='#E5E1A8' />
            </div>
            <div className='flex items-cente border rounded-full border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-b-[3px] p-[13px] border-[#292C31]'>
                <BiLogoTelegram size={'24px'} color='#E5E1A8' />
            </div>
            <div className='flex items-cente border rounded-full border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-b-[3px] p-[13px] border-[#292C31]'>
                <BiShareAlt size={'24px'} color='#E5E1A8' />
            </div>
            <div className='flex items-cente border rounded-full border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-b-[3px] p-[13px] border-[#292C31]'>
                <BiDotsVertical size={'24px'} color='#E5E1A8' />
            </div>
        </div>
        
    </div>
  )
}

export default BodyHeaderBtnGroup;

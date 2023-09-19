import React from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'

interface entryItemProp {
    entryId: string
    entryCount: number
    time: string
}

const EntryItem:React.FC<entryItemProp> = ({entryId, entryCount, time}) => {
  return (
    <div className='flex py-[16px] px-[24px] gap-[10px] justify-between'>
        <div className='flex flex-col text-left gap-[3px]'>
            <p className='text-[#F7F7F7] text-[14px] font-semibold capitalize'>{entryId.slice(0, 6)}...{entryId.slice(-6, -1)}</p>
            <p className='text-[10px] font-semibold capitalize text-[#E42B2B]'>{entryCount} Entry</p>
        </div>
        <div className='flex gap-[8px] items-center text-[#E5E1A8]'>
            <p className='text-[14px] font-medium capitalize'>{time}</p>
            <RiExternalLinkLine size={'24px'}/>
        </div>
    </div>
  )
}

export default EntryItem;

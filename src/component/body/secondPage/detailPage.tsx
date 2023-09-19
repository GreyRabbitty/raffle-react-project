import React from 'react' 
import Content from './content';

interface detailPageProp {
  finishFlag: boolean
}

const DetailPage:React.FC<detailPageProp> = ({ finishFlag }) => {
  return (
    <div className='py-[50px] px-[130px] mt-[32px]'>
        <Content finishFlag={finishFlag} />
    </div>
  )
}

export default DetailPage;

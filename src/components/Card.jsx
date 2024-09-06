import React from 'react'

const Card = ({imgUrl,content,price}) => {
  return (
    <div className='w-[239px] h-[330px]'>
      <img src={imgUrl} alt="" className='w-[239px] h-[275px] hover:scale-105 cursor-pointer transition-all'/>
      <p className='pt-3 pb-1 text-sm h-[36px]'>{content}</p>
      <p className='h-[20px] text-sm font-medium'>{price}</p>
    </div>
  )
}

export default Card

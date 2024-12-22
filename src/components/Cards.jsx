import { IoMdArrowDown } from "react-icons/io";

const Cards = ({head, sub, para, spantext}) => {
  return (
    <div className='px-5 py-5 justify-between h-[22rem] w-[18rem] rounded-3xl bg-[#E4DEC4] flex flex-col gap-[4rem]'>
        <div className={`flex -mt-10 ${head === <IoMdArrowDown /> ? 'mt-20' : ''}`}>
            <h1 className='text-[10rem] font-bold text-gray-800'>{head}</h1>
        </div>
        <div className=''>            
            <p className='text-slate-700'><span className='text-lg font-bold text-gray-800'>{spantext}</span>{para}</p>
        </div>
    </div>
  )
}

export default Cards
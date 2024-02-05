import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let Category = props.Category;
    let setCategory = props.setCategory;

    const CategoryHandler = (title) => {
        setCategory(title);
    }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {filterData.map( (data) => (
        <button onClick={() => CategoryHandler(data.title)} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-400 ${Category===data.title ? "bg-opacity-90 border-white" : "bg-opacity-60 border-transparent"}`}
         key={data.id}>{data.title}</button>
        ))}
    </div>
  )
}

export default Filter

import React from 'react'

export default function SearchBox({searchChange}) {
  return (
    <div className='tc'>
      <input  onChange={searchChange} type='search' placeholder='Search here ...' />
    </div>
  )
}

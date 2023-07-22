import React from 'react'
import { Input, Button } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'

export const Search = () => {

  const [search, setSearch] = React.useState('')

  const handleSearch = () => {
    if (search === '' && search.length < 4) {
      toast.error('Please enter a valid search term', {
        position: 'top-right',
      })
    }
    // continue with search
  }

  return (
    <div className='flex rounded-lg  bg-white shadow-lg'>
      <div className='w-full m-4 flex items-center justify-between gap-6'>
        <div className='w-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faSearch} className='flex items-center h-8 text-blue-500' />
          <Input
            type="text"
            placeholder='Search'
            className="!border !border-transparent !text-xl bg-white text-blue-gray-500 ring-transparent placeholder:text-blue-gray-200 "
            labelProps={{
              className: "hidden",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  )
}

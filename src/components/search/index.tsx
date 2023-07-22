import React from 'react'
import toast from 'react-hot-toast'
import { Input, Button } from '@material-tailwind/react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAppDispatch } from '../../redux/hooks'
import { fetchUsers } from '../../redux/slices/thunks'

export const Search = () => {

  const dispatch = useAppDispatch()
  const [query, setQuery] = React.useState('')

  const handleQuery = () => {
    if (query === '' && query.length < 4) {
      toast.error('Please enter a valid query term', {
        position: 'top-right',
      })
      return
    }
    if (query === 'doublevpartners') {
      toast.error('This search is not possible', {
        position: 'top-right',
      })
      return
    }
    dispatch(fetchUsers(query))
  }

  return (
    <div className='flex rounded-lg mb-4 bg-white shadow-lg'>
      <div className='w-full m-4 flex flex-col sm:flex-row items-center justify-between gap-6'>
        <div className='w-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faSearch} className='items-center h-8 text-blue-500 hidden sm:flex' />
          <Input
            type="text"
            placeholder='Search'
            className="!border !border-transparent !text-xl bg-white text-blue-gray-500 ring-transparent placeholder:text-blue-gray-200 "
            labelProps={{
              className: "hidden",
            }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Button
          className='w-full sm:w-fit'
          onClick={handleQuery}>Search</Button>
      </div>
    </div>
  )
}

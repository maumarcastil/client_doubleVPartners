import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, Card, CardHeader, Typography } from '@material-tailwind/react'

import { GitHubUser } from '../../types/users';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/slices/githubSlice';

interface IProfileItems {
  item: GitHubUser
}

export const ProfileItems = ({ item }: IProfileItems) => {

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setUser(item))
  }

  return (
    <Link to={`/profile/${item.login}`} onClick={handleClick} >
      <Card shadow={true} className="w-full ">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-4 flex items-center gap-4"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={item.avatar_url}
            alt={item.login}
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                {item.login}
              </Typography>
            </div>
            <Link to={item.html_url} target='_blank' className='w-fit'>
              <Typography className='text-blue-400' >View on github</Typography>
            </Link>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}
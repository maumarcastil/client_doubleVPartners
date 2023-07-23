import React, { useEffect } from 'react'
import ProfileDetails from '../components/profileDetails'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { useParams } from 'react-router-dom'
import { fetchUser, fetchUserRepos } from '../redux/slices/github/thunks'
import CardRepositories from '../components/cardRepos'
import { Button, Spinner } from '@material-tailwind/react'
import { createUser, fetchUserbyUsername } from '../redux/slices/api/thunks'
import { GitHubUserDetails } from '../types/users'
import toast from 'react-hot-toast'

const ProfilePage = () => {

  const dispatch = useAppDispatch()
  const { data } = useAppSelector(state => state.github.user)

  const { user } = useAppSelector(state => state.api)

  const { username } = useParams()

  useEffect(() => {
    if (username) {
      dispatch(fetchUser(username))
      dispatch(fetchUserRepos(username))
      dispatch(fetchUserbyUsername(username))
    }
  }, [])

  const handleClick = () => {
    if (user === null && data !== null) {
      dispatch(createUser(data as GitHubUserDetails))
    }else {
      toast.error('this user cannot be exported', {
        position: 'top-right'
      })
    }
  }

  return (
    <main className="flex flex-col justify-start">
      <div className="grid gap-y-4 grid-cols-1 md:grid-cols-3 md:gap-4 " >
        <div className='w-full flex flex-col gap-4 '>
          <ProfileDetails />

          <Button
            className='flex justify-center items-center'
            disabled={user === undefined || user !== null || !(data as GitHubUserDetails)?.followers}
            onClick={handleClick}
          >
            {user === undefined || !(data as GitHubUserDetails)?.followers
            ?
            <Spinner />
            :
            user === null
            ?
            'Export Profile'
            :
            'Profile Exported'
            }
          </Button>
        </div>
        <div className='w-full col-span-1 sm:col-span-2'>
          <section>
            <CardRepositories />
          </section>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
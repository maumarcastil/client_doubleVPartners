import React, { useEffect } from 'react'
import ProfileDetails from '../components/profileDetails'
import { useAppDispatch } from '../redux/hooks'
import { useParams } from 'react-router-dom'
import { fetchUser, fetchUserRepos } from '../redux/slices/thunks'
import CardRepositories from '../components/cardRepos'

const ProfilePage = () => {

  const dispatch = useAppDispatch()
  const { username } = useParams()

  useEffect(() => {
    if (username) {
      dispatch(fetchUser(username))
      dispatch(fetchUserRepos(username))
    }
  }, [])

  return (
    <main className="flex flex-col justify-start">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 " >

        <div className='w-full '>
          <ProfileDetails />
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
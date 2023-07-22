import { Avatar, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { useAppSelector } from '../../redux/hooks';
import { GitHubUserDetails } from '../../types/users';

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const ProfileDetails = () => {
  const user = useAppSelector(state => state.github.user.data as GitHubUserDetails)

  return (
    <Card shadow={true} className="w-full p-4 rounded-3xl bg-gradient-to-tl from-neutral-900 via-pink-100 to-violet-100">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 my-0 flex flex-col gap-2 mb-4"
      >
        <Typography variant="h4" color="blue-gray"  >
          Data profile
        </Typography>

        <Avatar
          size="xxl"
          variant="circular"
          src={user?.avatar_url}
          alt={user?.login}
        />

        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {user?.login ?? ''}
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography color="blue-gray">{`@${user?.login ?? ''}`}</Typography>
        </div>
      </CardHeader>

      <CardBody className="flex flex-col p-0 gap-2">
        <Typography>
          {user?.bio ?? ''}
        </Typography>
        <hr />

        <div className='flex justify-around'>
          <div className='flex flex-col items-center'>
            <strong>followers</strong>
            <strong>{user?.followers}</strong>
          </div>
          <div className='divide-y-1 border' />
          <div className='flex flex-col items-center'>
            <strong>following</strong>
            <strong>{user?.following}</strong>
          </div>
        </div>

      </CardBody>
    </Card>
  )
}

export default ProfileDetails
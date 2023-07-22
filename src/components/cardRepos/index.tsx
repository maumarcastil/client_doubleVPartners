import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'

import { useAppSelector } from '../../redux/hooks';
import { GitHubUserDetails } from '../../types/users';
import { GitHubRepository } from '../../types/repositories';

const CardRepositories = () => {
  const user = useAppSelector(state => state.github.user.data as GitHubUserDetails)
  const repos = useAppSelector(state => state.github.user.repositories as GitHubRepository[])

  return (
    <Card shadow={true} className="w-full p-4 rounded-3xl bg-gradient-to-tl from-neutral-900 via-pink-100 to-violet-100">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 my-0 flex flex-col gap-2 mb-4"
      >
        <Typography variant="h4" color="blue-gray"  >
          Repositories ({user?.public_repos ?? 0})
        </Typography>
      </CardHeader>

      <CardBody className="flex flex-col p-0 gap-2">

        {repos?.map((repo, index) => (
          <Card key={index} shadow={false} className="w-full p-4 border-b ">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 my-0 flex flex-col gap-2"
            >
              <div className='flex justify-between items-center'>
                <Link to={repo.html_url} target='_blank' className='font-bold text-blue-400 underline'>
                  {repo?.name ?? ''}
                </Link>
                <Typography color="blue-gray"  >
                  {new Date(repo?.created_at).toDateString() ?? ''}
                </Typography>
              </div>

              <span>
                <strong>Language: </strong>{repo?.language ?? ''}
              </span>

              {repo?.description !== '' && repo?.description !== null &&
                <span>
                  <strong>Description: </strong>{repo?.description}
                </span>
              }
            </CardHeader>
          </Card>
        ))}
      </CardBody>
    </Card>
  )
}

export default CardRepositories
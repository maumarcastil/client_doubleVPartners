import { useEffect } from "react"
import { ProfileItems } from "../components/profileItems"
import { Search } from "../components/search"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setRepositories, setUser } from "../redux/slices/github/githubSlice"
import { setUser as setUserApi } from "../redux/slices/api/apiSlice"

function Home() {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(state => state.github)

  useEffect(() => {
    dispatch(setUser(null))
    dispatch(setRepositories([]))
    dispatch(setUserApi(undefined))
  }, [])

  return (
    <>
      <Search />
      {users.length > 0 &&
        <section className="flex flex-col justify-start">
          <h2 className="text-2xl font-mono font-semibold mb-4">Search</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
            {users.map((item, i) =>
              <ProfileItems key={i} item={item} />
            )}
          </div>
        </section>
      }

    </>
  )
}

export default Home

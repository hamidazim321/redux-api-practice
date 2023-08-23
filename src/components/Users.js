import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/users/usersSlice"
import { useEffect } from "react"

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(store => store.users.users)
  const isLoading = useSelector(store => store.users.isLoading)
  const error = useSelector(store => store.users.error)

  useEffect(()=> {
    dispatch(fetchUsers)
  },[dispatch])

  return (
    <div>
      {isLoading && 'LOADING'}
      {error && 'ERROR'}
      {users.map(user => {
        <div>
          <p>{user.name.first}</p>
          <p>{user.name.last}</p>
        </div>
      })}
    </div>
  )
}

export default Users
import { Outlet } from "react-router-dom"

function FavoriteBooks() {
  return (
    <>
    <Outlet />
    <h2>FavoriteBooks</h2>
    </>
  )
}

export default FavoriteBooks
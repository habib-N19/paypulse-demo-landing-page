import { Outlet } from 'react-router-dom'
import Nav from '../pages/Shared/Nav/Nav'

const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet></Outlet>
    </div>
  )
}

export default Main

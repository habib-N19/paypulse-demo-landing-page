import { Outlet } from 'react-router-dom'
import Nav from '../pages/Shared/Nav/Nav'
import Footer from '../pages/Shared/Footer/Footer'

const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Main

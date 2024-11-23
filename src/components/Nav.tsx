import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname
  return (
    <nav>
      <ul>
        <li>
          <Link 
          to="/"
          className = {
            currentPage === '/' ? 'nav-link active' : 'nav-link'
          }
          >
          Home
          </Link>
        </li>
        <li>
          <Link 
          to="/PotentialCandidates"
          className = {
            currentPage === '/PotentialCandidates' ? 'nav-link active' : 'nav-link'
          }
          >
          Potential Candidates
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

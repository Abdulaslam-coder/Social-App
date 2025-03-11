import "./navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>DeveGeek</span>
        </Link>
        <HomeIcon/>
        <BedtimeIcon/>
        <GridViewIcon/>
        <div className="search">
            <SearchIcon/>
            <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonIcon/>
        <MailOutlineIcon/>
        <NotificationsNoneIcon/>
        <div className="user">
          <img src="https://www.pexels.com/photo/woman-in-white-dress-walking-on-beach-7966661/" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
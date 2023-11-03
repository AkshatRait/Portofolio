import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer> 
      <h4>Contact</h4>
      <Link to="https://www.linkedin.com/in/aksharait/">
    <button>
<LinkedInIcon sx={{fontSize: 30, color: 'white'}}/>
    </button>
</Link>
<Link to="https://github.com/AkshatRait">
    <button>
<GitHubIcon sx={{fontSize: 30, color: 'white'}}/>
    </button>
</Link>
<Link to="https://1drv.ms/b/s!Ajq2LMxjgif9gTK3tkXyiHCjaZZg?e=oCCSmu">
    <button>
<InsertDriveFileIcon sx={{fontSize: 30, color: 'white'}}/>
    </button>
</Link></footer>
  )
}       

export default Footer
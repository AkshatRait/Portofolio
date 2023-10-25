import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import "./index.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


const NavBar = () => {
  window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 
  return (
    <div id="navbar">
    <nav>
        <Link to="https://www.linkedin.com/in/aksharait/">
            <button>
        <LinkedInIcon sx={{fontSize: 60, color: 'white'}}/>
            </button>
        </Link>
        <Link to="https://github.com/AkshatRait">
            <button>
        <GitHubIcon sx={{fontSize: 60, color: 'white'}}/>
            </button>
        </Link>
        <Link to="https://1drv.ms/b/s!Ajq2LMxjgif9gTK3tkXyiHCjaZZg?e=oCCSmu">
            <button>
        <InsertDriveFileIcon sx={{fontSize: 60, color: 'white'}}/>
            </button>
        </Link>
    </nav>
        <div class="header">
  <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>
</div>
    </div>
  )
}

export default NavBar
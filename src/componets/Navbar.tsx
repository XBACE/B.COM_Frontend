import { AppBar, Box, Link, List, ListItem, Toolbar, Typography, Button, Drawer, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);
  const pages = ['Home', 'About', 'Services', 'Market  Store', 'Pricing'];

  return (
    <div className=' flex justify-center w-full bg-[#0569B6] '>
      <div className='flex justify-between items-center w-[80%] p-3 '>
        <div>
          <p className='text-sm'> <span className='text-4xl font-bold'>B</span>.com </p>
        </div>
        <div className='flex flex-row items-center gap-5 text-sm'>
          <div>HOME</div>
          <div>ABOUT US</div>
          <div>SERVICES</div>
          <div>MARKET STORE</div>
          <div> PRICING </div>
        </div>
        <div className='flex flex-row items-center gap-5 text-sm'>
          <div>
            LOGIN
          </div>
          <div>
            English (UK)
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
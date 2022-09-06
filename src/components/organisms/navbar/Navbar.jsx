import React from 'react'
import Search from '../../atoms/searchbar/Searchbar'
import NavItem from '../../atoms/item/NavbarItem'
import Icon from '../../atoms/logo/Logo'
import RoundedAvatar from '../../atoms/avatar/RoundedAvatar'



function Navbar() {
      return (
          <>  
            <nav className='bg-github-blue '>
                  <div className='flex items-center'>

                        <div className='block mt-4 mb-4 ml-8'>
                              <Icon></Icon>
                        </div>

                        <div className='block ml-8 mr-16'>
                              <Search searchText={'Search or jump to..'}></Search>
                              
                        </div>

                        <div className='block'>
                              <NavItem></NavItem>
                              
                        </div>   

                        <div className='block w-short items-center ml-96'>
                              <RoundedAvatar></RoundedAvatar>
                        </div>   

                       

                  </div>
                 
     
            </nav>

      

            
          </>
      )

  }
  
  
  export default Navbar
import React from 'react'

import Button from  '../../atoms/button/Button'
import RoundedAvatar from '../../atoms/avatar/RoundedAvatar'


function profileSection() {
      return (
          <>
          <div className="flex flex-wrap">
            <div className="w-6/12 sm:w-4/12 px-4">
                  <div className='w-mid mt-16 ml-20'>
                    <RoundedAvatar></RoundedAvatar>
                  </div>
                  <h1 className='text-white text-3xl mt-6 ml-24'>Amanda Riandikaseta</h1>
                  <h1 className='text-github-grey text-3xl ml-24'>riandikast</h1>
                  <Button buttonText={'Edit Profile'}></Button>
            </div>
          </div>
          </>
      )
  }
  
  export default profileSection
import ProfileSection from '../../molecules/profile/Profile'
import Tab from '../../atoms/tabs/Tabs'
import Pinned from '../../molecules/Pinned/Pinned'


function Body() {
      return (
          <>  
      
            <div className='bg-github-darker-blue flex space-x-20'>
                  <div className='ml-12'>
                        <ProfileSection></ProfileSection>
                  </div>
                  
                  <div className='block mt-16 '>
                        <div>
                              <Tab></Tab>
                              
                        </div>

                        <div className='flex mt-12 text-white '>
                              <a href='' className='flex text-white text-2xl mr-80'> Pinned </a>
                              <div className='flex ml-48 text-github-grey text-xxl'>
                                    <h1>Customize your pins</h1>
                              </div>
                             
                        </div>

                        <div classname = ''>

                              <Pinned></Pinned>


                        </div>
                        
                       
                        
                  </div>

                  
                

            </div>

            
          </>
      )

  }
  
  
  export default Body
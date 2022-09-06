import React from 'react'

function cardContent({cardText1, cardText2, cardText3}) {

      return (
          <>
        
            <div className='flex'>
                  <a href='' className='flex text-white text-xl text-github-other-blue'> {cardText1}</a>
                  <h1 className='text-github-grey items-center text-xl ml-8'>{cardText2}</h1>
            </div>
            
            <div>
                  <h1 className='text-github-grey text-xl mt-12 '>{cardText3}</h1>
            </div>

          </>
      )
  }
  
  export default cardContent
import React from 'react'
import CardPinned from '../../atoms/card/Card'

function Pinned() {
      return (
          <>  
          <div className='flex mt-4 mb-8 space-x-8'>
            <CardPinned pinnedText1={'Project React'} pinnedText2={'Public'} pinnedText3={'Javascript'}></CardPinned>
            <CardPinned pinnedText1={'Project Javascript'} pinnedText2={'Public'} pinnedText3={'Javascript'}></CardPinned>
          </div>

          <div className='flex space-x-8'>
            <CardPinned pinnedText1={'Project HTML'} pinnedText2={'Public'} pinnedText3={'HTML'}></CardPinned>
            <CardPinned pinnedText1={'Project Kotlin'} pinnedText2={'Private'} pinnedText3={'Kotlin'}></CardPinned>
          </div>
            

            
          </>
      )

  }
  
  
  export default Pinned
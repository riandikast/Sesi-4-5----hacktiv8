import React from 'react'
import CardContent from './CardText'

function cardPinned({pinnedText1, pinnedText2, pinnedText3}) {
      return (
          <>
             <div class="box-border border-github-border h-40 w-mid2 p-4 border-2 ...">
                  <CardContent cardText1={pinnedText1} cardText2={pinnedText2} cardText3={pinnedText3}></CardContent>
                
              </div>
          </>
      )
  }
  
  export default cardPinned
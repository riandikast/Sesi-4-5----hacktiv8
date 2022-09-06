import React from 'react'

function button({ buttonText }) {
    return (
        <>
            <button class="bg-github-darker-grey mt-6 hover:bg-github-border  text-github-another-grey font-bold py-2 px-8 w-mid2 h-12 mb-20 ml-16 rounded-lg">
                  {buttonText}
            </button>
        </>
    )
}

export default button
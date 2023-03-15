import React from 'react'

export const Button = (props) => {
    if (props.type === "button") {
        return(
            <div className='flex button-container'>
                <button >All</button>
                <button>Music</button>
                <button>Mixes</button>
                <button>Scenes</button>
                <button>Blessings</button>
                <button>Live</button>
                <button>Motivation</button>
                <button>Python</button>
                <button>Comedy</button>
                <button>Javascript</button>
                <button>Day Trading</button>
                <button>Children's Music</button>
                <button>Steffany Gretzinger</button>
                <button>Basketball</button>
                <button>Trending</button>
                <button>TC Nation</button>
                <button>Mysaltcity</button>
                {/* <button>Baking</button>
                <button>Recently Uploaded</button>
                <button>Scene</button>
                <button>Ezinne Zara</button> */}
            </div>
        )

    }

}
   
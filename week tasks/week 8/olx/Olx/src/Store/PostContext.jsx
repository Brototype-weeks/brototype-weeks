import {createContext, useState} from 'react'

export const postContext = createContext(null)

function Post({children}) {

    const [postDetailes, setPostDetailes] = useState()
    return(
        <postContext.Provider value={{postDetailes, setPostDetailes}}>
            {children}
        </postContext.Provider>
    )
}

export default Post
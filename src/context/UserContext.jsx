import { createContext, useEffect, useState } from "react"

export const UserContextAPI = createContext()


const UserContext = ({ children }) => {
    const [isStored, setIsStored] = useState(true)
    const [boxval,setBoxVal]=useState("")
    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setIsStored(true)
        } else {
            setIsStored(false)
        }
    }, [isStored])
    return (
        <UserContextAPI.Provider value={{ isStored, setIsStored,boxval,setBoxVal }}>
            {children}
        </UserContextAPI.Provider>
    )
}

export default UserContext

import {createContext} from 'react'


const UserContext = createContext({
    userId: '',
    userType: null,
    login: (email: string | undefined, password: string | undefined) => {},
    logout: () => {}
})

export default UserContext


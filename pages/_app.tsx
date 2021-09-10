import 'styles/globals.css'
import {AppProps} from 'next/app'
import type {NextComponentType, NextPageContext} from 'next'
import {Component, ReactNode, useEffect, useState} from 'react'
import Amplify from 'aws-amplify'
import config from 'src/aws-exports'
import UserContext from "context/UserContext";
import {DataStore} from "@aws-amplify/datastore";
import {User} from 'src/models'
import {useRouter} from 'next/router'
import NextNprogress from 'nextjs-progressbar'

Amplify.configure(config)

type NextLayoutComponentType<P = {}> = NextComponentType<NextPageContext,
    any,
    P> & {
    getLayout?: (page: ReactNode) => ReactNode;
}

type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
}


function MyApp({Component, pageProps}: AppLayoutProps) {
    const [userType, setUserType] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        const userType = localStorage.getItem('user-type');
        if (userType) {
            setUserType(userType)
        } else {
            router.push('/');
        }

        if (pageProps.protected && !userType) {
            router.push('/')
        }

    }, [])

    if (
        pageProps.protected &&
        userType &&
        pageProps.userTypes &&
        pageProps.userTypes.indexOf(userType) === -1
    ) {
        return <div>Sorry, you do not have access</div>;
    }

    const login = async (email: string | undefined, password: string | undefined) => {
        const user = await DataStore.query(User)
        const response = user.filter(data => data.email === email && data.password === password).map(role => role.role?.name)
        if (response[0] === 'Student') {
            await router.push('/student')
            localStorage.setItem('user-type', response[0])
            setUserType(response[0])
        }
        if (response[0] === 'Teacher') {
            await router.push('/teacher')
            localStorage.setItem('user-type', response[0])
            setUserType(response[0])
        }
        if (response[0] === 'Admin') {
            await router.push('/admin')
            localStorage.setItem('user-type', response[0])
            setUserType(response[0])
        }
    }

    const logout = async () => {
        localStorage.removeItem('user-type')
        setUserType(null)
        await router.push('/')
    }

    const getLayout = Component.getLayout || ((page: ReactNode) => page);
    return (
        <UserContext.Provider value={{userType, login, logout}}>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            {getLayout(<Component {...pageProps} />)}
        </UserContext.Provider>
    )
}

export default MyApp

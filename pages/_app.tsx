import 'styles/globals.css'
import {AppProps} from 'next/app'
import type {NextComponentType, NextPageContext} from 'next'
import {Component, ReactNode, useEffect, useState} from 'react'
import Amplify from 'aws-amplify'
import config from 'src/aws-exports'
import UserContext from "context/UserContext";
import {DataStore} from "@aws-amplify/datastore";
import {User, Student} from 'src/models'
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
    const [userId, setUserId] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        const userType = localStorage.getItem('user-type');
        const userId = localStorage.getItem('user-id');
        if (userType && userId) {
            setUserType(userType)
            setUserId(userId)
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
        const id = user.filter(data => data.email === email && data.password === password).map(item => item.id)
        if (response[0] === 'Student') {
            const user = (await DataStore.query(Student)).filter(item => item.user?.id === id[0])
            localStorage.setItem('user-type', response[0])
            localStorage.setItem('user-id', user[0].id)
            setUserType(response[0])
            setUserId(user[0].id)
            await router.push('/student')
        }
        if (response[0] === 'Teacher') {
            localStorage.setItem('user-type', response[0])
            setUserType(response[0])
            await router.push('/teacher')
        }
        if (response[0] === 'Admin') {
            localStorage.setItem('user-type', response[0])
            setUserType(response[0])
            await router.push('/admin')
        }
    }

    const logout = async () => {
        localStorage.removeItem('user-type')
        setUserType(null)
        localStorage.removeItem('user-id')
        setUserId('')
        await router.push('/')
    }

    const getLayout = Component.getLayout || ((page: ReactNode) => page);
    return (
        <UserContext.Provider value={{userId, userType, login, logout}}>
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

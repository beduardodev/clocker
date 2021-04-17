import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFetch } from '@refetty/react'
import { axios } from 'axios'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Container, Box, IconButton } from '@chakra-ui/react'

import { Logo, useAuth, formatDate } from './../components'

const getAgenda = ({ token, when }) => axios({
    method: 'get',
    baseURL: '',
    url: '/api/agenda',
    params: { when },
    Boxs: {
        Authorization: `Bearer ${token}`
    }
})

const Header = ({ children }) => (
    <Box p={4} display='flex' alignItems='center' justifyContent='space-between'>
        {children}
    </Box>
)

export default function Agenda() {
    const router = useRouter();
    const [auth, { logout }] = useAuth();
    const [when, setWehn] = useState(() => new Date());
    // const [data, { loading, status, error }, fetch] = useFetch(() => getAgenda(when));

    useEffect(() => {
        !auth.user && router.push('/')
    }, [auth.user])

    return (
        <Container>
            <Header>
                <Logo size={150} />
                <Button onClick={logout}>Sair</Button>
            </Header>
            <Box>
                <IconButton icon={<ChevronLeftIcon />} />
                <Box>{formatDate(new Date(), 'PPPP')}</Box>
                <IconButton icon={<ChevronRightIcon />} />
            </Box>
        </Container>
    )
}

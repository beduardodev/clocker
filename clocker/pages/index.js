import { useFormik } from 'formik'
import * as yup from 'yup'
import Link from 'next/link'

import {
    Container,
    Box,
    Input,
    Button,
    Text,
    FormControl,
    FormLabel,
    FormHelperText,
    InputLeftAddon,
    InputGroup
} from '@chakra-ui/react'

import { Logo } from '../components'
import firebase from '../config/firebase'

const validationSchema = yup.object().shape({
    email: yup.string().email('Email inválido!').required('Preenchimento Obrigatório!'),
    password: yup.string().required('Preenchimento Obrigatório!'),
    username: yup.string().required('Preenchimento Obrigatório!')
})

export default function Home() {
    const { values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = useFormik({
        onSubmit: async (values, form) => {
            try {
                const user = await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
                console.log(user);
            } catch (error) {
                console.error(error);
            }
        },
        validationSchema,
        initialValues: {
            email: '',
            username: '',
            password: ''
        }
    })

    return (
        <Container p={4} centerContent>
            <Logo />

            <Box p={4} mt={8}>
                <Text>Crie sua agenda compartilhada!</Text>
            </Box>

            <Box>
                <FormControl id="email" p={4} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input size="lg" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>}
                </FormControl>

                <FormControl id="password" p={4} isRequired>
                    <FormLabel>Senha</FormLabel>
                    <Input size="lg" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText>}
                </FormControl>

                <Box p={4}>
                    <Button colorScheme="blue" width="100%" onClick={handleSubmit} isLoading={isSubmitting}>Entrar</Button>
                </Box>

                <Link href="/signup">Ainda não tem uma conta? Clique aqui e cadastre-se!</Link>

            </Box>
        </Container>
    )
}
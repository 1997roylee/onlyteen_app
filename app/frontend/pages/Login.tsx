import { Heading, Stack, Text } from "@chakra-ui/react"
import loadable from "@loadable/component"
import { Header } from "components/Header"

const LoginForm = loadable(() => import("components/Form").then(mod => mod.LoginForm))

const Login = () => {
    return <>
        <Header />
        <Stack p={4}>
            <Heading>
                註冊 / 登入
            </Heading>
            <LoginForm />
            <Text>
                忘記密碼？
            </Text>
            <Text>
                註冊/登入即代表您同意遵守
            </Text>
        </Stack>
    </>
}

export default Login
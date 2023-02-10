import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { setLoginSuccessfull } from "stores/authState";
import { success, error } from "utils/toast";
import { API_ENDPOINT } from '../../containers/api';

interface LoginValues {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const login = useMutation((data: LoginValues) => axios.post(API_ENDPOINT + '/users/sign_in', {
        user: data
    }))

    const handleOnSubmit = async (data: LoginValues) => {
        try {
            const response = await login.mutateAsync(data);

            success('登入成功', response)

            setLoginSuccessfull(response.data.resource.email, response.headers.Authorization)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (errors: any) {
            console.warn(errors)

            error('登入失敗', errors)
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });


    return <Stack spacing={3} as='form' onSubmit={handleSubmit(handleOnSubmit)}>
        <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" {...register("email", { required: true })} />
            <FormErrorMessage>
                {errors.email && "Email is required"}
            </FormErrorMessage>
        </FormControl>
        <FormControl>
            <FormLabel htmlFor="password">密碼</FormLabel>
            <Input type="password" id="password" {...register("password", { required: true })} />
            <FormErrorMessage>
                {errors.password && "Password is required"}
            </FormErrorMessage>
        </FormControl>
        <Button w='100%' size='lg' colorScheme='blue' type='submit' isLoading={login.isLoading}>
            註冊 / 登入
        </Button>
    </Stack>
}
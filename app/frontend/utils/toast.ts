import { createStandaloneToast } from '@chakra-ui/toast'

export const { ToastContainer, toast } = createStandaloneToast()

export const success = (description: string, payload = {}) => {
    if (process.env.NODE_ENV === "development")
        console.log(payload);
    toast({
        title: 'Success',
        description,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })
}

export const error = (description: string, payload = {}) => {
    if (process.env.NODE_ENV === "development")
    console.log(payload);
    toast({
        title: 'Error',
        description,
        status: 'error',
        duration: 3000,
        isClosable: true,
    })
}
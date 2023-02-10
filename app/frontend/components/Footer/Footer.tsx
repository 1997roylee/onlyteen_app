import { Box, Flex } from "@chakra-ui/react"
import { NavLink } from "./NavLink"
import { RiHome6Fill, RiUserFill } from 'react-icons/ri'

export const Footer = () => {
    return <Box position='fixed' bg='#fff' bottom={0} left={0} right={0} borderTop='1px solid #e8e8e8'>
        <Flex>
            <NavLink icon={RiHome6Fill} to='/' />
            <NavLink icon={RiUserFill} to='/profile' />
        </Flex>
    </Box>
}

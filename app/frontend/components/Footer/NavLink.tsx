import { Box, Center, Icon } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
    to: string
}

export const NavLink = ({ icon, to }: Props) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return <Box flex={1} as={Link} to={to} py={3}>
        <Center>
            <Icon as={icon} w={8} h={8} color={isActive ? "blue.500" : "gray.200"} />
        </Center>
    </Box>
}
import { Box, Flex, Text } from "@chakra-ui/react"

export const Header = () => {
    return <Box as='header' bg='blue.500' py={3} px={3}>
        <Flex>
            <Box>
                <Text color='#fff'>
                    Logo
                </Text>
            </Box>

        </Flex>
    </Box>
}
import { Avatar, Box, Flex, Text, Icon, HStack } from "@chakra-ui/react"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { RiChat1Line } from 'react-icons/ri'

dayjs.extend(relativeTime)

interface PostProps {
    title: string,
    description: string,
    author: string
    postedAt: Date
}

export const Post = ({ title, description, author, postedAt }: PostProps) => {
    return <Box>
        <Flex align='center'>
            <Avatar w={8} h={8} />
            <Text fontWeight={300} pl={3}>
                {author}
            </Text>
            <Text fontWeight={300}>
                - {dayjs(postedAt).fromNow()}
            </Text>
            <Box flex={1} />
            <Box>
                <Text>Upvote</Text>
            </Box>
        </Flex>
        <Text fontSize='lg' mt={1}>
            {title}
        </Text>
        <Text>
            {description}
        </Text>
        <HStack>
            {/* <Text>Upvote: 1234</Text>
            <Text>Comments: 1234</Text> */}
            <Flex align='center'>
                <Icon as={RiChat1Line} />
                <Text>
                    10
                </Text>
            </Flex>

            <Flex align='center'>
                <Icon as={RiChat1Line} />
                <Text>
                    10
                </Text>
            </Flex>
        </HStack>
    </Box>
}
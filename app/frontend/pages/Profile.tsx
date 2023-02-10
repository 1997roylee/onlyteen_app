import { Box, Button, Flex, Text, Icon, Stack } from "@chakra-ui/react";
import DefaultLayout from "layouts/DefaultLayout";
import { PageWithLayout } from "types/app";
import { renderPage } from "utils/render";
import { RiBrushFill } from 'react-icons/ri'
import { Link } from "react-router-dom";

const Profile = (): PageWithLayout => {
    return <Box bg='gray.50' h='100vh'>
        <Box bg='#fff' p={4}>
            <Flex justify='space-between' pb={4}>
                <Box>
                    <Text fontSize='2xl' mb={1} fontWeight={500}>訪客</Text>
                    <Text fontSize='sm'>立即啓用 Dcard 完整功能<br />點擊註冊/登入</Text>
                </Box>
                <Link to='/login'>
                    <Button colorScheme={'blue'}>
                        註冊 / 登入
                    </Button>
                </Link>
            </Flex>
            <Stack spacing={4}>
                <Flex align='center'>
                    <Icon as={RiBrushFill} w={6} h={6} color='blue.500' />
                    <Text ml={3}>
                        我的文章
                    </Text>
                </Flex>
            </Stack>
        </Box>
    </Box>
}

Profile.Layout = DefaultLayout

export default renderPage(Profile)
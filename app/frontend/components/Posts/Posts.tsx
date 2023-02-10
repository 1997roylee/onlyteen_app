import { Divider, Stack } from "@chakra-ui/react"
import { Post } from "./Post"


interface IPost {
    id: number
    title: string
}

interface PostsProps {
    data: IPost[]
}

export const Posts = ({ data }: PostsProps) => {
    return <Stack divider={<Divider />} spacing={4} py={4}>
        {
            data.map((post) => <Post title="1234" description="1234" author="1234" postedAt={new Date()} key={post.id} />)
        }
    </Stack>
}
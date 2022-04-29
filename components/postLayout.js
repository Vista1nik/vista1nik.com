import Container from "./container"

const PostLayout = props => (
    <Container>
        <article className='prose dark:prose-dark max-w-none'>
            <h1 className="text-black dark:text-white">{props.post.title}</h1>
            {props.children}
        </article>
    </Container>
)

export default PostLayout
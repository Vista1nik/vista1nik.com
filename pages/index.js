import Container from '../components/container'

import { a } from '../components/mdx'

const Index = () => (
    <Container>
        <article className='prose dark:prose-dark max-w-none'>
            <h1 className="text-black dark:text-white">Hi there!</h1>
            <p>I&apos;m vista1nik, a Software Engineer.</p>
            <p>Here I share my experience and tell stories of my adventure in the world of software development.</p>
            <p>You can check some of my open-source projects on <a href='https://github.com/vista1nik'>GitHub</a>, or contact me on <a href="https://twitter.com/vista1nik">Twitter</a>.</p>
        </article>
    </Container>
)

export default Index
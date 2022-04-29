import Container from '../components/container'

const Uses = () => (
    <Container page="uses">
        <article className='prose dark:prose-dark'>
            <h1 className="text-black dark:text-white" id="uses">Uses</h1>
            <p>Here&#39;s what tech I&#39;m currently using for coding, design and etc.</p>
            <h2 id="computer">Computer</h2>
            <ul>
                <li>Macbook Air (2020)</li>
            </ul>
            <h2 id="coding">Coding</h2>
            <ul>
                <li><strong>Editor:</strong>  Visual Studio Code</li>
                <li><strong>Terminal:</strong> Hyper (<a href="https://github.com/zsh-users/antigen">antigen+zsh</a>)</li>
                <li><strong>Theme:</strong> GitHub Dark Default (<a href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme">VSCode</a>, <a href="https://www.npmjs.com/package/hyper-github-dark-default">Hyper</a>)</li>
                <li><strong>Font:</strong> Menlo</li>
            </ul>
            <h2 id="other">Other</h2>
            <ul>
                <li>iPhone, AirPods and Apple Watch</li>
            </ul>
        </article>
    </Container>
)

export default Uses
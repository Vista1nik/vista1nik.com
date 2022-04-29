import { useMDXComponent } from "next-contentlayer/hooks";
import components from "../../components/mdx";
import PostLayout from "../../components/postLayout";
import { allBlogs } from "contentlayer/generated";

export default function Post({ post }) {
    const Component = useMDXComponent(post.body.code);

    return (
        <PostLayout post={post}>
            <Component
                components={{
                    ...components
                }}
            />
        </PostLayout>
    );
}

export async function getStaticPaths() {
    return {
        paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = allBlogs.find((post) => post.slug === params.slug);

    return { props: { post } };
}

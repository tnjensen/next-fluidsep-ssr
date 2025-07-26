import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog posts"
}
import getAllPosts from "../api/getAllPosts";

export default function Blog({data}: {data: any}) {

    // Returning the JSX for rendering
    return (
        <div className='blog'>
        <div className="blog-heading">
                    {/* <h1>Blog</h1> */}
                </div>
                <div className="loader loading-indicator"></div>
                {/* @ts-expect-error - expected */}
                {data && data.map((item) => (
                    <div className="card" key={item.id}>
                    <h2 dangerouslySetInnerHTML={{__html: item.title.rendered}} className="text-2xl"></h2>
                    {item._embedded && <img src={item?._embedded['wp:featuredmedia'][0]?.source_url} alt={item?._embedded['wp:featuredmedia'][0]?.alt_text} width={300} height={500} /> }
                    <span dangerouslySetInnerHTML={{__html: item.content.rendered}}></span>
                    </div>
                ))}
        </div>
    )
    }
export async function getServerSideProps() {
  const postData = getAllPosts()

  const data = await postData

  return (
    {
      props: {
        data
      }
    }
  )
}


export default async function getAllPosts() {
    const res = await fetch(`https://fluidsep.tnjensen.com/wp-json/wp/v2/posts?categories=3,4&_embed&filter[orderby]=date&order=asc`, {
        next: {
            revalidate: 10,
        }
    });
    if(!res.ok) throw new Error("Failed to fetch user posts")
  
    return res.json()
}

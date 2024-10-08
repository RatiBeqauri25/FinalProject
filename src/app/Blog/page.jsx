
import PostCard from '@/components/PostCard/Postcard';
import styles from './blog.module.css'

const getPosts = async () => {
  const res = await fetch(' https://jsonplaceholder.typicode.com/posts')
  if(!res.ok) {
    throw new Error("Something went wrong, try refreshing the page or contact me.")
  }
  return res.json();
}

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
         <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
         </div>
      ))}

    </div>
  )
}

export default BlogPage
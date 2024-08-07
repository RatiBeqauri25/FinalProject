import Image from 'next/image'
import styles from './slug.module.css'
import PostCard from '@/components/PostCard/Postcard'
import Link from 'next/link'

const getSinglePost = async (id) =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if(!res.ok) {
    throw new Error('Something Went Wrong with the API')
  }
  return res.json();
} 

const singleBlog = async ({ params }) => {

  const post = await getSinglePost(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image alt='Photo' fill src={post.img ?? 'https://images.pexels.com/photos/18779594/pexels-photo-18779594/free-photo-of-person-in-an-alien-costume-standing-on-a-rocky-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className={styles.Img}/>
      </div>
      <div className={styles.bottom}>
        <div className={styles.description}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        </div>
        <div className={styles.date}>
          <div className={styles.flex}>
          <p className={styles.pub}> Published: {new Date().toString().slice(4, 16)} </p>
          <Link href="/Blog">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default singleBlog
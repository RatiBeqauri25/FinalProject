import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Link href={`/Blog/${post.id}`}>
            <Image
              src={
                post.img ??
                "https://images.pexels.com/photos/18779594/pexels-photo-18779594/free-photo-of-person-in-an-alien-costume-standing-on-a-rocky-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              className={styles.img}
              fill
              alt="Photo"
            />
          </Link>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.body}</p>
          <h6 className={styles.date}>{new Date().toString().slice(4, 16)}</h6>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

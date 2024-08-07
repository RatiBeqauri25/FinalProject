import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Arvici ra davwero amitomac lorem iqneba yvelgan</h1>
        <div className={styles.imgwrapper}>
          <div className={styles.imgContainer}>
            <Image src="/komedi1.jpg" fill className={styles.img} />
          </div>
          <div className={styles.desc}>
            <h2>Lorem ipsum</h2>
            <p className={styles.lorem}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
              veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis libero ducimus nihil perspiciatis? Aperiam doloribus
              itaque quaerat dolor, qui ducimus fugit nam quae incidunt
              dignissimos perspiciatis, officia laborum quod vitae.
            </p>
            <div>
              <ul className={styles.list}>
                <li> Lorem1: Lorem</li>
                <li> Lorem2: lorem loremlorem lorem</li>
                <li> Lorem1: lorem???</li>
                <li> Lorem2: lorem lorem </li>
                <li> Lorem1: lorem :&#x2769;  &#x262D;</li>
                <li> Lorem2: LOREM?</li>
                <li> Lorem1: LOREM &#x276F;:&#x2769;</li>
                <li> Lorem2: Lorem. &#x276F;:&#x2768;</li>
                <li> Lorem1: lorem :'&#x2768; </li>
              </ul>
            </div>
            <p className={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dicta nisi mollitia quo, veritatis nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rem veritatis ea corrupti sapiente, non tenetur, molestiae quia consequuntur sit dolorum ab illo? Aliquam quas tenetur at voluptas, facere quibusdam odit accusamus nisi ad, est odio esse aspernatur rerum assumenda!
            </p>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            tempore beatae facilis ea vel, doloribus illo, asperiores
            voluptatibus optio recusandae sit dignissimos repellat, accusamus
            error qui laudantium cupiditate vero voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;

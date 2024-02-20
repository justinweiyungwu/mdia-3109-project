import styles from "../../components/articleCardTablet/ArticleCardTablet.module.css"
import Image from "next/image"
export default function ArticleCardTablet({
    title="",
    date = "",
    link = "",
    image = "",
}) {
    return(
        <>
        <div className={styles.main}>
        <Image 
                    className={styles.articleImage}
                    src={image}
                    alt=""
                    width={280}
                    height={174}/>
        <p>Artcles</p>
        <div>{date}</div>
        <div>{title}</div>
        <button className={styles.viewButton}>View More</button>
        </div>
        </>
    )
}
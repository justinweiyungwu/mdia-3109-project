import Image from "next/image"
import styles from "../articleCard/ArticleCard.module.css"

export default function ArticleCard({
    title="",
    date = "",
    link = "",
    image = "",
}){
    return(
        <>
            <main className={styles.body}>
                <Image 
                    className={styles.articleImage}
                    src={image}
                    alt=""
                    width={280}
                    height={170}/>

                 <div className={styles.articleDetails}>
                    <div className={styles.articleTopSection}>
                        <p className={styles.article}>Articles</p>
                        <p className={styles.articleDate}> {date}</p>
                    </div>
                    <h1 className={styles.articleTitle}>{title}</h1>

                        <a href={link} target="_blank">
                            <button className={styles.viewButton}>View More</button>
                        </a>
                 </div>
            </main>
        </>
    )
}
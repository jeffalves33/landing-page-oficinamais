import { videoItems } from "../data/content";
import { Icon } from "./Icon";
import styles from "../styles/marketing.module.css";

export function VideoGallery() {
  return (
    <div className={styles.videoGrid}>
      {videoItems.map((video, index) => (
        <article className={`${styles.videoCard} ${index === 0 ? styles.videoCardFeatured : ""}`} key={video.title}>
          <div className={styles.videoThumb}><div className={styles.videoThumbGrid}/><div className={styles.videoThumbIcon}><Icon name={video.icon}/></div><span>Em breve</span></div>
          <div className={styles.videoMeta}><span>DOCUMENTAÇÃO</span><h3>{video.title}</h3><p>{video.duration}</p></div>
        </article>
      ))}
    </div>
  );
}

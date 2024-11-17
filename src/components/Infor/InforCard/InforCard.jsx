import styles from '../styles.module.scss';

function InforCard({title,description,src}) {

  const { containerCard,containerContent,des,content } = styles;


  return <div className={containerCard}>
         <img src={src} alt="" width={40} height={40} />
         <div className={containerContent}>
            <div className={content}>{title}</div>
            <div className={des}>{description}</div>
         </div>
    </div>
}

export default InforCard

import style from './styles.module.scss'

function HeaderSideBar({icon, title}) {
    const { container,boxTitle } = style;

  return (
    <div className={container}>
        {icon}
        <div className={boxTitle}>{title}</div>
    </div>
  ) 
}

export default HeaderSideBar
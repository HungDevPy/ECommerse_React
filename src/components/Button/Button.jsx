import styles from './styles.module.scss';
import classNames from 'classnames';

function MyButton({ content, isPrimary = true, style }) {
    const { btn, primarybtn, secondarybtn } = styles;
    return (
        <button className={classNames(btn, {
            [primarybtn]: isPrimary,
            [secondarybtn]: !isPrimary,
        })} style={style}>
            {content}
        </button>
    );
}

export default MyButton;

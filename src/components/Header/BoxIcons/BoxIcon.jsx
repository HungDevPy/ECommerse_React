import styles from '../styles.module.scss';
import fbIcon from '@icons/svg/facebook.svg';
import isIcon from '@icons/svg/instagram.svg';
import ytIcon from '@icons/svg/youtube.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'is':
                return isIcon;
            case 'yt':
                return ytIcon;
        }
    }

    return <div className={boxIcon}>
        <img src={handleRenderIcon(type)} alt={type} />
    </div>;
}

export default BoxIcon;

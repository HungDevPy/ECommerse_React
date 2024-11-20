import { useContext } from 'react';
import style from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarprovider';
import classNames from 'classnames';
import { RiCloseLargeFill } from 'react-icons/ri';
import Login from '@components/ContentSideBar/Login/Login';

function SideBar() {
    const { container, overlay, sidebar, slideSideBar, boxIcon } = style;
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    const heanderToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen,
                })}
                onClick={heanderToggle}
            ></div>
            <div
                className={classNames(sidebar, {
                    [slideSideBar]: isOpen,
                })}
            >
                {isOpen && (
                    <div className={classNames({[boxIcon]:isOpen})} onClick={heanderToggle}>
                        <RiCloseLargeFill />
                    </div>
                )}
                <Login />
            </div>
        </div>
    );
}

export default SideBar;

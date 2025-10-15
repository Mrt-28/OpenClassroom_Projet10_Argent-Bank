import styles from "./header-nav.module.scss";
import Icon from '../../features/icon/Icon';

interface HeaderNavProps {
    className?: string;
}

const HeaderNav = ({className}: HeaderNavProps) => {
    const conected = false;

    return (
        <div className={`${styles['header-nav']} ${className?className:""}`}>
            <a 
                href={conected?"/":"/login"} 
                className={`${styles['header-nav__link']} ${className?className+"__link":""}`}
            >
                <Icon 
                    type="user" 
                    className={`${styles['header-nav__link__icon']} ${className?className+"__link__icon":""}`} 
                />
                <p className={`${styles['header-nav__link__text']} ${className?className+"__link__text":""}`}>
                    {conected?<>Log out</>:<>Sign in</>}
                </p>
   
            </a>
        </div>
    );
};

export default HeaderNav;
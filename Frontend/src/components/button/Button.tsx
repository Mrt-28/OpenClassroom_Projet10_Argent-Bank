import styles from  './button.module.scss';

type ButtonProps = {
    className?: string;
    content?: string;
}

const Button = (props : ButtonProps) => {

    function shortClassName(baseClassName: string, additionalClassName?: string) {
        return additionalClassName ? `${baseClassName} ${additionalClassName}` : baseClassName;
    }

    return (
        <button className={shortClassName(styles["button"], props.className)}>{props.content}</button>
    );
};

export default Button;
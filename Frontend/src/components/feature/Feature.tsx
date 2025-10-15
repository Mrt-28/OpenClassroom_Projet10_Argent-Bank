import styles from "./feature.module.scss";
import Icon from '../../features/icon/Icon';

interface FeatureProps {
  icon: string;
  alt: string;
  title: string;
  text: string;
  className?: string;
}

const Feature = (props: FeatureProps) => {
  
  function shortClassName(baseClassName: string, additionalClassName?: string) {
    return additionalClassName ? `${baseClassName} ${additionalClassName}` : baseClassName;
  }

  return (
    <div className={shortClassName(styles['feature'], props.className)}>
      <Icon type={props.icon as "user" | "chat" | "money" | "security"} className={shortClassName(styles['feature__icon'], props.className)} />
      <h3 className={shortClassName(styles['feature__title'], props.className)}>
        {props.title}
      </h3>
      <p className={shortClassName(styles['feature__text'], props.className)}>
        {props.text}
      </p>
    </div>
  );
};

export default Feature;
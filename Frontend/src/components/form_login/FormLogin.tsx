import Icon from '../../features/icon/Icon';
import Button from '../button/Button';
import "./form-login.scss";

const Login = () => {
  return (
    <div className="login">
        <Icon type="user" className="login__icon" />
        <h1 className='login__title'>Sign In</h1>
        <form className='login__form' action={"/login"}>
            <div className='login__form__container__text'>
                <label className='login__form__container__text__label' htmlFor="username">User Name</label>
                <input className='login__form__container__text__input' type="text" id='username' />
            </div>
            <div className='login__form__container__text'>
                <label className='login__form__container__text__label' htmlFor="password">Password</label>
                <input className='login__form__container__text__input' type="password" id="password" />
            </div>

            <div className='login__form__container__checkbox'>
                <input className='login__form__container__checkbox__input' type="checkbox" id="remember-me" name="remember-me" />
                <label className='login__form__container__checkbox__label' htmlFor="remember-me">Remember me</label>
            </div>
            <Button className='login__form__button' content="Sign In" />
        </form>
    </div>

  );
};

export default Login;
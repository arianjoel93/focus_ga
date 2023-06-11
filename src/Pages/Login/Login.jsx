//styles
import "./Login.scss"

//react
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () => {
    return (
        <form className="loginC">
            <div className="login">
                <h3>Sign in</h3>
                {/* {data?.length ?
                    <p className="error">{data[0]}</p>
                    : <p className="error"></p>} */}
                <div className="input">
                    <label>User</label>
                    <InputText name="username" placeholder="Usuario" />
                </div>
                <div className="input">
                    <label>Password</label>
                    <Password name="password" placeholder="Contraseña" feedback={false} />
                </div>
                <div className="button">
                    <Button label="Log In" severity="secondary" type='submit' />
                </div>
            </div>
        </form>
    )
}

export default Login
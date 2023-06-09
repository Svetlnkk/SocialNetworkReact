import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"

const Login = (props) => {
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
let maxLength10=maxLengthCreator(10);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name={"email"} component={Input}
                validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" name={"password"} component={Input} type={"password"}
                validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox" /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}
const LoginReduxForm=reduxForm({
    form:'login'
})(LoginForm);
const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
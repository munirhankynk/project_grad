import { SignIn } from "@clerk/nextjs";
import styles from '../../ui/login/login.module.css'

const SignInPage = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <SignIn />
        </div>
    );
};

export default SignInPage;
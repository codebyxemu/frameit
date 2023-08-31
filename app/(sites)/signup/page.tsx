import FooterComponent from "@/app/components/footer/Footer";
import RegisterComponent from "@/app/components/login/CreateAccount";
import LogInComponent from "@/app/components/login/LoginSite";

export default function SignUpPage() {
    return (
        <main>
            <RegisterComponent />
            <FooterComponent />
        </main>
    )
}
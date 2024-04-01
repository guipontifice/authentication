import { CardWrapper } from "./card-wraper"
export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Login"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial  // This is a boolean prop, so it will be true
        >
            Login Form!
        </CardWrapper>
    )
}
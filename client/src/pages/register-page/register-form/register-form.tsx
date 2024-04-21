import {
    RegisterFormWrapper,
    RegisterFormBlock,
    RegisterFormInput,
    RegisterFormLabel,
    RegisterTitle,
    RegisterFormElement,
    RegisterFormError,
    RegisterFormButton,
} from "./styles.ts";
import { useState } from "react";
import { Simulate } from "react-dom/test-utils";

export type TRegFormData = {
    username: string;
    password: string;
    tryPassword: string;
};

export const RegisterForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<TRegFormData>({
        username: "",
        password: "",
        tryPassword: "",
    });
    return (
        <RegisterFormWrapper>
            <RegisterFormElement>
                <RegisterTitle>Register please</RegisterTitle>
                <RegisterFormBlock>
                    <RegisterFormLabel>Your username:</RegisterFormLabel>
                    <RegisterFormInput type="text" placeholder="username" name="username" required />
                    {errors.username && <RegisterFormError>{errors.username}</RegisterFormError>}
                </RegisterFormBlock>

                <RegisterFormBlock>
                    <RegisterFormLabel>Set password:</RegisterFormLabel>
                    <RegisterFormInput type="password" placeholder="password" name="password" required />
                    {errors.password && <RegisterFormError>{errors.password}</RegisterFormError>}
                </RegisterFormBlock>

                <RegisterFormBlock>
                    <RegisterFormLabel>Repeat password:</RegisterFormLabel>
                    <RegisterFormInput type="password" placeholder="password" name="tryPassword" required />
                    {errors.tryPassword && <RegisterFormError>{errors.tryPassword}</RegisterFormError>}
                </RegisterFormBlock>

                <RegisterFormBlock>
                    <RegisterFormButton type="button" value={loading ? "LOADING.." : "SUBMIT"} />
                </RegisterFormBlock>
            </RegisterFormElement>
        </RegisterFormWrapper>
    );
};

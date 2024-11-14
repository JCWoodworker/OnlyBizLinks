// src/auth/validation.ts
import { SignUpPayload } from "../stores/AuthStore";
import { emailRegex, passwordRegex } from "./constants";

export const validateEmail = (email: string): string | null => {
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address";
    }
    return null;
};

export const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }
    if (!passwordRegex.test(password)) {
        return "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 special character";
    }
    return null;
};

export const validateSignUpPayload = (payload: SignUpPayload): string | null => {
    if (!payload.email || !payload.password) {
        return "Please enter an email and password";
    }
    const emailError = validateEmail(payload.email);
    if (emailError) return emailError;

    const passwordError = validatePassword(payload.password);
    if (passwordError) return passwordError;

    return null;
};
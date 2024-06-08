// authProvider.types.ts
import { User } from '@supabase/supabase-js';

type withPasswordCredentials = {
    email: string;
    password: string;
};

export type RegisterWithPasswordCredentials = withPasswordCredentials;

export type LoginWithPasswordCredentials = withPasswordCredentials;

export type ForgotPasswordCredentials = Omit<
    withPasswordCredentials,
    'password'
>;

export type LoginMethods = {
    withPassword: (credentials: LoginWithPasswordCredentials) => void;
};

export type RegisterMethods = {
    withPassword: (credentials: RegisterWithPasswordCredentials) => void;
};

export type AuthState = {
    isAuthenticated: boolean;
    user?: User | null;
    isLoading: boolean;
    error: string | null;
};

export type AuthContextType = {
    state: AuthState;
    login: () => LoginMethods;
    register: () => RegisterMethods;
    forgotPassword: (cred: ForgotPasswordCredentials) => void;
    logout: () => void;
};

const initAuthMethods = {
    login: () => {
        return {
            withPassword: function () {},
        };
    },
    register: () => {
        return {
            withPassword: function () {},
        };
    },
    forgotPassword: () => {},
    logout: () => {},
};

export const initialAuthState: AuthState = {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: null,
};

export const initialAuthContext = {
    state: initialAuthState,
    ...initAuthMethods,
};

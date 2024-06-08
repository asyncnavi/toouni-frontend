import { useEffect } from 'react';

import { redirect } from 'next/navigation';

import { useAuth } from '@/providers/auth';
import { LoadingOverlay } from '@/ui';

// FIXME : Add loading overlay

export default function withAuth(Component: React.ComponentType) {
    const AuthenticatedComponent = (props: any) => {
        const { state } = useAuth();

        useEffect(() => {
            if (!state.isLoading && !state.user) {
                redirect('/');
            }
        });

        if (state.error) {
            console.log(state.error);
            alert(state.error);
            return;
        }

        if (state.isLoading) {
            return <LoadingOverlay loading />;
        }

        if (state.user) {
            return <Component {...props} />;
        }

        return null;
    };

    return AuthenticatedComponent;
}

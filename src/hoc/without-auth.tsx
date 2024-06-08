import { useEffect } from 'react';

import { redirect } from 'next/navigation';

import { useAuth } from '@/providers/auth';
import { LoadingOverlay } from '@/ui';

export default function withoutAuth(Component: React.ComponentType) {
    const NotAuthenticatedComponent = (props: any) => {
        const { state } = useAuth();

        useEffect(() => {
            if (!state.isLoading && state.user) {
                redirect('/app');
            }
        }, [state]);

        if (state.error) {
            alert(state.error);
            return;
        }

        if (state.isLoading) {
            return <LoadingOverlay loading />;
        }

        return <Component {...props} />;
    };

    return NotAuthenticatedComponent;
}

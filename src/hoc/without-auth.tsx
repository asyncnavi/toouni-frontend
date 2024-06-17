import { useEffect } from 'react';

import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { LoadingOverlay } from '@/ui';

export default function withoutAuth(Component: React.ComponentType) {
    const NotAuthenticatedComponent = (props: any) => {
        const { user, status, error } = useSelector(
            (state: RootState) => state.auth,
        );
        const loading = status == 'pending';
        useEffect(() => {
            if (!loading && user) {
                redirect('/app');
            }
        }, [loading, user]);

        if (error) {
            alert(error);
            return;
        }

        if (loading) {
            return <LoadingOverlay loading />;
        }

        return <Component {...props} />;
    };

    return NotAuthenticatedComponent;
}

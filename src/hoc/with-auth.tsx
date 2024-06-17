import { useEffect } from 'react';

import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { LoadingOverlay } from '@/ui';

/*
    FIXME : Handle Error using toast
 */
export default function withAuth(Component: React.ComponentType) {
    const AuthenticatedComponent = (props: any) => {
        const { user, status, error } = useSelector(
            (state: RootState) => state.auth,
        );
        const loading = status == 'pending';

        useEffect(() => {
            if (!loading && !user) {
                redirect('/');
            }
        });

        if (error) {
            console.log(error);
            alert(error);
            return;
        }

        if (loading) {
            return <LoadingOverlay loading />;
        }

        if (user) {
            return <Component {...props} />;
        }

        return null;
    };

    return AuthenticatedComponent;
}

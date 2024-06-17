import { useEffect } from 'react';

import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { LoadingOverlay } from '@/ui';
import Toast from '@/ui/toast';

/*
    FIXME : Handle Error using toast
 */
export default function withAuth(Component: React.ComponentType) {
    const AuthenticatedComponent = (props: any) => {
        const { user, hasProfile, status, error } = useSelector(
            (state: RootState) => state.auth,
        );
        const loading = status == 'pending';

        useEffect(() => {
            if (!loading && !user) {
                redirect('/');
            }
        });

        if (error) {
            return (
                <Toast
                    variant="danger"
                    title="There is an error"
                    description={error}
                />
            );
        }

        if (loading) {
            return <LoadingOverlay loading />;
        }

        if (user && !hasProfile) {
            redirect('/create-profile');
            return null;
        }

        if (user && hasProfile) {
            return <Component {...props} />;
        }

        return null;
    };

    return AuthenticatedComponent;
}

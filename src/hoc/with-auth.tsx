import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { LoadingOverlay } from '@/ui';
import Toast from '@/ui/toast';

export default function withAuth(Component: React.ComponentType) {
    const AuthenticatedComponent = (props: any) => {
        const router = useRouter();
        const { user, status, error } = useSelector(
            (state: RootState) => state.auth,
        );
        const loading = status === 'pending' || status === 'idle';

        useEffect(() => {
            if (!loading && !user) {
                router.push('/');
            }
        }, [loading, router, user]);

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

        if (user) {
            return <Component {...props} />;
        }

        return null;
    };

    return AuthenticatedComponent;
}

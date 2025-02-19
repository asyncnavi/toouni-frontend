import { useEffect } from 'react';

import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import Toast from '@/ui/toast';

export default function withoutAuth(Component: React.ComponentType) {
    const NotAuthenticatedComponent = (props: any) => {
        const { user, status, error } = useSelector(
            (state: RootState) => state.auth,
        );
        const loading = status == 'pending';

        useEffect(() => {
            if (!loading && user) {
                redirect('/');
            }
        }, [loading, user]);

        if (error) {
            return (
                <Toast
                    variant="danger"
                    title="There is an error"
                    description={error}
                />
            );
        }

        return <Component {...props} />;
    };

    return NotAuthenticatedComponent;
}

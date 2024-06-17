import { supabase } from '@/lib/supabase';

export default async function getUserProfile(user_id: string) {
    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user_id)
            .single();

        if (error) {
            console.log('error');
        }
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

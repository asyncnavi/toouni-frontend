export type Profile = {
    id: string;
    created_at: string;
    updated_at: string;
    type: 'student' | string;
    username: string;
    name?: string | null;
    avatar_url?: string | null;
    bio?: string | null;
    date_of_birth?: string | null;
    university_or_college: string;
    location?: string | null;
};

export type CreateProfile = {
    type: 'student' | string;
    username: string;
    name?: string | null;
    avatar_url?: string | null;
    bio?: string | null;
    date_of_birth?: string | null;
    university_or_college: string;
    location?: string | null;
};

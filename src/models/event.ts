export type Event = {
    id: string;
    profile_id: string;
    created_at: string;
    updated_at: string;
    name: string;
    description?: string;
    avatar_url?: string | null;
    attachment_url: string | null;
    location?: string | null;
};

export type CreateEvent = {
    name: string;
    description?: string;
    location?: string | null;
};

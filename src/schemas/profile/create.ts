import * as Nope from 'nope-validator';

export const createProfileSchema = Nope.object().shape({
    name: Nope.string().required('Your name is required to create a profile'),
    username: Nope.string()
        .required('Username is required to create a profile')
        .regex(
            /^[a-zA-Z0-9._]+$/,
            'Username can only contain letters, numbers, periods, and underscores',
        )
        .min(3, 'Username must be at least 3 characters long')
        .max(30, 'Username cannot be more than 30 characters long'),
    bio: Nope.string().max(120, 'Bio cannot be more than 120 characters'),
    location: Nope.string().max(
        48,
        'Location cannot be more than 48 characters',
    ),
    date_of_birth: Nope.date(),
    type: Nope.string().required('Profile type is required'),
});

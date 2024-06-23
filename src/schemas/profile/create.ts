import * as Nope from 'nope-validator';

const isAtLeast13YearsOld = (value: string | number | Date) => {
    const birthDate = new Date(value);

    // Check if the date is valid
    if (isNaN(birthDate.getTime())) {
        return 'Invalid date format';
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    if (age < 13) {
        return 'You must be at least 13 years old';
    }
    // You can define a maximum age if needed. Here, we're using 150 as an arbitrary example.
    if (age > 150) {
        return 'Age cannot be more than 150 years';
    }
    return undefined;
};
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
    date_of_birth: Nope.string().test((v) => isAtLeast13YearsOld(v as string)),
    type: Nope.string().required('Profile type is required'),
});

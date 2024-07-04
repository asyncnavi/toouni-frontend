import * as Nope from 'nope-validator';

export const createEventSchema = Nope.object().shape({
    name: Nope.string()
        .required('Event Name is required')
        .max(48, 'Event name cannot be  more than 48 letter')
        .min(8, 'Event name must be at least 8 characters long'),
    description: Nope.string().max(
        256,
        'Event name cannot be  more than 256 letter',
    ),
    location: Nope.string(),
});

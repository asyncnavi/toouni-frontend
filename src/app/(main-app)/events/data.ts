type Event = {
    id: string;
    title: string;
    description: string;
    organization: string;
    date: string;
    time: string;
    color: keyof typeof colorClasses;
};

const colorClasses: { [key: string]: string } = {
    teal: 'bg-teal-200',
    indigo: 'bg-indigo-200',
    orange: 'bg-orange-200',
    cyan: 'bg-cyan-200',
    pink: 'bg-pink-200',
};

export const events: Event[] = [
    {
        id: 'A1B2C3D4E5F6',
        title: 'Google Developer Group Orientation',
        description:
            'GDG Orientation Session introduces new members to the GDG community, showcasing opportunities for learning, collaboration, and growth in technology through events, workshops, and projects.',
        organization: 'Google Developer Group',
        date: '2024-11-01',
        time: '10:00 AM',
        color: 'teal',
    },
    {
        id: 'G7H8I9J0K1L2',
        title: 'TechTalks: AI in Education',
        description:
            'A seminar focused on the latest advancements in AI applications within education, discussing adaptive learning technologies and more.',
        organization: 'CU Tech Club',
        date: '2024-11-05',
        time: '2:00 PM',
        color: 'indigo',
    },
    {
        id: 'M3N4O5P6Q7R8',
        title: 'Web Development Workshop',
        description:
            'Hands-on workshop covering the fundamentals of modern web development, including HTML, CSS, JavaScript, and popular frameworks.',
        organization: 'Coding Club',
        date: '2024-11-10',
        time: '1:30 PM',
        color: 'orange',
    },
    {
        id: 'S9T0U1V2W3X4',
        title: 'Hackathon 2024',
        description:
            'A 48-hour hackathon where participants will team up to solve real-world challenges and win exciting prizes.',
        organization: 'Innovation Lab',
        date: '2024-11-15',
        time: '9:00 AM',
        color: 'cyan',
    },
    {
        id: 'Y5Z6A7B8C9D0',
        title: 'Cybersecurity Awareness',
        description:
            'An informative session on the importance of cybersecurity, best practices, and how to safeguard personal and organizational data.',
        organization: 'Cyber Club',
        date: '2024-11-20',
        time: '11:00 AM',
        color: 'pink',
    },
];

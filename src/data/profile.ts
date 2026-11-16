const whatsappNumber = '917075196267';
const whatsappText = 'Hi Sandeep, I saw your portfolio and want to discuss a project.';

export const profile = {
  name: 'Sandeep Bodapudi',
  label: 'Freelance software developer · Hyderabad',
  headline: ['I build the', 'software your', 'business'],
  headlineAccent: 'runs on.',
  lead: 'CRMs, billing, stock and customer portals for Indian businesses. Built around how your team already works.',
  phoneDisplay: '70751 96267',
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`,
  email: 'sandeepkumarbodapudi@gmail.com',
  github: 'https://github.com/sandeep-bodapudi',
  linkedin: 'https://linkedin.com/in/sandeepkumarbodapudi',
  about: [
    'I am Sandeep, a software developer in Hyderabad with a B.Sc. in Computer Science. I build business software end to end: I sit with the people who will use it, write down how the work really happens, and then build and launch the system myself.',
    'I lead technology at Radha Real Home Properties, where the CRM I built runs the sales floor, and I take on freelance projects for other businesses.',
  ],
  tools: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'MySQL', 'PostgreSQL', 'Python', 'Installable web apps (PWA)'],
};

export const stats = [
  { value: '11 lakh+', label: 'leads managed in one CRM' },
  { value: '20', label: 'staff use it every working day' },
  { value: '10+', label: 'business apps built for clients' },
  { value: 'GST', label: 'billing, stock and accounts built in' },
];

export const leadFlow = [
  { step: 'New lead', note: 'assigned to a caller' },
  { step: 'Follow-up call', note: 'logged with outcome' },
  { step: 'Site visit', note: 'booked and approved' },
  { step: 'Booking', note: 'property reserved' },
  { step: 'Instalments', note: 'tracked to the last payment' },
];

export const services = [
  {
    title: 'CRM and sales tracking',
    text: 'Every lead, call, visit and booking in one place, so nothing is lost and the owner sees the whole pipeline.',
  },
  {
    title: 'Billing, stock and accounts',
    text: 'GST invoices, cash bills, stock levels and customer dues, with numbers the accountant can trust.',
  },
  {
    title: 'Staff and attendance',
    text: 'Attendance, targets, tasks and daily reports, with each person seeing only what their role allows.',
  },
  {
    title: 'Customer and partner portals',
    text: 'A login for your customers or partners to see their bookings, payments and documents without calling you.',
  },
];

export const process = [
  {
    title: 'We talk',
    text: 'A call or a visit to understand how your team works today and where time and money leak.',
  },
  {
    title: 'I write the plan',
    text: 'You get the scope, the screens and the price in writing before any code is written.',
  },
  {
    title: 'I build it',
    text: 'You see working software as it takes shape and correct the course early, not at the end.',
  },
  {
    title: 'Launch and support',
    text: 'I put it live, train your staff to use it in their daily work, and stay on for fixes and new features.',
  },
];

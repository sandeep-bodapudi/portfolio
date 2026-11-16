export interface CaseStudy {
  title: string;
  context: string;
  story: string;
  stack: string;
  facts: { label: string; detail: string }[];
}

export interface MoreWork {
  title: string;
  context: string;
  text: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Radha Real Home CRM',
    context: 'Real estate · CRM and staff management',
    story:
      'A sales team was tracking leads, site visits and attendance across sheets and phone calls. I built one system that carries a lead from first call to booking and payment, and now 20 people run their working day in it.',
    stack: 'React · TypeScript · Node.js · Prisma · MySQL',
    facts: [
      { label: 'Leads and follow-ups', detail: '11 lakh+ records' },
      { label: 'Site visits and bookings', detail: 'with approvals' },
      { label: 'Instalments and payments', detail: 'tracked per customer' },
      { label: 'Attendance and targets', detail: 'QR and kiosk check-in' },
      { label: 'Roles and permissions', detail: 'set by the owner' },
      { label: 'Customer portal', detail: 'buyers see their own property' },
    ],
  },
  {
    title: 'Sree Vidya Books',
    context: 'Book wholesale · Orders, stock and accounts',
    story:
      'A wholesale book seller in Hyderabad wrote orders, invoices, packing slips and cash bills by hand, so stock and dues were hard to know. The platform carries each customer order from request to payment, on mobile and desktop.',
    stack: 'React · TypeScript · Node.js · Prisma',
    facts: [
      { label: 'Customer orders', detail: 'approved by the owner' },
      { label: 'Stock', detail: 'good and damaged kept apart' },
      { label: 'GST invoices and cash bills', detail: 'numbered automatically' },
      { label: 'Vendor shortfalls', detail: 'every short line followed up' },
      { label: 'Returns and credit notes', detail: 'posted to the ledger' },
      { label: 'Ledger', detail: 'for the accountant and the owner' },
    ],
  },
  {
    title: 'FinOps',
    context: 'Retail · Credit book, stock and billing',
    story:
      'A shop owner needs to know who owes what, what is in stock and what was sold today. FinOps keeps the customer credit book, items, bills and reminders in one app that a shop can run from a phone.',
    stack: 'Next.js · TypeScript · Prisma',
    facts: [
      { label: 'Customer credit book', detail: 'with credit limits and due dates' },
      { label: 'Items, stock and GST bills', detail: 'quotes, orders and returns' },
      { label: 'Payment reminders', detail: 'sent to customers' },
      { label: 'Staff access', detail: 'owner, staff and field reps' },
      { label: 'Languages', detail: 'English, Hindi, Telugu, Tamil, Kannada' },
    ],
  },
  {
    title: 'OneBridge Grid',
    context: 'Business identity · Digital business cards',
    story:
      'A prototype for a digital business card platform. A tap on an NFC card or a scan of a QR code saves the contact on the visitor\'s phone and records a lead for the company, with no app to download.',
    stack: 'TypeScript · pnpm monorepo',
    facts: [
      { label: 'Digital cards', detail: 'NFC tap or QR scan' },
      { label: 'Leads', detail: 'owned by the company, not the employee' },
      { label: 'Company structure', detail: 'branches, departments and teams' },
      { label: 'Admin dashboard', detail: 'cards, people and analytics' },
    ],
  },
];

export const moreWork: MoreWork[] = [
  {
    title: 'GrovvIthUs',
    context: 'Agency website and admin panel',
    text: 'An animated public website with a portfolio, plus an admin panel for leads, quotations, invoices and clients.',
  },
  {
    title: 'Unifit.hyd',
    context: 'Fitness studio',
    text: 'A public website, a member app for bookings and a dashboard for coaches and staff.',
  },
  {
    title: 'Associate partner portal',
    context: 'Construction company',
    text: 'A portal where sales partners log in, with separate access for the director, managers and associates.',
  },
  {
    title: 'Data Collector',
    context: 'Internal tool',
    text: 'Collects public business information into sheets, removes duplicates and shares the result with a customer.',
  },
  {
    title: 'Vyasthra Collections',
    context: 'Clothing brand · Online store',
    text: 'An online store with product pages, cart, checkout and an admin dashboard for inventory.',
    link: 'https://vyasthracollections.com',
  },
  {
    title: 'Employee management system',
    context: 'Clothing brand · Internal tool',
    text: 'Replaced spreadsheet commission tracking with a system for employee records and performance.',
  },
];

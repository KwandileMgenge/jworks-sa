// ── NAVIGATION ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'Services',  href: '#services' },
  { label: 'About',     href: '#about' },
  { label: 'Director',  href: '#director' },
  { label: 'Community', href: '#community' },
  { label: 'Gallery',   href: '#gallery' },
  { label: 'Contact',   href: '#contact' },
];

// ── HERO STATS ───────────────────────────────────────────────
export const HERO_STATS = [
  { num: '10+',  label: 'Services Offered' },
  { num: '2014', label: 'Founded' },
  { num: '2',    label: 'Industry Sectors' },
  { num: '24/7', label: 'WhatsApp Support' },
];

// ── HERO SERVICE PREVIEWS ────────────────────────────────────
export const HERO_PREVIEWS = [
  {
    icon: '🏗️',
    title: 'Construction & Home Improvements',
    subtitle: 'New builds, renovations, tiling, paving & more',
  },
  {
    icon: '⛽',
    title: 'Energy & Fuel Supply',
    subtitle: 'Diesel, LPG, Petrol, Biofuels, Aviation Fuel',
  },
];

// ── STRIP BANNER ─────────────────────────────────────────────
export const STRIP_ITEMS = [
  '🏗️ Construction & Home Improvements',
  '⛽ Fuel & Energy Supply',
  '🏆 Quality Workmanship',
  '📞 +27 76 773 7162',
];

// ── SERVICES ─────────────────────────────────────────────────
export const SERVICE_COLUMNS = [
  {
    icon: '🏗️',
    title: 'Construction & Home Improvements',
    subtitle: 'Building, Renovating, Transforming',
    items: [
      'Turnkey Building & Civil Construction',
      'Building Structures (New Builds)',
      'Structural Improvements & Renovations',
      'Bathroom Alterations',
      'Retaining Walls',
      'Paving & Tarring',
      'Tiling & Painting',
      'Designed Ceilings',
      'Complete Aluminium (Windows & Doors)',
      'Interior Design & Fit-Outs',
      'Property Development',
      'Warehousing & Logistics Facilities',
    ],
  },
  {
    icon: '⛽',
    title: 'Energy & Fuel Supply',
    subtitle: 'Powering Industry & Households',
    items: [
      'Diesel Supply & Lubricants',
      'Liquified Petroleum Gas (LPG)',
      'Petrol / Paraffin',
      'Biofuels',
      'Jet Fuel & Aviation Gasoline',
      'Industrial Bulk Supply & Logistics',
      'Warehousing Services',
    ],
  },
];

export const FUEL_DETAILS = [
  {
    tag: 'J Black Holdings',
    title: 'Premium Grade Petrol',
    desc: 'Formulated with an advanced high-octane matrix to deliver exceptional combustion efficiency, seamless acceleration, and superior engine protection — maximizing overall fleet longevity.',
  },
  {
    tag: 'J Black Holdings',
    title: 'Engineered Diesel Fuel',
    desc: 'Specially engineered to meet the stringent performance demands of heavy machinery and modern logistics fleets — maximizing power output, optimizing fuel economy, and supporting clean combustion.',
  },
  {
    tag: 'J Black Holdings',
    title: 'Industrial Bulk Supply',
    desc: 'Safe, punctual, and highly compliant petroleum supply networks servicing municipal depots, mining sites, transport hubs, and private commercial enterprises nationwide.',
  },
];

// ── CORE VALUES ──────────────────────────────────────────────
export const CORE_VALUES = [
  { label: 'Quality',    desc: 'An unyielding commitment to top-notch craftsmanship and meticulous attention to detail.' },
  { label: 'Excellence', desc: 'Constantly pushing performance boundaries to deliver outstanding project management.' },
  { label: 'Safety',     desc: 'Secure, incident-free working environments and rigorous regulatory compliance.' },
  { label: 'Integrity',  desc: 'Lifelong professional trust through financial transparency and accountability.' },
];

// ── GALLERY ITEMS ────────────────────────────────────────────
export const GALLERY_ITEMS = [
  { src: ' ', label: 'Renovation / New Build\nFeatured Project', tag: 'Construction', cls: 'gi-1', large: true },
  { src: ' ', label: 'Bathroom Alteration',     tag: 'Renovation',     cls: 'gi-2' },
  { src: 'fuelDelivery.png', label: 'Fuel Delivery',            tag: 'Energy Supply',  cls: 'gi-3' },
  { src: ' ', label: 'Paving & Tarring',         tag: 'Paving',         cls: 'gi-4' },
  { src: ' ', label: 'Warehousing & Storage',    tag: 'Warehousing',    cls: 'gi-5' },
];

// ── STATUTORY INFO ───────────────────────────────────────────
export const STATUTORY_ITEMS = [
  { label: 'Company Registration',       value: '2014/063415/07' },
  { label: 'CIDB Registration',          value: '10 045 728' },
  { label: 'Tax Reference Number',       value: 'IT - 902 072 2238' },
  { label: 'D.O.L. Registration',        value: '990 000 992 741' },
  { label: 'Central Supplier Database',  value: '11 811' },
  { label: 'CSD Number',                 value: 'MAAA 011 8 111' },
];

// ── CONTACT ──────────────────────────────────────────────────
export const CONTACT_INFO = {
  phones: [
    { icon: '📞', display: '+27 (0)76 773 7162', href: 'tel:+27767737162' },
    { icon: '📞', display: '+27 (0)31 787 1004', href: 'tel:+27317871004' },
    { icon: '📠', display: '+27 86 480 7238 (Fax)', href: null },
  ],
  emails: [
    { display: 'info@jworks-sa.co.za',  href: 'mailto:info@jworks-sa.co.za',  note: 'Primary' },
    { display: 'jack@jworks-sa.co.za',  href: 'mailto:jack@jworks-sa.co.za',  note: 'Director' },
    { display: 'joptimistic@icloud.com', href: 'mailto:joptimistic@icloud.com', note: null },
    { display: 'jworks_sa@icloud.com',  href: 'mailto:jworks_sa@icloud.com',  note: 'Admin' },
  ],
  web: [
    { icon: '🌐', display: 'www.jworks-sa.co.za', href: 'https://www.jworks-sa.co.za' },
    { icon: '📱', display: '@JWORKS_SA', href: null },
  ],
};

export const QUOTE_FORM_SERVICES = [
  {
    group: 'Construction & Home Improvements',
    options: [
      'Bathroom Alterations',
      'Building Structures (New Builds)',
      'Renovations',
      'Retaining Walls',
      'Paving & Tarring',
      'Tiling',
      'Painting',
      'Designed Ceilings',
      'Complete Aluminium (Windows/Doors)',
      'Interior Design',
      'Property Development',
      'Warehousing Services',
    ],
  },
  {
    group: 'Energy & Fuel Supply (J Black Holdings)',
    options: [
      'Diesel Supply & Lubricants',
      'Liquified Petroleum Gas (LPG)',
      'Petrol / Paraffin',
      'Biofuels',
      'Jet Fuel & Aviation Gasoline',
      'Industrial Bulk Fuel Supply',
    ],
  },
];

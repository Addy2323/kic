export interface NavSubItem {
  label: string
  href: string
  description?: string
  badge?: string
}

export interface NavItem {
  label: string
  href: string
  description?: string
  children?: NavSubItem[]
}

export interface TeamMember {
  name: string
  role: string
  category: 'Leadership' | 'Legal & HR' | 'Finance' | 'Marketing' | 'Technology'
}

export const company = {
  name: 'Kigola International Company Limited',
  shortName: 'KIC Ltd',
  registrationDate: '27 July 2009',
  registrationNumber: 'Official Registration, United Republic of Tanzania',
  tagline: 'Sustainable Investment. Lasting Impact.',
  subtitle: 'Investing in Renewable Energy, Healthcare, Agriculture and Sustainable Infrastructure.',
  email: 'info@kic.co.tz',
  phone: '+255 755 029 323',
  whatsapp: '+255 755 029 323',
  whatsappLink: 'https://wa.me/255755029323',
  location: ['Mufindi District', 'Iringa Region', 'United Republic of Tanzania'],
  founder: {
    name: 'Mendrad Kigola',
    title: 'Managing Director',
    bio: 'Managing Director and founding leader of Kigola International Company Limited, guiding long-term strategy, community-aligned asset development, and multi-sector investment across Tanzania and East Africa.',
  },
  team: [
    { name: 'Mendrad Kigola', role: 'Managing Director', category: 'Leadership' },
    { name: 'Asteberta Myamba', role: 'Director', category: 'Leadership' },
    { name: 'Irean Mendrad Kigola', role: 'Company HR Manager, Lawyer', category: 'Legal & HR' },
    { name: 'Isaac Mendrad Kigola', role: 'Company Accountant', category: 'Finance' },
    { name: 'Innocent Mendra Kigola', role: 'Company Marketing Manager', category: 'Marketing' },
    { name: 'Ado Myamba', role: 'Company Information Technology Officer (ICT)', category: 'Technology' },
  ] as TeamMember[],
  roles: [
    'Managing Director',
    'Director',
    'Company HR Manager & Lawyer',
    'Company Accountant',
    'Company Marketing Manager',
    'Company IT Officer (ICT)',
  ],
}

export const navItems: NavItem[] = [
  {
    label: 'Business Areas',
    href: '/business-areas',
    description: 'Six core sectors driving sustainable economic development across Tanzania.',
    children: [
      { label: 'Renewable Energy', href: '/business-areas/renewable-energy', description: 'Clean energy and hydropower development' },
      { label: 'Healthcare', href: '/business-areas/healthcare', description: 'Healthcare infrastructure and services' },
      { label: 'Agriculture & Livestock', href: '/business-areas/agriculture-livestock', description: 'Commercial agriculture, livestock and food security' },
      { label: 'Sustainable Infrastructure', href: '/business-areas/sustainable-infrastructure', description: 'Infrastructure, water and sanitation development' },
      { label: 'Education & Capacity Development', href: '/business-areas/education-capacity-development', description: 'Education and professional capacity development' },
      { label: 'Investment & Project Services', href: '/business-areas/investment-project-services', description: 'Investment consultancy, logistics and project support' },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    description: 'Flagship development initiatives across energy, healthcare, education and agriculture.',
    children: [
      { label: 'Flagship Projects', href: '/portfolio', description: 'Explore our major development initiatives' },
      { label: 'Nyalawa Hydropower Project', href: '/portfolio/nyalawa-hydropower', description: '5 MW renewable energy development' },
      { label: 'Kigola International Hospital', href: '/portfolio/kigola-international-hospital', description: 'Planned healthcare development' },
      { label: 'Kigola International Medical College', href: '/portfolio/kigola-international-medical-college', description: 'Planned medical education institution' },
      { label: 'Farm & Livestock Project', href: '/portfolio/kigola-international-farm', description: 'Commercial agriculture development' },
    ],
  },
  {
    label: 'Strategy',
    href: '/strategy',
    description: 'Disciplined capital allocation built on documented strategic priorities.',
    children: [
      { label: 'Our Objectives', href: '/strategy#objectives', description: 'What KIC aims to achieve' },
      { label: 'Investment Opportunities', href: '/strategy#opportunities', description: 'Priority areas for investment' },
      { label: 'Partnership Approach', href: '/strategy#partnerships', description: 'Working with investors and partners' },
      { label: 'East Africa Ambition', href: '/strategy#ambition', description: 'Our long-term growth direction' },
    ],
  },
  {
    label: 'Sustainability',
    href: '/sustainability',
    description: 'Sustainable investment and measurable ESG impact embedded across all operations.',
    children: [
      { label: 'Sustainability Approach', href: '/sustainability#approach', description: 'Sustainable Investment · Lasting Impact' },
      { label: 'Environmental Impact', href: '/sustainability#environmental', description: 'Clean energy and responsible stewardship' },
      { label: 'Social Impact', href: '/sustainability#social', description: 'Employment, healthcare and food security' },
      { label: 'Community Development', href: '/sustainability#community', description: 'Growing together with our communities' },
      { label: 'SDG Contribution', href: '/sustainability#sdgs', description: 'UN Sustainable Development Goals alignment' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    description: 'Tanzanian-owned private investment & development company registered in 2009.',
    children: [
      { label: 'About KIC', href: '/about', description: 'Headquartered in Mufindi District, Iringa Region' },
      { label: 'Our Story', href: '/about#story', description: 'Our journey since 2009' },
      { label: 'Vision & Mission', href: '/about#vision-mission', description: 'Our purpose and regional trajectory' },
      { label: 'Leadership', href: '/about#leadership', description: 'Founder & Director Mendrad Lutengano Kigola' },
      { label: 'Our Team', href: '/about#team', description: 'The people behind our vision' },
      { label: 'Core Values', href: '/about#core-values', description: 'The seven principles that guide us' },
      { label: 'Milestones', href: '/about#milestones', description: 'Corporate timeline & development record' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export interface ProjectDetail {
  slug: string
  name: string
  sector: string
  meta: string
  image: string
  text: string
  capacity?: string
  location: string
  status: 'Planning Stage' | 'Feasibility / Development' | 'Planned' | 'Active Development'
  purpose: string
  facts: { label: string; value: string }[]
  strategicImportance: string
  impact: string
  ctaText: string
}

export const projects: ProjectDetail[] = [
  {
    slug: 'nyalawa-hydropower',
    name: 'Nyalawa Hydropower Project',
    sector: 'Renewable Energy',
    meta: '5 MW · Magunguli Village, Mufindi District',
    image: '/images/kic-hydropower.png',
    text: 'A flagship 5 MW small hydropower generation project designed to feed clean, reliable electricity directly into the national grid while catalyzing industrial and community development in Iringa Region.',
    capacity: '5 MW',
    location: 'Magunguli Village, Mufindi District, Iringa Region',
    status: 'Feasibility / Development',
    purpose: 'Supply clean, dependable renewable electricity to the national grid and support regional industrialization.',
    facts: [
      { label: 'Sector', value: 'Renewable Energy / Small Hydropower' },
      { label: 'Installed Capacity', value: '5 MW' },
      { label: 'Location', value: 'Magunguli Village, Mufindi District, Iringa Region, Tanzania' },
      { label: 'Grid Connection', value: 'National Power Grid Offtake (TANESCO)' },
      { label: 'Development Status', value: 'Feasibility / Planning Stage (CMS Updatable)' },
      { label: 'Project Type', value: 'Independent Power Producer (IPP) / Clean Energy Asset' },
    ],
    strategicImportance: 'Hydropower is central to KIC’s energy agenda. The Nyalawa project harnesses local water resources to generate base-load clean electricity, reducing fossil fuel dependence and expanding access to energy for businesses, healthcare centers and local households across Southern Highlands.',
    impact: 'Expected to displace carbon emissions, provide sustainable local construction and operational employment, stabilize rural grid reliability, and support community water management.',
    ctaText: 'Partner on This Project →',
  },
  {
    slug: 'kigola-international-hospital',
    name: 'Kigola International Hospital',
    sector: 'Healthcare',
    meta: 'Healthcare Infrastructure · Planned',
    image: '/images/kic-healthcare.png',
    text: 'A planned modern healthcare facility intended to significantly improve access to specialized medical services, diagnostics, and emergency care in Tanzania.',
    location: 'Iringa Region, United Republic of Tanzania',
    status: 'Planned',
    purpose: 'Provide high-standard secondary and specialist clinical care, diagnostics, and maternal-child health services.',
    facts: [
      { label: 'Sector', value: 'Healthcare Infrastructure & Services' },
      { label: 'Location', value: 'Iringa Region, Tanzania' },
      { label: 'Development Status', value: 'Planned Project' },
      { label: 'Facility Type', value: 'Modern Multi-Specialty Hospital' },
      { label: 'Key Pillars', value: 'Inpatient Care, Emergency, Diagnostics, Maternal Health' },
    ],
    strategicImportance: 'Bridging critical gaps in secondary and tertiary healthcare access in Tanzania by developing infrastructure that attracts medical professionals and delivers dignified care.',
    impact: 'Expanded life-saving emergency response, reduced patient travel times for diagnostic services, direct medical and nursing employment, and improved community health outcomes.',
    ctaText: 'Explore Healthcare Opportunities →',
  },
  {
    slug: 'kigola-international-medical-college',
    name: 'Kigola International Medical College',
    sector: 'Education & Capacity Development',
    meta: 'Medical Education Institution · Planned',
    image: '/images/about-hero.jpg',
    text: 'A planned institution for training healthcare professionals, designed to build long-term local clinical capacity and address regional healthcare workforce shortages.',
    location: 'Iringa Region, United Republic of Tanzania',
    status: 'Planned',
    purpose: 'Deliver accredited clinical training, nursing education, and technical health science certifications.',
    facts: [
      { label: 'Sector', value: 'Higher Education & Medical Training' },
      { label: 'Location', value: 'Iringa Region, Tanzania' },
      { label: 'Development Status', value: 'Planned Institutional Development' },
      { label: 'Target Disciplines', value: 'Nursing, Midwifery, Clinical Medicine, Health Sciences' },
    ],
    strategicImportance: 'Sustained healthcare improvement requires skilled local medical professionals. The Medical College creates a sustainable pipeline of doctors, nurses, and technicians for regional health facilities.',
    impact: 'Youth skills development, higher education accessibility in the Southern Highlands, and long-term elevation of regional healthcare service quality.',
    ctaText: 'Explore Education Partnerships →',
  },
  {
    slug: 'kigola-international-farm',
    name: 'Kigola International Farm & Livestock Project',
    sector: 'Agriculture & Livestock',
    meta: 'Commercial Agriculture & Livestock',
    image: '/images/kic-farm.png',
    text: 'A commercial farming and livestock venture focused on sustainable agricultural production, modern animal husbandry, local employment creation, and national food security.',
    location: 'Mufindi District, Iringa Region',
    status: 'Active Development',
    purpose: 'Advance commercial food production, crop diversification, livestock rearing, and rural value chain linkages.',
    facts: [
      { label: 'Sector', value: 'Commercial Agriculture, Livestock & Agribusiness' },
      { label: 'Location', value: 'Mufindi District, Iringa Region' },
      { label: 'Operations', value: 'Crop Farming, Livestock Rearing, Feed Production' },
      { label: 'Development Status', value: 'Active Development / Expanding' },
    ],
    strategicImportance: 'Agriculture is the backbone of the Tanzanian economy. KIC’s investment implements modern agronomic practices, water management, and value-addition to improve yields and market access.',
    impact: 'Strengthened food security, direct farm labor and supply chain jobs, training for local out-growers, and climate-resilient farming techniques.',
    ctaText: 'Partner in Agriculture →',
  },
]

export interface BusinessAreaDetail {
  slug: string
  title: string
  subtitle: string
  text: string
  heroImage: string
  sections: { title: string; text: string }[]
  featuredProjectSlug?: string
  ctaText: string
}

export const businessAreas: BusinessAreaDetail[] = [
  {
    slug: 'renewable-energy',
    title: 'Renewable Energy',
    subtitle: 'Powering Sustainable Growth',
    text: 'Kigola International develops renewable energy projects designed to increase access to reliable electricity while supporting Tanzania’s transition toward sustainable economic development.',
    heroImage: '/images/kic-hydropower.png',
    featuredProjectSlug: 'nyalawa-hydropower',
    sections: [
      {
        title: 'Renewable Energy Development',
        text: 'KIC identifies, evaluates and structures commercially viable clean-energy assets, with an emphasis on dependable base-load generation and regional economic enablement.',
      },
      {
        title: 'Hydropower Development',
        text: 'Hydropower is central to KIC’s energy portfolio. The flagship 5 MW Nyalawa Hydropower Project in Magunguli Village, Mufindi District, demonstrates our commitment to unlocking Tanzania’s river basin potential.',
      },
      {
        title: 'Project Development & Clean Energy Partnerships',
        text: 'We collaborate with national utility stakeholders (TANESCO), engineering firms, and international development finance institutions to deliver bankable energy infrastructure.',
      },
      {
        title: 'Climate Finance & Environmental Responsibility',
        text: 'Every energy investment is structured for carbon displacement, watershed conservation, and environmental compliance in harmony with local ecosystems.',
      },
    ],
    ctaText: 'Explore Energy Partnerships →',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Investing in Better Healthcare',
    text: 'Kigola International develops healthcare infrastructure and services that improve access to quality medical care while supporting Tanzania’s long-term social and economic development.',
    heroImage: '/images/kic-healthcare.png',
    featuredProjectSlug: 'kigola-international-hospital',
    sections: [
      {
        title: 'Healthcare Infrastructure',
        text: 'Developing modern, durable clinical facilities engineered to provide comprehensive diagnostic, surgical, and inpatient medical capabilities.',
      },
      {
        title: 'Healthcare Services',
        text: 'Structuring medical service delivery models that ensure affordability, clinical excellence, and accessibility for underserved and regional populations.',
      },
      {
        title: 'Flagship Healthcare Vision: Kigola International Hospital',
        text: 'A planned multi-specialty hospital in Tanzania designed to deliver advanced care, maternal-child health services, and diagnostic reliability closer to regional communities.',
      },
      {
        title: 'Partnerships & Medical Equipment Financing',
        text: 'Welcoming strategic partnerships with healthcare providers, medical equipment manufacturers, and global health foundations to elevate standards of care.',
      },
    ],
    ctaText: 'Explore Healthcare Opportunities →',
  },
  {
    slug: 'agriculture-livestock',
    title: 'Agriculture & Livestock',
    subtitle: 'Growing Opportunity. Strengthening Food Security.',
    text: 'Kigola International invests in commercial agriculture and livestock development with the objective of supporting food security, employment creation and sustainable local economic development.',
    heroImage: '/images/kic-farm.png',
    featuredProjectSlug: 'kigola-international-farm',
    sections: [
      {
        title: 'Commercial Agriculture',
        text: 'Implementing high-yield, sustainable crop production with modern soil management, irrigation systems, and post-harvest preservation.',
      },
      {
        title: 'Livestock Development',
        text: 'Investing in animal husbandry, breeding, veterinary care, and feed production to supply nutritious protein and support regional trade.',
      },
      {
        title: 'Food Security & Value Chains',
        text: 'Strengthening agricultural value chains from farm to market to buffer regional food supplies against climate and market volatility.',
      },
      {
        title: 'Local Employment & Agribusiness Outgrowers',
        text: 'Creating permanent and seasonal agricultural jobs while transferring modern farming knowledge to local smallholder farming communities.',
      },
    ],
    ctaText: 'Partner in Agriculture →',
  },
  {
    slug: 'sustainable-infrastructure',
    title: 'Sustainable Infrastructure',
    subtitle: 'Infrastructure for Sustainable Communities',
    text: 'Combining infrastructure development, water supply projects, and hygiene and sanitation services to create resilient foundations for community prosperity.',
    heroImage: '/images/strategy-hero.jpg',
    sections: [
      {
        title: 'Infrastructure Development',
        text: 'Investing in foundational physical assets—including transport corridors, access roads, industrial parks, and civic facilities—that enable commerce.',
      },
      {
        title: 'Water Supply Projects',
        text: 'Developing reliable, safe water distribution infrastructure and storage systems for rural communities, institutions, and industrial users.',
      },
      {
        title: 'Hygiene & Sanitation Services',
        text: 'Engineering modern waste-management, drainage, and sanitation facilities that prevent waterborne disease and protect public health.',
      },
      {
        title: 'Public-Private Partnerships (PPP)',
        text: 'Collaborating with government agencies and municipal authorities under structured PPP frameworks to deliver essential public infrastructure.',
      },
    ],
    ctaText: 'Explore Infrastructure Partnerships →',
  },
  {
    slug: 'education-capacity-development',
    title: 'Education & Capacity Development',
    subtitle: 'Developing Knowledge. Building Capacity.',
    text: 'KIC identifies education as a critical pillar of human capital development, with a specific planned investment in professional healthcare and vocational training.',
    heroImage: '/images/about-hero.jpg',
    featuredProjectSlug: 'kigola-international-medical-college',
    sections: [
      {
        title: 'Education Services & Institutional Planning',
        text: 'Planning accredited higher education institutions designed to expand access to tertiary education in Tanzania’s interior regions.',
      },
      {
        title: 'Flagship Planned Initiative: Kigola International Medical College',
        text: 'A planned institution focused on training healthcare professionals, including clinical officers, nurses, midwives, and laboratory technologists (status: planned).',
      },
      {
        title: 'Professional & Healthcare Skills Development',
        text: 'Fostering practical competencies that prepare young Tanzanians for impactful careers in essential public and private services.',
      },
      {
        title: 'Future Education Projects & Academic Partnerships',
        text: 'Engaging with universities, accreditation bodies, and educational donors to establish curricula that meet national and global standards.',
      },
    ],
    ctaText: 'Explore Education Partnerships →',
  },
  {
    slug: 'investment-project-services',
    title: 'Investment & Project Services',
    subtitle: 'Connecting Investment With Opportunity',
    text: 'Providing investment consultancy, clearing and forwarding services, project development capabilities, and community development support across East Africa.',
    heroImage: '/images/contact-hero.jpg',
    sections: [
      {
        title: 'Investment Consultancy',
        text: 'Assisting domestic and international investors with market intelligence, regulatory navigation, asset appraisal, and joint-venture structuring in Tanzania.',
      },
      {
        title: 'Clearing & Forwarding Services',
        text: 'Providing dependable logistics, customs clearance, and freight forwarding support for capital equipment, project inputs, and commercial goods.',
      },
      {
        title: 'Project Development & Advisory',
        text: 'Taking infrastructure and enterprise concepts from feasibility and permitting through financing, EPC contracting, and execution.',
      },
      {
        title: 'Community Development Projects',
        text: 'Facilitating stakeholder engagement and community benefit agreements that align commercial investments with grassroots prosperity.',
      },
    ],
    ctaText: 'Discuss an Opportunity →',
  },
]

export const strategicObjectives = [
  {
    number: '01',
    title: 'Increase Renewable Energy Production',
    text: 'Harness clean hydropower and renewable natural resources to expand national grid supply and power economic growth.',
  },
  {
    number: '02',
    title: 'Improve Healthcare Access',
    text: 'Develop modern clinical infrastructure and services that bring reliable healthcare closer to Tanzanian communities.',
  },
  {
    number: '03',
    title: 'Create Employment Opportunities',
    text: 'Generate durable, dignified direct and indirect jobs across agriculture, construction, healthcare, and services.',
  },
  {
    number: '04',
    title: 'Promote Sustainable Agriculture',
    text: 'Modernize commercial farming, livestock husbandry, and supply chains to secure food supplies and elevate rural livelihoods.',
  },
  {
    number: '05',
    title: 'Support National Economic Growth',
    text: 'Invest in productive and foundational assets that stimulate industrialization, commerce, and national tax revenues.',
  },
  {
    number: '06',
    title: 'Attract Local & International Investment',
    text: 'Serve as a trusted local partner for global capital, development finance institutions, and private investors.',
  },
]

export const investmentThemes = [
  {
    title: 'Renewable Energy',
    desc: 'Hydropower and clean-energy development with guaranteed national grid offtake.',
    link: '/portfolio/nyalawa-hydropower',
  },
  {
    title: 'Healthcare Infrastructure',
    desc: 'Hospital facilities, diagnostic centers, and specialized care delivery.',
    link: '/portfolio/kigola-international-hospital',
  },
  {
    title: 'Agriculture & Livestock',
    desc: 'Commercial farming, livestock rearing, and food-processing value chains.',
    link: '/portfolio/kigola-international-farm',
  },
  {
    title: 'Water, Hygiene & Sanitation',
    desc: 'Safe water distribution, borehole development, and community sanitation systems.',
    link: '/business-areas/sustainable-infrastructure',
  },
  {
    title: 'Education',
    desc: 'Medical college and professional capacity-building institutions.',
    link: '/portfolio/kigola-international-medical-college',
  },
  {
    title: 'Climate Finance',
    desc: 'Green bonds, carbon-credit mechanisms, and climate resilience capital.',
    link: '/sustainability',
  },
  {
    title: 'Public-Private Partnerships',
    desc: 'Structured collaboration on qualifying national and municipal infrastructure.',
    link: '/business-areas/sustainable-infrastructure',
  },
  {
    title: 'International Project Financing',
    desc: 'Long-term debt, equity, and mezzanine financing for high-impact assets.',
    link: '/contact',
  },
]

export const partnerTypes = [
  { title: 'Investors', text: 'Long-term equity participation and institutional co-investment.' },
  { title: 'Financial Institutions', text: 'Senior debt, infrastructure loans, and project financing.' },
  { title: 'Development Partners', text: 'DFIs and multilateral agencies advancing sustainable development.' },
  { title: 'Technical Partners', text: 'Engineering, healthcare, agricultural, and EPC expertise.' },
  { title: 'Government & Public Bodies', text: 'PPP project delivery and municipal concessions.' },
  { title: 'International Partners', text: 'Cross-border technology transfer and strategic collaboration.' },
]

export const coreValues = [
  {
    title: 'Integrity',
    description: 'Doing business responsibly, transparently, and ethically across all engagements.',
  },
  {
    title: 'Excellence',
    description: 'Pursuing the highest engineering, clinical, and operational standards in every asset we build.',
  },
  {
    title: 'Innovation',
    description: 'Applying progressive technology, efficient financing, and creative problem-solving.',
  },
  {
    title: 'Sustainability',
    description: 'Creating enduring economic, social, and environmental value for future generations.',
  },
  {
    title: 'Professionalism',
    description: 'Maintaining discipline, rigorous compliance, and mutual respect in all stakeholder relationships.',
  },
  {
    title: 'Accountability',
    description: 'Taking uncompromising ownership of our decisions, promises, and project milestones.',
  },
  {
    title: 'Community Empowerment',
    description: 'Creating real economic opportunities, skills, and infrastructure that uplift local communities.',
  },
]

export const sdgContributions = [
  { number: '07', title: 'Affordable & Clean Energy', desc: 'Nyalawa Hydropower 5 MW generation feeding renewable energy into the national grid.' },
  { number: '03', title: 'Good Health & Well-Being', desc: 'Planned Kigola Hospital and Medical College improving healthcare access and medical skills.' },
  { number: '02', title: 'Zero Hunger', desc: 'Commercial farming and livestock production strengthening regional food security and yields.' },
  { number: '06', title: 'Clean Water & Sanitation', desc: 'Safe water distribution and community sanitation infrastructure initiatives.' },
  { number: '08', title: 'Decent Work & Economic Growth', desc: 'Direct employment, outgrower schemes, and industrial enablement in the Southern Highlands.' },
  { number: '09', title: 'Industry, Innovation & Infrastructure', desc: 'Catalytic energy, healthcare, and logistics infrastructure development.' },
  { number: '13', title: 'Climate Action', desc: 'Displacing fossil fuels through hydropower and promoting climate-resilient agriculture.' },
  { number: '17', title: 'Partnerships for the Goals', desc: 'Mobilizing DFIs, private capital, and government stakeholders in transformative PPPs.' },
]

export const pageCopy = {
  about: {
    eyebrow: 'About KIC',
    title: 'Investing in Tanzania’s Sustainable Future.',
    intro: 'Kigola International Company Limited is a Tanzanian-owned private investment and development company registered on 27 July 2009 and headquartered in Mufindi District, Iringa Region.',
  },
  strategy: {
    eyebrow: 'Our Strategy',
    title: 'Investing With Purpose.',
    intro: 'Guided by documented strategic objectives and investment priorities to deliver measurable economic growth, clean energy, food security, and community impact.',
  },
  portfolio: {
    eyebrow: 'Portfolio',
    title: 'Projects Designed for Lasting Impact.',
    intro: 'Four flagship development initiatives across renewable energy, healthcare, education and agriculture in Tanzania.',
  },
  sustainability: {
    eyebrow: 'Sustainability',
    title: 'Sustainable Investment. Lasting Impact.',
    intro: 'Environmental stewardship, social upliftment, and sound governance are foundational principles of KIC’s business model.',
  },
  contact: {
    eyebrow: 'Get in Touch',
    title: 'Let’s Build Something That Lasts.',
    intro: 'Start a conversation with Kigola International regarding project investments, partnerships, or business inquiries.',
  },
}

export const sectors = businessAreas.map((b, i) => ({
  title: b.title,
  number: `0${i + 1}`,
  text: b.text,
  slug: b.slug,
}))

export const adminSections = [
  'Homepage',
  'Projects & Flagship Initiatives',
  'Business Areas',
  'Strategy & Objectives',
  'Sustainability & ESG',
  'Leadership & Team',
  'Corporate Milestones',
  'Enquiries & Proposals',
  'Site Settings',
]

export const newsItems = [
  {
    category: 'Company Announcement',
    title: 'Advancing Sustainable Investment in Tanzania',
    date: '22 August 2026',
    text: 'An introduction to KIC Ltd’s approach to patient, practical investment and flagship project development across the Southern Highlands.',
  },
  {
    category: 'Renewable Energy',
    title: 'Nyalawa Hydropower: Reliable Base-Load Clean Power',
    date: '12 August 2026',
    text: 'How the 5 MW Nyalawa small hydropower initiative supports regional industrialization and national grid reliability.',
  },
]

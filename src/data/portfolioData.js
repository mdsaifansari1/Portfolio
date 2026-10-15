export const portfolioData = {
  name: 'Mohammad Saif Ansari',
  email: 'itssaif5@gmail.com',
  phone: '+91 98015-15042',
  githubUrl: 'https://github.com/mdsaifansari1',
  linkedinUrl: 'https://www.linkedin.com/in/mohammad-saif-ansari-299a87288/',
  role: 'Data Analyst | Machine Learning | AI & Generative AI',

  experience: [
    {
      company: 'Logile',
      role: 'Data Analyst Intern',
      location: 'Remote',
      dates: 'December 2025 – January 2026',
      type: 'Experience',
      highlights: [
        'Engineered an automated SQL and Excel ETL pipeline to process 630+ daily Outlook records, streamlining data collection and reporting workflows.',
        'Developed automated data transformation and reporting workflows, reducing manual HR effort by 90% and improving operational efficiency.',
        'Built interactive Power BI dashboards to visualize 6+ KPIs, enabling stakeholders to monitor business performance and identify key trends.',
        'Optimized end-to-end data processing workflows, reducing overall data processing time by 50% and improving the timeliness of business reporting.',
      ],
    },
  ],

  projects: [
    {
      title: 'Credit Card Dashboard',
      category: 'Business intelligence',
      summary:
        'An interactive view of credit card spending patterns, customer behavior, and financial trends.',
      technologies: ['Power BI', 'SQL'],
      highlights: [
        'Analyzed monthly, quarterly, and annual spending patterns to identify seasonal demand spikes and trends.',
        'Explored expenditures across transaction types, card channels, and customer segments.',
        'Tracked spending metrics and behavior over time to support cash flow management and financial decisions.',
      ],
      codeUrl: 'https://github.com/mdsaifansari1/Credit-Card',
      visual: 'dashboard',
    },

    {
      title: 'Medical Chatbot',
      category: 'Retrieval-augmented generation',
      summary:
        'A RAG system for context-grounded medical question answering, designed to reduce hallucination.',
      technologies: ['Python', 'Pinecone', 'LangChain', 'Pandas', 'GitHub'],
      highlights: [
        'Built document preprocessing and chunking pipelines with Pandas and LangChain.',
        'Generated Hugging Face embeddings and indexed them in Pinecone for similarity search.',
        'Integrated Groq API with Llama models for real-time responses at 200+ tokens/sec inference speed.',
      ],
      codeUrl: 'https://github.com/mdsaifansari1/Medical-Chatbot',
      visual: 'rag',
    },

    {
      title: 'Netflix Data Analysis',
      category: 'SQL analysis',
      summary:
        'An analysis of Netflix content trends and viewer preferences using advanced SQL queries.',
      technologies: ['SQL'],
      highlights: [
        'Cleaned, filtered, and aggregated data into a structured, analysis-ready dataset.',
        'Identified top genres, viewer behavior patterns, and high-engagement content across regions.',
        'Visualized key metrics and trends to support data-driven content recommendations.',
      ],
      codeUrl: '',
      visual: 'sql',
    },
  ],

  skills: [
    {
      category: 'Programming',
      icon: 'code',
      items: ['Python', 'C++', 'SQL', 'JavaScript'],
    },
    {
      category: 'Data Science',
      icon: 'chart',
      items: [
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Matplotlib',
        'Statistics',
        'Power BI',
      ],
    },
    {
      category: 'Machine Learning',
      icon: 'brain',
      items: [
        'Regression',
        'Classification',
        'Clustering',
        'NLP',
        'Feature Engineering',
      ],
    },
    {
      category: 'AI / Generative AI',
      icon: 'sparkles',
      items: [
        'TensorFlow',
        'LangChain',
        'RAG',
        'Pinecone',
        'Hugging Face',
      ],
    },
    {
      category: 'Tools',
      icon: 'terminal',
      items: [
        'Git',
        'GitHub',
        'Jupyter Notebook',
        'VS Code',
        'Streamlit',
      ],
    },
  ],

  education: [
    {
      institution: 'National Institute of Technology, Rourkela',
      degree: 'Bachelor of Technology',
      dates: 'August 2023 – Present',
      detail: 'CGPA: 7.30',
      location: 'Rourkela, Odisha',
      featured: true,
    },
    {
      institution: 'Sadar Alam Memorial Secondary School',
      degree: 'AISSCE – CBSE · Science (PCM)',
      dates: 'May 2022',
      detail: 'Percentage: 84.2%',
      location: 'Bihar Sharif, Bihar',
    },
    {
      institution: 'Shivam Residential Public School',
      degree: 'AISSE – CBSE',
      dates: 'May 2020',
      detail: 'Percentage: 87.4%',
      location: 'Nalanda, Bihar',
    },
  ],

  coursework: [
    'Machine Learning',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Generative AI',
    'Exploratory Data Analysis',
    'Principles of Statistics',
  ],

  achievement: {
    title: '100+ SQL problems solved',
    platforms: ['LeetCode', 'DataLemur', 'HackerRank'],
    skills: [
      'Complex JOINs',
      'Window Functions',
      'Subqueries',
      'Aggregations',
    ],
  },

  leadership: {
    organization: 'Kalaam NITR',
    role: 'Coordinator',
    affiliation: 'NIT Rourkela',
    dates: 'May 2025 – Present',
    highlights: [
      'Led a team of 40+ members in managing and executing club operations, initiatives, and literary activities.',
      'Organized literary sessions and poetry events to promote Urdu literature and encourage creative expression.',
      'Guided members on the technical aspects of Urdu poetry, including meter, rhyme, and symbolism, fostering collaborative learning.',
    ],
  },
}
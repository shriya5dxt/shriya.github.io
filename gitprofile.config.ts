// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'shriya5dxt', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Customer Complaint Management Database System',
          description:
            'This project involved creating an Oracle Database for managing customer complaints about products and services within warranty periods. It featured a detailed ER Diagram and a 12-entity schema to facilitate efficient issue resolution through ACID transactions and CRUD operations, ultimately enhancing customer satisfaction.',
          imageUrl:
            'https://i.pinimg.com/564x/0a/3d/3b/0a3d3b155195840c81743b6e19d0055b.jpg',
          link: 'https://github.com/shriyadxt/DMDD_PROJECT/tree/master',
        },
        {
          title: 'Amazon Product Review Text Mining',
          description:
            'This project involved analyzing customer feedback on electronic products using Python and the PyATE framework. By identifying common issues, we enhanced product quality and boosted customer satisfaction.',
          imageUrl:
            'https://assets-global.website-files.com/5f8adf96ff635f2728f2e3e4/622f5ab1c267053a030b6e67_NLP%20Tools_Main.png',
          link: 'https://github.com/shriyadxt/Data-Science-Tools-and-Engineering-Methods/blob/master/Python_Verbatim_Analysis.ipynb',
        },
        {
          title: 'Movie Storybook',
          description:
            'This project entails creating a storyboard for a movie concept by taking photos, transforming them into drawings with Python, and stitching the images together to form a cohesive storybook. Utilizing the `PIL` library, we`ll programmatically add borders to pictures, ensuring seamless integration for a professional presentation to studios.',
          imageUrl:
            'https://files.realpython.com/media/Image-Processing-in-Python-With-Pillow_Watermarked.b86d7e55f981.jpg',
          link: 'https://github.com/shriyadxt/Data-Science-Tools-and-Engineering-Methods/blob/master/Movie%20Storybook.ipynb',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'shriya-dikshith',
    //twitter: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    //website: 'https://www.arifszn.com',
    phone: '',
    email: 'shriya5dxt@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Bvt9reWOj4DBBwiWfKhRJ1SkhF0ZKbvD/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'R',
    'Java',
    'HTML5',
    'CSS',
    'JavaScript',
    'MATLAB',
    'ELT/ETL',
    'MS SQL',
    'MySQL',
    'Vertica',
    'Snowflake',
    'Orcale',
    'Mongodb',
    'NoSQL',
    'Big query',
    'Tableau',
    'Power BI',
    'Excel',
    'Informatica',
    'Alteryx',
    'Spark',
    'PostgreSQL',
  ],
  experiences: [
    {
      company: 'Mimecast',
      position: 'Analytics Engineer',
      from: 'January 2023',
      to: 'August 2023',
      // companyLink: 'https://example.com',
    },
    {
      company: 'Northeastern University',
      position: 'Business Analyst',
      from: 'August 2022',
      to: 'January 2023',
      // companyLink: 'https://example.com',
    },
    {
      company: 'HP Inc.',
      position: 'Data Scientist',
      from: 'January 2020',
      to: 'January 2022',
      // companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Neural Networks and Deep Learning',
      body: 'The foundational concepts of neural networks and deep learning ',
      year: 'January 26, 2019',
      link: 'https://www.coursera.org/account/accomplishments/verify/G3KSPCTUVJG4',
    },
    {
      name: 'Python Data Structures',
      body: 'The core data structures of the Python programming language',
      year: 'August 14, 2019',
      link: 'https://www.coursera.org/account/accomplishments/verify/W68RA6XRPDSH',
    },
    {
      name: 'Exploratory Data Analysis',
      body: 'The essential exploratory techniques for summarizing data.',
      year: 'April 4, 2019',
      link: 'https://www.coursera.org/account/accomplishments/verify/YWA6PFE5D9JZ',
    },
  ],
  educations: [
    {
      institution: 'Northeastern University',
      degree: 'Master`s Degree',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Manipal Institution of Technology',
      degree: 'Bachelor`s Degree',
      from: '2016',
      to: '2020',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 3, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/shriya5dxt"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

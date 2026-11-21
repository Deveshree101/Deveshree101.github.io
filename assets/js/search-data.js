// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Finance analytics, data cleaning and web scraping, each with the problem, what I built and what the data showed.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My code on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "books-atomic-habits",
          title: 'Atomic Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Atomic_Habits/";
            },},{id: "books-thinking-fast-and-slow",
          title: 'Thinking Fast, and Slow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-nifty-50-risk-vs-return",
          title: 'Nifty 50 Risk vs Return',
          description: "Five years, fifty stocks, one benchmark. Which large caps actually paid for their risk? (Python + SQL)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_nifty50/";
            },},{id: "projects-predicting-high-risk-borrowers",
          title: 'Predicting High-Risk Borrowers',
          description: "Finding patterns in 5,000 borrower records to help a fintech lender spot likely defaulters early.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_loan_default/";
            },},{id: "projects-trader-performance-vs-market-sentiment",
          title: 'Trader Performance vs Market Sentiment',
          description: "How fear and greed in crypto markets change trader behaviour and profits on Hyperliquid. (SQL + Python)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_trader_sentiment/";
            },},{id: "projects-messy-multi-source-sales-data-one-trusted-table",
          title: 'Messy Multi-Source Sales Data → One Trusted Table',
          description: "Merged Shopify, Amazon and wholesale orders into one clean table, with every fix logged.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_data_cleaning/";
            },},{id: "projects-web-scraping-analysis-ready-dataset",
          title: 'Web Scraping → Analysis-Ready Dataset',
          description: "Scraped 1,000 products from 50 categories, then cleaned, validated and exported them to Excel.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_web_scraping/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%65%76%65%73%68%72%65%65%73%68%72%69%76%61%73%74%61%76%61%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/deveshree22", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Deveshree101", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

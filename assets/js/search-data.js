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
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-three-data-bugs-that-almost-fooled-my-nifty-50-analysis",
        
          title: "Three data bugs that almost fooled my Nifty 50 analysis",
        
        description: "Before computing a single Sharpe ratio, I had to catch a fake holiday, a demerger and a split the price feed missed.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/three-data-bugs-nifty50/";
          
        },
      },{id: "books-a-thousand-splendid-suns",
          title: 'A Thousand Splendid Suns',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_thousand_splendid_suns/";
            },},{id: "books-the-almanack-of-naval-ravikant",
          title: 'The Almanack of Naval Ravikant',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/almanack_of_naval_ravikant/";
            },},{id: "books-atomic-habits",
          title: 'Atomic Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/atomic_habits/";
            },},{id: "books-born-a-crime",
          title: 'Born a Crime',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/born_a_crime/";
            },},{id: "books-days-at-the-morisaki-bookshop",
          title: 'Days at the Morisaki Bookshop',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/days_at_the_morisaki_bookshop/";
            },},{id: "books-deep-work",
          title: 'Deep Work',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/deep_work/";
            },},{id: "books-dopamine-nation",
          title: 'Dopamine Nation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dopamine_nation/";
            },},{id: "books-mindfulness-essentials-how-to-sit-how-to-walk-how-to-love",
          title: 'Mindfulness Essentials (How to Sit, How to Walk, How to Love…)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/how_to_series/";
            },},{id: "books-ikigai",
          title: 'Ikigai',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ikigai/";
            },},{id: "books-indistractable",
          title: 'Indistractable',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/indistractable/";
            },},{id: "books-invent-and-wander",
          title: 'Invent and Wander',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/invent_and_wander/";
            },},{id: "books-lifespan",
          title: 'Lifespan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lifespan/";
            },},{id: "books-the-little-book-of-clarity",
          title: 'The Little Book of Clarity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/little_book_of_clarity/";
            },},{id: "books-man-39-s-search-for-meaning",
          title: 'Man&amp;#39;s Search for Meaning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mans_search_for_meaning/";
            },},{id: "books-mindfulness-finding-peace-in-a-frantic-world",
          title: 'Mindfulness: Finding Peace in a Frantic World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mindfulness/";
            },},{id: "books-mindset",
          title: 'Mindset',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mindset/";
            },},{id: "books-never-split-the-difference",
          title: 'Never Split the Difference',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/never_split_the_difference/";
            },},{id: "books-sapiens-a-brief-history-of-humankind",
          title: 'Sapiens: A Brief History of Humankind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sapiens/";
            },},{id: "books-shoe-dog",
          title: 'Shoe Dog',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/shoe_dog/";
            },},{id: "books-siddhartha",
          title: 'Siddhartha',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/siddhartha/";
            },},{id: "books-the-5-am-club",
          title: 'The 5 AM Club',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_5am_club/";
            },},{id: "books-the-black-swan",
          title: 'The Black Swan',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_black_swan/";
            },},{id: "books-the-mountain-is-you",
          title: 'The Mountain Is You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_mountain_is_you/";
            },},{id: "books-the-palace-of-illusions",
          title: 'The Palace of Illusions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_palace_of_illusions/";
            },},{id: "books-thinking-fast-and-slow",
          title: 'Thinking, Fast and Slow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/thinking_fast_and_slow/";
            },},{id: "books-tiny-habits",
          title: 'Tiny Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tiny_habits/";
            },},{id: "books-tuesdays-with-morrie",
          title: 'Tuesdays with Morrie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tuesdays_with_morrie/";
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

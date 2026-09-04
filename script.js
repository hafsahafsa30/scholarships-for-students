/* =====================================================
   SCHOLARSHIPS FOR STUDENTS
   Main JavaScript
===================================================== */

/* =====================================================
   COUNTRY LIST
===================================================== */

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
  "Burundi", "Cambodia", "Cameroon", "Canada", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
  "Egypt", "El Salvador", "Estonia", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Guatemala", "Guinea",
  "Haiti", "Honduras", "Hungary", "Iceland", "India",
  "Indonesia", "Iraq", "Ireland", "Italy", "Jamaica",
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
  "Niger", "Nigeria", "North Macedonia", "Norway", "Oman",
  "Pakistan", "Panama", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Rwanda",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Singapore",
  "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea",
  "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
  "Thailand", "Togo", "Trinidad and Tobago", "Tunisia",
  "Türkiye", "Turkmenistan", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe"
];


/* =====================================================
   OPPORTUNITY DATABASE
===================================================== */

const opportunities = [

  /* ================= HIGH SCHOOL ================= */

  {
    id: "uwc",
    name: "UWC",
    category: "International School",
    level: "high-school",
    icon: "🌍",

    description:
      "United World Colleges brings students from different countries and backgrounds together to study the IB Diploma in an international community.",

    ageMin: 15,
    ageMax: 18,

    eligibility:
      "Eligibility depends on the UWC school, national committee or application route. Age and academic requirements vary.",

    funding:
      "Need-based financial assistance may be available through some application routes.",

    duration:
      "Usually a two-year IB Diploma programme.",

    location:
      "Multiple countries",

    deadline:
      "Varies by application route and country",

    website:
      "https://uwc.org/"
  },

  {
    id: "ala",
    name: "African Leadership Academy",
    category: "International School",
    level: "high-school",
    icon: "🌍",

    description:
      "An African secondary school focused on leadership, entrepreneurship, academic development and positive social impact.",

    ageMin: 15,
    ageMax: 18,

    eligibility:
      "Designed primarily for talented young people from across Africa. Current admissions requirements should be checked on the official website.",

    funding:
      "Financial aid may be available for eligible students.",

    duration:
      "Two-year pre-university programme.",

    location:
      "Johannesburg, South Africa",

    deadline:
      "Varies by admissions cycle",

    website:
      "https://www.africanleadershipacademy.org/"
  },

  {
    id: "yygs",
    name: "Yale Young Global Scholars",
    category: "Summer Program",
    level: "high-school",
    icon: "🎓",

    description:
      "An academic enrichment programme for high school students from around the world who want to explore university-level subjects and meet students internationally.",

    ageMin: 15,
    ageMax: 18,

    eligibility:
      "Age, grade and application requirements apply and can change by programme cycle.",

    funding:
      "Need-based financial aid is available to eligible students; awards are limited.",

    duration:
      "Short summer academic programme.",

    location:
      "Yale University, United States / programme-specific",

    deadline:
      "Usually during the academic year for the following summer",

    website:
      "https://globalscholars.yale.edu/"
  },

  {
    id: "yyas",
    name: "Yale Young African Scholars",
    category: "Summer Program",
    level: "high-school",
    icon: "🌍",

    description:
      "A leadership and university-preparation programme designed for secondary-school students from Africa.",

    ageMin: 14,
    ageMax: 18,

    eligibility:
      "For students from African countries who meet the current programme requirements.",

    funding:
      "Participation has historically been offered without tuition costs.",

    duration:
      "Programme format varies by year.",

    location:
      "Online and/or programme locations",

    deadline:
      "Varies by annual cycle",

    website:
      "https://africanscholars.yale.edu/"
  },

  {
    id: "rise",
    name: "Rise",
    category: "Competition",
    level: "high-school",
    icon: "🚀",

    description:
      "A global programme that supports promising young people with opportunities for learning, mentorship, community and further development.",

    ageMin: 15,
    ageMax: 17,

    eligibility:
      "Age and programme requirements apply. Check the current Rise Global Challenge information.",

    funding:
      "Selected participants may receive different forms of support.",

    duration:
      "Varies by stage of the programme.",

    location:
      "Global",

    deadline:
      "Varies by challenge cycle",

    website:
      "https://www.risefortheworld.org/"
  },

  {
    id: "technovation",
    name: "Technovation Girls",
    category: "Competition",
    level: "high-school",
    icon: "💡",

    description:
      "A global technology and entrepreneurship programme where girls develop solutions to real-world problems.",

    ageMin: 8,
    ageMax: 18,

    eligibility:
      "Girls ages 8–18 can participate, with divisions based on age.",

    funding:
      "The programme is designed to be accessible to participants internationally.",

    duration:
      "Season-based programme.",

    location:
      "Online / global",

    deadline:
      "Varies by season",

    website:
      "https://technovationchallenge.org/"
  },

  {
    id: "conrad",
    name: "Conrad Challenge",
    category: "Competition",
    level: "high-school",
    icon: "🔬",

    description:
      "A global innovation challenge where students work in teams to develop solutions to important problems.",

    ageMin: 13,
    ageMax: 18,

    eligibility:
      "Students within the programme's current age range can participate.",

    funding:
      "Awards and recognition vary by challenge cycle.",

    duration:
      "Season-based competition.",

    location:
      "Online / United States",

    deadline:
      "Varies by annual season",

    website:
      "https://www.conradchallenge.org/"
  },

  {
    id: "queens-writing",
    name: "Queen's Commonwealth Writing Competition",
    category: "Competition",
    level: "high-school",
    icon: "✍️",

    description:
      "A writing competition that gives young Commonwealth citizens and residents an opportunity to share their ideas through writing.",

    ageMin: 5,
    ageMax: 18,

    eligibility:
      "Generally open to young people under 18 who meet the Commonwealth nationality or residency requirements.",

    funding:
      "Entry is free. Prizes and recognition vary by year.",

    duration:
      "Annual competition.",

    location:
      "Online",

    deadline:
      "Usually annual",

    website:
      "https://commonwealthfoundation.com/"
  },

  {
    id: "imo",
    name: "International Mathematical Olympiad",
    category: "Competition",
    level: "high-school",
    icon: "➗",

    description:
      "One of the world's major international mathematics competitions for secondary-school students.",

    ageMin: 13,
    ageMax: 20,

    eligibility:
      "Students normally participate through their country's mathematics olympiad selection process.",

    funding:
      "Participation arrangements depend on the country and national team.",

    duration:
      "Annual competition.",

    location:
      "Different host countries",

    deadline:
      "National selection dates vary",

    website:
      "https://www.imo-official.org/"
  },

  {
    id: "ioi",
    name: "International Olympiad in Informatics",
    category: "Competition",
    level: "high-school",
    icon: "💻",

    description:
      "An international computer programming and algorithmic problem-solving competition for secondary-school students.",

    ageMin: 13,
    ageMax: 20,

    eligibility:
      "Students normally qualify through their country's national informatics olympiad process.",

    funding:
      "Participation arrangements vary by country.",

    duration:
      "Annual competition.",

    location:
      "Different host countries",

    deadline:
      "National selection dates vary",

    website:
      "https://ioinformatics.org/"
  },

  {
    id: "ipho",
    name: "International Physics Olympiad",
    category: "Competition",
    level: "high-school",
    icon: "⚛️",

    description:
      "An international physics competition for secondary-school students selected through national olympiad systems.",

    ageMin: 13,
    ageMax: 20,

    eligibility:
      "Students usually qualify through their national physics competition.",

    funding:
      "Participation arrangements depend on the country.",

    duration:
      "Annual competition.",

    location:
      "Different host countries",

    deadline:
      "National selection dates vary",

    website:
      "https://www.ipho-new.org/"
  },

  {
    id: "ibo",
    name: "International Biology Olympiad",
    category: "Competition",
    level: "high-school",
    icon: "🧬",

    description:
      "An international biology competition for talented secondary-school students.",

    ageMin: 13,
    ageMax: 20,

    eligibility:
      "Students generally qualify through their country's national biology olympiad system.",

    funding:
      "Participation arrangements depend on the country.",

    duration:
      "Annual competition.",

    location:
      "Different host countries",

    deadline:
      "National selection dates vary",

    website:
      "https://www.ibo-info.org/"
  },

  {
    id: "first",
    name: "FIRST Robotics Competition",
    category: "Competition",
    level: "high-school",
    icon: "🤖",

    description:
      "A team-based robotics competition where high school students design, build and program robots while developing teamwork and problem-solving skills.",

    ageMin: 14,
    ageMax: 19,

    eligibility:
      "Students participate through registered teams and local/regional events.",

    funding:
      "Costs and team funding vary by location.",

    duration:
      "Season-based.",

    location:
      "International",

    deadline:
      "Varies by regional season",

    website:
      "https://www.firstinspires.org/robotics/frc"
  },

  {
    id: "diamond",
    name: "Diamond Challenge",
    category: "Competition",
    level: "high-school",
    icon: "💎",

    description:
      "A global entrepreneurship competition encouraging high school students to develop innovative ideas and solutions.",

    ageMin: 14,
    ageMax: 18,

    eligibility:
      "High school students can participate according to the current competition rules.",

    funding:
      "Awards vary by competition year.",

    duration:
      "Annual competition.",

    location:
      "Global",

    deadline:
      "Varies annually",

    website:
      "https://diamondchallenge.org/"
  },

  {
    id: "stanford-precollegiate",
    name: "Stanford Pre-Collegiate Summer Institutes",
    category: "Summer Program",
    level: "high-school",
    icon: "☀️",

    description:
      "Summer academic programmes offering high school students opportunities to explore subjects beyond their regular curriculum.",

    ageMin: 14,
    ageMax: 18,

    eligibility:
      "Requirements depend on the specific programme.",

    funding:
      "Programme costs and financial assistance vary.",

    duration:
      "Summer programme.",

    location:
      "United States / programme-specific",

    deadline:
      "Varies by programme",

    website:
      "https://summerinstitutes.stanford.edu/"
  },

  {
    id: "launchx",
    name: "LaunchX",
    category: "Summer Program",
    level: "high-school",
    icon: "💼",

    description:
      "An entrepreneurship programme where high school students develop businesses, learn from mentors and work on real-world ideas.",

    ageMin: 14,
    ageMax: 18,

    eligibility:
      "Programme requirements vary by year and format.",

    funding:
      "Costs and financial aid vary.",

    duration:
      "Summer programme.",

    location:
      "United States / online options may vary",

    deadline:
      "Varies annually",

    website:
      "https://www.launchx.com/"
  },

  {
    id: "oxford-summer",
    name: "Oxford Summer Courses",
    category: "Summer Program",
    level: "high-school",
    icon: "📚",

    description:
      "Academic summer programmes allowing students to explore university-style subjects in an international setting.",

    ageMin: 13,
    ageMax: 24,

    eligibility:
      "Age requirements depend on the specific course.",

    funding:
      "Some scholarships or financial assistance may be offered depending on the programme.",

    duration:
      "Usually one to several weeks.",

    location:
      "United Kingdom and other locations",

    deadline:
      "Varies by course",

    website:
      "https://oxfordsummercourses.com/"
  },

  {
    id: "immerse",
    name: "Immerse Education",
    category: "Summer Program",
    level: "high-school",
    icon: "🌟",

    description:
      "Academic programmes for students interested in exploring subjects and experiencing an international learning environment.",

    ageMin: 13,
    ageMax: 18,

    eligibility:
      "Requirements depend on the specific programme.",

    funding:
      "Scholarships may be available for some programmes.",

    duration:
      "Varies by programme.",

    location:
      "Multiple locations",

    deadline:
      "Varies",

    website:
      "https://www.immerse.education/"
  },


  /* ================= UNIVERSITY ================= */

  {
    id: "turkiye",
    name: "Türkiye Scholarships",
    category: "Scholarship",
    level: "university",
    icon: "🇹🇷",

    description:
      "A government-funded scholarship programme supporting international students to study in Türkiye.",

    ageMin: 17,
    ageMax: 30,

    eligibility:
      "Eligibility depends on the degree level, academic record, nationality and programme.",

    funding:
      "Scholarship benefits can include tuition and other support depending on the award.",

    duration:
      "Depends on degree programme.",

    location:
      "Türkiye",

    deadline:
      "Usually annual",

    website:
      "https://www.turkiyeburslari.gov.tr/"
  },

  {
    id: "mext",
    name: "MEXT Scholarship",
    category: "Scholarship",
    level: "university",
    icon: "🇯🇵",

    description:
      "Japanese government scholarships for international students covering several study routes and degree levels.",

    ageMin: 17,
    ageMax: 35,

    eligibility:
      "Requirements differ by scholarship category and nationality.",

    funding:
      "Benefits can include tuition support and a monthly stipend depending on the category.",

    duration:
      "Varies by programme.",

    location:
      "Japan",

    deadline:
      "Varies by embassy and route",

    website:
      "https://www.mext.go.jp/en/"
  },

  {
    id: "csc",
    name: "Chinese Government Scholarship",
    category: "Scholarship",
    level: "university",
    icon: "🇨🇳",

    description:
      "Scholarships supported by the Chinese government for international students studying in China.",

    ageMin: 17,
    ageMax: 35,

    eligibility:
      "Requirements vary by degree level, scholarship route and university.",

    funding:
      "Scholarship benefits vary by programme and may include tuition, accommodation and stipend.",

    duration:
      "Depends on programme.",

    location:
      "China",

    deadline:
      "Varies by application route",

    website:
      "https://www.campuschina.org/"
  },

  {
    id: "stipendium",
    name: "Stipendium Hungaricum",
    category: "Scholarship",
    level: "university",
    icon: "🇭🇺",

    description:
      "A Hungarian government scholarship programme for international students studying at participating Hungarian institutions.",

    ageMin: 17,
    ageMax: 35,

    eligibility:
      "Eligibility depends on nationality, degree level and sending-partner arrangements.",

    funding:
      "Scholarship support can include tuition, stipend and accommodation contributions.",

    duration:
      "Depends on degree programme.",

    location:
      "Hungary",

    deadline:
      "Usually annual",

    website:
      "https://stipendiumhungaricum.hu/"
  },

  {
    id: "erasmus-mundus",
    name: "Erasmus Mundus Joint Masters",
    category: "Scholarship",
    level: "university",
    icon: "🇪🇺",

    description:
      "International master's programmes delivered by groups of European and partner universities.",

    ageMin: 20,
    ageMax: 40,

    eligibility:
      "Applicants need a qualifying bachelor's degree or equivalent for the relevant master's programme.",

    funding:
      "Some students receive highly competitive Erasmus Mundus scholarships.",

    duration:
      "Usually two years.",

    location:
      "Multiple countries",

    deadline:
      "Usually programme-specific",

    website:
      "https://erasmus-plus.ec.europa.eu/"
  },

  {
    id: "mastercard-foundation",
    name: "Mastercard Foundation Scholars Program",
    category: "Scholarship",
    level: "university",
    icon: "🎓",

    description:
      "A network of partner universities and organisations providing educational opportunities to talented young people, especially across Africa.",

    ageMin: 16,
    ageMax: 35,

    eligibility:
      "Requirements are set by each participating partner institution.",

    funding:
      "Scholarship support varies by partner and programme.",

    duration:
      "Depends on the institution and degree.",

    location:
      "Multiple countries",

    deadline:
      "Varies by partner institution",

    website:
      "https://mastercardfdn.org/"
  },

  {
    id: "daad",
    name: "DAAD Scholarships",
    category: "Scholarship",
    level: "university",
    icon: "🇩🇪",

    description:
      "Scholarships and funding opportunities for international students and researchers studying in Germany.",

    ageMin: 18,
    ageMax: 40,

    eligibility:
      "Requirements vary significantly between programmes.",

    funding:
      "Funding varies by scholarship.",

    duration:
      "Varies by programme.",

    location:
      "Germany",

    deadline:
      "Programme-specific",

    website:
      "https://www.daad.de/en/"
  },

  {
    id: "romania",
 name: "Romanian Government Scholarship",
    category: "Scholarship",
    level: "university",
    icon: "🇷🇴",

    description:
      "Scholarships offered by the Romanian government to eligible international students for study in Romania.",

    ageMin: 17,
    ageMax: 35,

    eligibility:
      "Eligibility depends on nationality, degree level and annual requirements.",

    funding:
      "Benefits vary according to the scholarship programme.",

    duration:
      "Depends on degree.",

    location:
      "Romania",

    deadline:
      "Usually annual",

    website:
      "https://studyinromania.gov.ro/"
  },

  {
    id: "brunei",
    name: "Brunei Darussalam Government Scholarship",
    category: "Scholarship",
    level: "university",
    icon: "🇧🇳",

    description:
      "A government scholarship for international students to study at participating institutions in Brunei.",

    ageMin: 17,
    ageMax: 35,

    eligibility:
      "Age and academic requirements vary by level.",

    funding:
      "Scholarship benefits may include tuition and living support.",

    duration:
      "Depends on programme.",

    location:
      "Brunei",

    deadline:
      "Usually annual",

    website:
      "https://www.mfa.gov.bn/"
  },

  {
    id: "ireland",
    name: "Government of Ireland Scholarships",
    category: "Scholarship",
    level: "university",
    icon: "🇮🇪",

    description:
      "Irish government-funded scholarship opportunities for international students and researchers.",

    ageMin: 18,
    ageMax: 40,

    eligibility:
      "Requirements vary according to the specific scholarship level.",

    funding:
      "Award benefits depend on the programme.",

    duration:
      "Programme-specific.",

    location:
      "Ireland",

    deadline:
      "Usually annual",

    website:
      "https://hea.ie/"
  },

  {
    id: "swedish-institute",
    name: "Swedish Institute Scholarships",
    category: "Scholarship",
    level: "university",
    icon: "🇸🇪",

    description:
      "Scholarships supporting international students admitted to eligible master's programmes in Sweden.",

    ageMin: 20,
    ageMax: 40,

    eligibility:
      "Nationality, work experience and programme requirements can apply.",

    funding:
      "Scholarship benefits vary by programme.",

    duration:
      "Usually master's level.",

    location:
      "Sweden",

    deadline:
      "Usually annual",

    website:
      "https://si.se/en/"
  },

  {
    id: "fulbright",
    name: "Fulbright Program",
    category: "Scholarship",
    level: "university",
    icon: "🇺🇸",

    description:
      "International academic exchange and scholarship programmes supporting study, research and teaching opportunities.",

    ageMin: 18,
    ageMax: 40,

    eligibility:
      "Eligibility varies by country and programme.",

    funding:
      "Funding varies by Fulbright programme.",

    duration:
      "Programme-specific.",

    location:
      "United States / international",

    deadline:
      "Varies by country",

    website:
      "https://foreign.fulbrightonline.org/"
  },

  {
    id: "chevening",
    name: "Chevening Scholarships",
    category: "Scholarship",
    level: "university",
    icon: "🇬🇧",

    description:
      "UK government scholarships supporting outstanding professionals to pursue eligible master's degrees in the United Kingdom.",

    ageMin: 21,
    ageMax: 45,

    eligibility:
      "Applicants generally need relevant professional experience and must meet the programme requirements.",

    funding:
      "Fully funded scholarship package for selected scholars.",

    duration:
      "Usually one-year master's degree.",

    location:
      "United Kingdom",

    deadline:
      "Usually annual",

    website:
      "https://www.chevening.org/"
  },

  {
    id: "commonwealth",
    name: "Commonwealth Scholarships",
    category: "Scholarship",
    level: "university",
    icon: "🌍",

    description:
      "Scholarships supporting citizens of eligible Commonwealth countries for postgraduate study and research.",

    ageMin: 18,
    ageMax: 45,

    eligibility:
      "Eligibility depends on the specific Commonwealth scholarship.",

    funding:
      "Funding varies by scholarship route.",

    duration:
      "Programme-specific.",

    location:
      "United Kingdom / Commonwealth",

    deadline:
      "Varies annually",

    website:
      "https://cscuk.fcdo.gov.uk/"
  },

  {
    id: "schwarzman",
    name: "Schwarzman Scholars",
    category: "Scholarship",
    level: "university",
    icon: "🇨🇳",

    description:
      "A fully funded master's-level programme at Tsinghua University focused on leadership and global affairs.",

    ageMin: 18,
    ageMax: 29,

    eligibility:
      "Applicants need an undergraduate degree or equivalent and must meet programme requirements.",

    funding:
      "Fully funded for selected scholars.",

    duration:
      "One-year master's programme.",

    location:
      "Beijing, China",

    deadline:
      "Usually annual",

    website:
      "https://www.schwarzmanscholars.org/"
  },

  {
    id: "knight-hennessy",
    name: "Knight-Hennessy Scholars",
    category: "Scholarship",
    level: "university",
    icon: "🎓",

    description:
      "A graduate scholarship programme at Stanford University supporting students from around the world.",

    ageMin: 18,
    ageMax: 40,

    eligibility:
      "Applicants must apply to an eligible Stanford graduate programme and meet the scholarship requirements.",

    funding:
      "Provides substantial funding for selected scholars.",

    duration:
      "Depends on graduate degree.",

    location:
      "California, United States",

    deadline:
      "Usually annual",

    website:
      "https://knight-hennessy.stanford.edu/"
  },

  {
    id: "gates-cambridge",
    name: "Gates Cambridge Scholarship",
    category: "Scholarship",
    level: "university",
    icon: "🇬🇧",

    description:
      "A competitive scholarship programme supporting graduate study at the University of Cambridge.",

    ageMin: 18,
    ageMax: 40,

    eligibility:
      "Applicants must meet Cambridge and Gates Cambridge eligibility requirements.",

    funding:
      "Full-cost scholarship for selected scholars, subject to the programme terms.",

    duration:
      "Depends on the degree.",

    location:
      "Cambridge, United Kingdom",

    deadline:
      "Varies by applicant type and course",

    website:
      "https://www.gatescambridge.org/"
  },

  {
    id: "rhodes",
    name: "Rhodes Scholarship",
    category: "Scholarship",
    level: "university",
    icon: "🎓",

    description:
      "A prestigious scholarship supporting graduate study at the University of Oxford.",

    ageMin: 18,
    ageMax: 28,

    eligibility:
      "Eligibility depends on the applicant's country or constituency and current scholarship rules.",

    funding:
      "Covers major study and living costs for selected scholars.",

    duration:
      "Depends on Oxford programme.",

    location:
      "Oxford, United Kingdom",

    deadline:
      "Varies by constituency",

    website:
      "https://www.rhodeshouse.ox.ac.uk/"
  },

  {
    id: "adb-japan",
    name: "ADB–Japan Scholarship Program",
    category: "Scholarship",
    level: "university",
    icon: "🌏",

    description:
      "Scholarships for postgraduate study at participating institutions for citizens of eligible developing member countries.",

    ageMin: 18,
    ageMax: 35,

    eligibility:
      "Applicants generally need relevant work experience and admission to an approved programme.",

    funding:
      "Scholarship support varies according to programme terms.",

    duration:
      "Usually postgraduate study.",

    location:
      "Asia-Pacific / participating institutions",

    deadline:
      "Varies by institution",

    website:
      "https://www.adb.org/work-with-us/careers/japan-scholarship-program"
  },

  {
    id: "world-bank",
    name: "Joint Japan/World Bank Scholarship",
    category: "Scholarship",
    level: "university",
    icon: "🌎",

    description:
      "A scholarship programme supporting professionals from eligible developing countries pursuing selected master's programmes.",

    ageMin: 18,
    ageMax: 40,

    eligibility:
      "Applicants must meet programme, nationality, professional and academic requirements.",

    funding:
      "Funding is provided to selected scholars under programme conditions.",

    duration:
      "Master's programme.",

    location:
      "Participating universities",

    deadline:
      "Usually annual",

    website:
      "https://www.worldbank.org/en/programs/scholarships"
  }

];


/* =====================================================
   USER ANSWERS
===================================================== */

let userProfile = {
  country: "",
  education: "",
  year: "",
  age: null
};

let currentQuestion = 1;
let displayedCount = 8;


/* =====================================================
   DOM ELEMENTS
===================================================== */

const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const closeMenuButton = document.getElementById("closeMenu");

const countryInput = document.getElementById("countryInput");
const countryResults = document.getElementById("countryResults");
const selectedCountry = document.getElementById("selectedCountry");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const educationError = document.getElementById("educationError");
const yearError = document.getElementById("yearError");
const ageError = document.getElementById("ageError");

const opportunityGrid =
  document.getElementById("opportunityGrid");

const savedGrid =
  document.getElementById("savedGrid");

const emptySaved =
  document.getElementById("emptySaved");

const modal =
  document.getElementById("opportunityModal");

const modalBody =
  document.getElementById("modalBody");


/* =====================================================
   MENU
===================================================== */

menuButton.addEventListener("click", () => {
  sideMenu.classList.add("open");
  menuButton.setAttribute("aria-expanded", "true");
});

closeMenuButton.addEventListener("click", closeSideMenu);

function closeSideMenu() {
  sideMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function hideAllPages() {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.add("hidden");
  });
}

function showHome() {
  hideAllPages();

  document
    .getElementById("homePage")
    .classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showAbout() {
  hideAllPages();

  document
    .getElementById("aboutPage")
    .classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showSaved() {
  hideAllPages();

  document
    .getElementById("savedPage")
    .classList.remove("hidden");

  renderSavedOpportunities();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================================
   QUESTIONNAIRE
===================================================== */

function startQuestionnaire() {

  hideAllPages();

  document
    .getElementById("questionnairePage")
    .classList.remove("hidden");

  currentQuestion = 1;

  document.querySelectorAll(".question-screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });

  document
    .getElementById("question1")
    .classList.add("active");

  updateProgress();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateProgress() {

  progressText.textContent =
    `Question ${currentQuestion} of 4`;

  progressFill.style.width =
    `${currentQuestion * 25}%`;
}

function showQuestion(number) {

  document.querySelectorAll(".question-screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });

  document
    .getElementById(`question${number}`)
    .classList.add("active");

  currentQuestion = number;

  updateProgress();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================================
   COUNTRY SEARCH
===================================================== */

countryInput.addEventListener("input", () => {

  const search =
    countryInput.value
      .trim()
      .toLowerCase();

  countryResults.innerHTML = "";

  if (!search) {
    return;
  }

  const matches =
    countries
      .filter(country =>
        country.toLowerCase().includes(search)
      )
      .slice(0, 8);

  matches.forEach(country => {

    const button =
      document.createElement("button");

    button.className = "country-option";

    button.textContent = country;

    button.type = "button";

    button.addEventListener("click", () => {

      userProfile.country = country;

      countryInput.value = country;

      selectedCountry.textContent =
        `✓ ${country} selected`;

      countryResults.innerHTML = "";
    });

    countryResults.appendChild(button);
  });
});


/* =====================================================
   EDUCATION
===================================================== */

function selectEducation(button) {

  document.querySelectorAll(
    '[data-value="high-school"], [data-value="university"]'
  ).forEach(card => {
    card.classList.remove("selected");
  });

  button.classList.add("selected");

  userProfile.education =
    button.dataset.value;

  educationError.classList.remove("show");

  createYearChoices();
}


/* =====================================================
   YEAR OPTIONS
===================================================== */

function createYearChoices() {

  const yearContainer =
    document.getElementById("yearChoices");

  yearContainer.innerHTML = "";

  let years = [];

  if (userProfile.education === "high-school") {

    years = [
      {
        value: "1",
        title: "1st Year",
        subtitle: "First year of high school"
      },
      {
        value: "2",
        title: "2nd Year",
        subtitle: "Second year of high school"
      },
      {
        value: "3",
        title: "3rd Year",
        subtitle: "Final year of high school"
      }
    ];

  } else {

    years = [
      {
        value: "1",
        title: "1st Year",
        subtitle: "First year"
      },
      {
        value: "2",
        title: "2nd Year",
        subtitle: "Second year"
      },
      {
        value: "3",
        title: "3rd Year",
        subtitle: "Third year"
      },
      {
        value: "4",
        title: "4th Year",
        subtitle: "Fourth year"
      },
      {
        value: "graduate",
        title: "Graduate / Master's",
        subtitle: "Postgraduate study"
      }
    ];
  }

  years.forEach(year => {

    const button =
      document.createElement("button");

    button.className = "choice-card";

    button.dataset.value = year.value;

    button.type = "button";

    button.innerHTML = `
      <strong>${year.title}</strong>
      <small>${year.subtitle}</small>
    `;

    button.addEventListener("click", () => {

      document
        .querySelectorAll("#yearChoices .choice-card")
        .forEach(card => {
          card.classList.remove("selected");
        });

      button.classList.add("selected");

      userProfile.year = year.value;

      yearError.classList.remove("show");
    });

    yearContainer.appendChild(button);
  });
  }


/* =====================================================
   NEXT / PREVIOUS
===================================================== */

function nextQuestion() {

  if (currentQuestion === 1) {

    if (!userProfile.country) {

      selectedCountry.textContent =
        "Please select a country before continuing.";

      selectedCountry.style.color =
        "#f04438";

      return;
    }

    selectedCountry.style.color =
      "";

    showQuestion(2);

    return;
  }


  if (currentQuestion === 2) {

    if (!userProfile.education) {

      educationError.classList.add("show");

      return;
    }

    showQuestion(3);

    return;
  }


  if (currentQuestion === 3) {

    if (!userProfile.year) {

      yearError.classList.add("show");

      return;
    }

    showQuestion(4);

    return;
  }
}

function previousQuestion() {

  if (currentQuestion > 1) {
    showQuestion(currentQuestion - 1);
  }
}


/* =====================================================
   RESULTS
===================================================== */

function showResults() {

  const age =
    Number(
      document.getElementById("ageInput").value
    );

  if (
    !age ||
    age < 12 ||
    age > 100
  ) {

    ageError.classList.add("show");

    return;
  }

  ageError.classList.remove("show");

  userProfile.age = age;

  hideAllPages();

  document
    .getElementById("resultsPage")
    .classList.remove("hidden");

  displayProfileSummary();

  displayedCount = 8;

  renderOpportunities();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================================
   PROFILE SUMMARY
===================================================== */

function displayProfileSummary() {

  const summary =
    document.getElementById("profileSummary");

  const educationName =
    userProfile.education === "high-school"
      ? "High School"
      : "University";

  const yearText =
    userProfile.year === "graduate"
      ? "Graduate / Master's"
      : `${userProfile.year}${getOrdinal(userProfile.year)} year`;

  summary.innerHTML = `

    <span class="profile-tag">
      📍 ${userProfile.country}
    </span>

    <span class="profile-tag">
      🎓 ${educationName}
    </span>

    <span class="profile-tag">
      📚 ${yearText}
    </span>

    <span class="profile-tag">
      🎂 ${userProfile.age} years old
    </span>

  `;
}

function getOrdinal(number) {

  if (number === "1") return "st";
  if (number === "2") return "nd";
  if (number === "3") return "rd";
  if (number === "4") return "th";

  return "";
}


/* =====================================================
   OPPORTUNITY MATCHING
===================================================== */

function getMatchStatus(opportunity) {

  /* Wrong education level */

  if (
    opportunity.level !==
    userProfile.education
  ) {
    return "not-eligible";
  }


  /* Age clearly outside range */

  if (
    userProfile.age < opportunity.ageMin ||
    userProfile.age > opportunity.ageMax
  ) {
    return "not-eligible";
  }


  /*
     Some opportunities have complicated
     nationality, academic or application-route
     requirements.

     Therefore we use "check" rather than claiming
     someone is definitely eligible.
  */

  if (
    opportunity.id === "uwc" ||
    opportunity.id === "ala" ||
    opportunity.id === "yygs" ||
    opportunity.id === "yyas" ||
    opportunity.id === "rise"
  ) {
    return "check";
  }


  return "likely";
}

function getStatusText(status) {

  if (status === "likely") {
    return "Likely eligible";
  }

  if (status === "check") {
    return "Check eligibility";
  }

  return "Not currently eligible";
}


/* =====================================================
   RENDER OPPORTUNITIES
===================================================== */

function renderOpportunities() {

  const matches =
    opportunities
      .filter(opportunity =>
        opportunity.level ===
        userProfile.education
      )
      .sort((a, b) => {

        const statusOrder = {
          likely: 1,
          check: 2,
          "not-eligible": 3
        };

        return (
          statusOrder[getMatchStatus(a)] -
          statusOrder[getMatchStatus(b)]
        );
      });

  const visible =
    matches.slice(0, displayedCount);

  opportunityGrid.innerHTML = "";

  visible.forEach(opportunity => {

    opportunityGrid.appendChild(
      createOpportunityCard(opportunity)
    );

  });


  const showMoreButton =
    document.getElementById("showMoreButton");

  if (matches.length > displayedCount) {

    showMoreButton.classList.remove("hidden");

  } else {

    showMoreButton.classList.add("hidden");

  }
}


/* =====================================================
   SHOW MORE
===================================================== */

function showMoreOpportunities() {

  displayedCount += 8;

  renderOpportunities();

}


/* =====================================================
   OPPORTUNITY CARD
===================================================== */

function createOpportunityCard(opportunity) {

  const card =
    document.createElement("article");

  card.className =
    "opportunity-card";

  const status =
    getMatchStatus(opportunity);

  const saved =
    isSaved(opportunity.id);

  card.innerHTML = `

    <div class="card-top">

      <div class="opportunity-icon">
        ${opportunity.icon}
      </div>

      <button
        class="save-button ${saved ? "saved" : ""}"
        aria-label="Save ${opportunity.name}"
        onclick="toggleSave('${opportunity.id}')"
      >
        ${saved ? "★" : "☆"}
      </button>

    </div>

    <span class="category-badge">
      ${opportunity.category}
    </span>

    <h3>
      ${opportunity.name}
    </h3>

    <p class="card-description">
      ${opportunity.description}
    </p>

    <div class="eligibility-status ${status}">
      ${getStatusText(status)}
    </div>

    <div class="card-bottom">

      <button
        class="see-more-button"
        onclick="openOpportunityModal('${opportunity.id}')"
      >
        See More
      </button>

      <a
        class="apply-button"
        href="${opportunity.website}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Official Website
      </a>

    </div>

  `;

  return card;
}


/* =====================================================
   SAVE SYSTEM
===================================================== */

function getSavedIds() {

  try {

    return JSON.parse(
      localStorage.getItem(
        "savedScholarshipOpportunities"
      )
    ) || [];

  } catch (error) {

    return [];
  }
}

function saveIds(ids) {

  localStorage.setItem(
    "savedScholarshipOpportunities",
    JSON.stringify(ids)
  );
}

function isSaved(id) {

  return getSavedIds().includes(id);
}

function toggleSave(id) {

  let saved =
    getSavedIds();

  if (saved.includes(id)) {

    saved =
      saved.filter(savedId =>
        savedId !== id
      );

  } else {

    saved.push(id);
  }

  saveIds(saved);

  renderOpportunities();
}


/* =====================================================
   SAVED OPPORTUNITIES
===================================================== */

function renderSavedOpportunities() {

  const savedIds =
    getSavedIds();

  savedGrid.innerHTML = "";

  if (savedIds.length === 0) {

    emptySaved.classList.remove("hidden");

    return;
  }

  emptySaved.classList.add("hidden");

  const savedOpportunities =
    opportunities.filter(opportunity =>
      savedIds.includes(opportunity.id)
    );

  savedOpportunities.forEach(opportunity => {

    savedGrid.appendChild(
      createSavedCard(opportunity)
    );

  });
}

function createSavedCard(opportunity) {

  const card =
    document.createElement("article");

  card.className =
    "opportunity-card";

  card.innerHTML = `

    <div class="card-top">

      <div class="opportunity-icon">
        ${opportunity.icon}
      </div>

      <button
        class="save-button saved"
        onclick="toggleSavedFromPage('${opportunity.id}')"
        aria-label="Remove ${opportunity.name}"
      >
        ★
      </button>

    </div>

    <span class="category-badge">
      ${opportunity.category}
    </span>

    <h3>
      ${opportunity.name}
    </h3>

    <p class="card-description">
      ${opportunity.description}
    </p>

    <div class="card-bottom">

      <button
        class="see-more-button"
        onclick="openOpportunityModal('${opportunity.id}')"
      >
        See More
      </button>

      <a
        class="apply-button"
        href="${opportunity.website}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Official Website
      </a>

    </div>

  `;

  return card;
}

function toggleSavedFromPage(id) {

  let saved =
    getSavedIds();

  saved =
    saved.filter(savedId =>
      savedId !== id
    );

  saveIds(saved);

  renderSavedOpportunities();
}


/* =====================================================
   OPPORTUNITY MODAL
===================================================== */

function openOpportunityModal(id) {

  const opportunity =
    opportunities.find(
      item => item.id === id
    );

  if (!opportunity) return;

  const status =
    getMatchStatus(opportunity);

  const saved =
    isSaved(opportunity.id);

  modalBody.innerHTML = `

    <span class="modal-category">
      ${opportunity.category}
    </span>

    <h2 id="modalTitle">
      ${opportunity.icon}
      ${opportunity.name}
    </h2>

    <p class="modal-description">
      ${opportunity.description}
    </p>

    <div class="details-list">

      <div class="detail-item">
        <span>Eligibility</span>
        <span>
          ${getStatusText(status)}
        </span>
      </div>

      <div class="detail-item">
        <span>Age range</span>
        <span>
          ${opportunity.ageMin}–${opportunity.ageMax}
        </span>
      </div>

      <div class="detail-item">
        <span>Who can apply?</span>
        <span>
          ${opportunity.eligibility}
        </span>
      </div>

      <div class="detail-item">
        <span>Funding</span>
        <span>
          ${opportunity.funding}
        </span>
      </div>

      <div class="detail-item">
        <span>Duration</span>
        <span>
          ${opportunity.duration}
        </span>
      </div>

      <div class="detail-item">
        <span>Location</span>
        <span>
          ${opportunity.location}
        </span>
      </div>

      <div class="detail-item">
        <span>Deadline</span>
        <span>
          ${opportunity.deadline}
        </span>
      </div>

    </div>

    <div class="modal-note">
      Always check the official website for the
      latest eligibility requirements, deadlines,
      funding information and application instructions.
    </div>

    <div class="modal-actions">

      <a
        class="modal-website"
        href="${opportunity.website}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Official Website →
      </a>

      <button
        class="modal-save"
        onclick="toggleSaveFromModal('${opportunity.id}')"
      >
        ${saved ? "★ Saved" : "☆ Save Opportunity"}
      </button>

    </div>

  `;

  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";
}

function closeOpportunityModal() {

  modal.classList.add("hidden");

  document.body.style.overflow = "";
}

function toggleSaveFromModal(id) {

  toggleSave(id);

  openOpportunityModal(id);

}


/* =====================================================
   CLOSE MODAL WITH ESCAPE
===================================================== */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeOpportunityModal();
    closeSideMenu();

  }

});


/* =====================================================
   CLOSE COUNTRY RESULTS WHEN CLICKING ELSEWHERE
===================================================== */

document.addEventListener("click", event => {

  if (
    !event.target.closest(".country-search")
  ) {

    countryResults.innerHTML = "";

  }

});


/* =====================================================
   INITIAL SETUP
===================================================== */

createYearChoices();

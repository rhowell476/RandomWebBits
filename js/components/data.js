//-------------------Articles -----------------------//
import WebBit from "./WebBit.js"

// Create new AA (Arbitrary Article)
const Article01 = new WebBit (
    "domainLookup",
    1,
    "Domain Lookup",
    "Check an available domain using WhoIS API search",
    "December 4, 2022",
    "pages/domainlookup.html",
    "img/Whois_thisrandomwebdomain.com.png",
    "WhoIs Lookup"
);

const Article02 = new WebBit (
    "htmlresponses",
    2,
    "HTML Responses",
    "View HTML page response statuses",
    "December 11, 2022",
    "pages/htmlresponses.html",
    "img/HTML_Frames.png",
    "HTML frames example"
);


const Article03 = new WebBit (
    "nasa",
    3,
    "NASA Pages",
    "Check out some NASA links",
    "December 18, 2022",
    "pages/nasa.html",
    "img/NASA.jpg",
    "NASA Artemis Logo"
);

const Article04 = new WebBit (
    "httpscert",
    4,
    "HTTPS Certificate",
    "Select a website's HTTPS certificate",
    "December 26, 2022",
    "pages/https.html",
    "img/https2.png",
    "Cursor selecting HTTPS certificate"
);


const ArbitraryArticles = [Article01, Article02, Article03, Article04];

export default ArbitraryArticles;
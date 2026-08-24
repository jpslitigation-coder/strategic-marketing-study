/* =========================================================
   STRATEGIC MARKETING — content data
   Grounded in the Regenesys MBA Strategic Marketing Management
   study guide (2026) + recommended texts (Hooley et al. 2020;
   Cravens & Piercy 2013; Walker & Mullins 2014; Jooste et al. 2012).
   ========================================================= */

const SECTIONS = {
  s1:{tab:"3.2", title:"Introduction to Strategic Marketing", file:"section-1-intro.html", colour:"#e0a12e"},
  s2:{tab:"3.3", title:"Ethics & CSR in Marketing",           file:"section-2-ethics.html", colour:"#1f8f7c"},
  s3:{tab:"3.4", title:"Understanding Markets & Segments",     file:"section-3-markets.html", colour:"#5a6a8f"},
  s4:{tab:"3.5", title:"Selecting Market-Driven Strategies",   file:"section-4-strategies.html", colour:"#c8871a"},
  s5:{tab:"3.6", title:"Implementing Market-Driven Strategies",file:"section-5-implementation.html", colour:"#d9544d"}
};

/* ---------------- FLASHCARDS ---------------- */
const FLASHCARDS = [
  // Section 1
  {sec:"s1", q:"Market-driven strategy", a:"An approach where the market and customers are the starting point for business strategy. It builds competitive advantage and long-term relationships by understanding markets and customers first (Cravens & Piercy, 2013)."},
  {sec:"s1", q:"Day's three distinctive capabilities of market-driven firms", a:"Market SENSING (reading weak signals from the periphery), customer LINKING (building relationships), and channel BONDING (tying in distribution partners). Mnemonic: SLB."},
  {sec:"s1", q:"Four characteristics of a market-driven strategy (Cravens & Piercy)", a:"1) Become market-oriented (customer focus); 2) Determine distinctive capabilities; 3) Match customer value with organisational capabilities; 4) Obtain superior performance by delivering superior customer value."},
  {sec:"s1", q:"Strategic marketing process (3 core stages)", a:"With organisational strategy, culture & systems at the centre: (1) Understanding markets & segments → (2) Selecting market-driven strategies → (3) Implementing market-driven strategies."},
  {sec:"s1", q:"Production vs market orientation", a:"Production: 'sell what we can make', focus on cost/functional performance. Market: 'make what we can sell', focus on customer needs & market opportunities. Market orientation is crucial for global success."},
  {sec:"s1", q:"Strategic marketing vs marketing management", a:"Strategic marketing = long-range, intuitive/inductive, bottom-up, proactive, treats environment as dynamic, seeks new opportunities continually. Marketing management = day-to-day, analytical/deductive, top-down, reactive."},
  {sec:"s1", q:"The marketing plan (purpose)", a:"Spells out what, why, who, when, where and how. It is both a forecast and a measurement/control tool."},
  {sec:"s1", q:"E-commerce quadrants (+ 5th type)", a:"B2B (Ford/Cisco supply networks), B2C (Amazon, iTunes), C2B (consumers bid on unsold tickets), C2C (eBay, review sites). The 5th way is P2P — peer-to-peer (e.g. Uber)."},
  {sec:"s1", q:"Blanchard's social media model", a:"PLAN → LISTEN → ANALYSE → ENGAGE. Communication channels are 'resource-hungry' and need more planning than usual, anchored in business objectives (Carvill & Taylor, 2013)."},
  {sec:"s1", q:"Data-mining principles (ICO)", a:"1) Justify collection (matches customer needs); 2) Keep it secure; 3) Protect from inappropriate disclosure; 4) Be open about how data is collected and used."},
  {sec:"s1", q:"Drivers of strategic marketing", a:"Intensifying battle for market share, market fragmentation/customisation, shortening product life cycles, demographic shifts, tech innovation (e.g. Uber), integrated value offers, environmental change, new forms of competition, demand for superior value."},

  // Section 2
  {sec:"s2", q:"Marketing ethics", a:"The application of moral principles and values in marketing (e.g. in advertising, promotion, pricing). It asks 'What do I do?' — the study of right and wrong in marketing decisions."},
  {sec:"s2", q:"Ethical marketing (principles)", a:"A philosophy of honesty, fairness and responsibility: shared standard of truth; clear distinction between advertising and sensationalism; transparent endorsements; consumer privacy maintained; adherence to government standards/regulations (Sultana et al., 2016)."},
  {sec:"s2", q:"Socially responsible organisation", a:"One that shows concern for the people, society and environment where it does business — acting morally to create a positive impact on stakeholders (employees, community, consumers, shareholders)."},
  {sec:"s2", q:"CSR (definition)", a:"An approach where a company (a) recognises its activities have a wide impact on society and development, and (b) actively manages its economic, social, environmental and human-rights responsibilities (Tripathi & Singh, 2014)."},
  {sec:"s2", q:"Sources of ethical conflict in marketing", a:"Conflict between the needs of the COMPANY, the INDUSTRY, and SOCIETY; and between an individual's personal values and the organisation (e.g. tobacco marketing, false 'cures')."},
  {sec:"s2", q:"Areas of social concern affecting marketing (Table 7)", a:"Natural environment, relationship marketing, green marketing (Reduce/Reuse/Recycle), targeting children, and cause-related marketing (must differ from social marketing; needs good company–cause fit)."},
  {sec:"s2", q:"Green marketing", a:"Developing and distributing ecologically-safe products/packaging that are less toxic, more durable, contain reusable materials and are recyclable — conserving resources and reducing pollution."},
  {sec:"s2", q:"Cause-related vs social marketing", a:"Cause-related marketing's main purpose is to help the business (must be transparent with a good company–cause fit). Social marketing is not tied to a company and exists only to address a social problem."},
  {sec:"s2", q:"Benefits of an ethical organisation", a:"Excellent brand image, increased market share, decreased operating costs, easier attraction/retention of employees, and attraction of investors — provided strategy is also ethically compliant."},

  // Section 3
  {sec:"s3", q:"Strategic drift", a:"When an organisation fails to keep pace with environmental change; it drifts, goes into flux (instability), and may or may not manage the transformational 'step change' back into alignment."},
  {sec:"s3", q:"Strategic space", a:"Opportunities (and threats) that lie OUTSIDE the traditional competitive 'box'. Many firms fail to see them (e.g. the recorded-music revolution driven by iTunes/iPod, not record labels)."},
  {sec:"s3", q:"Market (definition)", a:"Groups of people/businesses with the ABILITY and WILLINGNESS to buy because they have a NEED. Ability + willingness create demand. A product-market combines product BENEFITS with the NEEDS that motivate demand."},
  {sec:"s3", q:"Market segment", a:"A distinct subset of people with similar needs, circumstances and characteristics that lead them to respond similarly to a particular product offering or marketing programme (Walker & Mullins, 2014)."},
  {sec:"s3", q:"Three steps in market segmentation (Cravens & Piercy)", a:"1) Identify homogeneous segments that differ from others; 2) Specify the criteria that define the segments; 3) Determine the size and potential of the segments (evaluation)."},
  {sec:"s3", q:"Bases for segmenting consumer markets", a:"Demographic (age, sex, income, occupation, education, race), geographic, psychographic (VALS, lifestyle), and behavioural (usage, benefits sought, online vs in-store). Generational segmentation (Gen Y/Z) is common."},
  {sec:"s3", q:"Macro- vs micro-segmentation (B2B)", a:"Macro divides the market by the buying organisation's characteristics (age of firm, size, industry). Micro groups by the characteristics of the people who influence the buying decision."},
  {sec:"s3", q:"Evaluating segments — the two factor sets", a:"MARKET-ATTRACTIVENESS factors (unmet needs, size/growth, macro trends) and COMPETITIVE-POSITION factors (competitive-advantage opportunity, capabilities/resources, industry attractiveness). Weight × rate (0–10), then plot on the matrix."},
  {sec:"s3", q:"Five targeting strategies", a:"Single-segment (concentrated); Selective specialisation (differentiated); Product specialisation; Market specialisation; Full market coverage (mass/undifferentiated)."},
  {sec:"s3", q:"Faulty segmentation", a:"Segmentation that alienates or is ineffective — e.g. Talbots chasing 'thirtysomethings' with frilly tank tops and neglecting its loyal career women, leading to sales and share-price losses."},
  {sec:"s3", q:"CRM (definition)", a:"Customer relationship management — a comprehensive strategy/process of acquiring, retaining and partnering with selective customers to create superior value for company and customer. Note: 60–80% of CRM projects fail."},
  {sec:"s3", q:"CRM value-chain steps", a:"ENGAGE (discover interests/capture info) → SEGMENT (by behaviour & psychographics) → PERSONALISE (offers, cross/up-sell) → TRACK (loyalty & share of wallet, then adapt)."},
  {sec:"s3", q:"Three CRM pitfalls", a:"1) Implementing CRM before creating a customer strategy; 2) Putting CRM in place before changing the organisation (structure/systems/culture) to match; 3) Assuming more CRM technology is automatically better."},
  {sec:"s3", q:"Marketing intelligence", a:"Quantitative (hard) and qualitative (soft) data combined to inform strategic marketing decisions, drawn from primary and secondary sources. Big data must be handled within an ethical code of conduct."},

  // Section 4
  {sec:"s4", q:"Three phases of strategic positioning", a:"(1) Positioning CONCEPT (how management wants buyers to perceive the brand) → (2) Positioning STRATEGY (the 4Ps that communicate it) → (3) Positioning EFFECTIVENESS (measured with marketing metrics)."},
  {sec:"s4", q:"Three positioning concepts", a:"FUNCTIONAL (solves a problem, e.g. cavity prevention), SYMBOLIC (self-enhancement/status, e.g. Rolex, Louis Vuitton), EXPERIENTIAL (sensory/cognitive pleasure, e.g. driving a BMW). Using several at once can confuse buyers."},
  {sec:"s4", q:"Four faulty-positioning errors", a:"UNDER-positioning (vague/no distinctiveness), OVER-positioning (too narrow a view), CONFUSED positioning (contradictory messages), DOUBTFUL positioning (claims not seen as credible)."},
  {sec:"s4", q:"Marketing metrics vs financial metrics", a:"Marketing metrics quantify, compare and interpret MARKETING performance (share, satisfaction, awareness, loyalty). Financial metrics (gross margin, sales growth, cost %) come straight from financial reports — don't confuse them."},
  {sec:"s4", q:"Observable vs unobservable metrics", a:"Observable = behaviour (purchases, CLTV, acquisition, retention, cross-sell, leads). Unobservable = perceptions/attitudes (satisfaction, service quality, perceived value, loyalty), collected mainly via surveys."},
  {sec:"s4", q:"Share of mind vs share of heart", a:"Share of mind (awareness/recognition) is knowing the brand; share of heart is LIKING/preferring it. Knowing ≠ liking (e.g. Coca-Cola 60% share-of-mind but 35% share-of-heart)."},
  {sec:"s4", q:"Advanced marketing metrics", a:"Long-term projected performance measures: demand forecasts (econometric modelling), brand equity (Aaker/Keller models), customer lifetime value (CLTV), and customer equity (sum of all customers' CLTVs)."},
  {sec:"s4", q:"Customer lifetime value (CLTV)", a:"The net present value of all current and future profits from a customer over the life of their relationship with the firm. Starbucks: not selling a $5.90 coffee but acquiring a ~$15,000 customer."},
  {sec:"s4", q:"Strategic marketing relationships (types)", a:"Intermediate-customer (wholesalers/retailers/franchises), End-user (co-creation), Strategic customers (dedicated teams, e.g. P&G–Walmart 200-person team), Strategic alliances (P&G–Google), Joint ventures (Coca-Cola–Nestlé)."},
  {sec:"s4", q:"Positioning strategy elements (Table 10)", a:"Product/brand strategy, value-chain (distribution) strategy, pricing strategy, and integrated communication strategy (advertising + sales force/CRM). These must be co-ordinated across functions."},
  {sec:"s4", q:"Product life cycle & Moon's repositioning", a:"By re-positioning, firms can propel products back into the growth phase. Moon (2005): reverse positioning (strip attributes, add surprising ones), breakaway positioning, and stealth positioning."},
  {sec:"s4", q:"Pricing approaches", a:"Cost-oriented (breakeven, cost-plus mark-up), competition-oriented (price leader, sealed bid/tender, reverse auction), and demand-oriented (what buyers will pay). Then set policies and structure."},
  {sec:"s4", q:"ATL, BTL and TTL promotion", a:"Above-the-line = paid mass-media (print, TV, radio, internet), wide reach. Below-the-line = direct, controllable, often one-to-one (sales promo, sampling, personal selling). Through-the-line = integrated ATL+BTL (digital blurs them)."},
  {sec:"s4", q:"AIDA model", a:"Attention (awareness/knowledge) → Interest (liking/preference) → Desire (conviction) → Action (purchase). Maps to the IMC 'trigger → access → engage' logic."},
  {sec:"s4", q:"Integrated Marketing Communications (IMC)", a:"A plan that evaluates the strategic roles of different communication disciplines and combines them for CLARITY, CONSISTENCY and MAXIMUM IMPACT (American Assoc. of Advertising Agencies)."},
  {sec:"s4", q:"Promotion mix (5 elements)", a:"Advertising, personal selling, sales promotion, public relations (+ direct/digital). Advertising builds awareness; personal selling wins conviction/purchase; sales promotion and PR support throughout."},
  {sec:"s4", q:"SMART objectives", a:"Specific, Measurable, Achievable/Attainable, Realistic/Relevant, Time-bound. Objectives in the marketing plan and positioning strategy must be SMART so performance can be controlled."},
  {sec:"s4", q:"Annual marketing plan sections (Cravens & Piercy)", a:"Strategic situation summary; market-target description; objectives; marketing-programme positioning strategy (4Ps + research + co-ordination); forecasts & budgets; marketing-driven implementation & control."},

  // Section 5
  {sec:"s5", q:"CMO's seven key tasks (Cravens & Piercy)", a:"1) Establish marketing's role; 2) Own the voice of the market; 3) Own marketing strategy; 4) Co-ordinate with other areas; 5) Run the marketing organisation; 6) Lead the marketing transformation; 7) Establish a marketing scorecard & metrics."},
  {sec:"s5", q:"Sales vs marketing function (Barrett)", a:"Sales is one-to-one, relationship-driven, looks after individuals and can't be averaged; it shifts from price/discount to total cost of ownership and positions the firm as a risk-free alternative."},
  {sec:"s5", q:"Advertising-agency roles", a:"Agency director (strategy with client), creative team (design/film/copy), market researchers (audits, surveys), and media planners (best media match). Advertising is measured by its impact on behaviour within time/budget."},
  {sec:"s5", q:"Strategic marketing audit", a:"A process to evaluate a system by comparing RESULTS with EXPECTATIONS — so a set of expectations must exist. It covers mission/objectives, business composition, market analysis, and the CMO's role (Cravens & Piercy)."},
  {sec:"s5", q:"Two factor-sets influencing implementation", a:"STRUCTURAL issues (marketing functions, control systems, policy guidelines) and BEHAVIOURAL issues (managers' bargaining/negotiation skills, resource allocation, informal arrangements)."},
  {sec:"s5", q:"Stokes' digital marketing strategy framework", a:"1) Context (situation analysis); 2) Value exchange; 3) Objectives (SMART); 4) Tactics & evaluation; 5) Ongoing optimisation. Tactics must fit the objective (e.g. SEO for retention, social for awareness)."},
  {sec:"s5", q:"Steps in developing a marketing strategy", a:"Snapshot of current situation → define target audience → list marketing goals → develop communication strategies/tactics → establish the marketing budget."},
  {sec:"s5", q:"Uber (disruption lessons)", a:"P2P model booked via smartphone; multiple tiers (UberX, Pool, Black, SUV, WAV); disrupted taxis by making a ride easy and trackable. Faced regulatory bans in several markets — disruption creates resistance from incumbents."}
];

/* ---------------- MINI KNOWLEDGE TESTS (MCQ) ---------------- */
const QUIZ = {
  s1:[
    {q:"According to George Day, market-driven firms excel at three capabilities. Which set?",
     options:["Pricing, promotion, placement","Market sensing, customer linking, channel bonding","Research, development, distribution","Planning, listening, engaging"],
     answer:1, explain:"Day identifies market sensing (reading weak peripheral signals), customer linking, and channel bonding."},
    {q:"A production-oriented firm is best described as one that…",
     options:["Makes what it can sell","Focuses primarily on customer needs","Sells what it can make","Bases price on perceived benefits"],
     answer:2, explain:"Production orientation = 'sell what we can make', focused on functional performance and cost. Market orientation flips this."},
    {q:"Which best distinguishes STRATEGIC marketing from marketing management?",
     options:["It is day-to-day and top-down","It is long-range, proactive and treats the environment as dynamic","It is reactive and analytical only","It ignores new opportunities"],
     answer:1, explain:"Strategic marketing is long-range, intuitive, bottom-up, proactive, and continually searches for opportunities in a dynamic environment."},
    {q:"eBay auctions and consumer review/blog sites are examples of which e-commerce quadrant?",
     options:["B2B","B2C","C2B","C2C"],
     answer:3, explain:"Consumer-to-consumer (C2C) covers auction sites and consumer blogs praising/criticising brands."},
    {q:"Blanchard's social-media model follows which sequence?",
     options:["Engage, plan, listen, analyse","Plan, listen, analyse, engage","Listen, engage, plan, analyse","Analyse, plan, engage, listen"],
     answer:1, explain:"Plan → Listen → Analyse → Engage, always anchored in business objectives."},
    {q:"Which is NOT one of the four ICO data-mining principles?",
     options:["Justify collection against customer needs","Keep data secure","Sell surplus data to partners for revenue","Be open about how data is used"],
     answer:2, explain:"Selling data is precisely what the principles guard against; treat all collected data as personal and protect it."}
  ],
  s2:[
    {q:"Marketing ethics is best defined as…",
     options:["The law governing advertising","The application of moral principles and values in marketing","A pricing technique","A promotional channel"],
     answer:1, explain:"Marketing ethics = applying moral principles/values across advertising, promotion and pricing."},
    {q:"An organisation is socially responsible when it shows concern for…",
     options:["Shareholders only","People, society and the environment where it does business","Competitors","Regulators only"],
     answer:1, explain:"Social responsibility means concern for people, society and the environment — a positive impact on all stakeholders."},
    {q:"Ethical conflict in marketing typically arises between…",
     options:["Product and price","The company, the industry and society","Online and in-store","Buyers and sellers only"],
     answer:1, explain:"Diverse needs of company, industry and society (and personal values vs the organisation) create ethical conflict."},
    {q:"Cause-related marketing differs from social marketing because it…",
     options:["Is never transparent","Mainly aims to help the business","Is issued only to help society","Is illegal"],
     answer:1, explain:"Cause-related marketing's main purpose is to help the business (needs a good fit and transparency); social marketing exists only to address a social problem."},
    {q:"Which is a principle of ethical marketing (Sultana et al.)?",
     options:["Blur advertising and sensationalism","Maximise data collection","A shared standard of truth in communications","Hide endorsements"],
     answer:2, explain:"Principles include a shared standard of truth, clear ad/sensationalism distinction, transparent endorsements, privacy, and regulatory compliance."}
  ],
  s3:[
    {q:"'Ability and willingness create demand.' A market is a group with…",
     options:["Only the willingness to buy","A need, plus the ability and willingness to buy","Only purchasing power","No substitutes available"],
     answer:1, explain:"A market = people/businesses with a need who have both ability and willingness to purchase the benefits a product provides."},
    {q:"The correct order of Cravens & Piercy's three segmentation steps is…",
     options:["Determine size → identify → specify","Identify homogeneous segments → specify criteria → determine size/potential","Specify → determine → identify","Target → position → evaluate"],
     answer:1, explain:"Identify segments that differ from others, specify the criteria that define them, then determine their size and potential."},
    {q:"Serving one segment with one marketing mix is which targeting strategy?",
     options:["Full market coverage","Selective specialisation","Single-segment (concentrated)","Product specialisation"],
     answer:2, explain:"Single-segment / concentrated strategy — often used by smaller firms with limited resources."},
    {q:"In the market-attractiveness × competitive-position matrix, a segment scoring HIGH attractiveness and STRONG position should be treated as…",
     options:["Divest","Protect position / invest to build","Harvest","Ignore"],
     answer:1, explain:"High attractiveness + strong position = protect position, invest to build at the maximum digestible rate."},
    {q:"Research suggests roughly what share of CRM projects fail?",
     options:["10–20%","30–40%","60–80%","Under 5%"],
     answer:2, explain:"60–80% of CRM projects fail — largely due to poor conceptualisation and equating CRM with technology alone."},
    {q:"The CRM value chain runs…",
     options:["Track → engage → segment → personalise","Engage → segment → personalise → track","Segment → track → engage → personalise","Personalise → engage → track → segment"],
     answer:1, explain:"Engage → Segment → Personalise → Track (then adapt strategy to sustain CRM success)."}
  ],
  s4:[
    {q:"The three phases of strategic positioning are concept, strategy and…",
     options:["Segmentation","Effectiveness","Distribution","Budgeting"],
     answer:1, explain:"Concept (perception desired) → strategy (the 4Ps) → effectiveness (measured with marketing metrics)."},
    {q:"A Rolex watch positioned on status and group membership uses which positioning concept?",
     options:["Functional","Symbolic","Experiential","Reverse"],
     answer:1, explain:"Symbolic positioning appeals to self-enhancement, status and group membership."},
    {q:"Customers holding contradictory, frequently-changing impressions of a brand is which faulty positioning?",
     options:["Under-positioning","Over-positioning","Confused positioning","Doubtful positioning"],
     answer:2, explain:"Confused positioning results from frequent changes and contradictory messages."},
    {q:"Which is an ADVANCED marketing metric?",
     options:["Unit market share","Response rate","Customer lifetime value","Ad awareness"],
     answer:2, explain:"Advanced metrics project long-term performance: demand forecasts, brand equity, CLTV and customer equity."},
    {q:"In the AIDA model, personal selling is MOST effective at which stages?",
     options:["Attention and interest","Awareness and knowledge","Conviction and purchase","Only awareness"],
     answer:2, explain:"Personal selling is most effective at conviction and purchase — it closes the sale through one-to-one interaction."},
    {q:"Below-the-line (BTL) promotion is preferred when…",
     options:["Reaching a mass national audience cheaply","A personal, controllable, one-to-one interaction is desirable (e.g. sampling)","Only TV is available","Budgets are unlimited"],
     answer:1, explain:"BTL gives the firm direct control and one-to-one contact — good for testing products and touch-and-feel experiences."},
    {q:"IMC is designed to deliver clarity, consistency and…",
     options:["The lowest possible cost","Maximum communication impact","Mass production","Random reach"],
     answer:1, explain:"Integrated marketing communications combines disciplines for clarity, consistency and maximum impact."}
  ],
  s5:[
    {q:"How many key tasks does Cravens & Piercy assign to the CMO?",
     options:["Three","Five","Seven","Ten"],
     answer:2, explain:"Seven: role of marketing, voice of the market, marketing strategy, co-ordination, running the organisation, transformation, and scorecard/metrics."},
    {q:"A strategic marketing audit fundamentally compares…",
     options:["Prices with costs","Results with expectations","Products with competitors","Sales with adverts"],
     answer:1, explain:"An audit evaluates a system by comparing results against expectations — so expectations must be defined first."},
    {q:"'Marketing functions, control systems and policy guidelines' are examples of which implementation factor-set?",
     options:["Behavioural issues","Structural issues","Financial issues","Legal issues"],
     answer:1, explain:"These are structural issues; behavioural issues cover bargaining skills, resource allocation and informal arrangements."},
    {q:"In Stokes' digital framework, defining what value you add and how you'll know you succeeded is which step?",
     options:["Context","Value exchange","Ongoing optimisation","Tactics"],
     answer:1, explain:"Value exchange states the value the strategy adds and how success will be judged, before setting SMART objectives."},
    {q:"According to Barrett, the sales function is best characterised as…",
     options:["Mass, averaged and one-to-many","One-to-one, relationship-driven and individual","Purely price-and-discount focused","Identical to advertising"],
     answer:1, explain:"Sales is one-to-one and relationship-driven, cannot be averaged, and shifts from price to total cost of ownership."}
  ]
};

/* ---------------- EXAM-STYLE QUESTIONS + MODEL ANSWERS ---------------- */
const EXAM = [
  {sec:"s1", tag:"Q1", marks:"20 marks", q:"Evaluate the challenges an organisation faces in developing a market-driven strategy, using a firm of your choice.",
   model:`<span class="lbl">Define & frame</span><p>Open by defining a market-driven strategy: the market and customers are the starting point for business strategy, enabling competitive advantage and long-term relationships (Cravens & Piercy, 2013). Signal that becoming truly market-driven is difficult because most firms are still product/sales-driven.</p>
   <span class="lbl">Structure the evaluation</span><ul class="note-list">
   <li>Culture shift — developing a company-wide passion for customers and organising around customer SEGMENTS rather than products (Kotler & Keller).</li>
   <li>Building Day's three capabilities: market sensing (reading weak signals), customer linking, channel bonding — each requires investment and skills.</li>
   <li>Matching distinctive capabilities to attractive segments' value, then delivering SUPERIOR value profitably.</li>
   <li>Environmental turbulence: fragmentation, shortening PLCs, disruptive tech (Uber), globalisation, demand for superior value — all raise the bar.</li>
   <li>Avoiding strategic drift and strategic inertia; leveraging MIS/big data ethically.</li></ul>
   <span class="lbl">Apply & conclude</span><p>Apply each challenge to a named firm (e.g. how Samsung shifted from cost-driven to market-driven, investing in R&D, design centres and brand). Conclude that the challenge is chiefly organisational — aligning strategy, structure, systems, culture and people to operate synergistically.</p>`},

  {sec:"s1", tag:"Q2", marks:"15 marks", q:"Contrast production orientation with market orientation and argue whether firms should be market-oriented for global success.",
   model:`<span class="lbl">Contrast (use a table in the exam)</span><p>Production: sells what it can make; narrow line; price from cost; technical research; packaging minimises cost. Market: makes what it can sell; broad line; price from perceived benefits; market research; packaging aids convenience and promotes (Walker & Mullins, 2014).</p>
   <span class="lbl">Argument</span><p>Argue FOR market orientation in global markets: competitors, customers and potential customers drive continued success; strategic inertia is dangerous amid globalisation, growing services and new ICTs. Acknowledge nuance — some innovators (Apple) 'tell customers what they need before they realise it', so pure customer-led research has limits.</p>
   <span class="lbl">Conclude</span><p>A balanced market orientation — deep customer insight PLUS innovation leadership — best fits dynamic global markets.</p>`},

  {sec:"s2", tag:"Q3", marks:"20 marks", q:"Assess the value of integrating ethics and corporate social responsibility into strategic marketing.",
   model:`<span class="lbl">Define</span><p>Distinguish marketing ethics (moral principles in marketing), ethical marketing (honesty/fairness/responsibility) and CSR (managing economic, social, environmental and human-rights impacts — Tripathi & Singh).</p>
   <span class="lbl">Value / benefits</span><ul class="note-list">
   <li>Brand image, larger market share, lower operating costs.</li>
   <li>Attracts and retains employees and investors.</li>
   <li>Privacy and transparency are becoming a competitive advantage.</li></ul>
   <span class="lbl">Tensions to evaluate</span><ul class="note-list">
   <li>Ethical conflict between company, industry and society (tobacco example).</li>
   <li>Communicating CSR invites scrutiny — over-claiming risks a backlash (Green Mountain Coffee).</li>
   <li>Areas of concern: environment, green marketing, targeting children, cause-related fit.</li></ul>
   <span class="lbl">Conclude</span><p>CSR/ethics do not automatically raise profit, but responsible firms build durable trust and reputational capital; the strategy itself must be ethically compliant to realise the value.</p>`},

  {sec:"s3", tag:"Q4", marks:"25 marks", q:"Explain how you would segment a market, evaluate the segments, and select a target market for a product of your choice.",
   model:`<span class="lbl">Segment</span><p>Apply the three steps: identify homogeneous segments that differ from others; specify defining criteria; determine size/potential. Use appropriate bases — demographic, geographic, psychographic (VALS), behavioural — and, for B2B, macro- then micro-segmentation.</p>
   <span class="lbl">Evaluate</span><p>Score each segment on market-attractiveness factors (unmet needs, size/growth, macro trends) and competitive-position factors (advantage opportunity, capabilities/resources, industry attractiveness). Weight × rate (0–10) — e.g. the Under Armour athletic-underwear analysis — then plot on the attractiveness×position matrix.</p>
   <span class="lbl">Target</span><p>Choose a targeting strategy (single-segment, selective specialisation, product specialisation, market specialisation, or full coverage) justified by resources. Warn against faulty segmentation (Talbots) which alienates loyal customers.</p>
   <span class="lbl">Conclude</span><p>Segmentation lays the groundwork for targeting and positioning; faulty segmentation weakens both.</p>`},

  {sec:"s3", tag:"Q5", marks:"15 marks", q:"Critically evaluate CRM as a process for managing strategic customer relationships.",
   model:`<span class="lbl">Define</span><p>CRM = acquiring, retaining and partnering with selective customers to create superior mutual value (Parvatiyar & Sheth). It is strategic, not merely technological.</p>
   <span class="lbl">The process</span><p>Engage → Segment → Personalise → Track. Illustrate with a supermarket/gym loyalty programme (e.g. Woolworths, Virgin Active).</p>
   <span class="lbl">Critique</span><p>60–80% of CRM projects fail. Pitfalls: implementing CRM before a customer strategy; before aligning structure/systems/culture; and assuming more technology is better. Technology must support the strategy — not the reverse.</p>`},

  {sec:"s4", tag:"Q6", marks:"25 marks", q:"Discuss strategic positioning and show how the marketing mix (4Ps) is used to achieve a chosen positioning concept.",
   model:`<span class="lbl">Positioning phases</span><p>Concept → strategy → effectiveness (Cravens & Piercy). The concept may be functional, symbolic or experiential; using more than one risks confusing buyers.</p>
   <span class="lbl">Deliver with the 4Ps</span><ul class="note-list">
   <li>Product — position vs competitors; manage the PLC (Moon's reverse/breakaway/stealth positioning).</li>
   <li>Price — cost-, competition- or demand-oriented; tactics (bundle, dynamic, odd-even, leader).</li>
   <li>Place — distribution/value-chain strategy and channel roles.</li>
   <li>Promotion — IMC via AIDA and the promotion mix (advertising, personal selling, sales promotion, PR), ATL/BTL/TTL.</li></ul>
   <span class="lbl">Measure effectiveness</span><p>Set SMART objectives and track marketing metrics (share, awareness, share of heart, loyalty, CLTV). Watch for faulty positioning (under/over/confused/doubtful).</p>
   <span class="lbl">Apply</span><p>Show J&J positioning each brand vs Nike using its corporate brand — then apply to your own product.</p>`},

  {sec:"s4", tag:"Q7", marks:"20 marks", q:"Explain the role of marketing metrics and advanced metrics in measuring positioning effectiveness. Use CLTV to illustrate.",
   model:`<span class="lbl">Role</span><p>Metrics quantify, compare and interpret marketing performance (distinct from financial metrics). Observable (behaviour) and unobservable (attitudes) measures; external metrics and budget metrics; market share, response rate, satisfaction, awareness, share of heart, loyalty, retention/acquisition.</p>
   <span class="lbl">Advanced metrics</span><p>Demand forecasts (econometric modelling), brand equity (Aaker/Keller), CLTV and customer equity project long-term value.</p>
   <span class="lbl">CLTV illustration</span><p>CLTV = NPV of all current/future profit from a customer. Starbucks combines simple, custom and traditional LTV equations (≈$14,099 average) — so they invest in Wi-Fi and comfort to acquire a ~$15,000 customer, not to sell one $5.90 coffee. A marketing dashboard consolidates these measures for regular review.</p>`},

  {sec:"s5", tag:"Q8", marks:"20 marks", q:"Discuss the roles and responsibilities involved in implementing a market-driven strategy, including the CMO.",
   model:`<span class="lbl">Roles</span><ul class="note-list">
   <li>Sales — one-to-one, relationship-driven; sells total cost of ownership and positions the firm as risk-free (Barrett).</li>
   <li>Advertising agency — director, creative team, market researchers, media planners; measured on behaviour change within time/budget.</li>
   <li>CMO — seven tasks: role of marketing, voice of the market, marketing strategy, co-ordination, running the organisation, transformation, scorecard/metrics.</li></ul>
   <span class="lbl">Implementation</span><p>Two factor-sets: structural (functions, control systems, policy) and behavioural (bargaining skills, resource allocation, informal arrangements). Fit between strategy and structure/culture matters (H&M 'cheap chic' + frugal culture).</p>
   <span class="lbl">Audit & conclude</span><p>Use a strategic marketing audit (results vs expectations) to control performance; effective planners are not always effective implementers, so match people to tasks.</p>`},

  {sec:"s5", tag:"Q9", marks:"15 marks", q:"Using the Uber case, analyse how a disruptor reconfigures a market space and the responsibilities this creates for marketers.",
   model:`<span class="lbl">Disruption</span><p>Uber introduced a P2P model — book and track a car via smartphone, tiered offers (UberX, Pool, Black, SUV, WAV). It reconfigured the taxi market space rather than competing inside the traditional 'box' (link to strategic space/strategic drift).</p>
   <span class="lbl">Marketer responsibilities</span><ul class="note-list">
   <li>Locate profit in a reconfigured space; anticipate incumbents' resistance and regulatory bans.</li>
   <li>Leverage digital channels, data and CRM; manage brand/reputation on social media.</li>
   <li>Balance growth with ethics (privacy, driver relations) and ongoing optimisation.</li></ul>
   <span class="lbl">Conclude</span><p>Disruption rewards market sensing and agility; marketers must continually scan the periphery for weak signals of change.</p>`}
];

/* ---------------- 30-DAY STUDY CALENDAR ---------------- */
/* Notional hours in the SG: 3.2≈20h, 3.3≈20h, 3.4≈~25h, 3.5≈40h, 3.6≈40h  ≈ 145h.
   Textbook keys: HOOLEY = Hooley et al. 2020 (7e); CP = Cravens & Piercy 2013 (10e);
   WM = Walker & Mullins 2014; JOOSTE = Jooste et al. 2012 */
const CALENDAR = [
  {day:1, week:1, sec:"s1", focus:"Orientation + what strategic marketing is", hours:"4h",
   sg:"pp. 5–14 (Intro, LOs, defining strategic marketing)", tb:["HOOLEY Ch.1","CP Ch.1"],
   tasks:["Read module intro & the 6 learning outcomes","Note: strategic marketing vs marketing management (Table 3)","Pick YOUR product/service to apply concepts to"]},
  {day:2, week:1, sec:"s1", focus:"Market-driven strategy & the strategic marketing process", hours:"5h",
   sg:"pp. 8–13 (Table 1, Figure 1, Table 2)", tb:["HOOLEY Ch.1","CP Ch.2"],
   tasks:["Learn Day's 3 capabilities (SLB) + 4 characteristics","Draw the strategic marketing process (Fig 1)","Production vs market orientation (Table 2)"]},
  {day:3, week:1, sec:"s1", focus:"New era: globalisation, services, IT, e-commerce", hours:"4h",
   sg:"pp. 16–23 (Samsung case, Table 4, Table 5)", tb:["HOOLEY Ch.2"],
   tasks:["Work the Samsung case tasks","Memorise e-commerce quadrants + P2P","List drivers of strategic marketing"]},
  {day:4, week:1, sec:"s1", focus:"Digital & social media marketing", hours:"4h",
   sg:"pp. 23–32 (digital trends, data privacy, social networks)", tb:["HOOLEY Ch.15"],
   tasks:["Blanchard model: Plan-Listen-Analyse-Engage","4 ICO data-mining principles","Keyword/SEO note + hashtag ethics"]},
  {day:5, week:1, sec:"s1", focus:"Mobile marketing + consolidate Section 1", hours:"3h",
   sg:"pp. 37–38 (mobile, key points)", tb:["HOOLEY Ch.15"],
   tasks:["5 compliance/privacy mistakes to avoid","Review all Section 1 key points","Do the Section 1 flashcards"]},
  {day:6, week:1, sec:"s1", focus:"Section 1 self-test + review", hours:"3h",
   sg:"Revisit weak areas", tb:["—"],
   tasks:["Take the Section 1 mini-test (aim ≥80%)","Attempt Exam Q1 & Q2 (plan then write)","Log gaps to revisit"]},

  {day:7, week:2, sec:"s2", focus:"Ethics foundations", hours:"4h",
   sg:"pp. 39–41 (ethics, ethical marketing principles)", tb:["HOOLEY Ch.3"],
   tasks:["Define ethics / marketing ethics / ethical marketing","Learn the 5 ethical-marketing principles","Values marketers must support (Fig 3)"]},
  {day:8, week:2, sec:"s2", focus:"Socially responsible organisations & CSR", hours:"4h",
   sg:"pp. 40–41", tb:["HOOLEY Ch.3"],
   tasks:["CSR definition (Tripathi & Singh)","Stakeholders in socially-responsible marketing","Ethical benefits to the firm"]},
  {day:9, week:2, sec:"s2", focus:"Ethical conflict & areas of concern", hours:"4h",
   sg:"pp. 41–43 (Table 7)", tb:["HOOLEY Ch.3"],
   tasks:["Sources of ethical conflict (company/industry/society)","Table 7: 5 areas of concern","Green marketing & cause-related vs social marketing"]},
  {day:10, week:2, sec:"s2", focus:"Deceptive advertising + consolidate", hours:"3h",
   sg:"pp. 43–44 (key points)", tb:["HOOLEY Ch.3"],
   tasks:["Analyse a misleading advert you know","Section 2 flashcards","Review key points"]},
  {day:11, week:2, sec:"s2", focus:"Section 2 self-test + review", hours:"3h",
   sg:"Revisit weak areas", tb:["—"],
   tasks:["Take Section 2 mini-test (≥80%)","Attempt Exam Q3 (plan + write)","Log gaps"]},

  {day:12, week:2, sec:"s3", focus:"Strategy concepts: drift & space", hours:"4h",
   sg:"pp. 45–52 (Table 8, Figures 4–5)", tb:["HOOLEY Ch.2","CP Ch.2"],
   tasks:["Explain strategic drift (Fig 4)","Strategic space + music-industry example","Challenges of a market-driven strategy"]},
  {day:13, week:3, sec:"s3", focus:"Markets, B2B vs B2C, defining a product-market", hours:"4h",
   sg:"pp. 51–53", tb:["HOOLEY Ch.7","WM Ch.6"],
   tasks:["Market = need + ability + willingness","Needs vs benefits; substitutability","B2B vs B2C buying differences"]},
  {day:14, week:3, sec:"s3", focus:"Market segments & segmentation variables", hours:"5h",
   sg:"pp. 53–59 (Table 9, generational, VALS, Best Buy)", tb:["HOOLEY Ch.8","WM Ch.6"],
   tasks:["Segment definition + 3-step process (ISD)","Bases: demographic/geographic/psychographic/behavioural","Macro vs micro (B2B); build 2 segment profiles"]},
  {day:15, week:3, sec:"s3", focus:"Evaluating & selecting target segments", hours:"5h",
   sg:"pp. 60–64 (Fig 6 matrix, targeting strategies)", tb:["HOOLEY Ch.9","WM Ch.6"],
   tasks:["Work the Under Armour scoring example","Read the attractiveness×position matrix","Learn the 5 targeting strategies + faulty segmentation"]},
  {day:16, week:3, sec:"s3", focus:"Customer relationship management (CRM)", hours:"4h",
   sg:"pp. 64–66 (Engage-Segment-Personalise-Track)", tb:["HOOLEY Ch.11","CP Ch.4"],
   tasks:["3 CRM definitions + 60–80% failure stat","CRM value chain (ESPT)","3 CRM pitfalls"]},
  {day:17, week:3, sec:"s3", focus:"Marketing intelligence & big-data ethics", hours:"4h",
   sg:"pp. 70–73 (MIS, code of conduct)", tb:["HOOLEY Ch.5"],
   tasks:["Hard vs soft, primary vs secondary data","Big-data risks (Buytendijk & Heiser)","Draft a marketing code of conduct"]},
  {day:18, week:3, sec:"s3", focus:"Section 3 self-test + review", hours:"3h",
   sg:"Revisit weak areas", tb:["—"],
   tasks:["Take Section 3 mini-test (≥80%)","Attempt Exam Q4 & Q5","Log gaps"]},

  {day:19, week:3, sec:"s4", focus:"Strategic positioning: concept → strategy → effectiveness", hours:"5h",
   sg:"pp. 76–80 (Fig 7, Table 10)", tb:["HOOLEY Ch.10","CP Ch.6"],
   tasks:["3 phases of positioning","3 positioning concepts (F/S/E)","J&J vs Nike positioning approaches"]},
  {day:20, week:4, sec:"s4", focus:"Marketing metrics", hours:"5h",
   sg:"pp. 80–84 (Tables 11–12)", tb:["HOOLEY Ch.14","JOOSTE Ch."],
   tasks:["Observable/unobservable/external/budget metrics","Market share, response rate, share of heart","Retention & acquisition formulas (Peter's Print Shop)"]},
  {day:21, week:4, sec:"s4", focus:"Advanced metrics, CLTV & the dashboard", hours:"4h",
   sg:"pp. 84–88 (Starbucks LTV, Table 13)", tb:["HOOLEY Ch.14"],
   tasks:["Demand forecast, brand equity, CLTV, customer equity","Work the Starbucks LTV calculations","Sketch a marketing dashboard + faulty positioning"]},
  {day:22, week:4, sec:"s4", focus:"Strategic relationships & tribes", hours:"4h",
   sg:"pp. 89–91 (P&G, relationship types)", tb:["HOOLEY Ch.11","CP Ch.7"],
   tasks:["5 relationship types (intermediate→JV)","Reasons to form relationships","Relevance of consumer 'tribes'"]},
  {day:23, week:4, sec:"s4", focus:"Product & pricing strategies", hours:"5h",
   sg:"pp. 91–101 (Fig 8 & 10, pricing approaches)", tb:["HOOLEY Ch.12","CP Ch.8–10"],
   tasks:["PLC + Moon's reverse/breakaway/stealth positioning","Cost/competition/demand pricing + tactics","Global pricing ethics"]},
  {day:24, week:4, sec:"s4", focus:"Promotion, IMC & AIDA", hours:"5h",
   sg:"pp. 101–108 (Table 14, Fig 11)", tb:["HOOLEY Ch.13","CP Ch.11"],
   tasks:["ATL/BTL/TTL + IMC definition","AIDA mapped to the promotion mix","Advertising/personal selling/sales promo/PR"]},
  {day:25, week:4, sec:"s4", focus:"The marketing plan", hours:"4h",
   sg:"pp. 109–112 (Table 15)", tb:["HOOLEY Ch.16","CP Ch.2"],
   tasks:["6 sections of the annual marketing plan","SMART objectives + contingency planning","Draft a plan for your product"]},
  {day:26, week:4, sec:"s4", focus:"Section 4 self-test + review", hours:"3h",
   sg:"Revisit weak areas", tb:["—"],
   tasks:["Take Section 4 mini-test (≥80%)","Attempt Exam Q6 & Q7","Log gaps"]},

  {day:27, week:5, sec:"s5", focus:"Roles & responsibilities (sales, agency, CMO)", hours:"5h",
   sg:"pp. 113–116 (CMO 7 tasks, H&M)", tb:["HOOLEY Ch.16","CP Ch.15"],
   tasks:["Sales vs marketing (Barrett)","Advertising-agency roles","CMO's 7 tasks + strategy–culture fit"]},
  {day:28, week:5, sec:"s5", focus:"Strategic marketing audit & implementation", hours:"5h",
   sg:"pp. 116–124 (Table 16, Figs 13–14, Stokes)", tb:["HOOLEY Ch.16","CP Ch.15"],
   tasks:["Audit = results vs expectations (Table 16)","Structural vs behavioural implementation issues","Stokes' 5-step digital framework"]},
  {day:29, week:5, sec:"s5", focus:"Uber case + Section 5 self-test", hours:"4h",
   sg:"pp. 125–131 (closing thoughts, Uber case)", tb:["CP Ch.6 cases"],
   tasks:["Analyse the Uber disruption case","Take Section 5 mini-test (≥80%)","Attempt Exam Q8 & Q9"]},

  {day:30, week:5, sec:"all", focus:"Full revision + exam simulation", hours:"6h",
   sg:"All key-point boxes + glossary", tb:["All"],
   tasks:["Re-run every mini-test (aim ≥85%)","Print flashcards + do a full shuffle","Write 2 exam answers under timed conditions","Skim the glossary the night before"]}
];

if(typeof window!=="undefined"){ window.SM = {SECTIONS,FLASHCARDS,QUIZ,EXAM,CALENDAR}; }

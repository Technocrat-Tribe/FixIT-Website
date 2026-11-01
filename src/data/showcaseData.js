/**
 * Showcase and Seed Data for FixIT Public Demonstration
 * Self-contained static fixtures ensuring instant load without external backend dependencies.
 */

export const ENGINEERING_METRICS = [
  { label: 'Automated Tests Passing', value: '76/76', sub: 'Vitest Unit & Integration Suites', badge: 'Green' },
  { label: 'Escrow Ledger Guarantees', value: 'ACID', sub: 'Prepaid Double-Entry Balance', badge: 'Zero Overdraft' },
  { label: 'Runtime & Database', value: 'Node 22 + SQLite', sub: 'Strict WAL mode with foreign keys', badge: 'Embedded' },
  { label: 'Code Quality', value: 'Strict TS', sub: 'No implicit any, end-to-end schemas', badge: '100% Typed' },
  { label: 'Surfaces & Roles', value: '5 Roles', sub: 'Owner, Admin, Triager, Solver, Viewer', badge: 'Enforced' },
];

export const STEPS = [
  {
    step: 1,
    title: 'Report',
    short: 'Tell us what broke in under a minute.',
    long: 'Pick the product, say what you were trying to do and what happened instead. Include steps or screenshots. No messy back-and-forth.',
  },
  {
    step: 2,
    title: 'We group it',
    short: 'Similar reports from many people become one issue.',
    long: 'Our automated deduplication engine clusters related bug symptoms into a single canonical issue, complete with affected user counts.',
  },
  {
    step: 3,
    title: 'The company sees it',
    short: 'Ranked by impact, with the option to fund a reward.',
    long: 'Company engineers and PMs see issues ranked by priority score ((Impact × Urgency) / Effort). They fund escrow bounties for the ones that matter.',
  },
  {
    step: 4,
    title: 'It gets fixed',
    short: 'Verified fix lands, escrow releases, everyone gets paid.',
    long: 'A solver ships the PR and reproduction check. Once accepted, 75% goes to the solver, 10% to the original reporter, and 15% to FixIT.',
  },
];

export const SPLIT_LEGEND = [
  { pct: 75, role: 'Solver Payout', desc: 'Released immediately upon verified PR acceptance', dot: 'bg-brand', stroke: '#4f46e5' },
  { pct: 10, role: "Reporter Finder's Fee", desc: 'Incentivizes high-fidelity bug reports with repro steps', dot: 'bg-warn', stroke: '#d97706' },
  { pct: 15, role: 'FixIT Platform Fee', desc: 'Escrow guarantee, fraud prevention, and dispute mediation', dot: 'bg-info', stroke: '#0284c7' },
];

export const TRIAGE_BUGS = [
  {
    id: 'bug-stripe-idempotency',
    title: 'Stripe Webhook idempotency race condition under concurrent retries',
    product: 'Acme Cloud Billing',
    severity: 'critical',
    priorityScore: 92,
    scoreFormula: 'Impact (95) × Urgency (90) / Effort (35)',
    bounty: 650,
    claimedBounty: false,
    status: 'Bounty Active',
    originalReporter: '@sarah_dev',
    reporterFee: 65,
    solverFee: 487.5,
    summary: 'When Stripe fires multiple simultaneous webhook retries for checkout.session.completed, two concurrent transactions pass the duplicate check simultaneously, resulting in double credit allocations and conflicting ledger entries.',
    reproSteps: [
      '1. Trigger mock Stripe event: checkout.session.completed for user usr_981a',
      '2. Simulate 500ms network stall to trigger Stripe auto-retry after 100ms',
      '3. Both webhook handlers receive same event_id concurrently',
      '4. Observe duplicate order creation in PostgreSQL billing ledger',
    ],
    environment: 'Node 22 / Express / Stripe API 2024-06-30 / PostgreSQL 16',
    duplicateCount: 3,
    duplicates: [
      {
        id: 'rep-1044',
        title: 'Double charge / credit occurring on rapid retry of subscription checkout',
        reporter: '@jordan_m',
        date: '2 days ago',
        similarity: 94,
        client: 'Stripe Webhook Delivery Node / Frankfurt',
        snippet: 'Customer reported getting credited twice for annual plan. Log traces show 2 invoice.payment_succeeded events processed within 18ms.',
      },
      {
        id: 'rep-1051',
        title: 'Invoice.payment_succeeded handler creates duplicate order records',
        reporter: '@marcus_eng',
        date: '1 day ago',
        similarity: 91,
        client: 'Worker queue cluster B',
        snippet: 'Database uniqueness constraint on external_id was missing a transaction isolation lock during the read-then-write sequence.',
      },
      {
        id: 'rep-1058',
        title: 'Webhook retry storm triggers race condition in billing db',
        reporter: '@anonymous_qa',
        date: '14 hours ago',
        similarity: 88,
        client: 'Automated Chaos Testing Suite',
        snippet: 'High retry concurrency during network partition resulted in multiple balance increments.',
      },
    ],
    suggestedFix: 'Implement Redis/Postgres advisory lock or atomic INSERT ON CONFLICT DO NOTHING with unique event_id constraint before processing ledger entries.',
  },
  {
    id: 'bug-ws-telemetry-leak',
    title: 'Memory leak in WebSocket telemetry heartbeat on disconnect',
    product: 'Acme Cloud Realtime',
    severity: 'high',
    priorityScore: 78,
    scoreFormula: 'Impact (80) × Urgency (75) / Effort (45)',
    bounty: 400,
    claimedBounty: false,
    status: 'Triage In Progress',
    originalReporter: '@alex_k',
    reporterFee: 40,
    solverFee: 300,
    summary: 'When WebSocket clients disconnect unexpectedly without sending a graceful close frame, the telemetry ping setInterval timer remains referenced in the connection map, steadily leaking ~18MB RAM per 10k connections.',
    reproSteps: [
      '1. Open 10,000 WebSocket connections to /ws/telemetry',
      '2. Force-kill client sockets with TCP RST packets (abrupt termination)',
      '3. Run Node.js process inspector memory snapshot',
      '4. Retained memory does not garbage collect after 15 minutes',
    ],
    environment: 'WS 8.18 / Node.js 22.4 LTS / Linux Alpine container',
    duplicateCount: 1,
    duplicates: [
      {
        id: 'rep-2033',
        title: 'Node server heap spikes during client reconnection cycles',
        reporter: '@sre_dan',
        date: '3 days ago',
        similarity: 89,
        client: 'Prometheus Alertmanager',
        snippet: 'Container memory limit (2GB) hit OOMKilled state every 48 hours during peak mobile app reconnection bursts.',
      },
    ],
    suggestedFix: 'Attach cleanup hook to socket on("error") and on("close") events to invoke clearInterval() and remove client reference from WeakMap.',
  },
  {
    id: 'bug-ssr-hydration-mismatch',
    title: 'Next.js 15 SSR hydration mismatch on localized currency selector',
    product: 'Acme Storefront UI',
    severity: 'medium',
    priorityScore: 64,
    scoreFormula: 'Impact (65) × Urgency (50) / Effort (20)',
    bounty: 250,
    claimedBounty: false,
    status: 'Open Bounty',
    originalReporter: '@elena_ui',
    reporterFee: 25,
    solverFee: 187.5,
    summary: 'Server-side rendering renders prices in USD default locale ($), but the client browser detects navigator.languages (e.g., EUR/GBP) and mismatches during React 19 hydration, throwing console error #418 and visual flickering.',
    reproSteps: [
      '1. Open Acme Storefront in browser configured with French (fr-FR) or German (de-DE) locale',
      '2. Hard reload on /pricing with cache disabled',
      '3. Observe React Hydration Error #418 in browser developer console',
      '4. Currency symbol abruptly jumps from € to $ then back to €',
    ],
    environment: 'Next.js 15.0.3 / React 19 / Intl.NumberFormat / Vercel Edge',
    duplicateCount: 5,
    duplicates: [
      {
        id: 'rep-3012',
        title: 'Text content did not match server HTML on /pricing page',
        reporter: '@k_webster',
        date: '5 days ago',
        similarity: 96,
        client: 'Chrome 130 / macOS 15.1',
        snippet: 'Console throws Hydration failed because server rendered $99 and client rendered 99 €.',
      },
      {
        id: 'rep-3019',
        title: 'Locale formatting switches from EUR to USD on initial client render',
        reporter: '@pierre_d',
        date: '4 days ago',
        similarity: 93,
        client: 'Safari 18.1 / iOS 18',
        snippet: 'On mobile Safari, user sees USD prices for 0.5s before localized currency triggers layout shift.',
      },
      {
        id: 'rep-3025',
        title: 'Currency symbol flashes during SSR hydration on mobile',
        reporter: '@anita_dev',
        date: '3 days ago',
        similarity: 90,
        client: 'Firefox 132 / Android 15',
        snippet: 'Cumulative Layout Shift (CLS) penalty in Google Lighthouse caused by currency symbol swapping.',
      },
      {
        id: 'rep-3031',
        title: 'React hydration error #418 on international store header',
        reporter: '@tim_frontend',
        date: '2 days ago',
        similarity: 88,
        client: 'Edge 130 / Windows 11',
        snippet: 'Header currency dropdown component relies on window.navigator during first render pass.',
      },
      {
        id: 'rep-3040',
        title: 'Pricing dropdown hydration mismatch with geolocated currency',
        reporter: '@lucas_br',
        date: '1 day ago',
        similarity: 86,
        client: 'Chrome 130 / Linux Ubuntu',
        snippet: 'Geo-IP header passes BRL but client hydration evaluates to default fallback.',
      },
    ],
    suggestedFix: 'Extract locale to incoming Accept-Language server cookie or defer client locale formatting behind a mounted useEffect flag to avoid hydration mismatch.',
  },
];

export const TIERS = [
  {
    name: 'Free',
    price: '$0',
    annualPrice: '$0',
    per: '/month',
    tagline: 'For open-source projects & small startups getting started',
    products: '1 Product',
    reports: '100 reports / mo',
    featured: false,
    cta: 'Start Free',
    features: [
      'Public company directory page & changelog',
      'Basic automated report grouping (clustering)',
      'Community bug reporting portal',
      'Community discussion thread',
      'Standard email notifications',
    ],
  },
  {
    name: 'Team',
    price: '$99',
    annualPrice: '$79',
    per: '/month',
    tagline: 'For fast-moving SaaS engineering & product teams',
    products: '3 Products',
    reports: '2,000 reports / mo',
    featured: true,
    cta: 'Start 14-Day Pilot',
    features: [
      'Embeddable in-app feedback & bug reporting widget',
      '1-Click Linear & GitHub bi-directional export',
      'Prepaid bounty escrow wallet & ledger',
      'Daily triage summary email digests',
      '2 Admin & Triager workspace seats',
      'Automated reproduction template enforcement',
    ],
  },
  {
    name: 'Growth',
    price: '$399',
    annualPrice: '$319',
    per: '/month',
    tagline: 'For scaling companies managing complex multi-surface software',
    products: '10 Products',
    reports: '20,000 reports / mo',
    featured: false,
    cta: 'Request Growth Pilot',
    features: [
      'Custom priority score tuning ((I × U) / E formula editor)',
      'Full REST API & Webhooks access',
      'Unlimited workspace member seats',
      'Advanced solver verification sandboxes',
      'Priority solver marketplace matching',
      'Custom company verification & branding',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    annualPrice: 'Custom',
    per: '',
    tagline: 'For large organizations with strict security & SLA compliance',
    products: 'Custom Products',
    reports: 'Unlimited volume',
    featured: false,
    cta: 'Contact Sales',
    features: [
      'SAML SSO (Okta, Azure AD, Google Workspace)',
      'Dedicated VPC or European/US Data Residency',
      '99.9% Uptime Service Level Agreement (SLA)',
      'Custom Jira/ServiceNow two-way synchronizer',
      'Dedicated Solutions Architect & Technical Account Manager',
      'Vendor security questionnaire & SOC2 compliance report',
    ],
  },
];

export const COMPARISON_ROWS = [
  { label: 'Products Supported', values: ['1', '3', '10', 'Unlimited'] },
  { label: 'Monthly Report Volume', values: ['100', '2,000', '20,000', 'Custom'] },
  { label: 'Automated Deduplication', values: ['Basic', 'Advanced', 'High-Precision', 'Custom ML Tuning'] },
  { label: '1-Click Linear & GitHub Export', values: [false, true, true, true] },
  { label: 'Prepaid ACID Escrow Ledger', values: [false, true, true, true] },
  { label: 'In-App Web & Mobile Widget', values: [false, true, true, true] },
  { label: 'Workspace Seats', values: ['1', '2', 'Unlimited', 'Unlimited'] },
  { label: 'Priority Scoring Tuning', values: [false, false, true, true] },
  { label: 'REST API & Webhook Triggers', values: [false, false, true, true] },
  { label: 'SAML SSO & Audit Logs', values: [false, false, false, true] },
  { label: 'Dedicated Support & SLA', values: [false, false, false, true] },
];

export const ARCHITECTURE_PILLARS = [
  {
    id: 'acid-ledger',
    title: 'ACID Prepaid Escrow Ledger',
    icon: 'ShieldCheck',
    color: 'brand',
    tagline: 'Prepaid trust guarantees with zero overdraft risk',
    description: 'Bounties are backed by real company deposits locked in double-entry escrow accounts. Neither party takes counterparty risk: the company knows money only releases on accepted verification; solvers know funds are already held in trust.',
    codeSnippet: `// ACID Ledger Deposit Transaction
BEGIN IMMEDIATE TRANSACTION;
UPDATE company_wallets SET balance = balance - 65000 WHERE id = 'acme' AND balance >= 65000;
INSERT INTO escrow_locks (cluster_id, amount_cents, status) VALUES ('stripe-race', 65000, 'LOCKED');
COMMIT;`,
  },
  {
    id: 'dedup-engine',
    title: 'Automated Deduplication Engine',
    icon: 'Layers',
    color: 'info',
    tagline: 'Semantic clustering converts 50 duplicates into 1 ticket',
    description: 'Incoming unstructured reports are processed through vector similarity and keyword signature extraction. Reports sharing error stacks, reproduction steps, or DOM paths automatically cluster into a single actionable item with aggregated frequency counts.',
    codeSnippet: `// Vector & Signature Similarity Clustering
const similarity = computeCosineSimilarity(report.embedding, cluster.centroid);
if (similarity >= 0.85) {
  await mergeIntoCluster(cluster.id, report.id, similarity);
  await recalculatePriorityScore(cluster.id);
}`,
  },
  {
    id: 'verification-sandbox',
    title: 'Automated CI Verification',
    icon: 'Cpu',
    color: 'ok',
    tagline: 'Reproductions verified before human engineering review',
    description: 'Solvers submit reproduction scripts, unit test patches, or pull requests. Our containerized runner executes automated checks against the seeded failure condition, giving maintainers an objective validation signal before releasing payout.',
    codeSnippet: `// Solver Verification Harness
test('reproduces and validates bugfix', async () => {
  const result = await runConcurrentWebhooks({ concurrency: 5 });
  expect(result.duplicateOrders).toBe(0);
  expect(result.payoutStatus).toBe('SUCCESS');
});`,
  },
  {
    id: 'security-boundary',
    title: 'Server-Side Security Boundary',
    icon: 'Lock',
    color: 'warn',
    tagline: '5 Surfaces with rigorous RBAC verification',
    description: 'Client-side permission checks are UX conveniences only. Every state change, bounty claim, status transition, and payout release is checked against strict workspace roles (Owner, Admin, Triager, Viewer, Solver) in SQLite-enforced constraints.',
    codeSnippet: `// Strict Server RBAC Check
export function assertCanFundBounty(member: WorkspaceMember) {
  if (!['owner', 'admin'].includes(member.role)) {
    throw new HttpError(403, 'Only owners and admins can lock escrow bounties');
  }
}`,
  },
];

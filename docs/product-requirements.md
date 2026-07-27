# Career Compass Jobs Data Report Newsletter PRD

Status: Draft for product, design, and engineering handoff  
Date: July 9, 2026  
Working product name: Career Compass Jobs Data Report  
Recommended editorial name: Opportunity Radar

## 1. Executive Summary

Career Compass should launch a recurring, human-edited jobs data newsletter for U.S.-based 0-5 year professionals and career switchers. The product will translate confusing labor-market data into practical guidance about where opportunity is growing, which roles and sectors look resilient, which markets are cooling, and what readers can do next.

The v1 should use only free data sources and a human editorial workflow. Engineering should build the foundation for future automation: data ingestion, saved snapshots, source attribution, chart generation, issue assembly, subscriber preferences, distribution export, and engagement analytics.

The newsletter should not try to be a generic economic update. Its differentiator is the Career Compass lens: "what this means for my next career move."

## 2. Problem

Early-career professionals and career switchers are making high-stakes decisions with fragmented information. Authoritative sources like BLS, FRED, Census, and O*NET are reliable but dense. Social sources like Reddit, LinkedIn, TikTok, and peer networks are accessible but anecdotal and often anxiety-inducing. Job boards show available roles but rarely explain broader demand, pay, stability, or skill-transfer patterns.

Career Compass can fill the gap by combining credible labor-market data with accessible interpretation, career coaching judgment, and practical job-search recommendations.

## 3. Target Audience

Primary audience:

- U.S.-based professionals with 0-5 years of work experience.
- Career switchers who want better-paying, more resilient, or less stressful work.
- Readers who care about income growth, career change, job security, skill-building, and geographic opportunity.

Secondary audience:

- College seniors and recent graduates.
- Workforce development partners.
- Career coaches and mentors.
- Employers who want to understand early-career talent behavior.

Key reader needs:

- "Where are good jobs actually growing?"
- "Which roles pay well and are realistic for someone early in their career?"
- "Which industries are hiring despite broader economic noise?"
- "What skills are worth learning now?"
- "Should I change functions, industries, or locations?"
- "How do I interpret layoffs without panicking?"

## 4. Product Positioning

One-line promise:

Career Compass turns labor-market data into practical next moves for early-career professionals and career switchers.

Editorial promise:

- Clear enough to read over coffee.
- Useful enough to change a job-search strategy.
- Honest enough to say when the data is incomplete or lagging.
- Entertaining enough that readers want to come back.

Differentiators:

- Focus on early-career and career-switcher decisions, not general macro commentary.
- Emphasis on high-value lanes: good pay, increasing demand, accessible pathways, and resilient skill clusters.
- Source transparency and confidence labels.
- Action steps in every issue.
- Human-edited voice in v1, with automation added only after the editorial pattern is proven.

## 5. Goals

Product goals:

- Launch a weekly newsletter using free public data sources.
- Build a repeatable internal workflow for collecting, interpreting, drafting, editing, and publishing each issue.
- Help readers identify promising roles, industries, skills, and geographies.
- Capture subscriber preferences to improve segmentation over time.
- Create a data and editorial foundation that can later support automation and personalization.

Business goals:

- Grow Career Compass's email audience.
- Increase trust in Career Compass as a practical career-navigation brand.
- Create an owned distribution channel that can drive users back into Career Compass products or services.
- Learn which career concerns and opportunity lanes resonate most with early-career readers.

Reader goals:

- Understand what changed in the job market.
- Know where opportunity is expanding or cooling.
- Leave each issue with at least one practical action.
- Feel informed without feeling overwhelmed.

## 6. Non-Goals For V1

- Fully automated newsletter generation.
- Paid data providers.
- Individualized job matching.
- Real-time job postings intelligence at national scale.
- Paywalled content scraping.
- Personalized salary negotiation advice.
- Financial, legal, or immigration advice.
- Replacing a full job board or applicant tracking workflow.
- Predicting recessions, market crashes, or future wages with certainty.

## 7. Recommended V1 Scope

The v1 should include three user-facing surfaces and one internal surface:

- Newsletter signup page.
- Subscriber preference capture.
- Published email newsletter and web/Medium-compatible article version.
- Internal Jobs Data Report workspace for editors.

The internal workspace should let the Career Compass team:

- Refresh free data-source snapshots.
- Review charts and summary metrics.
- Save candidate insights.
- Assemble a newsletter issue from a structured template.
- Track sources for every data claim.
- Export the final issue to the email service provider and Medium.
- Review post-send engagement.

## 8. Content Strategy

Recommended cadence:

- Weekly newsletter.
- Monthly deeper-dive issue.
- Occasional special edition when a major jobs report, layoff wave, or industry signal matters to the audience.

Recommended weekly structure:

1. Opening hook: A sharp, human-readable framing of the week.
2. The Signal: The top 3 labor-market shifts worth knowing.
3. Opportunity Radar: 2-4 high-value lanes showing demand, pay, skills, or geography signals.
4. Watch Your Step: One cooling or risky segment, written without fearmongering.
5. Skill To Watch: One skill cluster tied to real roles and pathways.
6. Where To Look: Regions, employers, sectors, or job-search keywords.
7. What To Do This Week: 3 concrete actions.
8. Source Notes: Links and plain-English caveats.

Recommended tone:

- Smart, direct, slightly playful.
- Avoid academic phrasing unless explaining a source.
- Avoid "everything is doomed" framing.
- Avoid hype around AI, startups, or any single industry.
- Use plain-English labels like "hotter," "cooling," "steady," and "watch list," backed by data and caveats.

Example content lanes:

- Healthcare and allied health roles.
- Data, analytics, cybersecurity, and AI-adjacent operations roles.
- Energy, climate, infrastructure, and utilities.
- Advanced manufacturing, semiconductor, robotics, and industrial technology.
- Financial services operations, risk, compliance, and insurance.
- Public sector, federal contractor, and mission-critical civic roles.
- Skilled technical pathways with strong wage trajectories.
- Business operations roles that combine domain knowledge, analytics, and communication.

## 9. Data Strategy

V1 data strategy:

- Use free, authoritative sources first.
- Store source snapshots by publication date.
- Label lagging indicators clearly.
- Use third-party editorial sources only as context unless terms permit structured reuse.
- Do not make claims that exceed the precision of the data.

Core principle:

The newsletter should distinguish between "hard data," "directional signal," and "editorial interpretation."

### V1 Free Data Sources

| Source | Cost | V1 Use | Access Notes | Caveats |
| --- | --- | --- | --- | --- |
| BLS Public Data API | $0 | Employment, unemployment, openings, quits, wages, sector trends, labor-market releases | Registered users may request up to 500 queries daily, 50 series per query, and 20 years per query per [BLS API FAQ](https://www.bls.gov/developers/api_faqs.htm) | Requires known series IDs; some datasets are lagging or need manual mapping |
| BLS Occupational Outlook Handbook and Employment Projections | $0 | Occupation outlook, median pay, projected growth, education requirements, fastest-growing and highest-paying occupation lists | OOH supports browsing by highest paying, fastest growing, and projected new jobs per [BLS OOH](https://www.bls.gov/ooh/) | Updated periodically, not real-time |
| FRED API | $0 | Macro context: unemployment, labor force participation, job openings, quits, wage growth, inflation context | API key required per [FRED API docs](https://fred.stlouisfed.org/docs/api/api_key.html) | FRED aggregates sources; still need source labels |
| Census QWI API | $0 | Hires, employment, separations, earnings by geography, industry, age, education | QWI includes 32 economic indicators and requires a Census API key per [Census QWI docs](https://www.census.gov/data/developers/data-sets/qwi.html) | Quarterly and lagged; national API data may be limited |
| O*NET Database and Web Services | $0 with attribution | Skills, tasks, job zones, knowledge areas, tools, technologies, related occupations | Web services are free with attribution; may throttle above 5 requests/sec or 50,000/day per [O*NET terms](https://services.onetcenter.org/terms). Downloadable database is CC BY 4.0 per [O*NET database](https://www.onetcenter.org/database.html) | Occupational taxonomy does not equal live job demand |
| USAJOBS API | $0 | Public-sector opportunity examples, federal role clusters, salaries, hiring paths, location patterns | Developer documentation describes dynamic search, job exports, RSS, and REST services per [USAJOBS Developer](https://developer.usajobs.gov/) | API terms restrict data usage; legal review recommended before commercial reuse |
| State WARN notices | $0 | Layoff signals by employer, region, and industry | State-by-state public notices; U.S. DOL explains WARN requirements at [DOL WARN](https://www.dol.gov/agencies/eta/layoffs/warn) | Fragmented, nonstandard, variable freshness |
| Layoffs.fyi | $0 with attribution | Directional tech/startup layoff context | Public layoff tracker at [Layoffs.fyi](https://layoffs.fyi/) | Tech-biased, third-party, not exhaustive |
| Career Compass internal data | $0 | Aggregate reader concerns and editorial themes, such as Grow Income, Manage Stress, Change Careers | Use anonymized aggregate counts only | Not a labor-market dataset; should not be used as market evidence |

### Paid Data To Reconsider After V1

Do not purchase paid data for v1. Reassess after 8-12 published issues and subscriber feedback.

Potential later sources:

- Job postings intelligence: Lightcast, Adzuna Intelligence, Revelio Labs, LinkUp, Indeed Hiring Lab partnerships, or other providers.
- Layoff intelligence: WARNTracker or similar normalized WARN datasets.
- Job search APIs: SerpApi Google Jobs or Adzuna API for sampled role/location monitoring.
- Salary intelligence: salary APIs or compensation survey providers.

Decision rule for paid data:

Purchase only if it improves at least one of the following:

- Freshness of opportunity signals.
- Role-level specificity.
- Geographic specificity.
- Subscriber engagement.
- Conversion into Career Compass services.

## 10. Opportunity Scoring Framework

V1 should use a semi-manual scoring framework. The system calculates inputs where available, and editors approve the final label.

Recommended dimensions:

| Dimension | Weight | Example Inputs |
| --- | ---: | --- |
| Demand | 30% | BLS employment growth, projected growth, QWI hires, job openings series, sector expansion |
| Pay Potential | 25% | Median wage, wage growth, early/mid-career wage if available, regional earnings |
| Accessibility | 20% | O*NET Job Zone, education requirements, transferable skills, credential pathways |
| Resilience | 15% | Layoff signals, separations, cyclicality, public-sector stability, sector concentration |
| Early-Career Fit | 10% | Entry-level pathways, apprenticeships, associate roles, internships, junior titles, switcher-friendly skills |

Recommended labels:

- Strong Signal: Multiple credible sources point in the same direction.
- Promising But Early: Data is positive, but incomplete or lagging.
- Stable Path: Not flashy, but reliable pay or demand.
- Watch List: Opportunity exists, but risks or volatility are rising.
- Cooling: Demand, hiring, or stability indicators are weakening.

Every label must include a confidence level:

- High confidence: At least two authoritative sources support the claim.
- Medium confidence: One authoritative source plus supporting context.
- Low confidence: Directional or anecdotal; use sparingly and clearly label.

## 11. Subscriber Experience

### Signup Page

Required fields:

- Email address.
- Consent checkbox.

Recommended optional fields:

- Career stage: 0-2 years, 3-5 years, career switcher, student/recent grad.
- Primary goal: Grow Income, Change Careers, Manage Stress, Find Stability, Build Skills, Move Locations.
- Target lanes: healthcare, tech/data, climate/infrastructure, public sector, finance/compliance, manufacturing, business operations, not sure.
- Region: national only, remote-first, current metro/state, willing to relocate.
- Preferred cadence: weekly, monthly digest only.

Signup confirmation:

- Thank the user.
- Set expectation for cadence.
- Offer preference editing.
- Ask one lightweight onboarding question: "What kind of opportunity would make this newsletter useful to you?"

### Newsletter Email

Requirements:

- Mobile-first layout.
- Readable without images.
- Plain-language headings.
- Source links included near relevant claims or in a source section.
- Unsubscribe and preference management links.
- UTM parameters on links.
- Accessible contrast and alt text for charts/images.

### Web/Medium Version

Requirements:

- Clean, shareable article format.
- Remove email-only calls to action.
- Include signup callout.
- Include source notes.
- Preserve chart captions and data-date labels.

## 12. Internal Editor Experience

The internal workspace should prioritize speed and trust.

Required capabilities:

- View the latest data refresh status by source.
- See key weekly charts and metrics.
- Select or save candidate insights.
- Add editorial interpretation.
- Attach source links to claims.
- Assign confidence labels.
- Build an issue from a structured template.
- Preview email and web versions.
- Mark issue states: Draft, Data Review, Editorial Review, Approved, Published, Archived.
- Record post-send metrics.

Nice-to-have v1 capabilities:

- Simple chart export.
- "Reuse this section" library.
- Editorial checklist before publication.
- Flag stale data automatically.
- Compare current snapshot with prior issue snapshot.

## 13. Functional Requirements

### FR1: Newsletter Signup

The system must allow users to sign up for the Jobs Data Report Newsletter using an email address.

Acceptance criteria:

- User can submit a valid email.
- Invalid emails are rejected with clear error messaging.
- Consent language is displayed.
- Confirmation state is shown after signup.
- Subscriber record is stored with timestamp and acquisition source.

### FR2: Preference Capture

The system should capture optional subscriber preferences.

Acceptance criteria:

- User can submit career stage, goals, target lanes, and region.
- User can skip optional fields.
- Preferences are editable after signup.
- Preference data is associated with the subscriber record.

### FR3: Data Source Registry

The system must maintain a registry of data sources.

Acceptance criteria:

- Each source includes name, URL, owner, update cadence, license/terms notes, last refresh date, and internal owner.
- Each metric or editorial claim can be traced back to at least one source.
- Sources can be marked active, paused, or deprecated.

### FR4: Free Data Ingestion

The system should ingest or manually upload data from approved free v1 sources.

Required connectors or importers:

- BLS API.
- FRED API.
- Census QWI API.
- O*NET database or API.
- USAJOBS API, subject to terms review.
- Manual WARN notice tracker.
- Manual third-party context tracker.

Acceptance criteria:

- Data refresh logs success, failure, and timestamp.
- Raw source snapshots are saved.
- Normalized metrics are stored separately from raw data.
- Failed refreshes do not corrupt previous snapshots.

### FR5: Data Quality Checks

The system must perform basic validation.

Acceptance criteria:

- Detect missing values.
- Detect stale sources.
- Detect unusually large changes compared with prior snapshots.
- Show warning before editors use stale or low-confidence metrics.
- Preserve source publication dates.

### FR6: Opportunity Lane Management

The system must support defined opportunity lanes.

Acceptance criteria:

- Admin can create and edit lanes.
- Each lane can include industries, occupations, skills, geographies, and source metrics.
- Each lane can receive status and confidence labels.
- Lanes can be reused across issues.

### FR7: Issue Builder

The system must allow editors to assemble a newsletter issue.

Acceptance criteria:

- Editor can create a new issue from template.
- Editor can add sections, charts, source notes, and CTAs.
- Editor can preview email and web versions.
- Editor can export HTML and Markdown.
- Issue has status workflow.

### FR8: Source Attribution

The system must require source attribution for data claims.

Acceptance criteria:

- Any section tagged as data-backed must include at least one source.
- Preview flags unsupported claims.
- Final issue includes source links or source notes.

### FR9: Distribution Export

The system should integrate with or export to the selected email service provider.

Acceptance criteria:

- Export includes email HTML.
- Export includes plain-text fallback.
- Export includes subject line and preview text.
- Links include UTM parameters.
- Medium/web version can be exported as Markdown.

### FR10: Analytics Capture

The system must track performance after publication.

Acceptance criteria:

- Store send date, audience size, opens where available, clicks, click-through rate, unsubscribes, replies, shares, and top links.
- Track subscriber growth by source.
- Track which sections and topics receive the most clicks.
- Allow manual import if the email service provider is not directly integrated.

### FR11: Feedback Loop

The system should capture reader feedback.

Acceptance criteria:

- Each issue includes a one-click or short feedback prompt.
- Feedback can be tagged by issue, topic, and subscriber segment where available.
- Editorial team can review feedback before planning the next issue.

### FR12: Compliance And Consent

The system must support email compliance requirements.

Acceptance criteria:

- Unsubscribe link included in every email.
- Physical mailing address or required sender identity supported through the email service provider.
- Consent timestamp stored.
- Preference updates and unsubscribe requests are honored.

## 14. Non-Functional Requirements

Reliability:

- Data refreshes should be repeatable and logged.
- Last successful snapshot should remain available if a source fails.

Security:

- API keys stored in secrets, not code.
- Admin workspace requires authentication.
- Subscriber data access restricted by role.

Privacy:

- Internal Career Compass data must be aggregated and anonymized before editorial use.
- Do not expose personally identifiable customer responses in newsletter content.

Accessibility:

- Email and web versions should meet basic accessibility expectations: semantic headings, readable contrast, alt text for charts, descriptive links.

Maintainability:

- Connectors should be modular so paid sources can be added later.
- Metrics and opportunity lanes should be configurable without code changes where practical.

Data trust:

- Every chart should include source, date range, and last refreshed date.
- All lagging data should be labeled.

## 15. Suggested Data Model

Subscriber:

- id
- email
- status
- consent_timestamp
- acquisition_source
- career_stage
- primary_goal
- target_lanes
- region_preference
- created_at
- updated_at

DataSource:

- id
- name
- url
- source_owner
- access_method
- cost
- license_notes
- update_cadence
- last_refresh_at
- status

DataSnapshot:

- id
- data_source_id
- snapshot_date
- source_publication_date
- raw_payload_location
- refresh_status
- error_message

MetricSeries:

- id
- data_source_id
- metric_name
- series_identifier
- geography
- industry
- occupation
- units
- update_cadence

MetricObservation:

- id
- metric_series_id
- period_start
- period_end
- value
- status_flag
- source_snapshot_id

OpportunityLane:

- id
- name
- description
- industries
- occupations
- skills
- geographies
- default_status_label
- created_at
- updated_at

LaneSignal:

- id
- opportunity_lane_id
- issue_id
- demand_score
- pay_score
- accessibility_score
- resilience_score
- early_career_fit_score
- status_label
- confidence_label
- editor_notes

NewsletterIssue:

- id
- title
- subject_line
- preview_text
- issue_date
- status
- owner
- approved_by
- published_at

IssueSection:

- id
- issue_id
- section_type
- headline
- body
- cta_text
- cta_url
- sort_order

SourceCitation:

- id
- issue_section_id
- data_source_id
- citation_url
- source_publication_date
- notes

IssueAnalytics:

- id
- issue_id
- sent_count
- open_count
- click_count
- unsubscribe_count
- reply_count
- top_clicked_links
- imported_at

FeedbackResponse:

- id
- issue_id
- subscriber_id_optional
- rating
- response_text
- tags
- created_at

## 16. Recommended Technical Architecture

V1 architecture:

- Scheduled data jobs pull from free APIs or load manual files.
- Raw snapshots are stored for traceability.
- Normalized metrics are stored for dashboards and charts.
- Admin workspace displays source status, metrics, opportunity lanes, and draft issue sections.
- Editor builds issue and exports to the email service provider.
- Analytics are imported or synchronized after send.

Suggested system flow:

1. Refresh approved data sources.
2. Normalize key metrics.
3. Update opportunity lane dashboard.
4. Editor selects signals and writes interpretation.
5. Issue builder produces email and web drafts.
6. Human review verifies claims and tone.
7. Issue is exported and sent.
8. Engagement and feedback feed the next issue plan.

Recommended integrations:

- Email service provider: use an existing ESP such as Mailchimp, beehiiv, Customer.io, HubSpot, SendGrid, or whichever Career Compass already uses.
- Website/CMS: use Career Compass site for signup and archive; use Medium as a secondary distribution channel.
- Analytics: ESP analytics plus web analytics and UTM tracking.

## 17. Editorial Workflow

Recommended weekly workflow:

Monday:

- Refresh data snapshots.
- Review BLS/FRED/Census/O*NET updates.
- Review WARN notices and major layoff signals.
- Review Career Compass aggregate reader goals.

Tuesday:

- Pick 3-5 candidate signals.
- Choose one primary opportunity lane.
- Choose one risk/cooling signal.
- Draft charts and source notes.

Wednesday:

- Draft newsletter.
- Add reader actions.
- Add source links and caveats.
- Prepare subject line options.

Thursday:

- Fact check.
- Editorial review.
- Accessibility and mobile preview.
- Approve issue.

Friday:

- Send newsletter.
- Publish web/Medium version.
- Record analytics and feedback.

Editorial QA checklist:

- Every data claim has a source.
- Dates and lagging indicators are labeled.
- No unsupported promises about wages, hiring odds, or job security.
- Layoff coverage is useful, not sensational.
- Reader actions are specific and realistic.
- The issue includes at least one "where to look" or "what to do" section.
- Subject line is clear and not clickbait.

## 18. MVP Release Plan

### Phase 0: Editorial And Data Setup

Duration: 1-2 weeks

Deliverables:

- Final newsletter name.
- Final v1 opportunity lane taxonomy.
- Approved source list.
- Source attribution policy.
- Editorial template.
- Email service provider decision.
- Initial landing page copy.

### Phase 1: Build MVP

Duration: 4-6 weeks

Deliverables:

- Signup page and subscriber preference capture.
- Admin source registry.
- Initial data connectors/importers for BLS, FRED, Census QWI, and O*NET.
- Manual import workflow for WARN/context sources.
- Opportunity lane dashboard.
- Issue builder with email and Markdown export.
- Source citation enforcement.
- Analytics import or manual entry.

### Phase 2: Pilot

Duration: 4 weeks

Deliverables:

- Publish 4 weekly issues.
- Review engagement by section and topic.
- Conduct reader feedback survey.
- Identify which lanes drive highest click and reply rates.
- Improve scoring weights and editorial template.

### Phase 3: Automation Readiness

Duration: 4-8 weeks after pilot

Deliverables:

- Automated draft briefs by lane.
- Automated chart recommendations.
- Automated stale-data warnings.
- Segment-specific issue variants.
- Personalization experiments based on goals and lanes.

## 19. Success Metrics

Audience metrics:

- Subscriber growth.
- Signup conversion rate.
- Source of subscriber acquisition.
- Referral/share rate.

Engagement metrics:

- Click-through rate.
- Replies and qualitative feedback.
- Section-level clicks.
- Preference completion rate.
- Unsubscribe rate.
- Return visits to Career Compass.

Trust and quality metrics:

- Percentage of data claims with citations.
- Number of corrections needed per issue.
- Data refresh success rate.
- Reader usefulness rating.

Business metrics:

- Conversion from newsletter reader to Career Compass account or service.
- Repeat engagement with Career Compass content.
- Topic-level demand signals for future products.

Recommended first-90-day targets:

- Publish at least 8 issues.
- Maintain a consistent weekly cadence.
- Achieve preference completion above 30% of new signups.
- Keep unsubscribe rate below 0.5% per send.
- Establish baseline click-through and reply rates.
- Identify top 3 opportunity lanes by reader engagement.

## 20. Risks And Mitigations

Risk: Free data is lagging and not job-posting-specific.  
Mitigation: Label dates clearly, use "signal" language, and avoid pretending v1 has real-time postings intelligence.

Risk: Newsletter becomes too broad.  
Mitigation: Limit each issue to 3 major signals and 1-2 practical actions per signal.

Risk: Readers interpret data as guarantees.  
Mitigation: Add caveats, confidence labels, and practical framing.

Risk: Data ingestion becomes overbuilt before product-market fit.  
Mitigation: Build modular connectors and allow manual imports for messy sources.

Risk: Editorial workflow is too slow.  
Mitigation: Use reusable issue templates, source registry, and saved lane profiles.

Risk: Source terms create reuse constraints.  
Mitigation: Review terms for each source and store license notes in the source registry.

Risk: Internal Career Compass customer responses include sensitive information.  
Mitigation: Use only aggregate, anonymized themes and never quote without explicit permission.

## 21. Open Decisions

Recommended defaults are included so the team can proceed quickly.

| Decision | Recommendation |
| --- | --- |
| Newsletter name | Opportunity Radar by Career Compass |
| Cadence | Weekly, with monthly deeper-dive issue |
| Send day | Friday morning, because the issue can recap weekly signals and prompt weekend planning |
| V1 audience | 0-5 year professionals and career switchers |
| V1 data budget | $0 |
| Editorial model | Human-edited, data-assisted |
| Distribution | Email primary, Career Compass web archive and Medium secondary |
| First opportunity lanes | Healthcare, data/AI operations, climate/infrastructure, advanced manufacturing, finance/compliance, public sector, skilled technical pathways, business operations |
| First personalization layer | Capture preferences only; no personalized issue variants until after pilot |
| Paid data trigger | Revisit after 8-12 issues and evidence that free-data limitations are hurting usefulness or growth |

## 22. Development Acceptance Criteria

The MVP is ready for pilot when:

- A reader can sign up and manage preferences.
- Subscriber records include consent and source attribution.
- Admin can refresh or import v1 approved data sources.
- Admin can see refresh status and source freshness.
- Admin can create and manage opportunity lanes.
- Editor can create a newsletter issue from a template.
- Editor can attach sources to data-backed sections.
- Unsupported data claims are flagged before approval.
- Editor can preview and export email HTML, plain text, and Markdown.
- Published issue analytics can be imported or stored.
- Unsubscribe and compliance requirements are supported through the ESP.
- At least one full test issue can be created, reviewed, exported, and archived.

## 23. Research Notes

### Where Early-Career Professionals Currently Go

Likely current sources include:

- Career platforms and employer networks such as Handshake.
- Job boards such as LinkedIn, Indeed, Glassdoor, ZipRecruiter, USAJOBS, and niche boards.
- Labor-market research from Indeed Hiring Lab, LinkedIn Economic Graph, Glassdoor Economic Research, NACE, and the New York Fed.
- Government sources such as BLS, Census, FRED, O*NET, and state workforce agencies.
- Layoff trackers such as Layoffs.fyi and state WARN notices.
- Informal sources such as Reddit, Blind, Discord communities, TikTok, LinkedIn creators, school alumni groups, and peer networks.

Product implication:

Career Compass should win by being more useful than government data, more trustworthy than social chatter, and more career-specific than generic economic reporting.

### Why Free Sources Are Enough For V1

Free sources are sufficient to validate:

- Whether readers want labor-market interpretation from Career Compass.
- Which opportunity lanes attract attention.
- Which content structure drives engagement.
- Whether weekly cadence is sustainable.
- Whether the internal workflow needs more automation.

Free sources are not sufficient for:

- Real-time job-postings intelligence.
- Employer-level hiring prediction.
- Skill demand from live postings at scale.
- Precise entry-level role availability by metro.
- Competitive intelligence against premium labor-market platforms.

This is acceptable for v1 because the first product risk is editorial-market fit, not data completeness.


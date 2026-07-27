"use client";
import { useMemo, useState } from "react";

type Status = "Draft" | "Data Review" | "Editorial Review" | "Approved" | "Archived";
type View = "draft" | "board" | "sources";
type DraftState = "ready" | "loading" | "error" | "empty";
type Section = { type:string; headline:string; body:string; source:string; sourceUrl:string; confidence:"High"|"Medium"|"Low"; caveat:string };

const sources = [
  {name:"BLS Employment Situation",state:"Fresh",date:"Jul 3, 2026",cadence:"Monthly",eligible:true},
  {name:"BLS Occupational Outlook",state:"Fresh",date:"Jun 28, 2026",cadence:"Periodic",eligible:true},
  {name:"FRED labor series",state:"Key needed",date:"—",cadence:"Monthly",eligible:false},
  {name:"Census QWI",state:"Lagging",date:"Q4 2025",cadence:"Quarterly",eligible:true},
  {name:"O*NET 30.1",state:"Fresh",date:"Jun 2026",cadence:"Periodic",eligible:true},
  {name:"State WARN tracker",state:"Manual",date:"Jul 24, 2026",cadence:"Weekly",eligible:true},
];

const generatedSections: Section[] = [
  {type:"THE SIGNAL",headline:"Three quieter career lanes worth watching",body:"The loudest job-market stories are not always the most useful. Current public data points to durable opportunity in healthcare operations, infrastructure support, and regulated business functions—lanes where transferable skills can matter as much as a perfectly matched degree.",source:"BLS Employment Situation · Jul 2026",sourceUrl:"https://www.bls.gov/news.release/empsit.toc.htm",confidence:"High",caveat:"National employment data is lagging and does not guarantee local openings."},
  {type:"OPPORTUNITY RADAR",headline:"Healthcare operations is broader than clinical care",body:"Care coordination, health information, scheduling, and revenue-cycle work sit close to persistent healthcare demand. For switchers, the practical angle is to translate customer service, administration, process improvement, or analytics experience into the language used by health-services employers.",source:"BLS Occupational Outlook Handbook · 2024–34 projections",sourceUrl:"https://www.bls.gov/ooh/",confidence:"High",caveat:"Occupational projections are long-range estimates, not live hiring counts."},
  {type:"PROMISING BUT EARLY",headline:"Infrastructure projects need business operators, too",body:"Energy and infrastructure investment creates work beyond engineering and construction. Project controls, procurement, permitting, field-service coordination, and vendor operations reward people who can manage detail across teams. Treat this as a lane to investigate, not a promise of rapid hiring.",source:"Census QWI · Q4 2025; editorial interpretation",sourceUrl:"https://www.census.gov/data/developers/data-sets/qwi.html",confidence:"Medium",caveat:"QWI is quarterly and lagging; editors should verify current regional conditions."},
  {type:"STABLE PATH",headline:"Risk and compliance rewards clear judgment",body:"Regulated employers continue to need people who can interpret rules, document decisions, and improve processes. Search beyond “compliance analyst” for operations risk, quality assurance, controls testing, fraud operations, and regulatory change roles.",source:"O*NET 30.1 · Jun 2026",sourceUrl:"https://www.onetcenter.org/database.html",confidence:"Medium",caveat:"O*NET describes work and skills; it is not a live demand source."},
  {type:"WATCH YOUR STEP",headline:"Treat “AI-proof” as a red flag",body:"No role is guaranteed to be insulated from automation. A stronger filter is whether a role compounds judgment, domain knowledge, communication, and responsibility. Those attributes can increase your options even as tools and job titles change.",source:"Editorial interpretation based on O*NET task data",sourceUrl:"https://www.onetcenter.org/database.html",confidence:"Low",caveat:"This is editorial guidance, not a forecast of automation exposure."},
  {type:"WHAT TO DO THIS WEEK",headline:"Run three searches and one reality check",body:"Search “care coordinator,” “project controls analyst,” and “compliance operations associate” with your region. Save ten plausible roles, tally the recurring skills, and ask one person in the strongest lane which requirement actually separates serious candidates.",source:"Career Compass editorial recommendation",sourceUrl:"",confidence:"Medium",caveat:"Actions should be adapted to the reader’s experience, location, and constraints."},
];

export function EditorWorkspace({editor}:{editor:string}) {
  const [status,setStatus] = useState<Status>("Data Review");
  const [active,setActive] = useState<View>("draft");
  const [draftState,setDraftState] = useState<DraftState>("ready");
  const [selected,setSelected] = useState<Section[]>(generatedSections);
  const [subject,setSubject] = useState("3 quieter career lanes worth watching");
  const [previewText,setPreviewText] = useState("Durable roles hiding behind unglamorous titles.");
  const [mode,setMode] = useState<"edit"|"preview">("preview");
  const [notice,setNotice] = useState("Draft generated from 5 eligible source snapshots. Human review required.");

  const unsupported = selected.filter(s=>!s.source.trim() || (s.confidence!=="Low" && !s.sourceUrl.trim())).length;
  const missingCaveats = selected.filter(s=>!s.caveat.trim()).length;
  const reviewComplete = unsupported===0 && missingCaveats===0 && subject.trim().length>0 && selected.length>=3;
  const emailText = useMemo(()=>`SUBJECT: ${subject}\nPREVIEW: ${previewText}\n\n${selected.map(s=>`${s.type}\n${s.headline}\n\n${s.body}\n\nConfidence: ${s.confidence}\nSource: ${s.source}${s.sourceUrl?` — ${s.sourceUrl}`:""}\nCaveat: ${s.caveat}`).join("\n\n---\n\n")}\n\nCareer guidance, not a guarantee. Check source dates and local conditions.`,[selected,subject,previewText]);

  function generateDraft() {
    setDraftState("loading"); setNotice("Reading eligible snapshots and assembling a cited draft…"); setStatus("Draft");
    window.setTimeout(()=>{
      const eligible=sources.filter(s=>s.eligible);
      if(!eligible.length){setDraftState("error");setNotice("No eligible snapshots are available. Refresh or add a source before generating.");return;}
      setSelected(generatedSections.map(s=>({...s}))); setSubject("3 quieter career lanes worth watching"); setPreviewText("Durable roles hiding behind unglamorous titles.");
      setDraftState("ready"); setMode("preview"); setStatus("Data Review"); setNotice(`Draft regenerated from ${eligible.length} eligible source snapshots. Nothing has been published or sent.`);
    },650);
  }
  function changeStatus(next:Status) {
    if(next==="Approved"&&!reviewComplete){setNotice(`Approval blocked: resolve ${unsupported} provenance and ${missingCaveats} caveat issue${missingCaveats===1?"":"s"}.`);return;}
    setStatus(next);
    setNotice(next==="Approved"?"Approved by a human editor. Export is now unlocked; sending remains external and manual.":`Status changed to ${next}.`);
  }
  function updateSection(index:number,field:keyof Section,value:string){setSelected(selected.map((s,i)=>i===index?{...s,[field]:value}:s));if(status==="Approved")setStatus("Editorial Review");}
  function download(name:string,content:string,type:string){
    if(status!=="Approved"){setNotice("Export blocked: a human editor must explicitly approve this draft first.");return;}
    const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement("a");a.href=url;a.download=name;a.click();URL.revokeObjectURL(url);setNotice(`Created ${name}. No email was sent.`);
  }
  const title=active==="draft"?"Draft Studio":active==="board"?"Weekly editorial board":"Source registry";
  return <main className="editor">
    <aside className="sidebar">
      <a className="brand editor-brand" href="/"><span className="brand-mark">CC</span><span>Opportunity<br/>Radar</span></a>
      <nav><button className={active==="draft"?"active":""} onClick={()=>setActive("draft")}>✎ Draft Studio</button><button className={active==="board"?"active":""} onClick={()=>setActive("board")}>◫ Weekly board</button><button className={active==="sources"?"active":""} onClick={()=>setActive("sources")}>◎ Sources</button></nav>
      <div className="human-led"><strong>HUMAN-LED WORKFLOW</strong><span>Drafts are never sent or published automatically.</span></div>
      <div className="editor-user"><span>{editor.slice(0,1).toUpperCase()}</span><div><strong>{editor}</strong><small>Editor</small></div></div>
    </aside>
    <section className="editor-main">
      <header><div><p>OPPORTUNITY RADAR / ISSUE 001</p><h1>{title}</h1></div><div className="status-control"><label htmlFor="issue-status">WORKFLOW STATUS</label><select id="issue-status" value={status} onChange={e=>changeStatus(e.target.value as Status)}><option>Draft</option><option>Data Review</option><option>Editorial Review</option><option>Approved</option><option>Archived</option></select><small className={`status-badge ${status.toLowerCase().replace(" ","-")}`}>{status}</small></div></header>
      <div className="workflow-strip" aria-label="Editorial workflow"><span className={status==="Draft"?"current":""}>1 Data & sources</span><span className={status==="Data Review"?"current":""}>2 Generated draft</span><span className={status==="Editorial Review"?"current":""}>3 Human review</span><span className={status==="Approved"?"current":""}>4 Approval</span><span>5 Export / send-ready</span></div>
      <div className="editor-notice" role="status">{notice}</div>

      {active==="draft"&&<div className="draft-layout">
        <section className="draft-main">
          <div className="draft-toolbar"><div><strong>Newsletter draft</strong><small>Generated from available jobs data · last refreshed Jul 27</small></div><div><button onClick={generateDraft} disabled={draftState==="loading"}>{draftState==="loading"?"Generating…":"↻ Generate / re-generate"}</button><button className={mode==="preview"?"active":""} onClick={()=>setMode("preview")}>Preview</button><button className={mode==="edit"?"active":""} onClick={()=>setMode("edit")}>Edit</button></div></div>
          {draftState==="loading"&&<div className="draft-state"><span className="spinner"></span><h2>Building a cited draft</h2><p>Combining eligible source snapshots. This creates a draft only.</p></div>}
          {draftState==="error"&&<div className="draft-state error"><h2>Draft generation failed</h2><p>{notice}</p><button onClick={()=>setActive("sources")}>Review sources</button></div>}
          {draftState==="empty"&&<div className="draft-state"><h2>No draft yet</h2><p>Generate a first draft from eligible jobs-data snapshots.</p><button onClick={generateDraft}>Generate draft</button></div>}
          {draftState==="ready"&&mode==="preview"&&<article className="email-preview"><div className="email-meta"><div><small>SUBJECT</small><strong>{subject}</strong></div><div><small>PREVIEW TEXT</small><span>{previewText}</span></div></div><div className="email-brand">OPPORTUNITY RADAR <span>by Career Compass</span></div><h2>{selected[0]?.headline}</h2><p className="email-dek">A human-edited look at where opportunity may be growing—and what to do next.</p>{selected.map((s,i)=><section key={`${s.type}-${i}`}><div className="email-section-label">{s.type}<b>{s.confidence} confidence</b></div><h3>{s.headline}</h3><p>{s.body}</p><div className="citation"><strong>Source:</strong> {s.source}{s.sourceUrl&&<> · <a href={s.sourceUrl}>View source</a></>}<br/><strong>Caveat:</strong> {s.caveat}</div></section>)}<footer>Career guidance, not a guarantee. Always check source dates and local conditions.</footer></article>}
          {draftState==="ready"&&mode==="edit"&&<div className="draft-editor">
            <div className="message-fields"><label>Subject line<input value={subject} onChange={e=>{setSubject(e.target.value);if(status==="Approved")setStatus("Editorial Review")}}/></label><label>Preview text<input value={previewText} onChange={e=>{setPreviewText(e.target.value);if(status==="Approved")setStatus("Editorial Review")}}/></label></div>
            {selected.map((s,i)=><article className="section-editor" key={`${s.type}-${i}`}><div><span>{s.type}</span><select aria-label={`Confidence for ${s.headline}`} value={s.confidence} onChange={e=>updateSection(i,"confidence",e.target.value)}><option>High</option><option>Medium</option><option>Low</option></select></div><input aria-label={`Headline for section ${i+1}`} value={s.headline} onChange={e=>updateSection(i,"headline",e.target.value)}/><textarea aria-label={`Body for ${s.headline}`} value={s.body} onChange={e=>updateSection(i,"body",e.target.value)}/><div className="provenance-fields"><label>Source / editorial basis<input className={!s.source.trim()?"warning":""} value={s.source} onChange={e=>updateSection(i,"source",e.target.value)}/></label><label>Source URL<input className={s.confidence!=="Low"&&!s.sourceUrl.trim()?"warning":""} value={s.sourceUrl} onChange={e=>updateSection(i,"sourceUrl",e.target.value)}/></label><label className="wide">Required caveat<input className={!s.caveat.trim()?"warning":""} value={s.caveat} onChange={e=>updateSection(i,"caveat",e.target.value)}/></label></div></article>)}
          </div>}
        </section>
        <aside className="review-panel"><div className="review-block"><h2>Editorial review</h2><div className={reviewComplete?"review-ready":"review-warning"}>{reviewComplete?"Ready for human approval":`${unsupported+missingCaveats} issues need attention`}</div><ul className="checklist"><li>{unsupported===0?"✓":"○"} Claims have sources and links</li><li>{missingCaveats===0?"✓":"○"} Caveats are present</li><li>{selected.some(s=>s.confidence==="Low")?"✓":"○"} Low-confidence claims are labeled</li><li>{selected.some(s=>s.type.includes("WHAT TO DO"))?"✓":"○"} Reader action is specific</li><li>○ Final tone and fact check by editor</li></ul></div>
          <div className="suggestions"><h3>Editorial suggestions</h3><p><b>Clarify:</b> Add a regional qualifier before send if the audience segment is known.</p><p><b>Verify:</b> Confirm the Employment Situation publication date.</p><p><b>Tighten:</b> Keep the opening under 90 words on final pass.</p></div>
          <button className="approve-button" disabled={!reviewComplete||status==="Approved"} onClick={()=>changeStatus("Approved")}>{status==="Approved"?"✓ Human approved":"Approve draft"}</button>
          <p className="guardrail">Approval unlocks files only. Opportunity Radar cannot auto-send or auto-publish.</p>
          <div className="export-actions"><h3>Export / send-ready</h3><button disabled={status!=="Approved"} onClick={()=>download("opportunity-radar-001.txt",emailText,"text/plain")}>Download plain text</button><button disabled={status!=="Approved"} onClick={()=>download("opportunity-radar-001.md",emailText,"text/markdown")}>Download web Markdown</button><button disabled={status!=="Approved"} onClick={()=>download("opportunity-radar-001.html",`<main>${selected.map(s=>`<section><h2>${s.headline}</h2><p>${s.body}</p><small>Source: ${s.source}. Caveat: ${s.caveat}</small></section>`).join("")}</main>`,"text/html")}>Download email HTML</button></div>
        </aside>
      </div>}

      {active==="board"&&<><div className="stat-row"><div><span>{sources.filter(s=>s.eligible).length}</span><small>ELIGIBLE SOURCES</small></div><div><span>{selected.length}</span><small>DRAFT SECTIONS</small></div><div><span>{unsupported}</span><small>PROVENANCE ISSUES</small></div><div><span>{status==="Approved"?"Yes":"No"}</span><small>HUMAN APPROVED</small></div></div><div className="editor-grid"><section className="panel"><div className="panel-head"><h2>Source freshness</h2><button onClick={()=>setActive("sources")}>View registry</button></div>{sources.slice(0,4).map(s=><div className="source-row" key={s.name}><span className={`source-dot ${s.state.toLowerCase().replace(" ","-")}`}></span><strong>{s.name}</strong><small>{s.date}</small><em>{s.state}</em></div>)}</section><section className="panel next-action"><h2>Next action</h2><p>{status==="Approved"?"The issue is approved and ready to export. Sending remains manual.":"Open Draft Studio to review the generated newsletter, address suggestions, and approve it."}</p><button onClick={()=>setActive("draft")}>Open newsletter draft →</button></section></div></>}
      {active==="sources"&&<section className="panel registry"><div className="panel-head"><h2>Available jobs-data sources</h2><button onClick={generateDraft}>Generate draft from eligible data</button></div>{sources.map(s=><div className="source-row" key={s.name}><span className={`source-dot ${s.state.toLowerCase().replace(" ","-")}`}></span><strong>{s.name}</strong><small>{s.cadence} · latest {s.date}</small><em>{s.eligible?s.state:"Excluded"}</em></div>)}<p className="caveat">Only eligible snapshots are used. Stale, missing-key, and unverified sources are excluded or labeled. Generation creates an editable draft; it never publishes or sends.</p></section>}
    </section>
  </main>;
}

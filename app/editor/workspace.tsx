"use client";
import { useMemo, useState } from "react";

const sources = [
  ["BLS Employment Situation","Fresh","Jul 3, 2026","Monthly"],
  ["BLS Occupational Outlook","Fresh","Jun 28, 2026","Periodic"],
  ["FRED labor series","Key needed","—","Monthly"],
  ["Census QWI","Lagging","Q4 2025","Quarterly"],
  ["O*NET 30.1","Fresh","Jun 2026","Periodic"],
  ["State WARN tracker","Manual","Jul 24, 2026","Weekly"],
];
const sections = [
  {type:"THE SIGNAL",headline:"Three quieter career lanes worth watching",body:"Durable opportunity is showing up in healthcare operations, infrastructure support, and regulated business functions.",source:"BLS Employment Situation · Jul 2026",confidence:"High"},
  {type:"OPPORTUNITY RADAR",headline:"Healthcare operations",body:"Look past clinical titles: care coordination, health records, and revenue-cycle roles can offer accessible on-ramps.",source:"BLS OOH · 2024–34 projections",confidence:"High"},
  {type:"WATCH YOUR STEP",headline:"Treat “AI-proof” as a red flag",body:"No role is guaranteed. Prefer jobs where judgment, domain context, and stakeholder communication compound.",source:"O*NET 30.1 · Jun 2026",confidence:"Medium"},
  {type:"WHAT TO DO THIS WEEK",headline:"Run three smarter searches",body:"Try “care coordinator,” “project controls analyst,” and “compliance operations associate” with your region.",source:"Editorial interpretation",confidence:"Medium"},
];

export function EditorWorkspace({editor}:{editor:string}) {
  const [status,setStatus] = useState("Data Review");
  const [active,setActive] = useState<"board"|"issue"|"sources">("board");
  const [selected,setSelected] = useState(sections);
  const unsupported = selected.filter(s=>!s.source).length;
  const emailText = useMemo(()=>selected.map(s=>`${s.type}\n${s.headline}\n\n${s.body}\nSource: ${s.source}`).join("\n\n---\n\n"),[selected]);
  function download(name:string, content:string, type:string) {
    const url=URL.createObjectURL(new Blob([content],{type})); const a=document.createElement("a"); a.href=url;a.download=name;a.click();URL.revokeObjectURL(url);
  }
  return <main className="editor">
    <aside className="sidebar">
      <a className="brand editor-brand" href="/"><span className="brand-mark">CC</span><span>Opportunity<br/>Radar</span></a>
      <nav><button className={active==="board"?"active":""} onClick={()=>setActive("board")}>◫ Weekly board</button><button className={active==="issue"?"active":""} onClick={()=>setActive("issue")}>✎ Issue builder</button><button className={active==="sources"?"active":""} onClick={()=>setActive("sources")}>◎ Sources</button></nav>
      <div className="editor-user"><span>{editor.slice(0,1).toUpperCase()}</span><div><strong>{editor}</strong><small>Editor</small></div></div>
    </aside>
    <section className="editor-main">
      <header><div><p>OPPORTUNITY RADAR / ISSUE 001</p><h1>{active==="board"?"Weekly editorial board":active==="issue"?"Issue builder":"Source registry"}</h1></div><div className="status-control"><label>STATUS</label><select value={status} onChange={e=>setStatus(e.target.value)}><option>Draft</option><option>Data Review</option><option>Editorial Review</option><option>Approved</option><option>Published</option><option>Archived</option></select></div></header>
      {active==="board" && <><div className="stat-row"><div><span>6</span><small>ACTIVE SOURCES</small></div><div><span>3</span><small>CANDIDATE SIGNALS</small></div><div><span>0</span><small>UNSUPPORTED CLAIMS</small></div><div><span>Fri</span><small>TARGET SEND</small></div></div>
        <div className="editor-grid"><section className="panel"><div className="panel-head"><h2>Source freshness</h2><button onClick={()=>setActive("sources")}>View registry</button></div>{sources.slice(0,4).map(s=><div className="source-row" key={s[0]}><span className={`source-dot ${s[1].toLowerCase().replace(" ","-")}`}></span><strong>{s[0]}</strong><small>{s[2]}</small><em>{s[1]}</em></div>)}</section>
        <section className="panel"><div className="panel-head"><h2>Preflight</h2><span className="ready">READY FOR REVIEW</span></div><ul className="checklist"><li>✓ Every data claim has a source</li><li>✓ Data dates and caveats are visible</li><li>✓ One cooling signal is included</li><li>✓ Reader actions are specific</li><li>○ Mobile email preview pending</li></ul></section></div></>}
      {active==="sources" && <section className="panel registry"><div className="panel-head"><h2>Approved free-data sources</h2><button>+ Manual snapshot</button></div>{sources.map(s=><div className="source-row" key={s[0]}><span className={`source-dot ${s[1].toLowerCase().replace(" ","-")}`}></span><strong>{s[0]}</strong><small>{s[3]} · latest {s[2]}</small><em>{s[1]}</em></div>)}<p className="caveat">Automated refreshes remain off for the pilot. Editors record publication dates and preserve the last successful snapshot before using a claim.</p></section>}
      {active==="issue" && <div className="builder"><section><div className="builder-tools"><span>{selected.length} sections · {unsupported} unsupported claims</span><button onClick={()=>setSelected([...selected,{type:"NEW SECTION",headline:"Untitled",body:"Add editorial interpretation.",source:"",confidence:"Low"}])}>+ Add section</button></div>{selected.map((s,i)=><article className="section-editor" key={i}><div><span>{s.type}</span><b>{s.confidence} confidence</b></div><input value={s.headline} onChange={e=>setSelected(selected.map((x,j)=>j===i?{...x,headline:e.target.value}:x))}/><textarea value={s.body} onChange={e=>setSelected(selected.map((x,j)=>j===i?{...x,body:e.target.value}:x))}/><label>Source / editorial basis<input className={!s.source?"warning":""} value={s.source} onChange={e=>setSelected(selected.map((x,j)=>j===i?{...x,source:e.target.value}:x))}/></label></article>)}</section>
      <aside className="export-panel"><h2>Export package</h2><p>Human review is required before sending. Exports include the current editor-approved copy.</p><button onClick={()=>download("opportunity-radar-001.txt",emailText,"text/plain")}>Download plain text</button><button onClick={()=>download("opportunity-radar-001.md",emailText,"text/markdown")}>Download web Markdown</button><button onClick={()=>download("opportunity-radar-001.html",`<main>${selected.map(s=>`<section><h2>${s.headline}</h2><p>${s.body}</p><small>Source: ${s.source}</small></section>`).join("")}</main>`,"text/html")}>Download email HTML</button><small>Subject: 3 quieter career lanes worth watching<br/>Preview: Durable roles hiding behind unglamorous titles.</small></aside></div>}
    </section>
  </main>;
}

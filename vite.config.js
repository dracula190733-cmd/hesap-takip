:root {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #0f172a;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 45%, #e2e8f0 100%);
}
* { box-sizing: border-box; }
body { margin: 0; color: #0f172a; background: inherit; }
button, input, select { font: inherit; }
button { cursor: pointer; }
.card { background: #fff; border: 1px solid #e2e8f0; border-radius: 24px; box-shadow: 0 8px 30px rgba(15,23,42,.06); }
.login-shell { min-height: 100vh; display: grid; place-items: center; padding: 40px; }
.login-card { width: min(100%, 440px); padding: 28px; display: grid; gap: 12px; }
.login-title { display: flex; align-items: center; gap: 12px; font-size: 28px; font-weight: 900; }
.hint, .muted { color: #64748b; }
.small { font-size: 12px; }
.muted2 { color: #475569; }
label { display: block; font-size: 13px; font-weight: 800; margin-bottom: 6px; }
.field { width: 100%; height: 42px; border: 1px solid #cbd5e1; border-radius: 14px; padding: 0 14px; background: #fff; }
.field:focus { outline: none; border-color: #0f172a; box-shadow: 0 0 0 3px rgba(15,23,42,.08); }
.btn { height: 42px; border: 1px solid transparent; border-radius: 14px; padding: 0 16px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-weight: 800; }
.btn-primary { background: #0f172a; color: #fff; }
.btn-primary:hover { background: #1e293b; }
.btn-outline { background: #fff; border-color: #cbd5e1; color: #0f172a; }
.btn-outline:hover { background: #f8fafc; }
.btn-danger { background: #e11d48; color: #fff; }
.btn-danger:hover { background: #be123c; }
.block { width: 100%; }
.app-shell { max-width: 1600px; margin: 0 auto; padding: 24px; display: grid; grid-template-columns: 288px 1fr; gap: 24px; min-height: 100vh; }
.sidebar { padding: 22px; position: sticky; top: 24px; align-self: start; }
.sidebar-title { font-size: 22px; font-weight: 900; }
.sidebar-btn { width: 100%; margin-top: 10px; height: 46px; border: 0; border-radius: 16px; display: flex; align-items: center; gap: 10px; padding: 0 14px; background: #fff; color: #334155; font-weight: 900; }
.sidebar-btn:hover { background: #f8fafc; }
.sidebar-btn.active { background: #0f172a; color: #fff; }
.session-box { margin-top: 24px; border: 1px solid #e2e8f0; background: #f8fafc; border-radius: 18px; padding: 16px; display: grid; gap: 6px; }
.session-name { font-size: 20px; font-weight: 900; }
.mini-label { font-size: 11px; letter-spacing: .22em; font-weight: 900; color: #64748b; }
.main-content { display: grid; gap: 24px; min-width: 0; }
.topbar { padding: 24px; display: flex; align-items: end; justify-content: space-between; gap: 20px; }
.row-wrap { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.row-between { display: flex; justify-content: space-between; gap: 16px; }
.row-end { display: flex; justify-content: flex-end; }
.row-center { display: flex; justify-content: center; }
.align-end { align-items: end; }
.gap8 { gap: 8px; }
.mt8 { margin-top: 8px; }
.mt12 { margin-top: 12px; }
.mt16 { margin-top: 16px; }
.live-box { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 16px; background: #f8fafc; font-size: 14px; font-weight: 700; color: #334155; }
.live-dot, .idle-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
.live-dot { background: #22c55e; animation: pulse 1.2s infinite; }
.idle-dot { background: #94a3b8; }
@keyframes pulse { 0%,100% { opacity: .5; transform: scale(.9);} 50% { opacity: 1; transform: scale(1.2);} }
.summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.summary-grid.compact { grid-template-columns: repeat(3, 1fr); }
.summary.clickable { cursor: pointer; }
.summary.clickable:hover { transform: translateY(-2px); }
.summary-title { font-size: 11px; letter-spacing: .24em; font-weight: 900; color: #64748b; }
.summary-value { margin-top: 12px; font-size: 34px; font-weight: 900; color: #020617; }
.summary-subtitle { margin-top: 8px; font-size: 14px; font-weight: 700; color: #475569; }
.summary.teal { border-color: #99f6e4; }
.summary.rose { border-color: #fecdd3; }
.summary.cyan { border-color: #bae6fd; }
.chart-card, .section-card { padding: 22px; }
.section-title { font-size: 20px; font-weight: 900; }
.charts-grid { display: grid; grid-template-columns: 1.4fr .9fr; gap: 24px; }
.chart-wrap { height: 320px; margin-top: 12px; }
.table-wrap { overflow: hidden; border-radius: 20px; border: 1px solid #e2e8f0; }
.table-head { display: grid; background: #0f172a; color: white; padding: 14px 16px; gap: 12px; font-size: 12px; font-weight: 900; letter-spacing: .18em; }
.table-body { background: white; }
.table-row { display: grid; gap: 12px; align-items: center; padding: 14px 16px; border-top: 1px solid #e2e8f0; }
.table-row:hover { background: #f8fafc; }
.table-row.pending { background: #fffbeb; }
.account-table { grid-template-columns: 1.2fr 140px 180px 1fr 170px 220px; }
.block-table { grid-template-columns: 1.4fr 160px 160px 180px 150px; }
.user-table { grid-template-columns: 1.2fr 140px 170px 170px 1.2fr; }
.max520 { max-height: 520px; overflow: auto; }
.max460 { max-height: 460px; overflow: auto; }
.strong { font-weight: 900; }
.right { text-align: right; }
.info-box { border: 1px solid #e2e8f0; background: #f8fafc; padding: 12px 14px; border-radius: 14px; }
.search-box { display: flex; align-items: center; gap: 8px; width: min(420px, 100%); }
.search-field { padding-left: 0; }
.badge { display: inline-flex; align-items: center; gap: 6px; height: 28px; border-radius: 999px; padding: 0 10px; border: 1px solid; font-size: 12px; font-weight: 900; }
.status-passive { background: #f1f5f9; color: #334155; border-color: #cbd5e1; }
.status-active { background: #ccfbf1; color: #134e4a; border-color: #99f6e4; }
.status-nfc { background: #cffafe; color: #155e75; border-color: #a5f3fc; }
.status-lock { background: #fef3c7; color: #92400e; border-color: #fde68a; }
.status-block { background: #ffe4e6; color: #9f1239; border-color: #fecdd3; }
.split-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 24px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.subpanel { border: 1px solid #e2e8f0; border-radius: 18px; background: #f8fafc; padding: 16px; }
.subpanel-title { font-size: 14px; font-weight: 900; letter-spacing: .16em; color: #475569; margin-bottom: 14px; }
.list-card { border: 1px solid #e2e8f0; border-radius: 18px; padding: 16px; }
.small-chip { height: 28px; padding: 0 10px; border-radius: 999px; border: 1px solid #e2e8f0; background: #f8fafc; color: #475569; font-size: 12px; display: inline-flex; align-items: center; font-weight: 800; }
.overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, .45); display: flex; align-items: center; justify-content: center; padding: 16px; z-index: 200; }
.modal { width: 100%; background: #fff; border-radius: 28px; overflow: hidden; box-shadow: 0 28px 60px rgba(15, 23, 42, .28); }
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; border-bottom: 1px solid #e2e8f0; }
.modal-title { font-size: 22px; font-weight: 900; }
.modal-body { padding: 24px; max-height: 80vh; overflow: auto; }
.icon-button { width: 40px; height: 40px; border: 0; border-radius: 12px; background: transparent; font-size: 24px; }
.icon-button:hover { background: #f8fafc; }
.warning-box { border: 1px solid #fde68a; background: #fffbeb; color: #92400e; border-radius: 18px; padding: 16px; font-weight: 800; }
.warning-box.danger { border-color: #fecdd3; background: #fff1f2; color: #9f1239; }
.warning-box.big { font-size: 24px; }
.center { text-align: center; }
.toast { position: fixed; right: 24px; top: 24px; z-index: 220; min-width: 320px; border-radius: 18px; border: 1px solid #e2e8f0; background: white; padding: 16px; box-shadow: 0 20px 40px rgba(15,23,42,.18); }
.toast.success .strong { color: #0f766e; }
.toast.danger .strong { color: #be123c; }
.text-danger { color: #be123c; }
.text-success { color: #0f766e; }
.empty { padding: 36px; text-align: center; color: #64748b; font-weight: 800; }
.stack { display: grid; gap: 12px; }
.detail-row { display: grid; grid-template-columns: 1fr auto 180px; align-items: center; gap: 14px; border-radius: 18px; padding: 16px; border: 1px solid #e2e8f0; }
.detail-row.teal { background: #f0fdfa; border-color: #99f6e4; }
.detail-row.rose { background: #fff1f2; border-color: #fecdd3; }
.detail-row.cyan { background: #ecfeff; border-color: #a5f3fc; grid-template-columns: 1fr 180px; }
.user-create-grid { display: grid; grid-template-columns: 1.1fr 1fr 1fr 220px auto; gap: 12px; align-items: end; }
.toggle-line { display: flex; align-items: center; gap: 10px; font-weight: 800; color: #334155; }
.ellipsis { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
@media (max-width: 1200px) {
  .app-shell { grid-template-columns: 1fr; }
  .sidebar { position: static; }
  .summary-grid, .charts-grid, .split-grid, .grid-3, .grid-2, .user-create-grid { grid-template-columns: 1fr; }
  .topbar, .row-between { flex-direction: column; align-items: stretch; }
  .account-table, .block-table, .user-table { grid-template-columns: 1fr; }
  .table-head { display: none; }
  .table-row { gap: 10px; }
}

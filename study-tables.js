// The readable Supabase tables (sensor_readings, machine_status, decisions,
// events, scores, feed_weeks, blocks), for the web pages. Same conversion as
// RL/harness/log/tables.py: rows are written in the tables' shape (Toronto
// day, week, time, utc_offset) and read back as study rows (serial, ts_utc,
// the CSV column names), so the pages' own code works on study rows.
// The spec between the markers is generated from the Python lists; do not
// edit it by hand (python -c "from harness.log.tables import write_js; write_js()").
(function () {
  const SPEC = /*SPEC*/{"tz":"America/Toronto","mask_words":{"o":"ok","i":"out of range","f":"no reading"},"action_names":{"A0":"dormant","A1":"light","A2":"middle","A3":"heavy","A4":"boost"},"headers":{"readings":["ts_utc","serial","chamber","harness_version","decision_id","bme_temp_c","bme_rh_pct","bme_pressure_pa","bme_gas_ohm","bme_gas_saturated","vapour_pressure_kpa","pad_ntc_c","pad_on","motor_current_a","motor_dir","valid_mask"],"machine_readings":["ts_utc","serial","harness_version","lid_closed","back_lid_closed","ptc_ntc_c","intake_ntc_c","internal_temp_c","ptc_on","blower_on","blower_pwm_pct","fan_current_a","machine_current_a","machine_state","machine_state_name","error_code","rssi_dbm","valid_mask"],"decisions":["decision_id","ts_utc","serial","chamber","stage","arm","policy_version","allowed_set","action","action_prob","action_probs","scores_steer","restrict_reason","last_squeeze","last_score_age_h","duty_pct","pwm_pct","ptc_on_frac","pad_on_frac","lid_events_6h","lid_events_24h","lid_events_72h","h_since_lid","jump_last_kpa","jump_mean_72h_kpa","role_inferred","day_in_cycle_inferred","vp_mean_1h_kpa","vp_slope_6h_kpa_h","exhaust_t_mean_1h_c","motor_current_last_mix_a","override"],"events":["event_id","ts_utc","serial","chamber","type","value","size_guess","wetness_guess","entered_by","corrects_event_id","note"],"intervals":["interval_id","serial","chamber","kind","start_utc","end_utc","washout_until_utc","stage","role","profile","profile_card_id","arm","block_id","seed","policy_version"],"observations":["obs_id","ts_utc","serial","chamber","observer","squeeze","moisture_class","smell_level","smell_descriptor","smell_location","after_mix","fresh_food_seen","photo_path","missed","miss_reason","crosscal_pair_id"]},"tables":[{"name":"sensor_readings","file":"readings","renames":[["air_temp_c","bme_temp_c"],["humidity_pct","bme_rh_pct"],["pressure_pa","bme_pressure_pa"],["gas_ohm","bme_gas_ohm"],["gas_saturated","bme_gas_saturated"],["vapour_pressure_kpa","vapour_pressure_kpa"],["pad_temp_c","pad_ntc_c"],["pad_on","pad_on"],["mixer_current_a","motor_current_a"],["mixer_direction","motor_dir"],["decision_id","decision_id"],["harness_version","harness_version"]],"key":["machine","chamber","day","time","utc_offset"],"when":"ts_utc","masks":["air_sensor","pad_sensor","mixer_reading"],"kind":null,"spans":[],"skip_note":null,"columns":["machine","chamber","day","week","time","utc_offset","air_temp_c","humidity_pct","pressure_pa","gas_ohm","gas_saturated","vapour_pressure_kpa","pad_temp_c","pad_on","mixer_current_a","mixer_direction","decision_id","harness_version","air_sensor","pad_sensor","mixer_reading"]},{"name":"machine_status","file":"machine_readings","renames":[["lid_closed","lid_closed"],["blower_on","blower_on"],["blower_pwm_pct","blower_pwm_pct"],["ptc_on","ptc_on"],["ptc_temp_c","ptc_ntc_c"],["intake_temp_c","intake_ntc_c"],["board_temp_c","internal_temp_c"],["mains_current_a","machine_current_a"],["fan_current_a","fan_current_a"],["state","machine_state_name"],["state_code","machine_state"],["error_code","error_code"],["harness_version","harness_version"]],"key":["machine","day","time","utc_offset"],"when":"ts_utc","masks":["ptc_sensor","fan_reading","state_reading"],"kind":null,"spans":[],"skip_note":null,"columns":["machine","day","week","time","utc_offset","lid_closed","blower_on","blower_pwm_pct","ptc_on","ptc_temp_c","intake_temp_c","board_temp_c","mains_current_a","fan_current_a","state","state_code","error_code","harness_version","ptc_sensor","fan_reading","state_reading"]},{"name":"decisions","file":"decisions","renames":[["action","action"],["chance","action_prob"],["chances","action_probs"],["allowed_actions","allowed_set"],["restrict_reason","restrict_reason"],["policy","policy_version"],["arm","arm"],["stage","stage"],["scores_steer","scores_steer"],["last_squeeze","last_squeeze"],["last_score_age_h","last_score_age_h"],["blower_duty_pct","duty_pct"],["blower_pwm_pct","pwm_pct"],["ptc_on_frac","ptc_on_frac"],["pad_on_frac","pad_on_frac"],["lid_events_6h","lid_events_6h"],["lid_events_24h","lid_events_24h"],["lid_events_72h","lid_events_72h"],["h_since_lid","h_since_lid"],["jump_last_kpa","jump_last_kpa"],["jump_mean_72h_kpa","jump_mean_72h_kpa"],["role_inferred","role_inferred"],["day_in_cycle_inferred","day_in_cycle_inferred"],["vp_mean_1h_kpa","vp_mean_1h_kpa"],["vp_slope_6h_kpa_h","vp_slope_6h_kpa_h"],["exhaust_t_mean_1h_c","exhaust_t_mean_1h_c"],["mixer_current_last_mix_a","motor_current_last_mix_a"],["override","override"],["decision_id","decision_id"]],"key":["decision_id"],"when":"ts_utc","masks":[],"kind":null,"spans":[],"skip_note":null,"columns":["machine","chamber","day","week","time","utc_offset","action","action_name","chance","chances","allowed_actions","restrict_reason","policy","arm","stage","scores_steer","last_squeeze","last_score_age_h","blower_duty_pct","blower_pwm_pct","ptc_on_frac","pad_on_frac","lid_events_6h","lid_events_24h","lid_events_72h","h_since_lid","jump_last_kpa","jump_mean_72h_kpa","role_inferred","day_in_cycle_inferred","vp_mean_1h_kpa","vp_slope_6h_kpa_h","exhaust_t_mean_1h_c","mixer_current_last_mix_a","override","decision_id"]},{"name":"events","file":"events","renames":[["event","type"],["value","value"],["note","note"],["entered_by","entered_by"],["size_guess","size_guess"],["wetness_guess","wetness_guess"],["corrects_event_id","corrects_event_id"],["event_id","event_id"]],"key":["event_id"],"when":"ts_utc","masks":[],"kind":null,"spans":[],"skip_note":"back lid","columns":["machine","chamber","day","week","time","utc_offset","event","value","note","entered_by","size_guess","wetness_guess","corrects_event_id","event_id"]},{"name":"scores","file":"observations","renames":[["observer","observer"],["squeeze","squeeze"],["moisture","moisture_class"],["smell_level","smell_level"],["smell","smell_descriptor"],["smell_where","smell_location"],["after_mix","after_mix"],["fresh_food_seen","fresh_food_seen"],["missed","missed"],["miss_reason","miss_reason"],["photo","photo_path"],["crosscal_pair_id","crosscal_pair_id"],["score_id","obs_id"]],"key":["score_id"],"when":"ts_utc","masks":[],"kind":null,"spans":[],"skip_note":null,"columns":["machine","chamber","day","week","time","utc_offset","observer","squeeze","moisture","smell_level","smell","smell_where","after_mix","fresh_food_seen","missed","miss_reason","photo","crosscal_pair_id","score_id"]},{"name":"feed_weeks","file":"intervals","renames":[["profile","profile"],["role","role"],["stage","stage"],["profile_card_id","profile_card_id"],["interval_id","interval_id"]],"key":["interval_id"],"when":null,"masks":[],"kind":"feed_week","spans":["start","end"],"skip_note":null,"columns":["machine","chamber","week","start_day","start_time","start_utc_offset","end_day","end_time","end_utc_offset","profile","role","stage","profile_card_id","interval_id"]},{"name":"blocks","file":"intervals","renames":[["arm","arm"],["role","role"],["stage","stage"],["seed","seed"],["policy","policy_version"],["block_id","block_id"],["interval_id","interval_id"]],"key":["interval_id"],"when":null,"masks":[],"kind":"block","spans":["start","end","washout_until"],"skip_note":null,"columns":["machine","chamber","week","start_day","start_time","start_utc_offset","end_day","end_time","end_utc_offset","washout_until_day","washout_until_time","washout_until_utc_offset","arm","role","stage","seed","policy","block_id","interval_id"]}]}/*END SPEC*/;
  const TZ = SPEC.tz;
  const BY_NAME = {}, BY_FILE = {};
  SPEC.tables.forEach((t) => { BY_NAME[t.name] = t; (BY_FILE[t.file] = BY_FILE[t.file] || []).push(t); });
  const MASK_LETTERS = {};
  Object.entries(SPEC.mask_words).forEach(([c, w]) => { MASK_LETTERS[w] = c; });

  const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, hourCycle: "h23", year: "numeric",
    month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const pad = (n) => String(n).padStart(2, "0");
  const isoZ = (ms) => new Date(Math.floor(ms / 1000) * 1000).toISOString().replace(".000Z", "Z");

  function isoWeek(day) {
    const d = new Date(day + "T00:00:00Z");
    const wd = (d.getUTCDay() + 6) % 7;                 // Monday 0
    d.setUTCDate(d.getUTCDate() - wd + 3);              // the week's Thursday
    const y = d.getUTCFullYear();
    const first = new Date(Date.UTC(y, 0, 4));
    const w = 1 + Math.round(((d - first) / 86400000 - 3 + ((first.getUTCDay() + 6) % 7)) / 7);
    return `${y}-W${pad(w)}`;
  }

  // day, week, time, utc_offset of a UTC time, in Toronto
  function when(ts) {
    const ms = Math.floor(Date.parse(ts) / 1000) * 1000;
    const p = {};
    fmt.formatToParts(new Date(ms)).forEach((x) => { p[x.type] = x.value; });
    const day = `${p.year}-${p.month}-${p.day}`, time = `${p.hour}:${p.minute}:${p.second}`;
    const mins = Math.round((Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second) - ms) / 60000);
    const off = `${mins < 0 ? "-" : "+"}${pad(Math.floor(Math.abs(mins) / 60))}:${pad(Math.abs(mins) % 60)}`;
    return { day, week: isoWeek(day), time, utc_offset: off };
  }

  // back to "YYYY-MM-DDTHH:MM:SSZ"; without an offset, the earlier of a repeated hour
  function utcOf(day, time, off) {
    time = String(time).slice(0, 8);
    if (off) return isoZ(Date.parse(`${day}T${time}${off}`));
    for (const o of ["-04:00", "-05:00"]) {
      const ms = Date.parse(`${day}T${time}${o}`);
      const w = when(isoZ(ms));
      if (w.day === day && w.time === time) return isoZ(ms);
    }
    return isoZ(Date.parse(`${day}T${time}-05:00`));
  }

  function hasChamber(t) { return SPEC.headers[t.file].includes("chamber"); }

  function tableFor(file, row) {
    const ts = BY_FILE[file];
    if (ts.length === 1) return ts[0];
    const t = ts.find((x) => x.kind === (row && row.kind));
    if (!t) throw new Error(`no table for ${file} kind ${row && row.kind}`);
    return t;
  }

  // a study row -> [table name, row for that table]; [null, null] if not kept
  function toTable(file, row) {
    const t = tableFor(file, row);
    if (t.skip_note && row.note === t.skip_note) return [null, null];
    const out = { machine: row.serial };
    if (hasChamber(t)) out.chamber = row.chamber == null ? null : row.chamber;
    if (t.when) Object.assign(out, row[t.when] ? when(row[t.when]) : { day: null, week: null, time: null, utc_offset: null });
    if (t.spans.length) {
      out.week = row.start_utc ? when(row.start_utc).week : null;
      t.spans.forEach((s) => {
        const w = row[`${s}_utc`] ? when(row[`${s}_utc`]) : {};
        out[`${s}_day`] = w.day || null; out[`${s}_time`] = w.time || null; out[`${s}_utc_offset`] = w.utc_offset || null;
      });
    }
    t.renames.forEach(([n, o]) => { out[n] = row[o] === undefined ? null : row[o]; });
    if (file === "decisions") out.action_name = SPEC.action_names[row.action] || null;
    if (t.masks.length) {
      const m = String(row.valid_mask || "");
      t.masks.forEach((name, i) => { out[name] = SPEC.mask_words[m[i]] || null; });
    }
    const ordered = {};
    t.columns.forEach((c) => { ordered[c] = out[c] === undefined ? null : out[c]; });
    return [t.name, ordered];
  }

  // a row of a readable table -> the study row (missing columns are null)
  function fromTable(name, row) {
    const t = BY_NAME[name];
    const out = {};
    SPEC.headers[t.file].forEach((c) => { out[c] = null; });
    out.serial = row.machine === undefined ? null : row.machine;
    if (hasChamber(t)) out.chamber = row.chamber === undefined ? null : row.chamber;
    if (t.when && row.day && row.time) out[t.when] = utcOf(row.day, row.time, row.utc_offset);
    t.spans.forEach((s) => {
      const d = row[`${s}_day`], tm = row[`${s}_time`];
      out[`${s}_utc`] = d && tm ? utcOf(d, tm, row[`${s}_utc_offset`]) : null;
    });
    if (t.kind) out.kind = t.kind;
    t.renames.forEach(([n, o]) => { if (row[n] !== undefined) out[o] = row[n]; });
    if (t.masks.length && t.masks.every((m) => row[m] !== undefined)) {
      const letters = t.masks.map((m) => MASK_LETTERS[row[m]] || "");
      out.valid_mask = letters.every(Boolean) ? letters.join("") : null;
    }
    return out;
  }

  // An old-style query on a study file ("serial=eq.X&ts_utc=gte.T&order=ts_utc.asc")
  // as a query on its readable table, plus the exact filter and order to apply
  // after conversion (the server filters by Toronto day).
  function translate(file, query) {
    const t = BY_FILE[file][0];
    const col = { serial: "machine" };
    t.renames.forEach(([n, o]) => { col[o] = n; });
    if (hasChamber(t)) col.chamber = "chamber";
    const out = [], post = [], bounds = [];
    let sortDir = null;
    const cmp = { gte: (a, b) => a >= b, gt: (a, b) => a > b, lte: (a, b) => a <= b, lt: (a, b) => a < b };
    query.split("&").filter(Boolean).forEach((part) => {
      const i = part.indexOf("=");
      const k = part.slice(0, i), v = decodeURIComponent(part.slice(i + 1));
      if (k === "limit" || k === "offset") { out.push(part); return; }
      if (k === "select") {
        const cols = new Set();
        if (v === "*") { out.push("select=*"); return; }
        v.split(",").forEach((c) => {
          if (c === t.when) { ["day", "time", "utc_offset"].forEach((x) => cols.add(x)); }
          else if (c === "valid_mask") t.masks.forEach((m) => cols.add(m));
          else if (col[c]) cols.add(col[c]);
        });
        if (t.when) ["day", "time", "utc_offset"].forEach((x) => cols.add(x));
        out.push(`select=${[...cols].join(",")}`);
        return;
      }
      if (k === "order") {
        const parts = v.split(",").map((o) => {
          const [c, d] = o.split(".");
          if (c === t.when) { sortDir = d || "asc"; return `day.${sortDir},time.${sortDir}`; }
          return `${col[c] || c}.${d || "asc"}`;
        });
        out.push(`order=${parts.join(",")}`);
        return;
      }
      if (k === t.when) {
        const [op, ...rest] = v.split(".");
        const bound = isoZ(Date.parse(rest.join(".")));
        const w = when(bound), up = op.startsWith("g");
        // exact on the server: a later day, or the same day from that time
        bounds.push(`or(day.${up ? "gt" : "lt"}.${w.day},and(day.eq.${w.day},time.${op}.%22${w.time}%22))`);
        post.push((r) => cmp[op](r[t.when], bound));
        return;
      }
      out.push(`${col[k] || k}=${encodeURIComponent(v).replace(/%2C/g, ",").replace(/%28/g, "(").replace(/%29/g, ")")}`);
    });
    if (bounds.length) out.push(`and=(${bounds.join(",")})`);
    return { name: t.name, query: out.join("&"), keep: (r) => post.every((f) => f(r)), sortDir, when: t.when };
  }

  // Rows of one study file: getJson(path) fetches "/rest/v1/<path>" and returns the parsed JSON.
  async function fetchRows(getJson, file, query, cap) {
    const q = translate(file, query);
    const rows = [];
    if (cap) {
      for (let off = 0; off < cap; off += 1000) {
        const page = await getJson(`${q.name}?${q.query}&limit=1000&offset=${off}`);
        rows.push(...page);
        if (page.length < 1000) break;
      }
    } else {
      rows.push(...(await getJson(`${q.name}?${q.query}`)));
    }
    const out = rows.map((r) => fromTable(q.name, r)).filter(q.keep);
    if (q.sortDir) out.sort((a, b) => (a[q.when] < b[q.when] ? -1 : a[q.when] > b[q.when] ? 1 : 0) * (q.sortDir === "desc" ? -1 : 1));
    return out;
  }

  // Fill a page's machine <select> from public.machines: every machine that has
  // sent data, newest first, labelled with its last day. The page's own list
  // stays as the fallback when the view cannot be read. If nothing was chosen
  // before (`chosen` false), the machine with the newest data is selected.
  // `other` is the free-text box behind "Other…"; onChange runs when the
  // selection changes here.
  async function fillMachines(url, key, select, other, chosen, onChange) {
    let rows;
    try {
      const res = await fetch(`${url}/rest/v1/machines?select=machine,last_day&order=last_day.desc,machine.asc`,
        { headers: { apikey: key, Authorization: `Bearer ${key}` }, cache: "no-store" });
      if (!res.ok) return;
      rows = await res.json();
    } catch (e) { return; }
    if (!rows.length) return;
    const before = select.value === "other" && other ? other.value.trim() : select.value;
    const otherOpt = select.querySelector('option[value="other"]');
    const known = [...select.options].map((o) => o.value).filter((v) => v !== "other");
    [...select.options].forEach((o) => { if (o.value !== "other") o.remove(); });
    const seen = new Set();
    const add = (m, label) => {
      if (seen.has(m)) return; seen.add(m);
      const o = document.createElement("option"); o.value = m; o.textContent = label;
      select.insertBefore(o, otherOpt);
    };
    rows.forEach((r) => r.machine && add(r.machine, `${r.machine} · last data ${r.last_day}`));
    known.forEach((m) => add(m, m));
    const pick = chosen ? before : rows[0].machine;
    if (pick && seen.has(pick)) { select.value = pick; if (other) other.hidden = true; }
    const now = select.value === "other" && other ? other.value.trim() : select.value;
    if (now !== before && onChange) onChange();
  }

  // After a page saved people's entries ([[table, row], ...] as toTable gives
  // them), record each one as an "add" in public.entry_changes, the change log
  // that edits and deletes also write to. Best effort: the entry is already
  // saved, so a failure here never undoes it.
  async function logAdds(url, key, converted) {
    const rows = converted.map(([name, r]) => ({
      machine: r.machine, chamber: r.chamber || null, action: "add", entry_table: name,
      entry_id: name === "scores" ? r.score_id : r.event_id,
      entry_kind: name === "scores" ? "score" : r.event, after: r,
      changed_by: (name === "scores" ? r.observer : r.entered_by) || null }));
    if (!rows.length) return;
    try {
      await fetch(`${url}/rest/v1/entry_changes`, { method: "POST",
        headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json",
          Prefer: "return=minimal" }, body: JSON.stringify(rows) });
    } catch (e) { /* the entry itself is saved */ }
  }

  window.StudyTables = { when, utcOf, toTable, fromTable, translate, fetchRows, fillMachines, logAdds,
    tables: BY_NAME };
})();

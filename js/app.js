// Football 101 — App Engine
let currentSection = 0;
let score = 0;
let answered = 0;
let totalQuizzes = 0;
let completedSections = new Set(JSON.parse(localStorage.getItem('fb101_completed') || '[]'));

function init() {
  totalQuizzes = SECTIONS.reduce((sum, s) => sum + s.cards.filter(c => c.type === 'quiz').length, 0);
  score = parseInt(localStorage.getItem('fb101_score') || '0');
  answered = parseInt(localStorage.getItem('fb101_answered') || '0');
  buildNav();
  renderSection(currentSection);
  updateProgress();
}

function buildNav() {
  const list = document.getElementById('nav-list');
  list.innerHTML = SECTIONS.map((s, i) => `
    <li><a href="#" onclick="goToSection(${i});return false" class="${i === currentSection ? 'active' : ''}" id="nav-${i}">
      <span class="icon">${s.icon}</span>
      <span>${s.title}</span>
      ${completedSections.has(i) ? '<span class="check">✓</span>' : ''}
    </a></li>
  `).join('');
}

function renderSection(idx) {
  currentSection = idx;
  const section = SECTIONS[idx];
  let html = `<h1 style="font-size:1.4em;margin-bottom:4px">${section.icon} ${section.title}</h1>`;
  html += `<p style="color:var(--on-surface-sec);font-size:.85em;margin-bottom:20px">${section.subtitle}</p>`;

  section.cards.forEach((card, ci) => {
    if (card.type === 'learn') {
      html += `<div class="card"><span class="badge badge-learn">Learn</span><h2>${card.title}</h2>${card.html}</div>`;
    } else if (card.type === 'quiz') {
      const qid = `q-${idx}-${ci}`;
      html += `<div class="quiz-card" id="${qid}"><span class="badge badge-quiz">Quiz</span>
        <div class="question">${card.q}</div>
        <div class="options">${card.opts.map((o, oi) =>
          `<button class="quiz-opt" onclick="handleAnswer('${qid}',${oi},${card.ans})">${o}</button>`
        ).join('')}</div>
        <div class="quiz-explain" id="ex-${qid}">${card.exp || ''}</div>
      </div>`;
    } else if (card.type === 'fun') {
      html += `<div class="card"><span class="badge badge-fun">Bonus</span><h2>${card.title}</h2>${card.html}</div>`;
    } else if (card.type === 'interactive') {
      html += `<div class="card"><span class="badge badge-learn">Interactive</span><h2>${card.title}</h2>${card.html}</div>`;
    }
  });

  document.getElementById('section-container').innerHTML = html;
  document.getElementById('prev-btn').disabled = idx === 0;
  document.getElementById('next-btn').textContent = idx === SECTIONS.length - 1 ? 'Done ✓' : 'Next →';
  document.getElementById('next-btn').disabled = idx === SECTIONS.length - 1;

  buildNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Mark section as visited
  completedSections.add(idx);
  localStorage.setItem('fb101_completed', JSON.stringify([...completedSections]));
}

function handleAnswer(qid, picked, correct) {
  const card = document.getElementById(qid);
  if (card.dataset.done) return;
  card.dataset.done = '1';
  const opts = card.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => { o.classList.add('done'); if (i === correct) o.classList.add('correct'); });
  if (picked !== correct) opts[picked].classList.add('wrong');
  else score++;
  answered++;
  document.getElementById('ex-' + qid).classList.add('show');
  localStorage.setItem('fb101_score', score);
  localStorage.setItem('fb101_answered', answered);
  updateProgress();
}

function updateProgress() {
  const pct = totalQuizzes > 0 ? Math.round((answered / totalQuizzes) * 100) : 0;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${score}/${answered} correct · ${pct}% complete`;
}

function navigateSection(dir) {
  const next = currentSection + dir;
  if (next >= 0 && next < SECTIONS.length) renderSection(next);
}

function goToSection(idx) {
  renderSection(idx);
  toggleSidebar(false);
}

function toggleSidebar(forceOpen) {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  const isOpen = sb.classList.contains('open');
  if (forceOpen === false || isOpen) {
    sb.classList.remove('open');
    ov.classList.remove('show');
  } else {
    sb.classList.add('open');
    ov.classList.add('show');
  }
}

document.getElementById('sidebar-overlay').addEventListener('click', () => toggleSidebar(false));
document.getElementById('sidebar-close').addEventListener('click', () => toggleSidebar(false));

// Tab switching helper (used by interactive cards)
function switchTab(groupId, tabIdx) {
  document.querySelectorAll(`[data-tab-group="${groupId}"] .tab-btn`).forEach((btn, i) => {
    btn.classList.toggle('active', i === tabIdx);
  });
  document.querySelectorAll(`[data-tab-content="${groupId}"] .tab-panel`).forEach((panel, i) => {
    panel.classList.toggle('active', i === tabIdx);
  });
}

init();

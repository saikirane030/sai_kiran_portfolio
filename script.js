const projects = [
	{ id:'01', title:'FITCORE360', tech:['Python','Pandas','Streamlit'], tags:'STREAMLIT · PANDAS · FOLIUM', problem:'Fitness information can be scattered across different tools and formats.', build:'A multi-page application with profile/BMI, nutrition tracking, CSV upload, analytics, and Bengaluru gym mapping using Folium.', learned:'Designing a multi-page data product and connecting analysis to a useful interface.' },
	{ id:'02', title:'STUDENT ANALYZER', tech:['Python','NumPy','Pandas','Jupyter'], tags:'NUMPY · PANDAS · JUPYTER', problem:'Student data needs structure before it can answer useful questions.', build:'A Python data analysis project using NumPy and Pandas in a notebook workflow.', learned:'Building confidence with the analysis loop: inspect, clean, explore, communicate.' },
	{ id:'03', title:'PASSWORD LOCKER', tech:['Python'], tags:'PYTHON · CLI', problem:'Managing stored credentials can be tedious and difficult to keep organized.', build:'A Python command-line project for managing stored credentials.', learned:'Thinking about clear command-line interactions and responsible handling of sensitive data.' },
	{ id:'04', title:'NETWORK PORT SCANNER', tech:['Python'], tags:'PYTHON · TKINTER', problem:'Network port checks are more approachable when they can run from a simple interface.', build:'A Tkinter GUI application for network port scanning.', learned:'Connecting an application interface to a technical networking task.' },
	{ id:'05', title:'RETAIL POS ANALYTICS', tech:['Python','Pandas','SQL'], tags:'PANDAS · SQL · ANALYTICS', problem:'Transaction records contain patterns that are difficult to see without analysis.', build:'A data analytics project for extracting useful insights from retail transaction data.', learned:'Framing analysis around questions and useful decisions rather than charts alone.' }
];

const technologyGroups = { LANGUAGES:['Python','Java','JavaScript','HTML','CSS'], DATA:['NumPy','Pandas','SQL','Jupyter'], AI:['AI/ML','GenAI'], 'FRAMEWORKS / TOOLS':['Streamlit','Django','MongoDB','Git','GitHub'] };
const projectGrid = document.querySelector('#project-grid');
const modal = document.querySelector('#project-modal');
const modalContent = document.querySelector('#modal-content');
const techList = document.querySelector('#tech-list');

function renderProjects() {
	projectGrid.innerHTML = projects.map(project => `<article class="project-card" data-project="${project.id}" data-tech="${project.tech.join('|')}" tabindex="0" role="button" aria-label="Open ${project.title} case study"><div class="project-top"><span>EXPERIMENT_${project.id}</span><b>+</b></div><h3>${project.title}</h3><p>${project.build}</p><div class="project-specs"><div><span>PROBLEM</span><p>${project.problem}</p></div><div><span>BUILD</span><p>${project.build}</p></div><div><span>STACK</span><p>${project.tags}</p></div><div><span>LEARNED</span><p>${project.learned}</p></div></div><div class="project-footer"><span>CASE STUDY</span><span class="project-links"><a href="https://github.com/saikirane030/sai_kiran_portfolio" target="_blank" rel="noreferrer">GITHUB ↗</a><span class="coming-soon">LIVE DEMO / COMING SOON</span></span></div></article>`).join('');
	document.querySelectorAll('.project-card').forEach(card => { card.addEventListener('click', () => openProject(card.dataset.project)); card.addEventListener('keydown', event => { if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(card.dataset.project); } }); card.querySelectorAll('a').forEach(link => link.addEventListener('click', event => event.stopPropagation())); });
}

function openProject(id) {
	const project = projects.find(item => item.id === id);
	modalContent.innerHTML = `<span class="modal-kicker">EXPERIMENT_${project.id} / CASE STUDY</span><h2 id="modal-title">${project.title}</h2><div class="modal-grid"><div><span>PROJECT</span><p>${project.build}</p></div><div><span>PROBLEM</span><p>${project.problem}</p></div><div><span>APPROACH</span><p>${project.build}</p></div><div><span>TECHNOLOGY</span><p>${project.tech.join(' · ')}</p></div><div><span>WHAT I LEARNED</span><p>${project.learned}</p></div><div><span>LINKS</span><p>GitHub available. Live demo coming soon.</p></div></div>`;
	modal.showModal();
}

function renderTechs() {
	techList.innerHTML = Object.entries(technologyGroups).map(([group, items]) => `<div class="tech-group"><h3>${group}</h3><div class="tech-buttons">${items.map(tech => `<button class="tech-button" data-tech="${tech}" role="option" aria-selected="false">${tech}</button>`).join('')}</div></div>`).join('');
	techList.querySelectorAll('.tech-button').forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.tech)));
}

function filterProjects(selectedTech) {
	document.querySelectorAll('.tech-button').forEach(button => { const selected = button.dataset.tech === selectedTech; button.classList.toggle('selected', selected); button.setAttribute('aria-selected', selected); });
	document.querySelectorAll('.project-card').forEach(card => { const match = card.dataset.tech.split('|').includes(selectedTech); card.classList.toggle('is-highlighted', match); card.classList.toggle('is-dimmed', !match); });
	document.querySelector('#stack-message').textContent = `${selectedTech} is highlighted across the project lab.`;
}

const fallbackAnswers = {
	projects:'Sai has built FitCore360, Student Analyzer, Password Locker, Network Port Scanner, and Retail POS Analytics.',
	fitcore:'FitCore360 is a multi-page Streamlit fitness analytics application with profile/BMI, nutrition tracking, CSV upload, analytics, and Bengaluru gym mapping using Folium.',
	technologies:'Sai uses Python, NumPy, Pandas, SQL/MySQL, Jupyter, Streamlit, Django, MongoDB, HTML, CSS, JavaScript, AI/ML, GenAI, Git, and GitHub.',
	learning:'Sai is currently learning DSA, GenAI, Python software development, SQL, and AI/ML by turning concepts into projects.',
	interest:'Sai is interested in AI because he enjoys learning by building practical applications with Python, data, AI/ML, and GenAI.',
	unknown:"I don't have that information in my portfolio yet."
};
function answerFor(question) { const text = question.toLowerCase(); if(text.includes('project')) return fallbackAnswers.projects; if(text.includes('fitcore')) return fallbackAnswers.fitcore; if(text.includes('technolog') || text.includes('skill') || text.includes('stack')) return fallbackAnswers.technologies; if(text.includes('learn') || text.includes('current')) return fallbackAnswers.learning; if(text.includes('interest') || text.includes('why ai')) return fallbackAnswers.interest; return fallbackAnswers.unknown; }
function addMessage(text, type) { const message = document.createElement('div'); message.className = `message ${type}`; const label = document.createElement('span'); label.className = 'message-label'; label.textContent = `${type === 'user' ? 'YOU' : 'SAI AI'} · LOCAL`; const paragraph = document.createElement('p'); paragraph.textContent = text; message.append(label, paragraph); const messages = document.querySelector('#chat-messages'); messages.appendChild(message); messages.scrollTop = messages.scrollHeight; }
function askQuestion(question) { if(!question.trim()) return; addMessage(question, 'user'); document.querySelector('#chat-input').value = ''; const typing = document.createElement('div'); typing.className = 'message assistant typing'; typing.innerHTML = '<span class="message-label">SAI AI · THINKING</span><p>...</p>'; const messages = document.querySelector('#chat-messages'); messages.appendChild(typing); setTimeout(() => { typing.remove(); addMessage(answerFor(question), 'assistant'); }, 450); }

renderProjects(); renderTechs();
document.querySelector('#modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if(event.target === modal) modal.close(); });
document.querySelectorAll('.flow-step').forEach(step => step.addEventListener('click', () => { document.querySelectorAll('.flow-step').forEach(item => item.classList.remove('active')); step.classList.add('active'); document.querySelector('#flow-detail').textContent = step.dataset.detail; }));
document.querySelector('#chat-form').addEventListener('submit', event => { event.preventDefault(); askQuestion(document.querySelector('#chat-input').value); });
document.querySelectorAll('#suggestions button').forEach(button => button.addEventListener('click', () => askQuestion(button.textContent)));
document.querySelector('#clear-chat').addEventListener('click', () => { document.querySelector('#chat-messages').innerHTML = '<div class="message assistant"><span class="message-label">SAI AI · LOCAL</span><p>Chat cleared. Ask me about Sai\'s portfolio.</p></div>'; });
const menuToggle = document.querySelector('.menu-toggle'); const siteNav = document.querySelector('#site-nav'); menuToggle.addEventListener('click', () => { const open = siteNav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { siteNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));

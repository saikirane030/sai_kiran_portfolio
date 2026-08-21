const projects = [
	{ id:'01', title:'FitCore360', tags:['Streamlit','Pandas','Folium'], tech:['Python','Pandas','Streamlit'], description:'A multi-page fitness analytics application that brings profile data, BMI, nutrition tracking, CSV uploads, analytics, and Bengaluru gym mapping into one place.', problem:'Fitness information is often scattered across different tools and formats.', approach:'Combine simple personal inputs, uploaded data, analytics views, and location context in one Streamlit application.', learned:'Designing a multi-page data product and connecting analysis to a useful interface.' },
	{ id:'02', title:'Student Analyzer', tags:['NumPy','Pandas','Jupyter'], tech:['Python','NumPy','Pandas','Jupyter'], description:'A Python data analysis project for exploring and understanding student data.', problem:'Raw student data needs structure before it can answer useful questions.', approach:'Use NumPy and Pandas to inspect, transform, and analyze the dataset in a notebook workflow.', learned:'Building confidence with the analysis loop: inspect, clean, explore, communicate.' },
	{ id:'03', title:'Password Locker', tags:['Python','CLI'], tech:['Python'], description:'A Python command-line project for managing stored credentials.', problem:'Repeatedly managing credentials can be tedious and difficult to keep organized.', approach:'Create a focused CLI workflow for storing and managing credential records.', learned:'Thinking about clear command-line interactions and responsible handling of sensitive data.' },
	{ id:'04', title:'Network Port Scanner', tags:['Python','Tkinter','Networking'], tech:['Python'], description:'A Tkinter GUI application for network port scanning.', problem:'Network port checks are more approachable when they can be run from a simple interface.', approach:'Pair a graphical Tkinter interface with a port-scanning workflow.', learned:'Connecting an application interface to a technical networking task.' },
	{ id:'05', title:'Retail POS Data Analysis', tags:['Pandas','Analytics'], tech:['Python','Pandas','SQL'], description:'A data analytics project focused on extracting useful insights from retail transaction data.', problem:'Transaction records contain patterns that are hard to see without deliberate analysis.', approach:'Use data analysis techniques to explore retail records and surface meaningful observations.', learned:'Framing analysis around questions and useful decisions rather than charts alone.' }
];

const projectGrid = document.querySelector('#project-grid');
const modal = document.querySelector('#project-modal');
const modalContent = document.querySelector('#modal-content');
const techList = document.querySelector('#tech-list');
const techs = [...new Set(projects.flatMap(project => project.tech))].sort();

function renderProjects() {
	projectGrid.innerHTML = projects.map(project => `<article class="project-card" data-project="${project.id}" data-tech="${project.tech.join('|')}" tabindex="0" role="button" aria-label="Open ${project.title} case study"><div class="project-top"><span>CASE / ${project.id}</span><b>↗</b></div><h3>${project.title}</h3><p>${project.description}</p><div class="project-footer"><span>${project.tags.join(' · ')}</span><span class="project-links"><a href="https://github.com/saikirane030/sai_kiran_portfolio" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="#contact">LIVE DEMO ↗</a></span></div></article>`).join('');
	document.querySelectorAll('.project-card').forEach(card => { card.addEventListener('click', () => openProject(card.dataset.project)); card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(card.dataset.project); } }); card.querySelectorAll('a').forEach(link => link.addEventListener('click', event => event.stopPropagation())); });
}

function openProject(id) {
	const project = projects.find(item => item.id === id);
	modalContent.innerHTML = `<span class="modal-kicker">CASE STUDY / ${project.id}</span><h2 id="modal-title">${project.title}</h2><div class="modal-grid"><div><span>PROJECT</span><p>${project.description}</p></div><div><span>TECHNOLOGY</span><p>${project.tech.join(' · ')}</p></div><div><span>PROBLEM</span><p>${project.problem}</p></div><div><span>APPROACH</span><p>${project.approach}</p></div><div><span>WHAT I LEARNED</span><p>${project.learned}</p></div></div>`;
	modal.showModal();
}

function renderTechs() {
	techList.innerHTML = `<button class="tech-button selected" data-tech="all" role="option" aria-selected="true">All projects</button>${techs.map(tech => `<button class="tech-button" data-tech="${tech}" role="option" aria-selected="false">${tech}</button>`).join('')}`;
	techList.querySelectorAll('.tech-button').forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.tech)));
}

function filterProjects(selectedTech) {
	techList.querySelectorAll('.tech-button').forEach(button => { const selected = button.dataset.tech === selectedTech; button.classList.toggle('selected', selected); button.setAttribute('aria-selected', selected); });
	document.querySelectorAll('.project-card').forEach(card => { const match = selectedTech === 'all' || card.dataset.tech.split('|').includes(selectedTech); card.classList.toggle('is-highlighted', match && selectedTech !== 'all'); card.classList.toggle('is-dimmed', !match); });
	document.querySelector('#stack-message').textContent = selectedTech === 'all' ? 'Select a technology to trace it through the project lab.' : `${selectedTech} appears across the highlighted work in the project lab.`;
	document.querySelector('.mono-label').textContent = selectedTech === 'all' ? 'FILTER / READY' : `FILTER / ${selectedTech}`;
}

const fallbackAnswers = {
	project: 'Sai has built FitCore360, Student Analyzer, Password Locker, Network Port Scanner, and Retail POS Data Analysis.',
	skill: 'His current toolkit includes Python, NumPy, Pandas, Jupyter, SQL/MySQL, Streamlit, Django, MongoDB, HTML, CSS, JavaScript, AI/ML, GenAI, Git, and GitHub.',
	fitcore: 'FitCore360 is a multi-page Streamlit fitness analytics application with profile and BMI features, nutrition tracking, CSV upload, analytics, and Bengaluru gym mapping using Folium.',
	internship: 'Sai brings a practical AIML foundation, a growing set of data and software projects, and learning experience from 1M1B AI for Sustainability, ZeTheta Algorithms, and Deloitte Australia simulations.',
	default: 'I can tell you about Sai\'s projects, skills, FitCore360, or why his practical AIML foundation could be a good fit for an internship.'
};

function answerFor(question) { const text = question.toLowerCase(); if (text.includes('project')) return fallbackAnswers.project; if (text.includes('skill')) return fallbackAnswers.skill; if (text.includes('fitcore')) return fallbackAnswers.fitcore; if (text.includes('intern')) return fallbackAnswers.internship; return fallbackAnswers.default; }
function addMessage(text, type) { const message = document.createElement('div'); message.className = `message ${type}`; const label = document.createElement('span'); label.className = 'message-label'; label.textContent = `${type === 'user' ? 'YOU' : 'SAI AI'} · NOW`; const paragraph = document.createElement('p'); paragraph.textContent = text; message.append(label, paragraph); document.querySelector('#chat-messages').appendChild(message); document.querySelector('#chat-messages').scrollTop = document.querySelector('#chat-messages').scrollHeight; }
function askQuestion(question) { if (!question.trim()) return; addMessage(question, 'user'); document.querySelector('#chat-input').value = ''; const typing = document.createElement('div'); typing.className = 'message assistant typing'; typing.innerHTML = '<span class="message-label">SAI AI · THINKING</span><p>...</p>'; document.querySelector('#chat-messages').appendChild(typing); setTimeout(() => { typing.remove(); addMessage(answerFor(question), 'assistant'); }, 500); }

renderProjects(); renderTechs();
document.querySelector('#modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
document.querySelectorAll('.flow-step').forEach(step => step.addEventListener('click', () => { document.querySelectorAll('.flow-step').forEach(item => item.classList.remove('active')); step.classList.add('active'); document.querySelector('#flow-detail').textContent = step.dataset.detail; }));
document.querySelector('#chat-form').addEventListener('submit', event => { event.preventDefault(); askQuestion(document.querySelector('#chat-input').value); });
document.querySelectorAll('#suggestions button').forEach(button => button.addEventListener('click', () => askQuestion(button.textContent)));
document.querySelector('#clear-chat').addEventListener('click', () => { document.querySelector('#chat-messages').innerHTML = '<div class="message assistant"><span class="message-label">SAI AI · NOW</span><p>Chat cleared. What would you like to explore?</p></div>'; });
const menuToggle = document.querySelector('.menu-toggle'); const siteNav = document.querySelector('#site-nav'); menuToggle.addEventListener('click', () => { const open = siteNav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { siteNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));

import AOS from 'aos';
import 'aos/dist/aos.css';
import { createIcons, Github, Facebook, Mail, Phone, ExternalLink, Moon, Sun, Terminal as TerminalIcon, Award, Cpu, Code2, Coffee, Layout, Binary, Globe } from 'lucide';

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// Initialize Lucide Icons
createIcons({
    icons: {
        Github, Facebook, Mail, Phone, ExternalLink, Moon, Sun, TerminalIcon, Award, Cpu, Code2, Coffee, Layout, Binary, Globe
    }
});

// Terminal Typing Effect
const terminalLines = [
    { text: 'Whoami', type: 'command' },
    { text: 'Full Name: Nguyen Tuan Anh', type: 'info' },
    { text: 'Birth Year: 2007 (Gen Z)', type: 'info' },
    { text: 'Location: Vietnam', type: 'info' },
    { text: 'Interests: Algorithms, Linux, Software Engineering', type: 'info' },
    { text: 'Status: Learning and building cool stuff...', type: 'info' },
    { text: 'Ls projects/', type: 'command' },
    { text: 'VibeCode-AI  Vibecode_Zooteam  Portfolio', type: 'info' }
];

const terminalBody = document.getElementById('terminal-body');
if (terminalBody) {
    let lineIndex = 0;
    function typeLine() {
        if (lineIndex < terminalLines.length) {
            const line = terminalLines[lineIndex];
            const div = document.createElement('div');
            div.className = line.type === 'command' ? 'text-tech-accent flex items-center' : 'text-white/80 pl-4';
            
            if (line.type === 'command') {
                div.innerHTML = `<span class="mr-2">$</span><span></span>`;
                terminalBody.appendChild(div);
                typeText(div.querySelector('span:last-child'), line.text, () => {
                    lineIndex++;
                    setTimeout(typeLine, 500);
                });
            } else {
                div.textContent = line.text;
                terminalBody.appendChild(div);
                lineIndex++;
                setTimeout(typeLine, 300);
            }
        }
    }

    function typeText(element, text, callback) {
        let charIndex = 0;
        const interval = setInterval(() => {
            if (charIndex < text.length) {
                element.textContent += text[charIndex];
                charIndex++;
            } else {
                clearInterval(interval);
                callback();
            }
        }, 50);
    }

    // Start typing when section in view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            typeLine();
            observer.disconnect();
        }
    });
    observer.observe(document.getElementById('terminal-section'));
}

// Stats Fetcher (Simulated for Demo, can be connected to real APIs)
async function fetchCodeforcesStats(handle = 'ngtuananh1909') {
    try {
        const response = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
        const data = await response.json();
        if (data.status === 'OK') {
            const user = data.result[0];
            document.getElementById('cf-rank').textContent = user.rank || 'Newbie';
            document.getElementById('cf-rating').textContent = user.rating || '0';
            document.getElementById('cf-max-rank').textContent = user.maxRank || 'N/A';
        }
    } catch (error) {
        console.error('Failed to fetch Codeforces stats:', error);
    }
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Initialize theme
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Initialize Stats
fetchCodeforcesStats();

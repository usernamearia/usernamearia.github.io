// Terminal Portfolio Logic

const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const lightToggle = document.getElementById('light-toggle');
const promptElement = document.getElementById('prompt');
const titleElement = document.getElementById('title');

let currentPath = '~';
let previousPath = '~';

// Directory structure for the terminal
const fileStructure = {
    '~': ['experience', 'projects', 'education'],
    'experience': ['STEM Instructor.txt'],
    'projects': ['cybersecurity.txt', 'portfolio.txt', 'bookstore.txt'],
    'education': ['degree.txt', 'certs.txt']
};

// File contents
const fileContents = {
    'STEM Instructor.txt': `Employer: WhizLearning Kids
Duration: October 2024 - Present
Summary: Instructed and guided students in computer programming and STEM concepts through engaging and hands-on learning experiences, fostering creativity and critical thinking.`,
    'cybersecurity.txt': `Summary: Simulated an enterprise network environment to develop practical cybersecurity skills, focusing on threat detection, penetration testing, and system hardening
Tools Used: Active Directory | Splunk (Ubuntu Server) | Snort | Kali Linux | Nmap | Wireshark | Windows Server | Virtualbox`,
    'portfolio.txt': `Summary: Designed, developed, and deployed a personal portfolio website to showcase projects, skills, and professional experience (you're on it right now!)
Tools Used: JavaScript | HTML | CSS | Git`,
    'bookstore.txt': `Summary: Collaborated in a team on a semester-long project, developing a full-stack online bookstore application through multiple sprint cycles with an agile methodology
Tools Used: Spring Boot | Postman | ReactJS | CSS | HTML | Java | MySQL | XAMPP`,
    'degree.txt': `Bachelor's of Science - Computer Science: Graduated from University of Georgia (2024)`,
    'certs.txt': `Certifications:
- CompTIA Security+`
};

// Handles input commands
function handleCommand(command) {
    const args = command.trim().split(/\s+/);
    const cmd = args[0];
    const target = args.slice(1).join(' ');

    switch (cmd) {
        case 'ls': listFiles(); break; // List items in the current folder
        case 'pwd': printWorkingDirectory(); break; // Show current folder path
        case 'cd': changeDirectory(target); break; // Go to another folder
        case 'clear': clearTerminal(); break; // Clear terminal output
        case 'manpages': showManpages(); break; // List available commands
        case 'open': openFile(target); break; // Open a file
        case 'exit': exitTerminal(); break; // Close the page
        default:
            appendOutput(`Command not found: ${cmd}`);
            appendOutput('Type "manpages" to see a list of valid commands.');
    }
}

// Lists files and directories in the current folder
function listFiles() {
    const directory = currentPath === '~' ? '~' : currentPath.replace('~/', '');
    const files = fileStructure[directory] || [];
    appendOutput(files.join(' ') || '(empty)');
}

// Shows the current folder path
function printWorkingDirectory() {
    appendOutput(`/root${currentPath.replace('~', '')}`);
}

// Changes the current folder
function changeDirectory(target) {
    if (target === '..') {
        if (currentPath !== '~') {
            previousPath = currentPath;
            currentPath = currentPath.substring(0, currentPath.lastIndexOf('/')) || '~';
        }
    } else if (target === '-') {
        [currentPath, previousPath] = [previousPath, currentPath];
    } else if (target && target.endsWith('.txt')) {
        appendOutput(`Cannot cd into ${target}: Not a directory.`);
    } else {
        const directory = currentPath.replace('~/', '').replace('~', '');
        if (fileStructure[directory]?.includes(target)) {
            previousPath = currentPath;
            currentPath = `${currentPath}/${target}`.replace('~/', '~/').replace('~/', '');
        } else if (fileStructure[target]) {
            previousPath = currentPath;
            currentPath = target;
        } else {
            appendOutput(`No such directory: ${target}`);
        }
    }
    updatePrompt();
}

// Clears the terminal output
function clearTerminal() {
    terminalOutput.innerHTML = '';
}

// Lists available commands
function showManpages() {
    const manpages = [
        'ls       - List files and directories',
        'pwd      - Print working directory',
        'cd [dir] - Change directory',
        '           Use ".." to go up a directory',
        '           Use "-" to go to the previous directory',
        'open [file] - Open and read a .txt file content in the terminal',
        'clear    - Clear terminal',
        'manpages - Show manual pages',
        'exit     - Close the webpage'
    ];
    manpages.forEach(line => appendOutput(line));
}

// Simulates exiting the terminal
function exitTerminal() {
    appendOutput('Closing terminal...');
    setTimeout(() => {
        window.close();
    }, 500);
}

// Opens and displays the contents of a file
function openFile(fileName) {
    if (!fileName.endsWith('.txt')) {
        appendOutput(`Cannot open: ${fileName} is not a valid file.`);
        return;
    }

    const filesInDirectory = fileStructure[currentPath] || [];
    if (!filesInDirectory.includes(fileName)) {
        appendOutput(`No such file: ${fileName}`);
        return;
    }

    const content = fileContents[fileName];
    if (content) {
        appendOutput(`Opening ${fileName}:`);
        appendOutput('');
        content.split('\n').forEach(line => appendOutput(line));
    } else {
        appendOutput(`File ${fileName} is empty.`);
    }
}

// Adds text to the terminal output
function appendOutput(text) {
    const newLine = document.createElement('div');
    newLine.textContent = text;
    terminalOutput.appendChild(newLine);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Updates the terminal prompt to show the current path
function updatePrompt() {
    promptElement.textContent = `root@portfolio:${currentPath}$`;
}

// Adds event listeners for terminal input
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value;
        appendOutput(`root@portfolio:${currentPath}$ ${command}`);
        handleCommand(command);
        terminalInput.value = '';
    }
});

// Toggles light/dark mode
lightToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    lightToggle.innerHTML = `<i class="fas fa-${isLightMode ? 'sun' : 'moon'}"></i> <span>${isLightMode ? 'Light Mode' : 'Dark Mode'}</span>`;
});

// Copies email to clipboard when icon is clicked
const emailIcon = document.querySelector('.email-icon');
emailIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const email = 'ariasafaie@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        appendOutput('Email copied to clipboard');
    }).catch(err => {
        appendOutput('Failed to copy email');
        console.error('Clipboard error:', err);
    });
});

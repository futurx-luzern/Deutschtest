    // --- EVALUIERUNGS-DATEN ---
    const correctAnswers = {
        'A-01-1': 'd', 'A-01-2': 'en', 'A-01-3': 'den', 'A-01-4': 'ieren', 'A-01-5': 'er', 'A-01-6': 'nisse', 'A-01-7': 'isieren', 'A-01-8': 'keit', 'A-01-9': 'a', 'A-01-10': 'cht', 'A-01-11': 'ie', 'A-01-12': 're', 'A-01-13': 'a', 'A-01-14': 'l', 'A-01-15': 'hr', 'A-01-16': 'len', 'A-01-17': 'hren', 'A-01-18': 'be', 'A-01-19': 'iel', 'A-01-20': 'iche', 'A-01-21': 'er', 'A-01-22': 'l', 'A-01-23': 'a', 'A-01-24': 'lan', 'A-01-25': 'D', 'A-01-26': 'ine', 'A-01-27': 'ne', 'A-01-28': 'nce', 'A-01-29': 'en', 'A-01-30': 'dig', 'A-01-31': 'u', 'A-01-32': 'derung', 'A-01-33': 'kung', 'A-01-34': 'gen',
        'A-02-1': 'nen', 'A-02-2': 'n', 'A-02-3': 'tigen', 'A-02-4': 'rer', 'A-02-5': 'nde', 'A-02-6': 'r', 'A-02-7': 'gend', 'A-02-8': 'd', 'A-02-9': 'e', 'A-02-10': 'fach', 'A-02-11': 'ere', 'A-02-12': 'en', 'A-02-13': 're', 'A-02-14': 'sen', 'A-02-15': 'en', 'A-02-16': 'ich', 'A-02-17': 'b', 'A-02-18': 'den', 'A-02-19': 'ns', 'A-02-20': 'ur', 'A-02-21': 'heit', 'A-02-22': 'ern', 'A-02-23': 'liche', 'A-02-24': 'ung', 'A-02-25': 'dung', 'A-02-26': 'ie', 'A-02-27': 'wor', 'A-02-28': 'cht', 'A-02-29': 'cher', 'A-02-30': 'ie', 'A-02-31': 'as', 'A-02-32': '', 'A-02-33': 'len', 'A-02-34': 'tige', 'A-02-35': 'ann', 'A-02-36': 'en', 'A-02-37': 'tigste', 'A-02-38': 'u',
        'B-01-1': 'a', 'B-01-2': 'b', 'B-01-3': 'b',
        'B-02-1': 'a', 'B-02-2': 'b', 'B-02-3': 'a',
        'B-03-1': 'a', 'B-03-2': 'a', 'B-03-3': 'a', 'B-03-4': 'a',
        'B-04-1': 'a', 'B-04-2': 'b',
        'lesen_biohof_01-1': 'Falsch', 'lesen_biohof_01-2': 'Falsch', 'lesen_biohof_01-3': 'Unklar', 'lesen_biohof_01-4': 'Richtig',
        'lesen_tempolimit_02-Paula[]': '4,6', 'lesen_tempolimit_02-Max[]': '1,2,5', 'lesen_tempolimit_02-Claudia[]': '1,3',
        'lesen_kolumbus_03[]': '2,3',
        'lesen_fotosynthese_04[]': '1,3',
        'lesen_vertrauen_05-a': 'manuelle_auswertung', 'lesen_vertrauen_05-b': 'manuelle_auswertung',
        'D-01': 'audio_required', 'D-02': 'audio_required', 'D-03': 'audio_required', 'D-04': 'audio_required', 'D-05': 'audio_required',
        'D-06-1': 'audio_required', 'D-06-2': 'audio_required', 'D-06-3': 'audio_required', 'D-06-4': 'audio_required', 'D-06-5': 'audio_required',
        'D-07': 'audio_required', 'D-08': 'audio_required', 'D-09': 'audio_required', 'D-10': 'audio_required', 'D-11[]': 'audio_required', 'D-12': 'audio_required',
        'E-01': 'manuelle_auswertung'
    };

    const questionDescriptions = {
        'A-01': 'Lückentext zum Thema "Smartphones".', 'A-02': 'Lückentext zum Thema "Zukunftsperspektiven".',
        'B-01-1': 'Gross-/Kleinschreibung bei substantiviertem Verb.', 'B-01-2': 'Getrennt-/Zusammenschreibung bei trennbarem Verb.', 'B-01-3': 'Verbform im Präteritum (starkes Verb).',
        'B-02-1': 'Kommasetzung bei Nebensatz.', 'B-02-2': 'Kommasetzung bei Relativsatz.', 'B-02-3': 'Kommasetzung bei Infinitivgruppe.',
        'B-03-1': 'Passiv im Präteritum.', 'B-03-2': 'Konjunktiv I in der indirekten Rede.', 'B-03-3': 'Konjunktiv II bei Bedingungssatz.', 'B-03-4': 'Kasus des Relativpronomens.',
        'B-04-1': 'Kasus nach Präposition "trotz".', 'B-04-2': 'Stilistisch passenden Ausdruck wählen.',
        'lesen_biohof_01': 'Leseverständnis zu einem Kursangebot.',
        'lesen_tempolimit_02': 'Leseverständnis und Zuordnung von Meinungen.',
        'lesen_kolumbus_03': 'Leseverständnis zu einem historischen Text.',
        'lesen_fotosynthese_04': 'Leseverständnis zu einem Sachtext.',
        'lesen_vertrauen_05': 'Offene Fragen zu einem Sachtext über KI.',
        'D-Hören': 'Hörverstehen: Aufgaben mit steigendem Schwierigkeitsgrad.',
        'E-01': 'Schreibkompetenz: Eine Reise beschreiben.'
    };

    const questionCompetencies = {
        'A-01': 'Morphologische und lexikalische Lücken in einem Sachtext kontextbezogen korrekt ergänzen.', 'A-02': 'Morphologische und lexikalische Lücken in einem Sachtext kontextbezogen korrekt ergänzen.',
        'B-01-1': 'Regel zur Grossschreibung von substantivierten Verben kennen und anwenden.', 'B-01-2': 'Regel zur Zusammenschreibung von trennbaren Verben im Infinitiv kennen.', 'B-01-3': 'Präteritumform eines starken Verbs korrekt bilden.',
        'B-02-1': 'Kommaregeln bei Nebensätzen anwenden.', 'B-02-2': 'Kommaregeln bei eingeschobenen Relativsätzen anwenden.', 'B-02-3': 'Kommaregeln bei Infinitivgruppen mit "zu" anwenden.',
        'B-03-1': 'Passivformen im Präteritum korrekt bilden.', 'B-03-2': 'Konjunktiv I zur Kennzeichnung der indirekten Rede korrekt anwenden.', 'B-03-3': 'Konjunktiv II zur Formulierung von Bedingungen korrekt anwenden.', 'B-03-4': 'Den korrekten Kasus des Relativpronomens bestimmen.',
        'B-04-1': 'Den korrekten Kasus (Genitiv) nach der Präposition "trotz" anwenden.', 'B-04-2': 'Den passenden sprachlichen Register erkennen und ein stilistisch angemessenes Verb auswählen.',
        'lesen_biohof_01': 'Detailinformationen in einem Werbetext finden, überprüfen und erkennen, wenn Informationen nicht enthalten sind.',
        'lesen_tempolimit_02': 'Aussagen und Haltungen aus kurzen Meinungsäusserungen herausfiltern und der sprechenden Person zuordnen.',
        'lesen_kolumbus_03': 'Hauptaussagen und Kernaussagen in einem Sachtext identifizieren.',
        'lesen_fotosynthese_04': 'Kernaussagen und Definitionen in einem kurzen wissenschaftlichen Text identifizieren.',
        'lesen_vertrauen_05': 'Die Kernaussage eines kritischen Textes erfassen und in eigenen Worten wiedergeben.',
        'D-Hören': 'Fähigkeit, aus gehörten Audio-Dateien unterschiedlicher Komplexität gezielt Informationen zu entnehmen und zu verarbeiten.',
        'E-01': 'Schriftliche Textproduktion: Einen zusammenhängenden, deskriptiven Text zu einem Alltagsthema verfassen unter Anwendung korrekter Orthografie, Grammatik und Syntax.'
    };

    // --- Globale Variable für Ordnerzugriff ---
    let saveDirectoryHandle = null;

    // --- Konfiguration ---
    const config = {
        LAST_TEST_PAGE_INDEX: 14,
        FINISH_PAGE_INDEX: 15,
        SAVE_FILE_VERSION: "DeutschTestProgress_v8.0_Final",
        FONT_SIZE_STORAGE_KEY: 'germanTestFontSize_v4',
        FONT_SIZE_STEP: 0.1, MIN_FONT_SIZE_MULTIPLIER: 0.7, MAX_FONT_SIZE_MULTIPLIER: 1.5,
        EXPORT_VERSION: "DeutschTest_V8.0_FinalExport",
        EXPORT_FILENAME_BASE: "Ergebnisse_Deutsch_",
        AUTO_FILE_NAME: "autosave_deutsch.json"
    };

    // --- Globaler Zustand ---
    let testState = {
        currentPage: 0, answers: {}, studentName: '', sectionTimes: {}, isPaused: false,
        totalActiveTimeSeconds: 0, currentSessionStartTime: null, testStartTime: null, testEndTime: null
    };
    let testStarted = false;
    let currentSectionEntryTime = null;
    
    // --- DOM Elemente Cache ---
    const sections = document.querySelectorAll('.test-section');
    const progressIndicator = document.getElementById('progress-indicator');
    const progressBar = document.getElementById('progress-bar');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const pauseOverlay = document.getElementById('pause-overlay');
    const resumeBtnOverlay = document.getElementById('resume-btn-overlay');
    const startBtn = document.getElementById('start-test-btn');
    const exportBtn = document.getElementById('export-results-btn');
    const navigationDiv = document.getElementById('navigation');
    const exportConfirmation = document.getElementById('export-confirmation');
    const studentNameInput = document.getElementById('student-name');
    const nameError = document.getElementById('name-error');
    const increaseFontBtn = document.getElementById('increase-font-btn');
    const decreaseFontBtn = document.getElementById('decrease-font-btn');
    const selectDirBtn = document.getElementById('select-dir-btn');
    const dirStatus = document.getElementById('dir-status');
    const dirCheck = document.getElementById('dir-check');
    const testContainer = document.getElementById('test-container');
    const textareaE01 = document.getElementById('E-01');
    const wordCountDisplay = document.getElementById('word-count-E-01');
    const wordLimitInfo = document.getElementById('word-limit-info');

    // --- Hilfsfunktionen ---
    function formatTime(ms) { if (typeof ms !== 'number' || ms < 0) return '0:00:00'; let totalSeconds = Math.floor(ms / 1000); let hours = Math.floor(totalSeconds / 3600); let minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0'); let seconds = (totalSeconds % 60).toString().padStart(2, '0'); return `${hours}:${minutes}:${seconds}`; }
    function generateFilename(base, name, extension) { const date = new Date(); const day = date.getDate().toString().padStart(2, '0'); const year = date.getFullYear(); const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']; const monthName = monthNames[date.getMonth()]; const dateString = `${day}_${monthName}_${year}`; const safeName = (name || "Unbekannt").replace(/[^a-z0-9]/gi, '_').toLowerCase(); return `${base}${safeName}_${dateString}.${extension}`; }
    function setFontSize(multiplier) { multiplier = Math.max(config.MIN_FONT_SIZE_MULTIPLIER, Math.min(config.MAX_FONT_SIZE_MULTIPLIER, multiplier)); document.documentElement.style.setProperty('--base-font-size', `${multiplier}rem`); try { localStorage.setItem(config.FONT_SIZE_STORAGE_KEY, multiplier); } catch (e) { console.warn("Schriftgrössen-Einstellung speichern fehlgeschlagen."); } }
    function changeFontSize(increase) { const currentMultiplier = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--base-font-size').replace('rem', '')) || 1.0; const newMultiplier = increase ? currentMultiplier + config.FONT_SIZE_STEP : currentMultiplier - config.FONT_SIZE_STEP; setFontSize(newMultiplier); }
    function loadFontSize() { let multiplier = 1.0; try { const savedMultiplier = localStorage.getItem(config.FONT_SIZE_STORAGE_KEY); if (savedMultiplier) { const parsedMultiplier = parseFloat(savedMultiplier); if (!isNaN(parsedMultiplier) && parsedMultiplier >= config.MIN_FONT_SIZE_MULTIPLIER && parsedMultiplier <= config.MAX_FONT_SIZE_MULTIPLIER) { multiplier = parsedMultiplier; } else { localStorage.removeItem(config.FONT_SIZE_STORAGE_KEY); } } } catch(e) { console.warn("Schriftgröße laden fehlgeschlagen.", e); } document.documentElement.style.setProperty('--base-font-size', `${multiplier}rem`); }
    function setVisualPausedState(paused) { if (!pauseBtn || !pauseOverlay) return; if (paused) { pauseBtn.textContent = 'Fortsetzen'; pauseBtn.classList.remove('bg-blue-500', 'hover:bg-blue-600'); pauseBtn.classList.add('bg-green-500', 'hover:bg-green-600'); pauseOverlay.style.display = 'flex'; } else { pauseBtn.textContent = 'Pausieren'; pauseBtn.classList.remove('bg-green-500', 'hover:bg-green-600'); pauseBtn.classList.add('bg-blue-500', 'hover:bg-blue-600'); setTimeout(() => { if (!testState.isPaused && pauseOverlay) pauseOverlay.style.display = 'none'; }, 300); } }
    function updateName(name) { testState.studentName = name.trim(); if(nameError) { nameError.style.display = testState.studentName ? 'none' : 'block'; } }
    function updateWordCount() { if (textareaE01 && wordCountDisplay && wordLimitInfo) { const text = textareaE01.value.trim(); const words = text === '' ? 0 : text.split(/\s+/).filter(Boolean).length; wordCountDisplay.textContent = words; wordLimitInfo.style.display = (words > 100) ? 'block' : 'none'; } else if (wordCountDisplay) { wordCountDisplay.textContent = '0'; if(wordLimitInfo) wordLimitInfo.style.display = 'none'; } }
    function resizeGapInput() { const size = Math.max(3, this.value.length + 1); this.style.minWidth = `${size}ch`; }
    
    // --- Zeitmessung ---
    function stopTimers(timestamp) { if (!testState.isPaused && testState.currentSessionStartTime !== null) { const sessionDuration = timestamp - testState.currentSessionStartTime; testState.totalActiveTimeSeconds = (testState.totalActiveTimeSeconds || 0) + sessionDuration; if (currentSectionEntryTime !== null && testState.currentPage >= 1 && testState.currentPage <= config.LAST_TEST_PAGE_INDEX) { const sectionDuration = timestamp - currentSectionEntryTime; testState.sectionTimes[testState.currentPage] = (testState.sectionTimes[testState.currentPage] || 0) + sectionDuration; } } testState.currentSessionStartTime = null; currentSectionEntryTime = null; }
    function startTimers(timestamp) { if (!testState.isPaused && testStarted && (testState.currentPage >= 1 && testState.currentPage <= config.LAST_TEST_PAGE_INDEX)) { testState.currentSessionStartTime = timestamp; currentSectionEntryTime = timestamp; } else { testState.currentSessionStartTime = null; currentSectionEntryTime = null; } }

    // --- Antwort-Erfassung & Speicherung ---
    function captureCurrentPageAnswers() {
        const currentSection = document.querySelector('.test-section.active');
        if (!currentSection) return;
        if (!testState.answers) testState.answers = {};

        const inputs = currentSection.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            const name = input.name;
            const id = input.id;
            let key = id || name;
            if (!key || key === 'student-name') return;

            if (input.type === 'radio') {
                if (input.checked) testState.answers[key] = input.value;
            } else if (input.type === 'checkbox') {
                 if (!Array.isArray(testState.answers[name])) testState.answers[name] = [];
                 const valueIndex = testState.answers[name].indexOf(input.value);
                 if (input.checked && valueIndex === -1) testState.answers[name].push(input.value);
                 else if (!input.checked && valueIndex > -1) testState.answers[name].splice(valueIndex, 1);
                 if(Array.isArray(testState.answers[name])) testState.answers[name].sort();
            } else {
                testState.answers[key] = input.value;
            }
        });
    }

    async function autoSaveProgress() {
        if (!saveDirectoryHandle || !testStarted || testState.isPaused) return;
        captureCurrentPageAnswers();
        const stateToSave = { ...testState, saveVersion: config.SAVE_FILE_VERSION };
        const success = await writeToFile(config.AUTO_FILE_NAME, JSON.stringify(stateToSave));
        if (!success) alert("WARNUNG: Automatisches Speichern fehlgeschlagen!");
    }
    
    // --- KORRIGIERTE EVALUIERUNGS-LOGIK ---
    function getTaskMetadata(questionId) {
        let taskKey = questionId;
        if (questionId.match(/^A-\d{2}-\d{1,2}$/)) taskKey = questionId.substring(0, 4); // A-01, A-02
        else if (questionId.match(/^B-\d{2}-\d{1}$/)) taskKey = questionId; // B-01-1, ...
        else if (questionId.startsWith('lesen_biohof_01')) taskKey = 'lesen_biohof_01';
        else if (questionId.startsWith('lesen_tempolimit_02')) taskKey = 'lesen_tempolimit_02';
        else if (questionId.startsWith('lesen_kolumbus_03')) taskKey = 'lesen_kolumbus_03';
        else if (questionId.startsWith('lesen_fotosynthese_04')) taskKey = 'lesen_fotosynthese_04';
        else if (questionId.startsWith('lesen_vertrauen_05')) taskKey = 'lesen_vertrauen_05';
        else if (questionId.startsWith('D-')) taskKey = 'D-Hören';
        else if (questionId.startsWith('E-')) taskKey = 'E-01';

        const categoryMap = {'A-': 'Sprache im Fokus', 'B-': 'Orthografie & Grammatik', 'lesen_': 'Lesen', 'D-': 'Hören', 'E-': 'Schreiben'};
        let category = 'Unbekannt';
        for(const prefix in categoryMap) {
            if(questionId.startsWith(prefix)) {
                category = categoryMap[prefix];
                break;
            }
        }
        return {
            description: questionDescriptions[taskKey] || 'Keine Beschreibung',
            competency: questionCompetencies[taskKey] || 'Keine Kompetenz',
            category: category
        };
    }
    
    function calculateScores() {
        let scoresByCategory = { 'Sprache im Fokus': { score: 0, total: 0 }, 'Orthografie & Grammatik': { score: 0, total: 0 }, 'Lesen': { score: 0, total: 0 }, 'Hören': { score: 0, total: 0 }, 'Schreiben': { score: 0, total: 0 } };
        let detailedResults = [];
        let totalScore = 0;
        let maxScore = 0;

        Object.keys(correctAnswers).forEach(questionId => {
            const correctAnswer = correctAnswers[questionId];
            const { description, competency, category } = getTaskMetadata(questionId);
            const userAnswerRaw = testState.answers[questionId];
            
            if (correctAnswer === 'manuelle_auswertung' || correctAnswer === 'audio_required') {
                detailedResults.push({ questionId, description, competency, userAnswer: userAnswerRaw || '', correctAnswer, isCorrect: correctAnswer });
                return;
            }

            maxScore++;
            if(scoresByCategory[category]) scoresByCategory[category].total++;
            
            let isCorrect = false;
            let userAnswerString = '';
            
            if (Array.isArray(userAnswerRaw)) {
                userAnswerString = userAnswerRaw.sort().join(',');
                isCorrect = userAnswerString === correctAnswer;
            } else {
                userAnswerString = String(userAnswerRaw || '').trim().toLowerCase();
                isCorrect = userAnswerString === String(correctAnswer).trim().toLowerCase();
            }

            if (isCorrect) {
                totalScore++;
                if(scoresByCategory[category]) scoresByCategory[category].score++;
            }
            detailedResults.push({ questionId, description, competency, userAnswer: userAnswerString, correctAnswer, isCorrect });
        });

        return { scoresByCategory, totalScore, maxScore, detailedResults };
    }

    // --- EXPORT-FUNKTION ---
    async function exportResults() {
        if (testState.isPaused) resumeTest();
        if (!testState.testEndTime) testState.testEndTime = Date.now();
        stopTimers(testState.testEndTime);
        captureCurrentPageAnswers(); // Final capture to be sure

        if (!testState.studentName) { alert("Bitte geben Sie einen Namen ein."); studentNameInput?.focus(); return; }
        if (!saveDirectoryHandle) { alert("Bitte wählen Sie zuerst einen Speicherordner."); selectDirBtn?.focus(); return; }

        const { scoresByCategory, totalScore, maxScore, detailedResults } = calculateScores();
            
        const exportData = {
            testId: config.EXPORT_VERSION,
            studentName: testState.studentName,
            completionTimestamp: new Date(testState.testEndTime).toISOString(),
            testStartTime: testState.testStartTime ? new Date(testState.testStartTime).toISOString() : null,
            totalActiveTime: formatTime(testState.totalActiveTimeSeconds),
            results: { scoresByCategory, totalScore, maxScore, detailedResults }
        };

        const resultsString = JSON.stringify(exportData, null, 2);
        const finalResultsFilename = generateFilename(config.EXPORT_FILENAME_BASE, testState.studentName, 'json');

        const success = await writeToFile(finalResultsFilename, resultsString);
        if (success) {
            exportConfirmation.textContent = `Ergebnisse für ${testState.studentName} wurden in '${saveDirectoryHandle.name}/${finalResultsFilename}' gespeichert.`;
            exportConfirmation.style.display = 'block';
            exportConfirmation.classList.remove('text-red-600');
            exportConfirmation.classList.add('text-green-600');
            try { await saveDirectoryHandle.removeEntry(config.AUTO_FILE_NAME); } catch (e) { if (e.name !== 'NotFoundError') console.warn("Konnte Autosave-Datei nicht löschen:", e); }
        } else {
            exportConfirmation.textContent = `Fehler beim Speichern der Ergebnisse.`;
            exportConfirmation.style.display = 'block';
            exportConfirmation.classList.add('text-red-600');
        }
    }
    
    // --- Navigation & UI Updates ---
    function showSection(page) {
        stopTimers(Date.now());
        sections.forEach((section, i) => section.classList.toggle('active', i === page));
        testState.currentPage = page;
        updateProgressBar();
        updateNavigation();
        updateProgressIndicator();
        restoreAnswers();
        window.scrollTo(0, 0);
        startTimers(Date.now());
    }
    
    async function nextSection() {
        if (testState.isPaused) resumeTest();
        await autoSaveProgress();
        if (testState.currentPage < config.LAST_TEST_PAGE_INDEX) {
            showSection(testState.currentPage + 1);
        } else if (testState.currentPage === config.LAST_TEST_PAGE_INDEX) {
            testState.testEndTime = Date.now();
            await autoSaveProgress();
            showSection(config.FINISH_PAGE_INDEX);
        }
    }

    async function prevSection() {
        if (testState.isPaused) resumeTest();
        await autoSaveProgress();
        if (testState.currentPage > 1) {
            showSection(testState.currentPage - 1);
        }
    }

    async function pauseTest() {
        if (!testStarted || testState.isPaused || testState.currentPage === 0 || testState.currentPage >= config.FINISH_PAGE_INDEX) return;
        stopTimers(Date.now());
        await autoSaveProgress();
        testState.isPaused = true;
        setVisualPausedState(true);
    }
    
    function resumeTest() {
        if (!testStarted || !testState.isPaused) return;
        testState.isPaused = false;
        startTimers(Date.now());
        setVisualPausedState(false);
    }

    function updateNavigation() {
        if (!prevBtn || !nextBtn || !navigationDiv) return;
        const isTestPage = testState.currentPage > 0 && testState.currentPage < config.FINISH_PAGE_INDEX;
        navigationDiv.style.display = isTestPage ? 'flex' : 'none';
        if(isTestPage) {
            prevBtn.disabled = testState.currentPage <= 1;
            nextBtn.disabled = false;
            nextBtn.textContent = (testState.currentPage === config.LAST_TEST_PAGE_INDEX) ? 'Abschliessen' : 'Weiter';
        }
        if(testState.currentPage === config.FINISH_PAGE_INDEX) {
            prevBtn.disabled = false;
            nextBtn.style.display = 'none';
        } else {
             nextBtn.style.display = 'inline-block';
        }
    }

    function updateProgressIndicator() {
        if (!progressIndicator) return;
        const page = testState.currentPage;
        const sectionNames = ['Teil A', 'Teil B', 'Teil B', 'Teil B', 'Teil B', 'Teil C', 'Teil C', 'Teil C', 'Teil C', 'Teil C', 'Teil D', 'Teil D', 'Teil D', 'Teil E'];
        if (page === 0) { progressIndicator.textContent = 'Startseite'; }
        else if (page >= 1 && page <= config.LAST_TEST_PAGE_INDEX) { progressIndicator.textContent = `${sectionNames[page - 1]} (Seite ${page} von ${config.LAST_TEST_PAGE_INDEX})`; }
        else if (page === config.FINISH_PAGE_INDEX) { progressIndicator.textContent = 'Test abgeschlossen'; }
    }

    function updateProgressBar() {
        const firstTestPage = 1; const lastTestPage = config.LAST_TEST_PAGE_INDEX; const totalTestPages = lastTestPage - firstTestPage + 1;
        let progress = 0;
        if (testState.currentPage >= firstTestPage && testState.currentPage <= lastTestPage) { progress = ((testState.currentPage - firstTestPage + 1) / totalTestPages) * 100; }
        else if (testState.currentPage > lastTestPage) { progress = 100; }
        if (progressBar) { setTimeout(() => { progressBar.style.width = `${Math.min(100, progress)}%`; }, 0); }
    }

    // --- Zustand Wiederherstellen & Dateiverwaltung ---
    function restoreAnswers() {
        if (studentNameInput) studentNameInput.value = testState.studentName || "";
        const currentSection = document.querySelector('.test-section.active');
        if(!currentSection) return;
        currentSection.querySelectorAll('input, select, textarea').forEach(el => { if (el.type === 'radio' || el.type === 'checkbox') el.checked = false; else if (el.id !== 'student-name') el.value = ''; });
        if (!testState.answers) testState.answers = {};
        Object.keys(testState.answers).forEach(key => {
            const value = testState.answers[key];
            const elementsByName = currentSection.querySelectorAll(`[name="${key}"]`);
            if (elementsByName.length > 0) {
                if (elementsByName[0].type === 'radio') {
                    elementsByName.forEach(radio => radio.checked = (radio.value === value));
                } else if (elementsByName[0].type === 'checkbox') {
                    elementsByName.forEach(cb => cb.checked = Array.isArray(value) && value.includes(cb.value));
                } else {
                    elementsByName[0].value = value || '';
                }
            } else {
                const elementById = currentSection.querySelector(`#${CSS.escape(key)}`);
                if (elementById) elementById.value = value || '';
            }
        });
        document.querySelectorAll('input.gap-input').forEach(resizeGapInput);
        updateWordCount();
    }

    async function selectSaveDirectory() {
        if (!window.showDirectoryPicker) { alert("Ihr Browser unterstützt die Ordnerauswahl nicht. Bitte verwenden Sie einen Chromium-basierten Browser (z.B. Chrome oder Edge)."); return; }
        try {
            saveDirectoryHandle = await window.showDirectoryPicker({ id: 'germanTestSaveFolder', mode: 'readwrite' });
            await saveDirectoryHandle.requestPermission({ mode: 'readwrite' });
            dirStatus.textContent = `Ordner '${saveDirectoryHandle.name}' bereit. Prüfe...`;
            dirCheck.classList.remove('hidden');
            const loaded = await loadProgressFromFileSystem();
            if (!loaded) dirStatus.textContent = `Ordner '${saveDirectoryHandle.name}' bereit.`;
            else dirStatus.textContent = `Ordner '${saveDirectoryHandle.name}' bereit (Zwischenstand geladen).`;
            if (studentNameInput.value.trim()) startBtn.disabled = false;
        } catch (err) {
            console.error("Ordnerauswahl Fehler:", err);
            saveDirectoryHandle = null; dirCheck.classList.add('hidden'); startBtn.disabled = true;
        }
    }

    async function writeToFile(filename, content) {
        if (!saveDirectoryHandle) return false;
        try {
            const fileHandle = await saveDirectoryHandle.getFileHandle(filename, { create: true });
            const writable = await fileHandle.createWritable();
            await writable.write(content);
            await writable.close();
            return true;
        } catch (err) { console.error(`Fehler Schreiben ${filename}:`, err); return false; }
    }

    async function loadProgressFromFileSystem() {
        if (!saveDirectoryHandle) return false;
        try {
            const fileHandle = await saveDirectoryHandle.getFileHandle(config.AUTO_FILE_NAME);
            const file = await fileHandle.getFile();
            const loadedState = JSON.parse(await file.text());
            if (loadedState?.saveVersion === config.SAVE_FILE_VERSION) {
                if (confirm(`Zwischenstand gefunden (Name: ${loadedState.studentName || '?'}). Fortsetzen?`)) {
                    return loadState(loadedState);
                }
            }
        } catch (err) { if (err.name !== 'NotFoundError') console.error(`Fehler Lesen ${config.AUTO_FILE_NAME}:`, err); }
        return false;
    }

    function loadState(state) {
        Object.assign(testState, state);
        testState.isPaused = false; testState.currentSessionStartTime = null; currentSectionEntryTime = null;
        testStarted = true;
        loadFontSize();
        showSection(testState.currentPage);
        startBtn.disabled = true;
        return true;
    }
    
    // --- INITIALISIERUNG & EVENT LISTENER ---
    function initializeTest() {
        showSection(0);
        loadFontSize();
        updateWordCount();

        selectDirBtn?.addEventListener('click', selectSaveDirectory);
        increaseFontBtn?.addEventListener('click', () => changeFontSize(true));
        decreaseFontBtn?.addEventListener('click', () => changeFontSize(false));

        startBtn?.addEventListener('click', () => {
            if (!saveDirectoryHandle) { alert("Bitte zuerst einen Ordner wählen."); return; }
            const studentName = studentNameInput.value.trim();
            if (!studentName) { nameError.style.display = 'block'; studentNameInput.focus(); return; }
            updateName(studentName);
            testStarted = true;
            if (!testState.testStartTime) testState.testStartTime = Date.now();
            showSection(1);
        });
        
        studentNameInput?.addEventListener('input', (e) => {
            updateName(e.target.value);
            startBtn.disabled = !e.target.value.trim() || !saveDirectoryHandle;
        });

        nextBtn?.addEventListener('click', nextSection);
        prevBtn?.addEventListener('click', prevSection);
        exportBtn?.addEventListener('click', exportResults);

        pauseBtn?.addEventListener('click', () => { testState.isPaused ? resumeTest() : pauseTest(); });
        resumeBtnOverlay?.addEventListener('click', resumeTest);

        testContainer?.addEventListener('input', (e) => {
            if (e.target.id === 'E-01') updateWordCount();
            if (e.target.classList.contains('gap-input')) resizeGapInput.call(e.target);
            autoSaveProgress();
        });
    }

    document.addEventListener('DOMContentLoaded', initializeTest);

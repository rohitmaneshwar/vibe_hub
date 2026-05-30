// 10 LEVELS X 5 CATEGORIES = 50 FLAWLESS CLEAN QUESTIONS
const localPuzzles = {
    1: [
        { cat: "Sports", q: "क्रिकेट खेल में एक टीम में ______ खिलाड़ी मैदान पर होते हैं और कबड्डी में ______।", opts: ["11 / 7", "11 / 11", "9 / 7", "11 / 9"], a: "11 / 7" },
        { cat: "English", q: "The synonym of 'Happy' is ______ and the antonym of 'Sad' is ______.", opts: ["Joyful / Happy", "Angry / Cry", "Glad / Gloomy", "Smile / Bad"], a: "Joyful / Happy" },
        { cat: "GK", q: "भारत की राजधानी ______ है और मध्य प्रदेश की राजधानी ______ है।", opts: ["दिल्ली / भोपाल", "मुंबई / इंदौर", "दिल्ली / ग्वालियर", "कोलकाता / भोपाल"], a: "दिल्ली / भोपाल" },
        { cat: "Reasoning", q: "अगर कल सोमवार था, तो आने वाला कल ______ होगा और परसों ______ होगा।", opts: ["बुधवार / गुरुवार", "मंगलवार / बुधवार", "सोमवार / मंगलवार", "बुधवार / शुक्रवार"], a: "बुधवार / गुरुवार" },
        { cat: "Nature", q: "हमारे सौरमंडल का सबसे बड़ा ग्रह ______ है और सबसे छोटा ग्रह ______ है।", opts: ["बृहस्पति / बुध", "शनि / मंगल", "पृथ्वी / शुक्र", "बृहस्पति / प्लूटो"], a: "बृहस्पति / बुध" }
    ],
    2: [
        { cat: "Sports", q: "ओलंपिक छल्लों (Rings) में ______ रंग होते हैं और फुटबॉल वर्ल्ड कप हर ______ साल में होता है।", opts: ["5 / 4", "6 / 4", "5 / 3", "7 / 2"], a: "5 / 4" },
        { cat: "English", q: "Identify the vowel combo: 'B__autif__l' requires ______ and ______ to complete.", opts: ["e / u", "a / i", "e / i", "o / u"], a: "e / u" },
        { cat: "GK", q: "विश्व का सबसे बड़ा महासागर ______ है और सबसे बड़ा रेगिस्तान ______ है।", opts: ["प्रशांत / सहारा", "हिन्द / थार", "अटलांटिक / गोबी", "प्रशांत / गोबी"], a: "प्रशांत / सहारा" },
        { cat: "Reasoning", q: "Complete the pattern: 2, 4, 8, 16, ______ and 3, 6, 12, 24, ______.", opts: ["32 / 48", "24 / 36", "32 / 36", "64 / 48"], a: "32 / 48" },
        { cat: "Nature", q: "पेड़ की पत्तियां ______ के कारण हरी होती हैं और वे ______ गैस छोड़ती हैं।", opts: ["क्लोरोफिल / ऑक्सीजन", "नाइट्रोजन / कार्बन", "क्लोरोफिल /  nitrogen", "पानी /  oxygen"], a: "क्लोरोफिल / ऑक्सीजन" }
    ],
    3: [
        { cat: "Sports", q: "हॉकी के जादूगर ______ को कहा जाता है और मिल्खा सिंह को ______ सिंह कहते हैं।", opts: ["मेजर ध्यानचंद /  फ्लाइंग", "सचिन / सुल्तान", "ध्यानचंद / किंग", "नेहरू / आयरन"], a: "मेजर ध्यानचंद /  फ्लाइंग" },
        { cat: "English", q: "Plural of 'Man' is ______ and plural of 'Child' is ______.", opts: ["Men / Children", "Mans / Childs", "Mens / Childrens", "Man / Child"], a: "Men / Children" },
        { cat: "GK", q: "सौरमंडल का सबसे गर्म ग्रह ______ है और 'नीला ग्रह' ______ को कहते हैं।", opts: ["शुक्र /  पृथ्वी", "बुध / मंगल", "मंगल / शुक्र", "बृहस्पति / शनि"], a: "शुक्र /  पृथ्वी" },
        { cat: "Reasoning", q: "सेब एक ______ है और आलू जमीन के अंदर उगने वाला एक ______ है।", opts: ["फल / तना", "Sabczi / जड़", "फल / फल", "बीज / तna"], a: "फल / तना" },
        { cat: "Nature", q: "शुद्ध पानी का रासायनिक सूत्र ______ है और साधारण नमक का ______ है।", opts: ["H2O / NaCl", "CO2 / HCl", "H2O / NaOH", "O2 / KOH"], a: "H2O / NaCl" }
    ],
    4: [
        { cat: "Sports", q: "आईपीएल (IPL) की शुरुआत ______ में हुई थी और पहला सीजन ______ ने जीता था।", opts: ["2008 / राजस्थान रॉयल्स", "2007 / मुंबई इंडियंस", "2009 / चेन्नई सुपर किंग्स", "2008 / डेक्कन चार्जर्स"], a: "2008 / राजस्थान रॉयल्स" },
        { cat: "English", q: "Past form of 'Eat' is ______ and its third form is ______.", opts: ["ate / eaten", "eated / eaten", "ate / eated", "eating / eats"], a: "ate / eaten" },
        { cat: "GK", q: "भारत के प्रथम प्रधानमंत्री ______ थे और प्रथम राष्ट्रपति ______ थे।", opts: ["जवाहरलाल नेहरू / डॉ. राजेंद्र प्रसाद", "महात्मा गांधी / नेहरू", "सरदार पटेल / डॉ. कलाम", "शास्त्री / डॉ. राजेंद्र प्रसाद"], a: "जवाहरलाल नेहरू / डॉ. राजेंद्र प्रसाद" },
        { cat: "Reasoning", q: "यदि पैर का संबंध ______ से है, तो हाथ का संबंध ______ से होगा।", opts: ["जूते / दस्ताने", "मोज़े / घड़ी", "चप्पल / अंगूठी", "रास्ते / काम"], a: "जूते / दस्ताने" },
        { cat: "Nature", q: "ताजमहल ______ नदी के किनारे है और दिल्ली का लाल किला ______ के किनारे है।", opts: ["यमुना /  यमुना", "गंगा /  यमुना", "नर्मदा / ताप्ती", "यमुना / गंगा"], a: "यमुना /  यमुना" }
    ],
    5: [
        { cat: "Sports", q: "मैराथन दौड़ की कुल दूरी लगभग ______ किमी होती है और हाफ मैराथन ______ किमी।", opts: ["42 / 21", "50 / 25", "42 / 10", "30 / 15"], a: "42 / 21" },
        { cat: "English", q: "Form of 'Write': second form is ______ and third form is ______.", opts: ["wrote / written", "written / wrote", "write / wrote", "writing / writes"], a: "wrote / written" },
        { cat: "GK", q: "भारत की 'पिंक सिटी' ______ को कहा जाता है और 'झीलों की नगरी' ______ है।", opts: ["जयपुर / उदयपुर", "जोधपुर / जयपुर", "जयपुर / भोपाल", "इंदौर / उदयपुर"], a: "जयपुर / उदयपुर" },
        { cat: "Reasoning", q: "यदि कार का संबंध ______ से है, तो हवाई जहाज का संबंध ______ से है।", opts: ["रोड / आसमान", "पेट्रोल / पायलट", "पहie / पंख", "ड्राइवर / रनवे"], a: "रोड / आसमान" },
        { cat: "Nature", q: "सूर्य ग्रहण हमेशा ______ के दिन होता है और चंद्र ग्रहण ______ के दिन।", opts: ["अमावस्या / पूर्णिमा", "पूर्णिमा / अमावस्या", "रविवार / सोमवार", "अमावस्या / अमावस्या"], a: "अमावस्या / पूर्णिमा" }
    ],
    6: [
        { cat: "Sports", q: "शतरंज (Chess) बोर्ड में कुल ______ खाने होते हैं और इसमें ______ खिलाड़ी खेलते हैं।", opts: ["64 / 2", "60 / 2", "64 / 4", "32 / 2"], a: "64 / 2" },
        { cat: "English", q: "Antonym of 'Dark' is ______ and synonym of 'Big' is ______.", opts: ["Light / Huge", "Black / Small", "Bright / Short", "White / Tiny"], a: "Light / Huge" },
        { cat: "GK", q: "भारत का राष्ट्रीय खेल ______ माना जाता है और राष्ट्रीय पक्षी ______ है।", opts: ["हॉकी / मोर", "क्रिकेट / तोता", "फुटबॉल / बाज", "हॉकी / कबूतर"], a: "हॉकी / मोर" },
        { cat: "Reasoning", q: "यदि अस्पताल का संबंध ______ से है, तो स्कूल का संबंध ______ से है।", opts: ["डॉक्टर / शिक्षक", "मरीज / छात्र", "दवाई / किताब", "सफेद / ब्लैकबोर्ड"], a: "डॉक्टर / शिक्षक" },
        { cat: "Nature", q: "पृथ्वी पर सबसे तेज़ दौड़ने वाला जानवर ______ है और सबसे बड़ा जीव ______ है।", opts: ["चीता /  ब्लू व्हेल", "शेर / हाथी", "चीता / जिराफ़", "घोड़ा /  ब्लू व्हेल"], a: "चीता /  ब्लू व्हेल" }
    ],
    7: [
        { cat: "Sports", q: "सानिया मिर्जा ______ खेल से जुड़ी हैं और साइना नेहवाल ______ से।", opts: ["टेनिस / बैडमिंटन", "बैडमिंटन / टेनिस", "टेनिस / क्रिकेट", "कुश्ती / बैडमिंटन"], a: "टेनिस / बैडमिंटन" },
        { cat: "English", q: "Synonym of 'Rich' is ______ and its antonym is ______.", opts: ["Wealthy / Poor", "Poor / Wealthy", "Money / Hard", "Happy / Sad"], a: "Wealthy / Poor" },
        { cat: "GK", q: "कागज़ का आविष्कार सबसे पहले ______ में हुआ और शून्य (0) का आविष्कार ______ में हुआ।", opts: ["चीन / भारत", "भारत / चीन", "अमेरिका / भारत", "मिस्र / यूनान"], a: "चीन / भारत" },
        { cat: "Reasoning", q: "गणित में 5 का वर्ग (Square) ______ है और 10 का वर्ग ______ होता है।", opts: ["25 / 100", "20 / 40", "25 / 50", "15 / 100"], a: "25 / 100" },
        { cat: "Nature", q: "रेगिस्तान का जहाज़ ______ को कहते हैं और जंगल का राजा ______ है।", opts: ["ऊँट / शेर", "घोड़ा / चीता", "ऊँट / बाघ", "हाथी / शेर"], a: "ऊँट / शेर" }
    ],
    8: [
        { cat: "Sports", q: "नीरज चोपड़ा ______ खेल से जुड़े हैं और अभिनv बिंद्रा ______ से।", opts: ["भाला फेंक / शूटिंग", "शूटिंग / भाला फेंक", "दौड़ / कुश्ती", "भाला फेंक / बॉक्सिंग"], a: "भाला फेंक / शूटिंग" },
        { cat: "English", q: "Plural of 'Box' is ______ and plural of 'Ox' is ______.", opts: ["Boxes / Oxen", "Boxs / Oxes", "Boxes / Oxes", "Boxed / Oxen"], a: "Boxes / Oxen" },
        { cat: "GK", q: "कंप्यूटर का जनक ______ को कहा जाता है और दिमाग ______ को कहते हैं।", opts: ["चार्ल्स बैबेज / CPU", "न्यूटन / RAM", "पास्कल / हार्डडिस्क", "एडिसन / CPU"], a: "चार्ल्स बैबेज / CPU" },
        { cat: "Reasoning", q: "जनवरी के ठीक बाद ______ आता है और अक्टूबर के ठीक पहले ______ आता है।", opts: ["फरवरी / सितंबर", "मार्च / नवंबर", "फरवरी / अगस्त", "दिसंबर / नवंबर"], a: "फरवरी / सितंबर" },
        { cat: "Nature", q: "दुनिया का सबसे बड़ा फूल ______ है और सबसे छोटा पौधा ______ श्रेणी का है।", opts: ["रेफ्लेसिया / वोल्फिया", "गुलाब / कैक्टस", "कमल / काई", "सूरजमुखी / तुलसी"], a: "रेफ्लेसिया / वोल्फिया" }
    ],
    9: [
        { cat: "Sports", q: "भारत ने पहला क्रिकेट वर्ल्ड कप ______ में जीता और दूसरा वनडे वर्ल्ड कप ______ में।", opts: ["1983 / 2011", "1983 / 2007", "1975 / 2011", "1999 / 2015"], a: "1983 / 2011" },
        { cat: "English", q: "Synonym of 'Smart' is ______ and antonym of 'Fast' is ______.", opts: ["Intelligent / Slow", "Clever / Quick", "Dull / Slow", "Brilliant / Run"], a: "Intelligent / Slow" },
        { cat: "GK", q: "गेटवे ऑफ इंडिया ______ में है और 'इंडिया गेट' ______ शहर में स्थित है।", opts: ["मुंबई / दिल्ली", "दिल्ली / मुंबई", "मुंबई / कोलकाता", "चेन्नई / दिल्ली"], a: "मुंबई / दिल्ली" },
        { cat: "Reasoning", q: "रिश्तों में माता के भाई को ______ कहते हैं और पिता के भाई को ______ कहते हैं।", opts: ["मामा / चाचा", "चाचा / मामा", "मौसा / ताऊ", "मामा / फूफा"], a: "मामा / चाचा" },
        { cat: "Nature", q: "सूर्य ग्रहण हमेशा ______ के दिन होता है और चंद्र ग्रहण ______ के दिन।", opts: ["अमावस्या / पूर्णिमा", "पूर्णिमा / अमावस्या", "मंगल / सूर्य", "सूर्य / सीरियस"], a: "अमावस्या / पूर्णिमा" }
    ],
    10: [
        { cat: "Sports", q: "फीफा (FIFA) का संबंध ______ से है और आईसीसी (ICC) का संबंध ______ से है।", opts: ["फुटबॉल / क्रिकेट", "क्रिकेट / फुटबॉल", "टेनिस / हॉकी", "फुटबॉल / टेनिस"], a: "फुटबॉल / क्रिकेट" },
        { cat: "English", q: "Grammar fill: 'He ______ to school' and 'They ______ to school' every day.", opts: ["goes / go", "go / goes", "going / go", "gone / goes"], a: "goes / go" },
        { cat: "GK", q: "भारत की सबसे लंबी नदी ______ है और सबसे चौड़ी नदी ______ है।", opts: ["गंगा / ब्रह्मपुत्र", "यमुना / गंगा", "गोदावरी / सिंधु", "गंगा / नर्मदा"], a: "गंगा / ब्रह्मपुत्र" },
        { cat: "Reasoning", q: "यदि रात का उल्टा ______ है, तो सुबह का उल्टा ______ होगा।", opts: ["दिन / शाम", "अंधेरा / उजाला", "दिन / रात", "दोपहर / शाम"], a: "दिन / शाम" },
        { cat: "Nature", q: "ओजोन परत हमें ______ किरणों से बचाती है और यह ______ मंडल में पाई जाती है।", opts: ["पराबैंगनी / समताप", "इन्फ्रारेड / क्षोभ", "एक्स-रे / आयन", "पराबैंगनी / बाह्य"], a: "पराबैंगनी / समताप" }
    ]
};

const categories = ["Sports", "English", "GK", "Reasoning", "Nature"];

// FIX: Track XP explicitly inside active global runtime variable
let currentLvl = 1; let currentQuestIdx = 0; let currentXP = 0;
let clickAttempts = 0; let puzzleSolved = false;
let pName = "Player 1"; let timerInterval = null; let ticksLeft = 15;

const quoteText = document.getElementById('puzzle-quote-text');
const optionsContainer = document.getElementById('options-container');
const attemptTracker = document.getElementById('attempt-tracker');
const captureArea = document.getElementById('capture-node');
const expFill = document.getElementById('exp-fill');
const expText = document.getElementById('exp-text');
const lvlTag = document.getElementById('lvl-tag');
const lvlSplash = document.getElementById('lvl-splash');
const timerContainer = document.getElementById('timer-container');
const timerFill = document.getElementById('timer-fill');
const lbContainer = document.getElementById('leaderboard-container');

// AUDIO MODULE
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playArcadeSound(type) {
    try {
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        if (type === 'correct') {
            osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
            osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
            osc.start(); osc.stop(audioCtx.currentTime + 0.2);
        } else if (type === 'wrong') {
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(120, audioCtx.currentTime);
            osc.frequency.linearRampToValueAtTime(60, audioCtx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
            osc.start(); osc.stop(audioCtx.currentTime + 0.25);
        } else if (type === 'lvlup') {
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
            osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
            osc.start(); osc.stop(audioCtx.currentTime + 0.3);
        }
    } catch (e) {}
}

// FIX: UPGRADED TO MULTI-USER SEPARATE MEMORY SAVE CORES
function loadSavedGameProgress() {
    const currentUser = localStorage.getItem('rohit_current_user');
    let users = JSON.parse(localStorage.getItem('rohit_trivia_users')) || {};
    
    if (currentUser && users[currentUser.toLowerCase()]) {
        const state = users[currentUser.toLowerCase()];
        pName = state.name;
        currentLvl = state.currentLvl;
        currentQuestIdx = state.currentQuestIdx;
        currentXP = state.currentXP || 0;
        
        document.getElementById('player-display-name').innerText = pName;
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('main-gameboard').style.display = 'block';
        
        // Sync fixed runtime XP metrics instantly
        expFill.style.width = `${currentXP}%`;
        expText.innerText = `${currentXP}/100 XP`;
        
        resizeCanvas();
        loadLevelQuest();
    } else {
        document.getElementById('login-overlay').style.display = 'flex';
        document.getElementById('main-gameboard').style.display = 'none';
    }
    renderLeaderboard();
}

function saveGameProgress() {
    let users = JSON.parse(localStorage.getItem('rohit_trivia_users')) || {};
    users[pName.toLowerCase()] = { 
        name: pName, currentLvl, currentQuestIdx, currentXP 
    };
    localStorage.setItem('rohit_trivia_users', JSON.stringify(users));
    localStorage.setItem('rohit_current_user', pName);
    updateLeaderboardScores();
}

// LOGOUT / SWITCH USER CONTROLLER
function logoutUser() {
    localStorage.removeItem('rohit_current_user');
    clearInterval(timerInterval);
    document.getElementById('username-field').value = '';
    document.getElementById('login-overlay').style.display = 'flex';
    document.getElementById('main-gameboard').style.display = 'none';
    renderLeaderboard();
}

function updateLeaderboardScores() {
    let users = JSON.parse(localStorage.getItem('rohit_trivia_users')) || {};
    let lb = [];
    for (let key in users) {
        lb.push({ name: users[key].name, lvl: users[key].currentLvl, quest: users[key].currentQuestIdx });
    }
    lb.sort((a, b) => (b.lvl * 10 + b.quest) - (a.lvl * 10 + a.quest));
    lb = lb.slice(0, 5);
    localStorage.setItem('rohit_trivia_lb', JSON.stringify(lb));
    renderLeaderboard();
}

function renderLeaderboard() {
    let lb = JSON.parse(localStorage.getItem('rohit_trivia_lb')) || [];
    lbContainer.innerHTML = lb.length === 0 ? '<div class="lb-row" style="justify-content:center;opacity:0.5;">No Champions yet</div>' : '';
    lb.forEach((player, index) => {
        lbContainer.innerHTML += `
            <div class="lb-row">
                <div class="lb-rank-name"><span class="lb-rank">#${index+1}</span> <span>${player.name}</span></div>
                <div class="lb-badge">LVL ${player.lvl} - Q${player.quest + 1}</div>
            </div>`;
    });
}

window.addEventListener('DOMContentLoaded', loadSavedGameProgress);

function initPlayerSession() {
    const input = document.getElementById('username-field').value.trim();
    if (!input) { alert("कृपया एक सुंदर सा name दर्ज करें!"); return; }
    pName = input;
    
    let users = JSON.parse(localStorage.getItem('rohit_trivia_users')) || {};
    // Switch or create profile route maps safely
    if (users[pName.toLowerCase()]) {
        const state = users[pName.toLowerCase()];
        currentLvl = state.currentLvl;
        currentQuestIdx = state.currentQuestIdx;
        currentXP = state.currentXP || 0;
    } else {
        currentLvl = 1; currentQuestIdx = 0; currentXP = 0;
    }
    
    document.getElementById('player-display-name').innerText = pName;
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('main-gameboard').style.display = 'block';
    
    expFill.style.width = `${currentXP}%`;
    expText.innerText = `${currentXP}/100 XP`;
    
    resizeCanvas();
    saveGameProgress();
    loadLevelQuest();
}

function runArcadeTimer() {
    clearInterval(timerInterval);
    if (currentLvl === 1) { timerContainer.style.display = 'none'; return; }
    timerContainer.style.display = 'block';
    ticksLeft = 15; timerFill.style.width = '100%';

    timerInterval = setInterval(() => {
        ticksLeft--;
        timerFill.style.width = `${(ticksLeft / 15) * 100}%`;
        if (ticksLeft <= 0) {
            clearInterval(timerInterval); puzzleSolved = true;
            playArcadeSound('wrong'); quoteText.style.color = 'var(--game-red)';
            quoteText.innerText = "💥 TIME EXPIRED! RETRYING...";
            updateXP(5, 'lose'); lockAllOptionsButtons();
            saveGameProgress();
            setTimeout(() => { loadLevelQuest(); }, 1500);
        }
    }, 1000);
}

// TYPEWRITER ENGINE LAYER
function typeWriteQuestion(fullText, qData) {
    let plainText = fullText.replace(/______/g, "______");
    quoteText.innerHTML = ""; optionsContainer.innerHTML = "";
    
    let i = 0; clearInterval(window.typewriterTimer);
    window.typewriterTimer = setInterval(() => {
        if (i < plainText.length) {
            quoteText.innerHTML += plainText.charAt(i); i++;
        } else {
            clearInterval(window.typewriterTimer);
            let htmlString = fullText.replace("______", `<span class="blank-space">______</span>`);
            htmlString = htmlString.replace("______", `<span class="blank-space">______</span>`);
            quoteText.innerHTML = htmlString;
            renderOptionButtonsGrid(qData);
        }
    }, 12);
}

function loadLevelQuest() {
    clearInterval(timerInterval);
    puzzleSolved = false; clickAttempts = 0;
    quoteText.style.color = '#f8fafc'; attemptTracker.innerText = "Lifelines: 2";
    
    const activeCat = categories[currentQuestIdx];
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`cat-${activeCat.toLowerCase()}`).classList.add('active');
    
    document.getElementById('quest-track-label').innerText = `QUEST: ${currentQuestIdx + 1} / 5`;
    lvlTag.innerText = `LEVEL ${currentLvl}`;

    const qData = localPuzzles[currentLvl][currentQuestIdx];
    typeWriteQuestion(qData.q, qData);
}

function renderOptionButtonsGrid(qData) {
    let rawOptions = [...qData.opts];
    if (currentLvl > 1) {
        rawOptions.sort(() => Math.random() - 0.5); runArcadeTimer();
    } else {
        timerContainer.style.display = 'none';
    }
    rawOptions.forEach(opt => {
        const btn = document.createElement('button'); btn.classList.add('puzzle-opt-btn');
        btn.innerHTML = `<span>🎮 ${opt}</span>`;
        btn.addEventListener('click', () => evaluateChoice(btn, opt, qData.a));
        optionsContainer.appendChild(btn);
    });
}

function evaluateChoice(element, choice, correctValue) {
    if (puzzleSolved || clickAttempts >= 2) return;
    clickAttempts++;
    attemptTracker.innerText = `Lifelines: ${2 - clickAttempts}`;

    if (choice === correctValue) {
        clearInterval(timerInterval); puzzleSolved = true;
        playArcadeSound('correct'); element.classList.add('correct');
        element.innerHTML += ` <span>✅ +10 XP</span>`;

        const words = correctValue.split(' / ');
        let solvedHtml = localPuzzles[currentLvl][currentQuestIdx].q.replace("______", `<span style="color:var(--game-green)">${words[0]}</span>`);
        solvedHtml = solvedHtml.replace("______", `<span style="color:var(--game-green)">${words[1]}</span>`);
        quoteText.innerHTML = solvedHtml;

        createConfetti(element.getBoundingClientRect().left + 40, element.getBoundingClientRect().top);
        updateXP(10, 'gain'); lockAllOptionsButtons();
        saveGameProgress();

        setTimeout(() => {
            if (currentQuestIdx < 4) {
                currentQuestIdx++; loadLevelQuest();
            } else {
                if (currentLvl < 10) {
                    currentLvl++; currentQuestIdx = 0; triggerLevelUpBanner();
                } else {
                    lvlSplash.innerHTML = `🏆 GRAND CHAMPION! 🏆<br><span style="font-size:1rem;color:#f8fafc">Congrats ${pName}! All 10 tiers cleared!</span>`;
                    lvlSplash.style.borderColor = "var(--game-green)"; lvlSplash.style.color = "var(--game-green)";
                    lvlSplash.classList.add('show');
                }
            }
            saveGameProgress();
        }, 1500);

    } else {
        element.classList.add('wrong'); playArcadeSound('wrong');
        updateXP(5, 'lose'); saveGameProgress();

        if (currentLvl > 1 && clickAttempts < 2) {
            setTimeout(() => {
                const btns = Array.from(optionsContainer.children).sort(() => Math.random() - 0.5);
                optionsContainer.innerHTML = ''; btns.forEach(b => optionsContainer.appendChild(b));
            }, 400);
        }
        if (clickAttempts >= 2) {
            clearInterval(timerInterval); puzzleSolved = true;
            attemptTracker.innerText = "QUEST FAILED! RETRYING... 💀"; lockAllOptionsButtons();
            setTimeout(() => { loadLevelQuest(); }, 1500);
        }
    }
}

function lockAllOptionsButtons() {
    Array.from(optionsContainer.children).forEach(btn => btn.style.pointerEvents = 'none');
}

// FIXED LOGIC: Manipulate mathematical variable instead of reading layout widths
function updateXP(amount, direction) {
    if (direction === 'gain') {
        currentXP = Math.min(100, currentXP + amount);
    } else {
        currentXP = Math.max(0, currentXP - amount);
    }
    expFill.style.width = `${currentXP}%`;
    expText.innerText = `${currentXP}/100 XP`;
}

function triggerLevelUpBanner() {
    playArcadeSound('lvlup');
    currentXP = 0; expFill.style.width = "0%"; expText.innerText = "0/100 XP";
    lvlSplash.innerText = `LEVEL UP! LEVEL ${currentLvl} ⚡`; lvlSplash.classList.add('show');
    createConfetti(window.innerWidth/2, window.innerHeight/2);
    setTimeout(() => { lvlSplash.classList.remove('show'); loadLevelQuest(); }, 1800);
}

document.getElementById('next-quote-btn').addEventListener('click', () => { loadLevelQuest(); });

document.getElementById('download-btn').addEventListener('click', () => {
    if (!puzzleSolved) { alert("🔒 पहेली हल करने के बाद ही कार्ड का स्क्रीनशॉट सेव कर सकते हैं!"); return; }
    const btn = document.getElementById('download-btn'); btn.innerText = "SAVING...";
    html2canvas(captureArea, { scale: 3, backgroundColor: null, useCORS: true }).then(canvas => {
        const link = document.createElement('a'); link.download = `Solved-Level-${currentLvl}.png`;
        link.href = canvas.toDataURL("image/png"); link.click(); btn.innerHTML = "📸 Save Card";
    });
});

// Particles Flow
const canvas = document.getElementById('particle-canvas'); const ctx = canvas.getContext('2d'); let particles = [];
function resizeCanvas() { if(canvas) { canvas.width = window.innerWidth; canvas.height = window.innerHeight; } }
window.addEventListener('resize', resizeCanvas);
class Particle {
    constructor(x, y) { this.x = x; this.y = y; this.size = Math.random() * 3 + 1.5; this.speedX = (Math.random() - 0.5) * 2; this.speedY = (Math.random() - 0.5) * 2; this.alpha = 1; }
    update() { this.x += this.speedX; this.y += this.speedY; this.alpha -= 0.02; }
    draw() { ctx.save(); ctx.globalAlpha = this.alpha; ctx.fillStyle = '#a855f7'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
}
function handleMove(e) { const x = e.touches ? e.touches[0].clientX : e.clientX; const y = e.touches ? e.touches[0].clientY : e.clientY; particles.push(new Particle(x, y)); }
window.addEventListener('mousemove', handleMove); window.addEventListener('touchmove', handleMove);
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update(); particles[i].draw(); if (particles[i].alpha <= 0) particles.splice(i, 1);
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();
function createConfetti(x, y) {
    const colors = ['#a855f7', '#ec4899', '#22c55e', '#3b82f6'];
    for(let i=0; i<25; i++) {
        const confetti = document.createElement('div'); confetti.classList.add('confetti'); document.body.appendChild(confetti);
        confetti.style.left = x + 'px'; confetti.style.top = y + 'px'; confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px'); confetti.style.setProperty('--y', (Math.random() - 0.5) * 200 + 'px');
        setTimeout(() => confetti.remove(), 800);
    }
}
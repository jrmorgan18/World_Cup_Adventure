const app = document.querySelector("#app");
const starEl = document.querySelector("#star-count");
const toast = document.querySelector("#toast");
const soundButton = document.querySelector("#sound-button");

const ICON = {
  usa: "&#9733;", players: "&#9917;", world: "&#127758;",
  stars: "&#127775;", history: "&#127942;", smart: "&#129504;", penalty: "&#129349;"
};

const missions = [
  { id: "usa", icon: ICON.usa, title: "Team USA Trail", desc: "Meet our group and get ready to cheer." },
  { id: "players", icon: ICON.players, title: "Build Team USA", desc: "Meet the starters and place them on the field." },
  { id: "stars", icon: ICON.stars, title: "Star Cards", desc: "Collect world stars like soccer trading cards." },
  { id: "world", icon: ICON.world, title: "World Explorer", desc: "Explore countries and earn passport stamps." },
  { id: "history", icon: ICON.history, title: "Build the Cup", desc: "Level up through World Cup history." },
  { id: "smart", icon: ICON.smart, title: "Soccer Smarts", desc: "Rules, teamwork, and great choices." },
  { id: "penalty", icon: ICON.penalty, title: "Penalty Party", desc: "Pick your spot and score for the USA." }
];

const players = [
  { id:"freese", name:"Matt Freese", role:"Goalkeeper", zone:"gk", wiki:"Matt_Freese", clue:"Protects the goal and starts attacks." },
  { id:"robinson", name:"Antonee Robinson", role:"Defender", zone:"def", wiki:"Antonee_Robinson", clue:"Fast left back nicknamed Jedi." },
  { id:"ream", name:"Tim Ream", role:"Defender - Captain", zone:"def", wiki:"Tim_Ream", clue:"Calm leader and captain in the center." },
  { id:"richards", name:"Chris Richards", role:"Defender", zone:"def", wiki:"Chris_Richards_(soccer)", clue:"Strong center back who stops attacks." },
  { id:"dest", name:"Sergino Dest", role:"Defender", zone:"def", wiki:"Sergi%C3%B1o_Dest", clue:"Skillful fullback who loves to attack." },
  { id:"freeman", name:"Alex Freeman", role:"Defender", zone:"def", wiki:"Alex_Freeman", clue:"Young, quick defender on the right." },
  { id:"adams", name:"Tyler Adams", role:"Midfielder", zone:"mid", wiki:"Tyler_Adams", clue:"Wins the ball and organizes the team." },
  { id:"mckennie", name:"Weston McKennie", role:"Midfielder", zone:"mid", wiki:"Weston_McKennie", clue:"Energetic midfielder and great teammate." },
  { id:"tillman", name:"Malik Tillman", role:"Midfielder", zone:"mid", wiki:"Malik_Tillman", clue:"Creative player who makes chances." },
  { id:"pulisic", name:"Christian Pulisic", role:"Forward", zone:"fwd", wiki:"Christian_Pulisic", clue:"Quick dribbler and big-game scorer." },
  { id:"balogun", name:"Folarin Balogun", role:"Forward", zone:"fwd", wiki:"Folarin_Balogun", clue:"Striker who makes fast runs toward goal." }
];

const countries = [
  {code:"us",name:"United States",continent:"North America",food:"Hamburger",foodName:"Hamburger",fact:"One of three 2026 host countries.",favorite:true},
  {code:"mx",name:"Mexico",continent:"North America",food:"Taco",foodName:"Tacos",fact:"The only country to host the men's World Cup three times."},
  {code:"ca",name:"Canada",continent:"North America",food:"Poutine",foodName:"Poutine",fact:"A 2026 host with matches from coast to coast."},
  {code:"pa",name:"Panama",continent:"North America",food:"Sancocho",foodName:"Sancocho",fact:"Panama is in Group L with England, Croatia, and Ghana."},
  {code:"ht",name:"Haiti",continent:"North America",food:"Griot_(food)",foodName:"Griot",fact:"Haiti returned to the World Cup after last appearing in 1974."},
  {code:"cw",name:"Cura\u00e7ao",continent:"North America",food:"Keshi_yena",foodName:"Keshi yena",fact:"Cura\u00e7ao is one of the smallest nations ever to qualify for the World Cup."},
  {code:"br",name:"Brazil",continent:"South America",food:"P%C3%A3o_de_queijo",foodName:"Pao de queijo",fact:"Brazil has won a record five men's World Cups.",favorite:true},
  {code:"ar",name:"Argentina",continent:"South America",food:"Empanada",foodName:"Empanadas",fact:"Argentina won the most recent men's World Cup in 2022.",favorite:true},
  {code:"co",name:"Colombia",continent:"South America",food:"Arepa",foodName:"Arepas",fact:"Colombia is famous for bright yellow soccer shirts.",favorite:true},
  {code:"ec",name:"Ecuador",continent:"South America",food:"Encebollado",foodName:"Encebollado",fact:"Ecuador's home stadium is high in the Andes mountains."},
  {code:"py",name:"Paraguay",continent:"South America",food:"Sopa_paraguaya",foodName:"Sopa paraguaya",fact:"Paraguay is Team USA's first group opponent."},
  {code:"uy",name:"Uruguay",continent:"South America",food:"Chivito_(sandwich)",foodName:"Chivito",fact:"Uruguay won the very first World Cup in 1930."},
  {code:"gb-eng",shape:"gb",name:"England",continent:"Europe",food:"Fish_and_chips",foodName:"Fish and chips",fact:"England won the World Cup at home in 1966.",favorite:true},
  {code:"gb-sct",shape:"gb",name:"Scotland",continent:"Europe",food:"Shortbread",foodName:"Shortbread",fact:"Scotland returned to the World Cup for the first time since 1998."},
  {code:"fr",name:"France",continent:"Europe",food:"Croissant",foodName:"Croissant",fact:"France won in 1998 and 2018.",favorite:true},
  {code:"es",name:"Spain",continent:"Europe",food:"Paella",foodName:"Paella",fact:"Spain won its first World Cup in 2010.",favorite:true},
  {code:"de",name:"Germany",continent:"Europe",food:"Bratwurst",foodName:"Bratwurst",fact:"Germany has won four men's World Cups.",favorite:true},
  {code:"it",name:"Italy",continent:"Europe",food:"Pizza",foodName:"Pasta and pizza",foods:[{name:"Spaghetti with tomato sauce",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Spaghetti_al_pomodoro_3.jpg/960px-Spaghetti_al_pomodoro_3.jpg"},{name:"Cheese pizza",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Margherita_Cl%C3%A1ssica_Italiana.jpg/960px-Margherita_Cl%C3%A1ssica_Italiana.jpg"}],fact:"Italy did not qualify for the 2026 World Cup, even though it has won the tournament four times.",notQualified:true},
  {code:"pt",name:"Portugal",continent:"Europe",food:"Pastel_de_nata",foodName:"Pastel de nata",fact:"Portugal is known for creative attacking players.",favorite:true},
  {code:"nl",name:"Netherlands",continent:"Europe",food:"Stroopwafel",foodName:"Stroopwafel",fact:"The Netherlands wears bright orange.",favorite:true},
  {code:"se",name:"Sweden",continent:"Europe",food:"Swedish_meatballs",foodName:"Swedish meatballs",fact:"Sweden reached the 1958 World Cup final."},
  {code:"be",name:"Belgium",continent:"Europe",food:"Belgian_waffle",foodName:"Waffles",fact:"Belgium reached third place in 2018."},
  {code:"hr",name:"Croatia",continent:"Europe",food:"Pa%C5%A1ticada",foodName:"Pasticada",fact:"Croatia reached the 2018 final."},
  {code:"cz",name:"Czechia",continent:"Europe",food:"Svíčková",foodName:"Svíčková",fact:"Czechia is in Group A with Mexico, South Africa, and South Korea."},
  {code:"ba",name:"Bosnia and Herzegovina",continent:"Europe",food:"%C4%86evapi",foodName:"Cevapi",fact:"Bosnia and Herzegovina qualified through the European playoffs."},
  {code:"tr",name:"T\u00fcrkiye",continent:"Europe and Asia",food:"Baklava",foodName:"Baklava",fact:"T\u00fcrkiye is Team USA's final group opponent."},
  {code:"no",name:"Norway",continent:"Europe",food:"Waffle",foodName:"Norwegian waffles",fact:"Norway has one of the world's most famous strikers.",favorite:true},
  {code:"ch",name:"Switzerland",continent:"Europe",food:"Fondue",foodName:"Cheese fondue",fact:"Switzerland's flag is a white cross on red."},
  {code:"at",name:"Austria",continent:"Europe",food:"Wiener_schnitzel",foodName:"Wiener schnitzel",fact:"Austria reached third place in 1954."},
  {code:"ma",name:"Morocco",continent:"Africa",food:"Tagine",foodName:"Tagine",fact:"Morocco was the first African semifinalist in 2022.",favorite:true},
  {code:"eg",name:"Egypt",continent:"Africa",food:"Koshary",foodName:"Koshary",fact:"Egypt is home to the famous pyramids."},
  {code:"dz",name:"Algeria",continent:"Africa",food:"Couscous",foodName:"Couscous",fact:"Algeria is Africa's largest country by area."},
  {code:"za",name:"South Africa",continent:"Africa",food:"Bobotie",foodName:"Bobotie",fact:"South Africa hosted the 2010 World Cup."},
  {code:"ci",name:"Ivory Coast",continent:"Africa",food:"Cassava",foodName:"Attieke",fact:"The team is nicknamed the Elephants."},
  {code:"cd",name:"DR Congo",continent:"Africa",food:"Fufu",foodName:"Fufu",fact:"DR Congo returned to the World Cup for the first time since 1974."},
  {code:"sn",name:"Senegal",continent:"Africa",food:"Thieboudienne",foodName:"Thieboudienne",fact:"Senegal reached the quarterfinals in 2002."},
  {code:"gh",name:"Ghana",continent:"Africa",food:"Jollof_rice",foodName:"Jollof rice",fact:"Ghana reached the quarterfinals in 2010."},
  {code:"tn",name:"Tunisia",continent:"Africa",food:"Brik",foodName:"Brik",fact:"Tunisia was the first African team to win a World Cup match."},
  {code:"cv",name:"Cabo Verde",continent:"Africa",food:"Cachupa",foodName:"Cachupa",fact:"Cabo Verde is a group of Atlantic Ocean islands."},
  {code:"jp",name:"Japan",continent:"Asia",food:"Sushi",foodName:"Salmon nigiri sushi",foodImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nigiri_Sushi_%2825966163204%29.jpg/960px-Nigiri_Sushi_%2825966163204%29.jpg",fact:"Japan's team is called the Samurai Blue."},
  {code:"kr",name:"South Korea",continent:"Asia",food:"Bibimbap",foodName:"Bibimbap",fact:"South Korea reached the semifinals in 2002."},
  {code:"ir",name:"Iran",continent:"Asia",food:"Chelow_kabab",foodName:"Chelow kebab",fact:"Iran is one of Asia's most successful teams."},
  {code:"iq",name:"Iraq",continent:"Asia",food:"Masgouf",foodName:"Masgouf",fact:"Iraq returned to the World Cup for the first time since 1986."},
  {code:"sa",name:"Saudi Arabia",continent:"Asia",food:"Kabsa",foodName:"Kabsa",fact:"Saudi Arabia beat Argentina at the 2022 World Cup."},
  {code:"uz",name:"Uzbekistan",continent:"Asia",food:"Pilaf",foodName:"Plov",fact:"Uzbekistan qualified for its first men's World Cup."},
  {code:"jo",name:"Jordan",continent:"Asia",food:"Mansaf",foodName:"Mansaf",fact:"Jordan qualified for its first men's World Cup."},
  {code:"qa",name:"Qatar",continent:"Asia",food:"Kabsa",foodName:"Machboos",fact:"Qatar hosted the 2022 World Cup."},
  {code:"au",name:"Australia",continent:"Oceania",food:"Meat_pie_(Australia_and_New_Zealand)",foodName:"Meat pie",fact:"Australia's team is called the Socceroos."},
  {code:"nz",name:"New Zealand",continent:"Oceania",food:"Pavlova",foodName:"Pavlova",fact:"New Zealand's team is called the All Whites."}
];
const populousCodes = new Set(["us","br","mx","jp","eg","ir","tr","de","za","gb-eng","fr","co","kr","es","ar","dz","gh","sa","ma","uz"]);

const simpleQuizzes = {
  usa: [
    {q:"Which team is Team USA's first group opponent?",a:["Paraguay","Spain","Brazil","Japan"],c:0,f:"Paraguay is in South America."},
    {q:"Who is Team USA's captain in this adventure?",a:["Tim Ream","Lionel Messi","Matt Freese","Sergino Dest"],c:0,f:"Tim Ream is a calm, experienced defender."},
    {q:"How many points does a group-stage win earn?",a:["1","2","3","10"],c:2,f:"A win earns 3 points. A tie earns 1."},
    {q:"Which position can use hands inside the penalty area?",a:["Forward","Goalkeeper","Defender","Captain"],c:1,f:"The goalkeeper protects the goal."}
  ],
  smart: [
    {q:"Your teammate is open near goal. What is a great choice?",a:["Pass the ball","Hide the ball","Sit down","Use your hands"],c:0,f:"A smart pass helps the whole team."},
    {q:"The other team scores. What should you do?",a:["Blame someone","Keep trying together","Quit","Argue"],c:1,f:"Great teammates encourage each other."},
    {q:"An opponent falls. What shows respect?",a:["Laugh","Help them up","Take the ball away","Point"],c:1,f:"Fair play means competing hard and showing respect."},
    {q:"A group game ends tied. What happens?",a:["Each team earns 1 point","Both lose","Play all night","Flip a coin"],c:0,f:"A group-stage tie earns each team one point."}
  ]
};
const chants = [
  {id:"usa",title:"U-S-A!",line:"U-S-A! U-S-A!",beat:"stomp",videoId:"_4s15CkoflQ",source:"FOX Sports",tip:"The simplest USA chant. Use it after saves, goals, and big chances.",prompt:"The USA goalkeeper makes a huge save. What can fans chant?",choices:["U-S-A! U-S-A!","Quiet please","Go homework","Nap time"],correct:0},
  {id:"believe",title:"I Believe",line:"I believe that we will win!",beat:"clap",videoId:"7bz6UMwCquM",source:"ESPN / supporter clip",tip:"A famous American soccer chant when the team needs belief.",prompt:"The team needs a boost late in the game. Which chant gives belief?",choices:["I believe that we will win!","Brush your teeth","Time for lunch","No more soccer"],correct:0},
  {id:"weloveya",title:"We Love Ya",line:"We love ya, we love ya, we love ya!",beat:"clap",videoId:"l6FkJsIjVJI",source:"American Outlaws chants page",tip:"A real AO chant for showing the players the fans are with them.",prompt:"Fans want to show the players they support them. Which chant fits?",choices:["We love ya, we love ya, we love ya!","We forgot ya","No cheering today","Go the other team"],correct:0},
  {id:"everywhere",title:"Everywhere We Go",line:"Everywhere we go, people wanna know",beat:"clap",videoId:"iJhinPfU42M",source:"American Outlaws chants page",tip:"A call-and-response AO chant where one fan leads and everyone answers.",prompt:"One fan leads and the crowd repeats back. Which chant is it?",choices:["Everywhere we go","Happy birthday","Silent reading time","Let's go Australia"],correct:0},
  {id:"yanks",title:"Oh When the Yanks Go Marching",line:"Oh when the Yanks go marching in",beat:"stomp",videoId:"qJhhZ1TAg3I",source:"American Outlaws chants page",tip:"A USA soccer version of a classic stadium march.",prompt:"The band starts a marching rhythm. Which USA chant fits?",choices:["Oh when the Yanks go marching in","Take me out to the ballgame","Brush your teeth","Score for them"],correct:0},
  {id:"ole",title:"Come on USA ole",line:"Come on USA, ole!",beat:"clap",videoId:"cC2Tf1uijcQ",source:"American Outlaws chants page",tip:"An AO video chant with the classic soccer 'ole' sound.",prompt:"The crowd wants an 'ole' soccer chant for Team USA. Which one works?",choices:["Come on USA, ole!","Row your boat","No more soccer","Clean your room"],correct:0}
];
const starPlayers = [
  {rank:1,name:"Lamine Yamal",country:"Spain",club:"Barcelona",wiki:"Lamine_Yamal"},{rank:2,name:"Kylian Mbappe",country:"France",club:"Real Madrid",wiki:"Kylian_Mbapp%C3%A9"},{rank:3,name:"Pedri",country:"Spain",club:"Barcelona",wiki:"Pedri"},{rank:4,name:"Erling Haaland",country:"Norway",club:"Manchester City",wiki:"Erling_Haaland"},{rank:5,name:"Leo Messi",country:"Argentina",club:"Inter Miami",wiki:"Lionel_Messi"},
  {rank:6,name:"Michael Olise",country:"France",club:"Bayern Munich",wiki:"Michael_Olise"},{rank:7,name:"Harry Kane",country:"England",club:"Bayern Munich",wiki:"Harry_Kane"},{rank:8,name:"Bruno Fernandes",country:"Portugal",club:"Manchester United",wiki:"Bruno_Fernandes"},{rank:9,name:"Vitinha",country:"Portugal",club:"Paris St. Germain",wiki:"Vitinha"},{rank:10,name:"Jeremy Doku",country:"Belgium",club:"Manchester City",wiki:"J%C3%A9r%C3%A9my_Doku"},
  {rank:11,name:"Vinicius Jr.",country:"Brazil",club:"Real Madrid",wiki:"Vin%C3%ADcius_J%C3%BAnior"},{rank:12,name:"Gabriel",country:"Brazil",club:"Arsenal",wiki:"Gabriel_Magalh%C3%A3es"},{rank:13,name:"Declan Rice",country:"England",club:"Arsenal",wiki:"Declan_Rice"},{rank:14,name:"Nico O'Reilly",country:"England",club:"Manchester City",wiki:"Nico_O%27Reilly"},{rank:15,name:"Antoine Semenyo",country:"Ghana",club:"Manchester City",wiki:"Antoine_Semenyo"},
  {rank:16,name:"Luis Diaz",country:"Colombia",club:"Bayern Munich",wiki:"Luis_D%C3%ADaz_(footballer,_born_1997)"},{rank:17,name:"Raphinha",country:"Brazil",club:"Barcelona",wiki:"Raphinha"},{rank:18,name:"Federico Valverde",country:"Uruguay",club:"Real Madrid",wiki:"Federico_Valverde"},{rank:19,name:"Hakan Calhanoglu",country:"Turkiye",club:"Inter Milan",wiki:"Hakan_%C3%87alhano%C4%9Flu"},{rank:20,name:"Achraf Hakimi",country:"Morocco",club:"Paris St. Germain",wiki:"Achraf_Hakimi"},
  {rank:21,name:"Desire Doue",country:"France",club:"Paris St. Germain",wiki:"D%C3%A9sir%C3%A9_Dou%C3%A9"},{rank:22,name:"Charles De Ketelaere",country:"Belgium",club:"Atalanta",wiki:"Charles_De_Ketelaere"},{rank:23,name:"Willian Pacho",country:"Colombia",club:"Paris St. Germain",wiki:"Willian_Pacho"},{rank:24,name:"Martin Odegaard",country:"Norway",club:"Arsenal",wiki:"Martin_%C3%98degaard"},{rank:25,name:"Joshua Kimmich",country:"Germany",club:"Bayern Munich",wiki:"Joshua_Kimmich"},
  {rank:26,name:"Bruno Guimaraes",country:"Brazil",club:"Newcastle",wiki:"Bruno_Guimar%C3%A3es"},{rank:27,name:"Jude Bellingham",country:"England",club:"Real Madrid",wiki:"Jude_Bellingham"},{rank:28,name:"Jamal Musiala",country:"Germany",club:"Bayern Munich",wiki:"Jamal_Musiala"},{rank:29,name:"Arda Guler",country:"Turkiye",club:"Real Madrid",wiki:"Arda_G%C3%BCler"},{rank:30,name:"Alexis Mac Allister",country:"Argentina",club:"Liverpool",wiki:"Alexis_Mac_Allister"},
  {rank:31,name:"Virgil Van Dijk",country:"Netherlands",club:"Liverpool",wiki:"Virgil_van_Dijk"},{rank:32,name:"Rodri",country:"Spain",club:"Manchester City",wiki:"Rodri_(footballer,_born_1996)"},{rank:33,name:"Weston McKennie",country:"USA",club:"Juventus",wiki:"Weston_McKennie"},{rank:34,name:"Cristiano Ronaldo",country:"Portugal",club:"Al Nassr FC",wiki:"Cristiano_Ronaldo"},{rank:35,name:"Luka Modric",country:"Croatia",club:"AC Milan",wiki:"Luka_Modri%C4%87"}
];

const historyLevels = [
  {id:"rookie",title:"Rookie Researcher",badge:"Bronze Ball",questions:[
    {q:"Who won the most recent men's World Cup in 2022?",a:["Argentina","USA","Spain","Japan"],c:0,f:"Argentina beat France in a thrilling final."},
    {q:"Which country has won the most men's World Cups?",a:["Brazil","Argentina","Germany","France"],c:0,f:"Brazil has won five times."},
    {q:"Who won the very first World Cup in 1930?",a:["Uruguay","Brazil","England","Mexico"],c:0,f:"Uruguay hosted and won the first tournament."}
  ]},
  {id:"expert",title:"History Expert",badge:"Silver Boot",questions:[
    {q:"Who has scored the most goals in men's World Cup history?",a:["Miroslav Klose","Lionel Messi","Pele","Cristiano Ronaldo"],c:0,f:"Germany's Miroslav Klose scored 16 World Cup goals."},
    {q:"Which player won three World Cups?",a:["Pele","Messi","Maradona","Mbappe"],c:0,f:"Brazil legend Pele won in 1958, 1962, and 1970."},
    {q:"Which country has played in the most men's World Cup finals?",a:["Germany","Brazil","USA","Spain"],c:0,f:"Germany has reached the final eight times."}
  ]},
  {id:"legend",title:"World Cup Legend",badge:"Golden Trophy",questions:[
    {q:"What was Team USA's best men's World Cup finish?",a:["Semifinals in 1930","Champion in 1994","Final in 2010","Quarterfinal in 2022"],c:0,f:"The USA reached the semifinals at the first World Cup."},
    {q:"Which nation was the first African men's semifinalist?",a:["Morocco","Senegal","Egypt","South Africa"],c:0,f:"Morocco made history in 2022."},
    {q:"Which country won the 2010 World Cup?",a:["Spain","Netherlands","Brazil","Germany"],c:0,f:"Spain beat the Netherlands in the final."},
    {q:"How many teams play in the 2026 World Cup?",a:["48","32","24","16"],c:0,f:"The 2026 tournament expanded to 48 teams."}
  ]}
];

let state = JSON.parse(localStorage.getItem("wc-adventure-state") || '{"stars":0,"stamps":[],"badges":[],"countryStamps":[],"starCards":[]}');
state.badges ||= []; state.countryStamps ||= []; state.stamps ||= []; state.starCards ||= [];
let soundOn = false, quizQuestions = [], quizIndex = 0, quizMeta = null, answered = false;
let selectedPlayer = null, formationPlaced = {};

function save(){ localStorage.setItem("wc-adventure-state",JSON.stringify(state)); starEl.textContent=state.stars; }
function speak(text){ if(!soundOn||!("speechSynthesis" in window))return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text);u.rate=.88;speechSynthesis.speak(u); }
function page(html){ app.innerHTML=html; window.scrollTo({top:0,behavior:"smooth"}); app.focus({preventScroll:true}); hydrateWikiImages(); }
function flag(country,size="160"){ return `<img class="flag-img" src="https://flagcdn.com/w${size}/${country.code}.png" alt="${country.name} flag">`; }
function showToast(message){toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1900);}
function confetti(){const box=document.querySelector("#confetti");for(let i=0;i<45;i++){const x=document.createElement("i");x.style.left=`${Math.random()*100}%`;x.style.background=["#e63946","#ffca3a","#1167b1","#2f9e44"][i%4];x.style.animationDelay=`${Math.random()*.5}s`;box.appendChild(x);setTimeout(()=>x.remove(),2300);}}
function award(stamp,stars=5){state.stars+=stars;if(!state.stamps.includes(stamp)){state.stamps.push(stamp);confetti();}save();showToast(`Achievement earned! +${stars} stars`);}
async function hydrateWikiImages(){
  document.querySelectorAll("img[data-wiki]").forEach(async img=>{
    if(img.dataset.loaded)return;img.dataset.loaded="1";
    try{
      const r=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${img.dataset.wiki}`),d=await r.json();
      if(d.thumbnail?.source){img.src=d.thumbnail.source;return;}
      const q=await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&pithumbsize=700&origin=*&titles=${img.dataset.wiki}`),data=await q.json();
      const wikiPage=Object.values(data.query?.pages||{})[0];if(wikiPage?.thumbnail?.source){img.src=wikiPage.thumbnail.source;return;}
      const search=encodeURIComponent(img.dataset.search||img.alt);
      const s=await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=0&gsrlimit=3&gsrsearch=${search}&prop=pageimages&pithumbsize=700&origin=*`),searchData=await s.json();
      const match=Object.values(searchData.query?.pages||{}).find(page=>page.thumbnail?.source);if(match?.thumbnail?.source)img.src=match.thumbnail.source;
    }catch(e){}
  });
}

function home(){
  page(`<section class="hero"><img src="assets/team-usa-hero.png" alt="Illustrated Team USA players celebrating"><div class="hero-copy"><p class="eyebrow">Your mission starts now</p><h1>Become a World Cup Superfan!</h1><p>Meet Team USA, explore the world, and build your soccer knowledge.</p><div><button class="primary" data-go="players">Build Team USA &rarr;</button></div></div></section>
  <div class="fact-strip"><div class="fact"><strong>48 teams</strong>from around the world</div><div class="fact"><strong>${countries.length} countries</strong>ready to explore here</div><div class="fact"><strong>${state.countryStamps.length} stamps</strong>in your passport</div></div>
  <h2 class="section-title">Choose a mission</h2><section class="game-grid">${missions.map(m=>`<button class="game-card" data-go="${m.id}"><span class="mini-stamp ${state.stamps.includes(m.id)?"earned":""}">&#10003;</span><span class="game-icon">${m.icon}</span><h3>${m.title}</h3><p>${m.desc}</p></button>`).join("")}</section>`);
}

function shuffleQuestion(question){
  const choices=question.a.map((text,index)=>({text,correct:index===question.c}));
  for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]];}
  return {...question,a:choices.map(x=>x.text),c:choices.findIndex(x=>x.correct)};
}
function startQuiz(questions,meta){quizQuestions=questions.map(shuffleQuestion);quizIndex=0;quizMeta=meta;renderQuiz();}
function renderQuiz(){
  answered=false;const q=quizQuestions[quizIndex];
  page(`<button class="back" data-go="${quizMeta.back}">&larr; Back</button><p class="eyebrow">${quizMeta.label}</p><h2>Question ${quizIndex+1} of ${quizQuestions.length}</h2><div class="progress"><span style="width:${quizIndex/quizQuestions.length*100}%"></span></div><section class="panel"><div class="question">${q.q}</div><div class="answers">${q.a.map((x,i)=>`<button class="answer" data-answer="${i}">${x}</button>`).join("")}</div><div class="feedback" id="feedback">Tap your best answer. You can try again.</div><div class="next-row"><button class="primary" id="next-question" hidden>Next &rarr;</button></div></section>`);
  speak(q.q);
}
function answerQuiz(button){
  if(answered)return;const q=quizQuestions[quizIndex],pick=Number(button.dataset.answer);
  if(pick!==q.c){button.classList.add("wrong");document.querySelector("#feedback").innerHTML="<strong>Good try!</strong> Try another answer.";return;}
  answered=true;button.classList.add("correct");document.querySelectorAll(".answer").forEach((b,i)=>{if(i!==q.c)b.disabled=true;});
  document.querySelector("#feedback").innerHTML=`<strong>Goal! &#9733;</strong>${q.f}`;document.querySelector("#next-question").hidden=false;state.stars++;save();speak(q.f);
}
function nextQuestion(){if(++quizIndex<quizQuestions.length)return renderQuiz();finishQuiz();}
function finishQuiz(){
  if(quizMeta.type==="history"){if(!state.badges.includes(quizMeta.id))state.badges.push(quizMeta.id);award("history",quizMeta.stars);return historyHub();}
  if(quizMeta.type==="country"){if(!state.countryStamps.includes(quizMeta.id))state.countryStamps.push(quizMeta.id);award("world",5);return countryDetail(quizMeta.id);}
  award(quizMeta.id,5);home();
}

function usa(){
  const group=["py","au","tr"].map(code=>countries.find(c=>c.code===code));
  page(`<button class="back" data-go="home">&larr; All missions</button><p class="eyebrow">Team USA Trail</p><h1>Our Group Journey</h1><p>Teams play three group games. Wins earn <strong>3 points</strong>, ties earn <strong>1 point</strong>.</p><section class="match-trail">${group.map((c,i)=>`<article class="match">${flag(c)}<div><time>MATCH ${i+1}</time><h3>USA vs ${c.name}</h3><p>${c.fact}</p></div><button class="primary" data-country="${c.code}">Explore</button></article>`).join("")}</section><section class="chant-preview"><div><p class="eyebrow">Supporter School</p><h2>Learn Team USA Chants</h2><p>Practice kid-safe fan chants with call-and-response audio, then pick the right chant for match moments.</p></div><button class="primary" data-go="chants">Play Chant Coach</button></section><div class="next-row"><button class="primary" data-quiz="usa">Take Team USA Quiz</button></div>`);
}
function beatSound(type="clap",times=3){
  const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return;
  const ctx=new AudioContext();
  for(let i=0;i<times;i++){
    const t=ctx.currentTime+i*.32,osc=ctx.createOscillator(),gain=ctx.createGain();
    osc.type=type==="stomp"?"sine":"square";osc.frequency.setValueAtTime(type==="stomp"?115:650,t);
    gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(type==="stomp"?.22:.08,t+.02);gain.gain.exponentialRampToValueAtTime(.0001,t+.12);
    osc.connect(gain).connect(ctx.destination);osc.start(t);osc.stop(t+.14);
  }
}
function playChant(id){
  const chant=chants.find(x=>x.id===id);if(!chant)return;
  document.querySelectorAll(".chant-video").forEach(el=>el.innerHTML="");
  const slot=document.querySelector(`#chant-video-${chant.id}`);
  if(slot&&chant.videoId)slot.innerHTML=`<iframe title="${chant.title} real supporter clip" src="https://www.youtube-nocookie.com/embed/${chant.videoId}?rel=0&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  beatSound(chant.beat,chant.id==="believe"?5:3);
  showToast(`Real clip: ${chant.title}`);
}
function chantCoach(){
  page(`<button class="back" data-go="usa">&larr; Team USA Trail</button><p class="eyebrow">Supporter School</p><h1>Chant Coach</h1><p>These are real USA supporter chants. The AO-sourced clips come from the American Outlaws chants page. Tap <strong>Real Clip</strong> to load a supporter video, or use <strong>Practice Beat</strong> if YouTube is blocked.</p><section class="chant-grid">${chants.map(c=>`<article class="chant-card"><h3>${c.title}</h3><p class="chant-line">${c.line}</p><p>${c.tip}</p><p class="source-note">Clip source: ${c.source}</p><div class="chant-actions"><button class="secondary" data-play-chant="${c.id}">Real Clip</button><button class="primary" data-practice-beat="${c.id}">Practice Beat</button></div><div class="chant-video" id="chant-video-${c.id}"></div></article>`).join("")}</section><section class="panel chant-panel"><h2>Match Moment Challenge</h2><p>Choose the chant that fits each moment.</p><button class="primary" data-start-chant-game>Start Challenge</button></section>`);
}
let chantRound=0,chantOrder=[];
function startChantGame(){chantOrder=[...chants].sort(()=>Math.random()-.5);chantRound=0;renderChantRound();}
function renderChantRound(){
  const c=chantOrder[chantRound],choices=[...c.choices].sort(()=>Math.random()-.5),correct=choices.indexOf(c.choices[c.correct]);
  page(`<button class="back" data-go="chants">&larr; Chant Coach</button><p class="eyebrow">Chant Challenge</p><h1>Round ${chantRound+1} of ${chantOrder.length}</h1><section class="panel"><div class="question">${c.prompt}</div><div class="answers">${choices.map((x,i)=>`<button class="answer" data-chant-answer="${i}" data-correct="${i===correct}">${x}</button>`).join("")}</div><div class="feedback" id="feedback">Pick the best chant for this match moment.</div></section>`);
}
function answerChant(button){
  if(button.dataset.correct!=="true"){button.classList.add("wrong");document.querySelector("#feedback").innerHTML="<strong>Good try!</strong> Pick the chant fans would use here.";return;}
  button.classList.add("correct");document.querySelectorAll("[data-chant-answer]").forEach(b=>b.disabled=true);
  beatSound(chantOrder[chantRound].beat,chantOrder[chantRound].id==="believe"?5:3);state.stars++;save();
  document.querySelector("#feedback").innerHTML=`<strong>Nice chant! &#9733;</strong>${chantOrder[chantRound].tip}`;
  setTimeout(()=>{chantRound++;if(chantRound<chantOrder.length)renderChantRound();else{award("usa",8);usa();}},1400);
}

function wikiPlayerImage(p,small=false){return `<img class="${small?"mini-player-photo":"player-photo"}" data-wiki="${p.wiki}" src="assets/player-placeholder.svg" alt="${p.name}">`;}
function playerPage(){
  page(`<button class="back" data-go="home">&larr; All missions</button><p class="eyebrow">Build Team USA</p><h1>Meet the Starting Team</h1><p>First learn the players, then tap <strong>Play Formation Game</strong> to put all 11 in their position groups.</p><section class="player-grid">${players.map((p,i)=>`<button class="player-card" data-player="${i}">${wikiPlayerImage(p)}<h3>${p.name}</h3><p class="position">${p.role}</p><p>${p.clue}</p></button>`).join("")}</section><div class="next-row"><button class="primary" data-go="formation">Play Formation Game &rarr;</button></div>`);
}
function playerDetail(i){const p=players[i];showToast(`${p.name}: ${p.clue}`);speak(`${p.name}. ${p.role}. ${p.clue}`);}
function starRarity(rank){return rank<=5?"legend":rank<=15?"rare":"common";}
function starCardImage(p){return `<img class="star-photo" data-wiki="${p.wiki}" src="assets/player-placeholder.svg" alt="${p.name}">`;}
function starCardHtml(p,locked=false){
  const rarity=starRarity(p.rank),owned=state.starCards.includes(p.rank);
  return `<button class="star-card ${rarity} ${locked&&!owned?"locked":""}" data-star-player="${p.rank}">
    <span class="rank">#${p.rank}</span>${starCardImage(p)}<h3>${locked&&!owned?"Mystery Star":p.name}</h3>
    <p class="star-country">${locked&&!owned?"Win a pack to reveal":p.country}</p>
    <p>${locked&&!owned?"????":p.club}</p><span class="rarity">${rarity.toUpperCase()}</span>
  </button>`;
}
function starQuestionCard(p){
  const rarity=starRarity(p.rank);
  return `<article class="star-card ${rarity}">
    <span class="rank">#${p.rank}</span>${starCardImage(p)}<h3>${p.name}</h3>
    <p class="star-country">Answer to reveal this card</p>
    <p>Country and club hidden</p><span class="rarity">${rarity.toUpperCase()}</span>
  </article>`;
}
function starCardsPage(){
  const owned=starPlayers.filter(p=>state.starCards.includes(p.rank));
  page(`<button class="back" data-go="home">&larr; All missions</button><p class="eyebrow">Star Cards</p><h1>World Star Card Binder</h1><p>Collect star-player cards like soccer trading cards. Answer country and club questions to open packs.</p><div class="fact-strip"><div class="fact"><strong>${owned.length}/${starPlayers.length}</strong>cards collected</div><div class="fact"><strong>${owned.filter(p=>starRarity(p.rank)==="legend").length}/5</strong>legends</div><div class="fact"><strong>${state.stars}</strong>stars</div></div><div class="next-row"><button class="primary" data-go="star-game">Open a Card Pack</button></div><section class="star-grid">${starPlayers.map(p=>starCardHtml(p,true)).join("")}</section>`);
}
function starDetail(rank){
  const p=starPlayers.find(x=>x.rank===rank);if(!p)return;
  if(!state.starCards.includes(rank)){showToast("Win this card in a pack first.");return;}
  page(`<button class="back" data-go="stars">&larr; Card binder</button><section class="star-detail ${starRarity(p.rank)}">${starCardHtml(p,false)}<div><p class="eyebrow">Rank #${p.rank}</p><h1>${p.name}</h1><p><strong>Country:</strong> ${p.country}</p><p><strong>Club:</strong> ${p.club}</p><p>This card is in your collection.</p><button class="primary" data-go="star-game">Open another pack</button></div></section>`);
}
let starPack=[],starPackIndex=0;
function startStarGame(){
  const pool=[...starPlayers].sort(()=>Math.random()-.5).slice(0,5);
  starPack=pool.map(p=>Math.random()<.5?{p,type:"country"}:{p,type:"club"});
  starPackIndex=0;renderStarQuestion();
}
function starChoices(correct,values){
  const choices=[correct,...[...new Set(values)].filter(v=>v!==correct).sort(()=>Math.random()-.5).slice(0,3)];
  return choices.sort(()=>Math.random()-.5);
}
function renderStarQuestion(){
  const item=starPack[starPackIndex],p=item.p,isCountry=item.type==="country";
  const choices=starChoices(isCountry?p.country:p.club,starPlayers.map(x=>isCountry?x.country:x.club));
  page(`<button class="back" data-go="stars">&larr; Card binder</button><p class="eyebrow">Open a Pack</p><h1>Card ${starPackIndex+1} of ${starPack.length}</h1><section class="panel star-question"><div class="pack-teaser">${starQuestionCard(p)}</div><div><div class="question">${isCountry?`Which country does ${p.name} play for?`:`Which club is listed for ${p.name}?`}</div><div class="answers">${choices.map(choice=>`<button class="answer" data-star-answer="${choice=== (isCountry?p.country:p.club)}">${choice}</button>`).join("")}</div><div class="feedback" id="feedback">Answer to add this card to your binder.</div></div></section>`);
}
function answerStar(button){
  const item=starPack[starPackIndex],p=item.p;
  if(button.dataset.starAnswer!=="true"){button.classList.add("wrong");document.querySelector("#feedback").innerHTML="<strong>Good try!</strong> Pick another answer.";return;}
  button.classList.add("correct");document.querySelectorAll("[data-star-answer]").forEach(b=>b.disabled=true);
  if(!state.starCards.includes(p.rank)){state.starCards.push(p.rank);state.stars+=starRarity(p.rank)==="legend"?5:starRarity(p.rank)==="rare"?3:2;}
  save();document.querySelector("#feedback").innerHTML=`<strong>Card collected!</strong> ${p.name} joins your binder.`;
  setTimeout(()=>{starPackIndex++;if(starPackIndex<starPack.length)renderStarQuestion();else{award("stars",8);starCardsPage();}},1200);
}
function formation(){
  selectedPlayer=null;formationPlaced={};
  page(`<button class="back" data-go="players">&larr; Player cards</button><p class="eyebrow">Formation Challenge</p><h1>Put Team USA on the Field</h1><p>Tap a player card, then tap the correct position zone.</p><div class="formation-layout"><section class="formation-pitch">
    <button class="zone zone-fwd" data-zone="fwd"><strong>FORWARDS</strong><span>Score goals</span><div class="placed" id="placed-fwd"></div></button>
    <button class="zone zone-mid" data-zone="mid"><strong>MIDFIELDERS</strong><span>Connect the team</span><div class="placed" id="placed-mid"></div></button>
    <button class="zone zone-def" data-zone="def"><strong>DEFENDERS</strong><span>Stop attacks</span><div class="placed" id="placed-def"></div></button>
    <button class="zone zone-gk" data-zone="gk"><strong>GOALKEEPER</strong><span>Protect the goal</span><div class="placed" id="placed-gk"></div></button>
  </section><section><h3 id="formation-status">Choose a player</h3><div class="player-bank">${players.map(p=>`<button class="bank-card" data-select-player="${p.id}">${wikiPlayerImage(p,true)}<span>${p.name}</span></button>`).join("")}</div></section></div>`);
}
function selectFormationPlayer(id){if(formationPlaced[id])return;selectedPlayer=id;document.querySelectorAll(".bank-card").forEach(b=>b.classList.toggle("selected",b.dataset.selectPlayer===id));const p=players.find(x=>x.id===id);document.querySelector("#formation-status").textContent=`Where does ${p.name} play?`;}
function placeFormation(zone){
  if(!selectedPlayer){showToast("Choose a player card first");return;}const p=players.find(x=>x.id===selectedPlayer);
  if(p.zone!==zone){showToast(`Try again: ${p.name} is a ${p.role}`);return;}
  formationPlaced[p.id]=true;document.querySelector(`[data-select-player="${p.id}"]`).classList.add("placed-card");document.querySelector(`#placed-${zone}`).insertAdjacentHTML("beforeend",`<span class="placed-name">${p.name.split(" ").pop()}</span>`);selectedPlayer=null;
  document.querySelector("#formation-status").textContent=`Great placement! ${Object.keys(formationPlaced).length} of 11`;
  if(Object.keys(formationPlaced).length===players.length){award("players",15);document.querySelector("#formation-status").textContent="Starting team complete! Formation badge earned.";}
}

function worldPage(){
  page(`<button class="back" data-go="home">&larr; All missions</button><p class="eyebrow">World Explorer</p><h1>Explore the Soccer World</h1><p>Visit all 48 World Cup teams plus Italy as a bonus country. See each flag, shape, continent, food, and soccer story, then pass its quiz to stamp your passport.</p><div class="filter-row"><button class="filter active" data-filter="all">All ${countries.length}</button><button class="filter" data-filter="population">20 Most Populous</button><button class="filter" data-filter="favorite">Favorites</button><button class="filter" data-filter="Africa">Africa</button><button class="filter" data-filter="Asia">Asia</button><button class="filter" data-filter="Europe">Europe</button></div><section class="country-grid" id="country-grid">${countryCards(countries)}</section>`);
}
function countryCards(list){return list.map(c=>`<button class="country-card" data-country="${c.code}">${flag(c)}<h3>${c.name}</h3><p>${c.continent}</p>${c.notQualified?'<span class="not-qualified-tag">Did not qualify</span>':""}${c.favorite?'<span class="favorite-tag">Tournament favorite</span>':""}${populousCodes.has(c.code)?'<span class="population-tag">Top 20 population</span>':""}${state.countryStamps.includes(c.code)?'<span class="earned-tag">STAMP EARNED</span>':""}</button>`).join("");}
function filterCountries(filter){const list=filter==="all"?countries:filter==="favorite"?countries.filter(c=>c.favorite):filter==="population"?countries.filter(c=>populousCodes.has(c.code)):countries.filter(c=>c.continent.includes(filter));document.querySelector("#country-grid").innerHTML=countryCards(list);document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));}
const continentViews = {
  "North America": {center:[40,-100],zoom:3},
  "South America": {center:[-18,-60],zoom:3},
  "Europe": {center:[52,15],zoom:3},
  "Africa": {center:[2,20],zoom:3},
  "Asia": {center:[34,90],zoom:3},
  "Oceania": {center:[-24,140],zoom:3},
  "Europe and Asia": {center:[39,35],zoom:4}
};
const countryCoordinates = {
  us:[39,-98],mx:[23,-102],ca:[57,-106],pa:[9,-80],ht:[19,-72],cw:[12,-69],br:[-10,-52],ar:[-34,-64],co:[4,-72],ec:[-2,-78],py:[-23,-58],uy:[-33,-56],
  "gb-eng":[52,-1],"gb-sct":[56,-4],fr:[46,2],es:[40,-4],de:[51,10],it:[42,12],pt:[39,-8],nl:[52,5],se:[62,15],be:[51,4],hr:[45,16],cz:[49,15],ba:[44,18],tr:[39,35],no:[62,10],ch:[47,8],at:[47,14],
  ma:[32,-6],eg:[27,30],dz:[28,2],za:[-30,25],ci:[8,-5],cd:[-3,23],sn:[14,-14],gh:[8,-1],tn:[34,9],cv:[16,-24],
  jp:[37,138],kr:[36,128],ir:[32,54],iq:[33,44],sa:[24,45],uz:[41,64],jo:[31,36],qa:[25,51],au:[-25,134],nz:[-41,174]
};
function renderCountryMap(country){
  const mapEl=document.querySelector("#continent-map");if(!mapEl||typeof L==="undefined")return;
  const view=continentViews[country.continent]||{center:[20,0],zoom:2};
  const map=L.map(mapEl,{scrollWheelZoom:false,minZoom:2,maxZoom:6}).setView(view.center,view.zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap contributors"}).addTo(map);
  const coords=countryCoordinates[country.code];
  if(coords)L.circleMarker(coords,{radius:12,color:"#fff",weight:4,fillColor:"#e63946",fillOpacity:1}).addTo(map).bindPopup(`<strong>${country.name}</strong>`).openPopup();
  setTimeout(()=>map.invalidateSize(),50);
}
function countryDetail(code){
  const c=countries.find(x=>x.code===code);if(!c)return worldPage();
  const foodHtml=c.foods?`<div class="food-gallery">${c.foods.map(food=>`<figure><img class="food-img" ${food.image?`src="${food.image}"`:`data-wiki="${food.wiki}" src="assets/food-placeholder.svg"`} alt="${food.name}"><figcaption>${food.name}</figcaption></figure>`).join("")}</div>`:`<img class="food-img" ${c.foodImage?`src="${c.foodImage}"`:`data-wiki="${c.food}" src="assets/food-placeholder.svg"`} alt="${c.foodName}">`;
  page(`<button class="back" data-go="world">&larr; Country explorer</button><section class="country-profile"><div class="country-profile-head">${flag(c,"320")}<div><p class="eyebrow">${c.continent}</p><h1>${c.name}</h1><p>${c.fact}</p></div></div><div class="explore-grid"><article class="visual-card"><h3>Country Shape</h3><img class="shape-img" src="https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${c.shape||c.code}/vector.svg" alt="Shape of ${c.name}"></article><article class="visual-card"><h3>Food: ${c.foodName}</h3>${foodHtml}</article><article class="visual-card continent-card"><h3>${c.name} in ${c.continent}</h3><div id="continent-map" class="continent-map" aria-label="Map showing ${c.name} in ${c.continent}"></div></article></div><button class="primary wide" data-country-quiz="${c.code}">${state.countryStamps.includes(c.code)?"Replay Quiz":"Take Quiz and Earn Stamp"} &rarr;</button></section>`);
  renderCountryMap(c);
}
function uniqueDistractors(correct,values,count=3){
  return [...new Set(values)].filter(value=>value!==correct).slice(0,count);
}
function countryQuiz(code){
  const c=countries.find(x=>x.code===code),others=countries.filter(x=>x.code!==code);
  const continentOptions=[c.continent,...uniqueDistractors(c.continent,others.map(x=>x.continent))];
  const foodOptions=[c.foodName,...uniqueDistractors(c.foodName,others.map(x=>x.foodName))];
  startQuiz([
    {q:`Which country uses this flag?<div class="quiz-flag">${flag(c,"320")}</div>`,a:[c,...others.slice(0,3)].map(x=>`${x.name}`),c:0,f:`That is the flag of ${c.name}.`},
    {q:`Which continent is ${c.name} in?`,a:continentOptions,c:0,f:`${c.name} is in ${c.continent}.`},
    {q:`Which food can you explore from ${c.name}?`,a:foodOptions,c:0,f:`${c.foodName} is connected with ${c.name}.`}
  ],{type:"country",id:code,label:`${c.name} Passport Quiz`,back:"world",stars:5});
}

function historyHub(){
  page(`<button class="back" data-go="home">&larr; All missions</button><p class="eyebrow">Build the Cup</p><h1>World Cup History Levels</h1><p>Beat each level to unlock the next, earn its badge, and collect stars. Facts refer to the men's World Cup.</p><section class="level-grid">${historyLevels.map((l,i)=>{const locked=i>0&&!state.badges.includes(historyLevels[i-1].id);return `<article class="level-card ${state.badges.includes(l.id)?"complete":""} ${locked?"locked":""}"><span class="level-number">${i+1}</span><h2>${l.title}</h2><p><strong>${l.badge}</strong></p><p>${locked?"Complete the level before this one to unlock.":`${l.questions.length} history questions`}</p><button class="primary" data-history="${l.id}" ${locked?"disabled":""}>${locked?"Locked":state.badges.includes(l.id)?"Replay Level":"Start Level"}</button></article>`;}).join("")}</section>`);
}
function historyLevel(id){const l=historyLevels.find(x=>x.id===id);startQuiz(l.questions,{type:"history",id:l.id,label:`Level: ${l.title}`,back:"history",stars:(historyLevels.indexOf(l)+1)*5});}

function passport(){
  page(`<p class="eyebrow">Adventure Passport</p><h1>Your Collection</h1><div class="fact-strip"><div class="fact"><strong>${state.stars}</strong>stars</div><div class="fact"><strong>${state.badges.length}/3</strong>history badges</div><div class="fact"><strong>${state.countryStamps.length}/${countries.length}</strong>country stamps</div></div><h2>History Badges</h2><section class="badge-row">${historyLevels.map(l=>`<div class="badge ${state.badges.includes(l.id)?"earned":""}"><span>&#127942;</span><strong>${l.badge}</strong></div>`).join("")}</section><h2>Country Stamps</h2><section class="passport country-passport">${countries.map(c=>`<button class="stamp ${state.countryStamps.includes(c.code)?"earned":""}" data-country="${c.code}">${flag(c)}<strong>${c.name}</strong></button>`).join("")}</section>`);
}

function penalty(){page(`<button class="back" data-go="home">&larr; All missions</button><p class="eyebrow">Penalty Party</p><h1>Score for Team USA!</h1><p id="kick-score">Goals: 0 | Kicks: 0</p><div class="pitch"><div class="goal"></div><div class="goalie">GK</div><div class="ball">&#9917;</div></div><div class="kick-row"><button class="kick-button" data-kick="left">Left</button><button class="kick-button" data-kick="middle">Middle</button><button class="kick-button" data-kick="right">Right</button></div>`);}
let kicks=0,goals=0;
function kick(direction){if(kicks>=5)return;kicks++;const choices=["left","middle","right"],keeper=choices[Math.floor(Math.random()*3)],g=document.querySelector(".goalie"),b=document.querySelector(".ball");g.style.left=keeper==="left"?"25%":keeper==="right"?"70%":"calc(50% - 34px)";b.style.left=direction==="left"?"27%":direction==="right"?"72%":"calc(50% - 25px)";b.style.bottom="260px";if(keeper!==direction){goals++;state.stars++;save();showToast("GOAL!");}else showToast("Great save!");document.querySelector("#kick-score").textContent=`Goals: ${goals} | Kicks: ${kicks} of 5`;document.querySelectorAll("[data-kick]").forEach(x=>x.disabled=true);setTimeout(()=>{b.style.left="calc(50% - 25px)";b.style.bottom="65px";g.style.left="calc(50% - 34px)";document.querySelectorAll("[data-kick]").forEach(x=>x.disabled=false);if(kicks===5){award("penalty",goals||1);kicks=0;goals=0;}},850);}
function grownups(){page(`<p class="eyebrow">Watch Together</p><h1>Match-Day Games</h1><section class="game-grid"><article class="game-card"><span class="game-icon">&#128269;</span><h3>Player Spotter</h3><p>Choose two player cards and spot them on TV.</p></article><article class="game-card"><span class="game-icon">&#10112;</span><h3>Pass Counter</h3><p>Count consecutive Team USA passes.</p></article><article class="game-card"><span class="game-icon">&#9733;</span><h3>Teamwork Detective</h3><p>Spot a helpful run, pass, high five, or fair-play moment.</p></article></section>`);}

function navigate(route){const routes={home,usa,chants:chantCoach,players:playerPage,formation,stars:starCardsPage,"star-game":startStarGame,world:worldPage,history:historyHub,smart:()=>startQuiz(simpleQuizzes.smart,{type:"mission",id:"smart",label:"Soccer Smarts",back:"home"}),penalty,passport,grownups};(routes[route]||home)();}
document.addEventListener("click",e=>{
  const go=e.target.closest("[data-go]");if(go)return navigate(go.dataset.go);
  const ans=e.target.closest("[data-answer]");if(ans)return answerQuiz(ans);
  const p=e.target.closest("[data-player]");if(p)return playerDetail(Number(p.dataset.player));
  const sp=e.target.closest("[data-star-player]");if(sp)return starDetail(Number(sp.dataset.starPlayer));
  const select=e.target.closest("[data-select-player]");if(select)return selectFormationPlayer(select.dataset.selectPlayer);
  const zone=e.target.closest("[data-zone]");if(zone)return placeFormation(zone.dataset.zone);
  const country=e.target.closest("[data-country]");if(country)return countryDetail(country.dataset.country);
  const cq=e.target.closest("[data-country-quiz]");if(cq)return countryQuiz(cq.dataset.countryQuiz);
  const filter=e.target.closest("[data-filter]");if(filter)return filterCountries(filter.dataset.filter);
  const hist=e.target.closest("[data-history]");if(hist)return historyLevel(hist.dataset.history);
  const quiz=e.target.closest("[data-quiz]");if(quiz)return startQuiz(simpleQuizzes[quiz.dataset.quiz],{type:"mission",id:quiz.dataset.quiz,label:"Team USA Quiz",back:"usa"});
  const play=e.target.closest("[data-play-chant]");if(play)return playChant(play.dataset.playChant);
  const practice=e.target.closest("[data-practice-beat]");if(practice){const c=chants.find(x=>x.id===practice.dataset.practiceBeat);if(c){beatSound(c.beat,c.id==="believe"?5:3);showToast(`Practice beat: ${c.title}`);}return;}
  if(e.target.closest("[data-start-chant-game]"))return startChantGame();
  const chantAnswer=e.target.closest("[data-chant-answer]");if(chantAnswer)return answerChant(chantAnswer);
  const starAnswer=e.target.closest("[data-star-answer]");if(starAnswer)return answerStar(starAnswer);
  const k=e.target.closest("[data-kick]");if(k)return kick(k.dataset.kick);
  if(e.target.closest("#next-question"))return nextQuestion();
});
soundButton.addEventListener("click",()=>{soundOn=!soundOn;soundButton.textContent=soundOn?"ON":"READ";if(soundOn)speak("Read aloud is on.");});
save();home();

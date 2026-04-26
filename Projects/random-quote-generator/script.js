// git and git hub are used for version control .
// Version is a system that records changes to code over time
// so that you can track history , collaborate safely
// and revert to previous state

// why does VC matter

// for history or traceability
// helps in debug
// multiple developers can work on a project
// independently and changes are merge together
//  without overiding each other
// Branches make you work on features without affecting the main code
// main<<<<---->>>> work in progress
// Row back (undo changes) restore previous working versions
// Code review workflow ... teams can review the code and improvements
// can be made and bugs identified

// core git commands and concepts

// Repo ....  its like a folder tracked by git and it contains your codes

// commit(snapshot)... stores your progress in your project

// staging area.. where you preparfe changes to be commited

// branch.... a separate line of work /development

// essential git commands

// to initialize a repository ....... [git init]

//To check status .......[git status].... it shows the modified, staged and contract files

// To add files to staging ......[git add .]

// to commit changes......[git commit -m""].... saves the stage changes/files. (action base)
// quotes is for the commit message of fixture youre addign

// View history ....... [git log] shows the commit history , author and date

// View differences......[git diff] show the chnages not yet staged/added to git
// [git diff--stage] shows staged changes

// Undo/ revert.....[ git revert<commit-#> ] creates a command that undo changes

// concept
// git ignore... files that git does not track and does not pushed to github the files are
// nodemodules... OS runs code on this
// .env ..... envorionmental variables
// .log......
// dist

// safe secret handling
// never commit api keys , passwords, tokens .env files

// why does it matter to use .env
// hackers can steal it
// you amy encure cost
// your may be abused

// Branching and merging
// allows you to work on new features , fix bugs and experiment safely without affecting the main code

// to create a new branch
//  git branch ..name of branch...

// to switch to a new branch
// git chechout ...name of your branch...

// to ceate a branch and switch on it
// git checkout -b ...name of your branch

//
// git branch

// to get all the code in the main
// git pull name of the branch

// git checkout main
// git pull origin main
// git checkout -b
// git add .
// git commmit -m
// git push origin name of branch

// pr is the request to merge your code into another branch

const addBtn = document.getElementById("addBtn");
const quoteBtn = document.getElementById("quoteBtn");
const quoteList = document.getElementById("quoteList");
const quoteInput = document.getElementById("quoteInput");
const quoteText = document.getElementById("quoteText");

let quotes = getQuote() || [
  "He who laughs last laughs the best",
  "The patient dog eats the fatest bone",
  "He who fails to plan, plans to fail",
  "Heaven help those who helps themselve",
  "The stubborn roster ends in the soup kettle",
];

// a function to show the random quotes

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}

quoteBtn.addEventListener("click", () => {
  showRandomQuote();
});

//declare an add function.

function addQuote() {
  const quote = quoteInput.value.trim();

  if (!quote) {
    return;
  }

  quotes.push(quote);

  saveQuotes();

  quoteInput.value = "";

  renderQuotes();
}

addBtn.addEventListener("click", () => {
  addQuote();

  console.log(quotes);
});

//save the quotes to local storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

//getquote function

function getQuote() {
  const savedQuotes = JSON.parse(localStorage.getItem("quotes"));
  if (!savedQuotes) {
    return;
  }

  console.log(savedQuotes);
  return savedQuotes;
}

// display on the web

function renderQuotes() {
  const savedQuotes = getQuote();

  quoteList.innerHTML = "";

  if (!savedQuotes) return;

  savedQuotes.forEach((quote) => {
    const li = document.createElement("li");
    li.classList.add("li");

    li.innerHTML = `<h4>${quote}</h4>`;

    quoteList.appendChild(li);
  });
}

renderQuotes();

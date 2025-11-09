// const authorNames = [
//   "TechGuru",
//   "WanderlustAdventures",
//   "FoodieFiesta",
//   "ArtisticSoul",
//   "FitnessFreak",
//   "BookwormBites",
//   "MusicMaestro",
//   "NatureLover",
//   "ComedyCentral",
// ];

const titles = [
  "My Story",
  "Love",
  "Programming",
  "Graphics Design",
  "UI/UX Design",
  "Fashion",
  "Street Life",
  "Health",
  "Home Management",
];

const contents = [
  "This post is about my story",
  "This post is about my love",
  "This post is about my programming",
  "This post is about my graphics design",
  "This post is about my ui/ux design",
  "This post is about my fashion",
  "This post is about my street life",
  "This post is about my health",
  "This post is about my home management",
];

// ✅ make posts array
const posts = [];

for (let i = 0; i < titles.length; i++) {
  posts.push({
    title: titles[i],
    content: contents[i],
  });
}

// ✅ grab container
const container = document.querySelector(".container");

// ✅ loop through posts and render them into the container
posts.forEach((post) => {
  const postWrapper = document.createElement("div");
  postWrapper.classList.add("post");

  const titleElement = document.createElement("h2");
  titleElement.textContent = post.title;

  const contentElement = document.createElement("p");
  contentElement.textContent = post.content;

  postWrapper.appendChild(titleElement);
  postWrapper.appendChild(contentElement);

  container.appendChild(postWrapper);
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-container");

  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
      posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        postDiv.innerHTML = `
          <h2>${post.title}</h2>
          <p><small>${post.date}</small></p>
          <p>${post.content}</p>
        `;

        container.appendChild(postDiv);
      });
    })
    .catch(err => {
      container.innerHTML = "<p>Error loading posts.</p>";
      console.error(err);
    });
});

export const createPostCard = postInfo => {
  return `
  <li class="posts-item">
      <h2 class="posts-title">${postInfo.title}</h2>
      <p class="posts-text">${postInfo.body}</p>
      <p class="posts-id">id: ${postInfo.id}</p>
  </li>
  `;
};

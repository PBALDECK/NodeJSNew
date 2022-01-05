const posts = require("../../cloud/posts");

const getPostsHandler = (req, reply) => {
    reply.send(posts);
  };
  
  
const getPostHandler = (req, reply) => {
    const { id } = req.params;
  
    const post = posts.filter((post) => {
      return post.id === id;
    })[0];
  
    if (!post) {
        return reply.status(404).send(new Error('Oups nous n avons pas trouvé le post'));
    }
  
    return reply.send(post);
  };

const addPostHandler = (req, reply) => {
  const { title, body } = req.body; 

  const id = posts.length + 1; 
  posts.push({ id, title, body });

  reply.send('Post added');
};

const updatePostHandler = (req, reply) => {
  const { title, body } = req.body;
  const { id } = req.params;

  const post = posts.filter((post) => {
    return post.id === id;
  })[0];

  if (!post) {
    return reply.status(404).send(new Error("Oups le post n existe pas"));
  }

  post.title = title;
  post.body = body;

  return reply.send('le post a été mis à jour avec succès');
};

const deletePostHandler = (req, reply) => {
  const { id } = req.params;

  const postIndex = posts.findIndex((post) => {
    return post.id === id;
  });

  if (postIndex === -1) {
    return reply.status(404).send(new Error("Oups le post n existe pas"));
  }

  posts.splice(postIndex, 1);

  return reply.send('le post a été supprimé avec succès');
};


  module.exports = { getPostsHandler , getPostHandler, addPostHandler, updatePostHandler, deletePostHandler };
const { getPostsSchema, getPostSchema, addPostSchema, updatePostSchema, deletePostSchema } = require('../controllers/schemas/posts');
const { getPostsHandler, addPostHandler, getPostHandler,updatePostHandler, deletePostHandler } = require('../controllers/handlers/posts.js');
const { verifyToken } = require('../controllers/auth/auth')

const getPostsOpts = {
    schema: getPostsSchema,
    handler: getPostsHandler,
  };

const getPostOpts = {
    schema: getPostSchema, 
    handler: getPostHandler, 
};

const addPostOpts = {
    schema:addPostSchema,
    handler:addPostHandler,
};

const updatePostOpts = {
    schema:updatePostSchema,
    handler:updatePostHandler,
};

const deletePostOpts = {
    schema:deletePostSchema,
    handler:deletePostHandler,

};



const postRoutes = (fastify, options, done) => {
    fastify.get('/api/posts', getPostsOpts);
    fastify.get('/api/posts/:id', getPostOpts);

    fastify.register(require('fastify-auth')).after(() => privatePostRoutes(fastify));
    
    done();
    
};

const privatePostRoutes = (fastify) => {
    
    fastify.post('/api/posts/new', {
      preHandler: fastify.auth([verifyToken]),
      ...addPostOpts,
    });
    fastify.put('/api/posts/edit/:id', {
      preHandler: fastify.auth([verifyToken]),
      ...updatePostOpts,
    });
    fastify.delete('/api/posts/:id', {
      preHandler: fastify.auth([verifyToken]),
      ...deletePostOpts,
    });
  };










module.exports = postRoutes;



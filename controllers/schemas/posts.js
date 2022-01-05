const typeString = { type: 'string' }; 


const getPostsSchema = {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            title: typeString,
            body: typeString,
          },
        },
      },
    },
};

const getPostSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        title: typeString,
        body: typeString,
      },
    },
  },
};

const headerSchema = {
  type: 'object',
  required: ['token'],
  properties: {
    token: typeString,
  },
};

const addPostSchema = {
  headers: headerSchema,
  body: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      title: typeString, 
      body: typeString,
    },
  },
  response: {
    200: typeString, 
  },
};

const updatePostSchema = {
  headers: headerSchema,
  body: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      title: typeString,
      body: typeString,
    },
  },
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString, 
  },
};


const deletePostSchema = {
  headers: headerSchema,
  params: {
    id: { type: 'number' }, 
  },
  response: {
    200: typeString,
  },
};




module.exports = {getPostsSchema, getPostSchema, addPostSchema, updatePostSchema, deletePostSchema, headerSchema};
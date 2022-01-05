const { getAdminsSchema, registerAdminSchema, loginAdminSchema } = require('../controllers/schemas/admins.js');
const { getAdminsHandler, registerAdminHandler, loginAdminHandler  } = require('../controllers/handlers/admins.js');

const getAdminsOpts = {
    schema: getAdminsSchema,
    handler: getAdminsHandler,
  };

const registerAdminsOpts = {
    schema: registerAdminSchema,
    handler: registerAdminHandler,
};
const loginAdminsOpts = {
    schema: loginAdminSchema,
    handler: loginAdminHandler,
}


const adminRoutes = (fastify, options, done) => {

    fastify.get('/api/admins', getAdminsOpts);
    fastify.post('/api/signin', registerAdminsOpts);
    fastify.post('/api/login', loginAdminsOpts);
  
    done();
  };
  
  module.exports = adminRoutes;
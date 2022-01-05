const admins = require('../../cloud/admins');
const jwt = require('jsonwebtoken');

const getAdminsHandler = (req, reply) => {
  reply.send(admins);
};


const registerAdminHandler = (req, reply) => {
    const { username, email, password } = req.body;
    const id = admins.length + 1;
  
    admins.push({
      id,
      username,
      email,
      password,
    });
  
    reply.send('Compte créer avec succès');
  };


const loginAdminHandler = (req, reply) => {
  const { username, password } = req.body;

  const admin = admins.filter((admin) => {
    return admin.username === username;
  })[0];

  if (!admin) {
    return reply.send("Cet utilisateur n'existe pas");
  }

  if (password !== admin.password) {
    return reply.send('Mot de passe incorect');
  }

  jwt.sign(
    { id: admin.id },
    'my_jwt_secret',
    { expiresIn: 300000 },
    (err, token) => {
      if (err) reply.status(500).send(new Error(err));

      reply.send({ token });
    }
  );
};

module.exports = { getAdminsHandler, registerAdminHandler, loginAdminHandler};
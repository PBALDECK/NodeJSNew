const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 5000

const startServer = async () => {
    try {
      await fastify.listen(PORT);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
        }
    };

    fastify.register(require('fastify-swagger'), {
      exposeRoute: true,
      routePrefix: '/docs',
      swagger: {
        info: { title: 'API FASTIFY NODEJS TP Alexandre ZEGHDOUD Pierre BALDECK Théo PASQUIER'},
      },
    });

    fastify.register(require('./routes/posts'));
    fastify.register(require('./routes/admins'));
    

  


  
startServer()
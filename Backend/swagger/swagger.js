
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Node.js API',
        version: '1.0.0',
        description: 'API documentation',
    },
    servers: [
        {
            url: 'http://localhost:3003',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;

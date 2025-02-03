import './utils/telemetry';
import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes';
import logger from './utils/logger';
import { apiLimiter } from './middleware/rateLimiter';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import root from './graphql/resolvers';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiLimiter, movieRoutes);
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/marvel', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logger.info('MongoDB connected'))
    .catch(err => logger.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

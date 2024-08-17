import express from "express"; // import the express package
import friendRoutes from './routes/friendRoutes.js';
import 'dotenv/config';


const app = express(); 
const port = 3030; 


app.use(express.json());

app.use('/', express.static('public'))
app.use('/friends', friendRoutes);

// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

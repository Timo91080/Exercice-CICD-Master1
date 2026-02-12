import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    message: 'API is healthy ðŸš€',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(Server running on http://localhost: + port);
});

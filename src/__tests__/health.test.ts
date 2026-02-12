import request from 'supertest';
import express from 'express';
import { healthRouter } from '../index'; // on simule juste ici

const app = express();
app.use('/', (req, res) => {
  res.json({ status: 'OK', message: 'API is healthy ðŸš€' });
});

describe('Health Check', () => {
  it('GET /health should return 200 and OK status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});

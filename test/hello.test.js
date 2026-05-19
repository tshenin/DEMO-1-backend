const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { createApp } = require('../src/app');

test('GET /hello returns 200 and expected JSON body', async () => {
  const app = createApp();

  const res = await request(app).get('/hello').expect(200);

  assert.deepEqual(res.body, { message: 'Hello, world!' });
});

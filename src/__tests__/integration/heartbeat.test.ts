import app, { start } from '../../app'
import http from 'http'
import supertest from 'supertest'

describe('GET /healthcheck/ping', () => {
  let server: http.Server

  beforeAll(async () => {
    server = await start()
  })

  afterAll(async (done) => {
    await server.close(done)
  })

  describe('health check', () => {
    it('heartbeat API Request (ping)', async () => {
      const result = await supertest(app).get('/healthcheck/ping')
      expect(result.status).toEqual(200)
    })
  })

  describe('health check', () => {
    it('heartbeat API Request (ready)', async () => {
      const result = await supertest(app).get('/healthcheck/ready')
      expect(result.status).toEqual(200)
    })
  })

  describe('/', () => {
    it('Root (/) available', async () => {
      const result = await supertest(app).get('/')
      expect(result.status).toEqual(200)
    })
  })
})

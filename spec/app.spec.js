const Request = require('request');

// API ENDPOINTS TEST SUITES
describe('TESTING API ENDPOINTS', () => {
  let server;
  beforeAll(() => {
    server = require('./../server');
  });

  afterAll(() => {
    server.close;
  });

  // TEST SUITE FOR POST /auth/create-user ENDPOINT
  describe('POST /auth/create-user endpoint', () => {
    const options = {
      url: 'http://localhost:3000/auth/create-user',
      form: {
        email: 'vicjuma945@gmail.com',
        password: 'bcryptedpassword',
      },
    };
    const data = {};
    beforeAll((done) => {
      Request(options, (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(201);
    });

    it('return status code', () => {
      expect(data.body.data.message).toBe('User account successfully created');
    });
  });

  // TEST SUITE FOR POST /auth/signin ENDPOINT
  describe('POST /auth/signin endpoint', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/auth/signin', { email: 'vicjuma945@gmail.com', password: 'hashedpassword' }, (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(201);
    });

    it('return status code', () => {
      expect(data.body.status).toBe('success');
    });
  });

  // TEST SUITE FOR POST /gifs ENDPOINT
  describe('POST /gifs', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/gifs', { image: 'https://cloudbary/120x120', title: 'the bold' }, (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(201);
    });

    it('return status code', () => {
      expect(data.body.data.gifid).toBe(1);
    });
  });

  // TEST SUITE FOR POST /articles ENDPOINT
  describe('POST /articles', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/articles', { title: 'the guy', article: 'the guy' }, (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(201);
    });

    it('return status code', () => {
      expect(data.body.data.articleid).toBe(1);
    });
  });

  // TEST SUITE FOR PATCH /articles/<articleid> ENDPOINT
  describe('POST /articles:id', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/articles/:id', { title: 'the good guy', article: 'the good guy' }, (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(201);
    });

    it('return status code', () => {
      expect(data.body.data.message).toBe('Article successfully updated');
    });
  });

  // TEST SUITE FOR DELETE /articles/<articleid> ENDPOINT
  describe('POST /articles/:id', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/articles/:id', {}, (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(201);
    });

    it('return status code', () => {
      expect(data.body.data.message).toBe('Article successfully deleted');
    });
  });

  // TEST SUITE FOR DELETE /gifs/<gifid> ENDPOINT
  describe('DELETE /gifs/:id endpoint', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/auth/create-user', (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(201);
    });

    it('return status code', () => {
      expect(data.body.data.message).toBe('Gif post successfully deleted');
    });
  });

  // TEST SUITE FOR POST /articles/<articleid>/comment ENDPOINT
  describe('POST /articles/:id/comment endpoint', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/articles/:id/comment', { comment: 'am a hero' }, (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(201);
    });

    it('return status code', () => {
      expect(data.body.data.message).toBe('comment successfully created');
    });
  });

  // TEST SUITE FOR /gifs/<gifid>/comment ENDPOINT
  describe('POST /gifs/:id/comment', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/gifs/:id/comment', { comment: 'what an awesome piq there' }, (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(201);
    });

    it('return status code', () => {
      expect(data.body.data.message).toBe('gif comment successfully created');
    });
  });

  // TEST SUITE FOR GET /feed ENDPOINT
  describe('POST /feed', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/feed', (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(200);
    });

    it('return status code', () => {
      expect(data.body.data.status).toBe('success');
    });
  });

  // TEST SUITE FOR GET /articles/<:articleid> ENDPOINT
  describe('POST /feed', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/articles/:id', (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(200);
    });

    it('return status code', () => {
      expect(data.body.data.status).toBe('success');
    });
  });

  // TEST SUITE FOR GET /gifs/<:gifid> ENDPOINT
  describe('POST /feed', () => {
    const data = {};
    beforeAll((done) => {
      Request('http://localhost:3000/gifs/:id', (err, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('return status code', () => {
      expect(data.status).toBe(200);
    });

    it('return status code', () => {
      expect(data.body.data.status).toBe('success');
    });
  });
});

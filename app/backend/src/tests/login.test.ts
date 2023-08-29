import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import SequelizeUsers from '../database/models/users';
import { Response } from 'superagent';
import { user, login, failLogin } from './mocks/Login';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Login Test', function() {
  it('should return token', async function() {
    sinon.stub(SequelizeUsers, 'findOne').resolves(user as any);

    const { status, body } = await chai.request(app).post('/login').send(login);

    expect(status).to.equal(200);
    expect(body).to.have.property('token');
  });

  it('should return erro', async function() {
    sinon.stub(SequelizeUsers, 'findOne').resolves();

    const { status, body } = await chai.request(app).post('/login').send(failLogin);

    expect(status).to.equal(401);
    expect(body).to.have.property('message');
  });

  it('should return erro', async function() {
    sinon.stub(SequelizeUsers, 'findOne').resolves();

    const { status, body } = await chai.request(app).post('/login').send(failLogin);

    expect(status).to.equal(401);
    expect(body).to.have.property('message');
  });

  it('should return erro', async function() {
    sinon.stub(SequelizeUsers, 'findOne').resolves();

    const { status, body } = await chai.request(app).post('/login').send(failLogin);

    expect(status).to.equal(401);
    expect(body).to.have.property('message');
  });

  it('Testando Rota GET de login em caso de token valido', async () => {
    sinon.stub(SequelizeUsers, 'findOne').resolves(user as any);

    const { body: { token } }: Response = await chai.request(app).post('/login').send(login);

    const res: Response = await chai.request(app).get('/login/role').set({ authorization: token }).send();

    expect(res.status).to.be.equal(200);
    expect(res.body).to.have.property('role');
    expect(res.body.role).to.be.equal('admin');
});

  afterEach(sinon.restore);
});
// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { app } from '../app';
// // import Example from '../database/models/ExampleModel';
// import SequelizeTeam from '../database/models/teams';
// import { team, teams } from './mocks/Team'

// import { Response } from 'superagent';

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Teams Test', function() {
//   it('should return all Teams', async function() {
//     sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);

//     const { status, body } = await chai.request(app).get('/teams');

//     expect(status).to.equal(200);
//     expect(body).to.deep.equal(teams);
//   });

//   it('should return a team by id', async function() {
//     sinon.stub(SequelizeTeam, 'findOne').resolves(team as any);

//     const { status } = await chai.request(app).get('/teams/1');

//     expect(status).to.equal(200);
//   });

//   // it('should return not found if the team doesn\'t exists', async function() {
//   //   sinon.stub(SequelizeTeam, 'findOne').resolves(null);

//   //   const { status, body } = await chai.request(app).get('/teams/1');

//   //   expect(status).to.equal(404);
//   //   expect(body.message).to.equal('Team 1 not found');
//   // });

//   afterEach(sinon.restore);
// });

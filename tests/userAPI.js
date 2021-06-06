
var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
const { UserModel } = require('../model/UserModel.js');
chai.use(chaiHttp);

if (!global.Promise) {
	var q = require('q');
	chai.request.addPromises(q.Promise);
}

const protocol = "http://";
const hostname = "localhost";
const port = "8080";

const USER_MODEL_TEST  = {
		"_id": {
			"$oid": "60a862477b51a576a206e68c"
		},
		"userId": "187",
		"userName": "wallenstephe",
		"password": "1234567",
		"email": "wallenstephe@seattleu.edu",
		"avatar_url": "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
		"totalUpvotes": {
			"$numberInt": "123"
		},
		"swimmingPosts": {
			"$numberInt": "10"
		},
		"sinkingPosts": {
			"$numberInt": "9"
		},
		"reports": {
			"$numberInt": "1"
		},
		"__v": {
			"$numberInt": "0"
		}
};



function validateUserJSON(jsonObj){
	Object.keys(USER_MODEL_TEST).forEach((key) => {
		expect(jsonObj).to.include.keys(key);
		expect(jsonObj).to.have.property(key).that.is.a(typeof(USER_MODEL_TEST[key]));
	});
}

describe('Testing User API', function () {
	this.timeout(15000);

	it('[GET] Individual User Where { userId: 187 }.', function(done){
		chai.request(protocol+hostname+':'+port)
		 .get('/app/users/'+USER_MODEL_TEST["userId"])
		 .end(function (err, res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.be.an.object;
			res.body.forEach(jsonResponse => validateUserJSON(jsonResponse));
		});
		done();
	});

	it('[PUT] Update User Where { UserId: 187 } and Revert Changes.', function(done){

		let changes = USER_MODEL_TEST;
		let updatedUsername = "sinkorswim changes";
		changes["userName"] = updatedUsername;

		chai.request(protocol+hostname+':'+port)
			.put('/app/users')
			.send(changes)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.be.an.object;
				expect(res.body["userName"]).to.equal(updatedUsername);
			}
		);
		
		chai.request(protocol+hostname+':'+port)
			.get('/app/users/'+changes["userId"])
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).status(200);
				expect(res.body).to.be.an.object;
				assert.deepEqual(res.body, changes);
			}
		);
		chai.request(protocol+hostname+':'+port)
			.put('/app/users')
			.send(USER_MODEL_TEST)
			.end((err, res) => {expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.be.an.object;
				expect(res.body["userName"]).to.equal(USER_MODEL_TEST["userName"]);
			}
		);
		chai.request(protocol+hostname+':'+port)
			.get('/app/users/'+changes["userId"])
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).status(200);
				expect(res.body).to.be.an.object;
				assert.deepEqual(res.body, USER_MODEL_TEST);
			}
		);
		done();
	});

	it('[DELETE]/[POST] Delete and Re-Create a User.', function(done){

		chai.request(protocol+hostname+':'+port)
			.delete('/app/users')
			.send(USER_MODEL_TEST)
			.end((err, res) => {
				expect(res).to.have.status(200)
				expect(res.body["n"]).to.equal(1);
		});

		chai.request(protocol+hostname+':'+port)
		 .get('/app/users/'+USER_MODEL_TEST["userId"])
		 .end(function (err, res) {
			expect(res).to.have.status(404);
		});

		chai.request(protocol+hostname+':'+port)
		 .post('/app/users')
		 .send(USER_MODEL_TEST)
		 .end(function (err, res) {
			expect(res).to.have.status(200);
		});
		done();
	});

	
  });
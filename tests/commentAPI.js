console.log('starting test');

const protocol = "http://";
const hostname = "localhost";
const port = "8080";

var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

if (!global.Promise) {
  var q = require('q');
  chai.request.addPromises(q.Promise);
}

const COMMENT_MODEL_TEST = {
    "_id": {
        "$oid": "60a8643b7b51a576a206e68d"
    },
    "postId": "1",
    "commentId": "3",
    "userId": "3",
    "content": "ROFL",
    "timestamp": "MM-DD-YYYY",
    "likes": {
        "$numberInt": "100"
    }
};

function validateCommentJSON(jsonObj){
	Object.keys(COMMENT_MODEL_TEST).forEach((key) => {
		expect(jsonObj).to.include.keys(key);
		expect(jsonObj).to.have.property(key).that.is.a(typeof(COMMENT_MODEL_TEST[key]));
	});
}

describe('Testing Comment API', function () {
	this.timeout(15000);

	it('[GET] Individual Comment Where { CommentId: 3 }.', function(done){
		chai.request(protocol+hostname+':'+port)
		 .get('/app/comments/')
		 .send(COMMENT_MODEL_TEST)
		 .end(function (err, res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.be.an.object;
			assert.deepEqual(res.body, COMMENT_MODEL_TEST);
			res.body.forEach(jsonResponse => validateCommentJSON(jsonResponse));
		});
		done();
	});

	// it('[GET] Multiple Memes Where { timePost: Value }', function(done){
	// 	chai.request(protocol+hostname+':'+port)
	// 		.get('/app/memes/day/'+FEED_DATE)
	// 		.end((err, res) => {
	// 			expect(err).to.be.null;
	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.be.an.object;
	// 			expect(res.body).to.have.lengthOf(3);
	// 			res.body.forEach(jsonResponse => {
	// 				expect(jsonResponse["timePost"]).to.equal(FEED_DATE);
	// 				validateCommentJSON(jsonResponse);
	// 			});
	// 		});
	// 		done();
	// });

	// it('[PUT] Update Meme Where { MemeId: 2000 } and Revert Changes.', function(done){
		
	// 	let changes = COMMENT_MODEL_TEST;
	// 	let updatedCaption = "Changing the caption.";
	// 	changes["caption"] = updatedCaption;

	// 	chai.request(protocol+hostname+':'+port)
	// 		.put('/app/memes')
	// 		.send(changes)
	// 		.end((err, res) => {
	// 			expect(err).to.be.null;
	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.be.an.object;
	// 			expect(res.body["caption"]).to.equal(updatedCaption);
	// 		}
	// 	);
		
	// 	chai.request(protocol+hostname+':'+port)
	// 		.get('/app/memes/'+changes["memeId"])
	// 		.end((err, res) => {
	// 			expect(err).to.be.null;
	// 			expect(res).status(200);
	// 			expect(res.body).to.be.an.object;
	// 			assert.deepEqual(res.body, changes);
	// 		}
	// 	);
	// 	chai.request(protocol+hostname+':'+port)
	// 		.put('/app/memes')
	// 		.send(COMMENT_MODEL_TEST)
	// 		.end((err, res) => {expect(err).to.be.null;
	// 			expect(res).to.have.status(200);
	// 			expect(res.body).to.be.an.object;
	// 			expect(res.body["caption"]).to.equal(COMMENT_MODEL_TEST["caption"]);
	// 		}
	// 	);
	// 	chai.request(protocol+hostname+':'+port)
	// 		.get('/app/memes/'+changes["memeId"])
	// 		.end((err, res) => {
	// 			expect(err).to.be.null;
	// 			expect(res).status(200);
	// 			expect(res.body).to.be.an.object;
	// 			assert.deepEqual(res.body, COMMENT_MODEL_TEST);
	// 		}
	// 	);
	// 	done();
	// });

	// it('[DELETE]/[POST] Delete and Re-Create a Meme.', function(done){

	// 	chai.request(protocol+hostname+':'+port)
	// 		.delete('/app/memes/comments')
	// 		.send(COMMENT_MODEL_TEST)
	// 		.end((err, res) => {
	// 			expect(res).to.have.status(200)
	// 			expect(res.body["n"]).to.equal(1);
	// 	});

	// 	chai.request(protocol+hostname+':'+port)
	// 	 .get('/app/memes/comments'+COMMENT_MODEL_TEST["memeId"])
	// 	 .end(function (err, res) {
	// 		expect(res).to.have.status(404);
	// 	});

	// 	chai.request(protocol+hostname+':'+port)
	// 	 .post('/app/memes')
	// 	 .send(COMMENT_MODEL_TEST)
	// 	 .end(function (err, res) {
	// 		expect(res).to.have.status(200);
	// 	});
	// 	done();
	// });

	
  });
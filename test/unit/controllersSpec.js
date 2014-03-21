'use strict';

/* jasmine specs for controllers go here */
describe('App Controllers', function() {

	describe('User', function() {

		var users = [{
			username: 'Pepe',
			password: 'Pepe1',
			email: 'pepe@godlab.cc'
		}, {
			username: 'Juan',
			password: 'Juan1',
			email: 'juan@godlab.cc'
		}]

		beforeEach(module('App'));

		it('No esta logueado', inject(function(session) {
			expect(session.isLogged).toBe(false);
		}));

		it('Registro', inject(function($httpBackend,session) {
			$httpBackend.expectGET(service_url + 'user/register').respond(true);
			session.data = users[0];
			session.register();
			$httpBackend.flush();
			expect(session.isLogged).toBe(true);
		}));

		it('Login', inject(function($httpBackend,session) {
			$httpBackend.expectPOST(service_url + 'user/login').respond(true);
			session.data = users[0];
			session.login();
			$httpBackend.flush();
			expect(session.isLogged).toBe(true);
		}));

		it('Logout', inject(function($httpBackend,session) {
			$httpBackend.expectPOST(service_url + 'user/logout').respond(true);
			session.logout();
			$httpBackend.flush();
			expect(session.isLogged).toBe(false);
		}));

		it('Login', inject(function($httpBackend,session) {
			$httpBackend.expectPOST(service_url + 'user/login').respond(true);
			session.data = users[0];
			session.login();
			$httpBackend.flush();
			expect(session.isLogged).toBe(true);
		}));

		it('Delete', inject(function($httpBackend,session) {
			$httpBackend.expectPOST(service_url + 'user/delete').respond(true);
			session.delete();
			$httpBackend.flush();
			expect(session.isLogged).toBe(false);
		}));

	});
});
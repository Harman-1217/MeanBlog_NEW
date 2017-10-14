
var adminApp = angular.module('fwrk.admin', [
	'ui.router',
	'btford.markdown',
	'angular-page-loader',
	'fwrk.posts',
	'fwrk.chitchat',
	'fwrk.chitchat',
	'fwrk.portfolios',
	'fwrk.users',
	'fwrk.categories',
	'fwrk.clients',
	'fwrk.testimonials',
	'fwrk.testimonials',
	'fwrk.contacts',
	'fwrk.careers'

]);

//var Portfolio = require('./models/portfolio');

adminApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('dashboard', {
		url: '/',
		templateUrl: '/admin/templates/admin_index.html',
		controller: 'dashboardCtrl'
	}) 
		.state('allPosts', {
			url: '/allPosts',
			templateUrl: '/admin/templates/allPosts.html',
			// resolve: {
			// 	postList: function(Posts){
			// 		return Posts.all().then(function(data){
			// 			return data;
			// 		});
			// 	}
			// },
			controller: 'AllPostsCtrl'
		})
		.state('addPost', {
			url: '/addPost',
			templateUrl: '/admin/templates/addPost.html',
			controller: 'AddPostCtrl'
                        
		})
        .state('editPost', {
			url: '/editPost/:paraml',
			templateUrl: '/admin/templates/editPost.html',
			controller: 'EditPostsCtrl'
		})

		.state('userList', {
			url: '/userList',
			templateUrl: '/admin/templates/userList.html',
			resolve: {
				userList: function(Users){
					return Users.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'AllUsersCtrl'
		})

		.state('addUser', {
			url: '/addUser',
			templateUrl: '/admin/templates/addUser.html',
			controller: 'addUserCtrl'   
		})
		.state('editUser', {
			url: '/editUser/:paraml',
			templateUrl: '/admin/templates/editUser.html',
			controller: 'editUserCtrl'
		})

		.state('addPortfolio', {
			url: '/addPortfolio',
			templateUrl: '/admin/templates/addPortfolio.html',
			controller: 'addPortfolioCtrl'   
		})
		.state('PortfolioList', {
			url: '/PortfolioList',
			templateUrl: '/admin/templates/PortfolioList.html',
			resolve: {
				portfolioList: function(Portfolios){
					return Portfolios.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'PortfolioListCtrl'
		})
		.state('addCategory', {
			url: '/addCategory',
			templateUrl: '/admin/templates/addCategory.html',
			controller: 'addCategoryCtrl'   
		})
		.state('CategoryList', {
			url: '/CategoryList',
			templateUrl: '/admin/templates/allCategories.html',
			resolve: {
				categoryList: function(Category){
					return Category.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'CategoryListCtrl'
		})
		.state('editCategory', {
			url: '/editCategory/:paraml',
			templateUrl: '/admin/templates/editCategory.html',
			controller: 'editCategoryCtrl'
		})

		.state('addClient', {
			url: '/addClient',
			templateUrl: '/admin/templates/addClient.html',
			controller: 'addClientCtrl'   
		})
		.state('ClientList', {
			url: '/ClientList',
			templateUrl: '/admin/templates/clientList.html',
			resolve: {
				ClientsList: function(Clients){
					return Clients.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'ClientListCtrl'
		})
		.state('addTestimonial', {
			url: '/addTestimonial',
			templateUrl: '/admin/templates/addTestimonial.html',
			controller: 'addTestimonialCtrl'   
		})
		.state('TestimonialList', {
			url: '/TestimonialList',
			templateUrl: '/admin/templates/TestimonialList.html',
			resolve: {
				testimonialList: function(Testimonial){
					return Testimonial.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'TestimonialListCtrl'
		})
		.state('ContactList', {
			url: '/ContactList',
			templateUrl: '/admin/templates/contactList.html',
			resolve: {
				ContactList: function(Contact){
					return Contact.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'ContactListCtrl'
		})
		.state('resumeList', {
			url: '/jobrequests',
			templateUrl: '/admin/templates/resumeList.html',
			resolve: {
				RequestsList: function(Careers){
					return Careers.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'RequestsListCtrl'
		})
		.state('addchitchat', {
			url: '/addchitchat',
			templateUrl: '/admin/templates/addchitchat.html',
			controller: 'addchitchatCtrl' 
			// console.log("working");
		})
		.state('chitchatList', {
			url: '/chitchatList',
			templateUrl: '/admin/templates/chitchatList.html',
			resolve: {
				chitchatList: function(chitchat){
					console.log("hello");
					return chitchat.all().then(function(data){
						return data;
						console.log(data);
					});
				}
			},
			controller: 'chitchatListCtrl'
		})
});
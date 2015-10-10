// backbone model 

var Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: '' 
	}
});

// backbone Collection 

var Blogs = Backbone.Collection.extend({});

// instance two Blogs

var blog1 = new Blog({
	author: 'Michael',
	title: 'Michael\'s blogs',
	url: 'http://Michaelblog'
});

var blog2 = new Blog({
	author: 'Michael2',
	title: 'Michael2\'s blogs',
	url: 'http://Michael2blog'
});

var blogs = new Blogs([blog1,blog2]);

// Backbone View 

var BlogsView = Backbone.View.extend({});

// Backbone View for all blogs 



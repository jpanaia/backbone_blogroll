// Backbone Model

var Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: ''
	}
})

// Backbone Collection

var Blogs = Backbone.Collection.extend({});

// instantiate two Blogs

var blog1 = new Blog({author: "Jaime", title: "Jaime\ns Blog", url: "http://jaimesblog.com" });
var blog2 = new Blog({author: "Courtney", title: "Courtney\ns Blog", url: "http://courtneysblog.com" });

// instantiate a collection

var blogs = new Blogs([blog1,blog2]);
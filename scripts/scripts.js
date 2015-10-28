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

// var blog1 = new Blog({author: "Jaime", title: "Jaime\ns Blog", url: "http://jaimesblog.com" });
// var blog2 = new Blog({author: "Courtney", title: "Courtney\ns Blog", url: "http://courtneysblog.com" });

// instantiate a collection

var blogs = new Blogs();

// Backbone View for one blog

var BlogView = Backbone.View.extend({
		model: new Blog(),
		tagName: 'tr',
		initialize: function(){
			this.template = _.template($('.blogs-list-template').html());
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
});

// Backbone View for all blogs

var BlogsView = Backbone.View.extend({
	model: blogs,
	el: $('.blogs-list'),
	initialize: function(){
		this.model.on('add', this.render, this);
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(blog){
			self.$el.append((new BlogView({model: blog})).render().$el);
		});
		return this;
	}
});

var blogsView = new BlogsView();

$(document).ready(function(){
  $('.add-blog').on('click', function(){
  	var blog = new Blog({
  		author: $('.author-input').val(),
  		title: $('.title-input').val(),
  		url: $('.url-input').val()
  	});
  	$('.author-input').val('');
  	$('.title-input').val('');
  	$('.url-input').val('');

  	console.log(blog.toJSON());
  	blogs.add(blog);
  });
});
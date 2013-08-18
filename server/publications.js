// Publish all posts to server
Meteor.publish('posts', function(){
  return Posts.find();
});
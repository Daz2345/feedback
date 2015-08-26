Meteor.publish('categories', function() {
  if(Users.can.viewById(this.userId)){
    return Categories.find({}, {sort: {name: 1}});
  }
  return [];
});

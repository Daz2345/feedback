Users.updateManager = function (userId, dunnhumby) {
  Users.update(userId, {$set: {isManager: Manager}});
};
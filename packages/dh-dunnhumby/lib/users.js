Users.updateManager = function (userId, Manager) {
  Users.update(userId, {$set: {isManager: Manager}});
};
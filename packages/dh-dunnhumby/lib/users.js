Users.updatedunnhumby = function (userId, dunnhumby) {
  Users.update(userId, {$set: {isdunnhumby: dunnhumby}});
};
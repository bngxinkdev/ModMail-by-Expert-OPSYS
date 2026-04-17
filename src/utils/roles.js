const config = require("../config");

exports.isStaff = (member) =>
  config.staffRoles.some(r => member.roles.cache.has(r));

exports.isAdmin = (member) =>
  config.adminRoles.some(r => member.roles.cache.has(r));
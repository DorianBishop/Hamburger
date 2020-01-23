// Create a hamburger object
var burger = {
    // Select all burger table entries
    selectAll: function(cb) {
      orm.selectAll('burgers', function(res) {
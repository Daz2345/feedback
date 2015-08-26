// Custom User Field

Users.addField({
  fieldName: 'categories',
  fieldSchema: {
    type: [String],
    optional: true,
    editableBy: ["dunnhumby"],
    autoform: {
      group: 'dunnhumby',      
      type: "select-checkbox-inline",      
      noselect: true,
      options: function () {
        var categories = Categories.find().map(function (category) {
          return {
            value: category._id,
            label: category.name
          };
        });
        return categories;
      }
    }
  }
});
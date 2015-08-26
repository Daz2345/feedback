Posts.addField({
  fieldName: 'store',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'topic',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'department',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});
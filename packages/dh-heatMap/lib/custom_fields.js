Posts.addField({
  fieldName: 'heatMap',
  fieldSchema: {
    type: Boolean,
    optional: false,
    label: 'Include Heat Map?',      
    autoform: {
        group: 'heatMap',
        type: "boolean-select",
        trueLabel: "Yes",
        falseLabel: "No",
        firstOption: "(Please Choose a Response)"        
    },        
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'heatMapTitle',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
         group: 'heatMap',
         label: 'Title'
    },        
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'heatMapData',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
         group: 'heatMap',
         label: 'Heat Map Data',
         rows: 10
    },        
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'heatMapDescription',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
         group: 'heatMap',
         label: 'Description'
    },        
    editableBy: ["member", "admin"]
  }
});
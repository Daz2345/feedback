Posts.addField({
  fieldName: 'chart',
  fieldSchema: {
    type: Boolean,
    optional: false,
    label: 'Include Chart?',      
    autoform: {
        group: 'chart',
        type: "boolean-select",
        trueLabel: "Yes",
        falseLabel: "No",
        firstOption: "(Please Choose a Response)"        
    },        
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'chartTitle',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
         group: 'chart',
         label: 'Title'
    },        
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'chartType',
  fieldSchema: {
    type: String,
    optional: true,    
    autoform: {
         group: 'chart',
         label: 'Chart Type'
    },
    allowedValues: [
            "Line",
            "Bar",
            "Column",
            "Spline",
            "Step",
            "Area",
            "Area-Spline",
            "Area-Step",
            "Scatter",
            "Pie",
            "Donut",
            "Gauge"],
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'chartData',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
         group: 'chart',
         label: 'Chart Data',
         rows: 10
    },        
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'chartXaxisType',
  fieldSchema: {
    type: String,
    autoform: {
         group: 'chart',
         label: 'X Axis Type'
    },
    allowedValues: [
          "timeseries",
          "category",
          "indexed"],
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'chartXaxisCategories',
  fieldSchema: {
    type: String,
    autoform: {
         group: 'chart',
         label: 'X Axis Categories',
         rows: 10
    },
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'ShowSubChart',
  fieldSchema: {
    type: Boolean,
    label: 'Show sub-chart underneath main chart',    
    autoform: {
         type: "boolean-checkbox",      
         group: 'chart'
    },
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'chartYaxisFormat',
  fieldSchema: {
    type: String,
    autoform: {
         group: 'chart',
         label: 'Y Axis Format'
    },
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'chartDescription',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
         group: 'chart',
         label: 'Description'
    },        
    editableBy: ["member", "admin"]
  }
});
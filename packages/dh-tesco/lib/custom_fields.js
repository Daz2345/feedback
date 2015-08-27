Posts.addField({
  fieldName: 'storeNumber',
  fieldSchema: {
    type: Number,
    autoform: {
         group: 'tesco',
         label: 'Store Number'
    },
    optional: true,
    editableBy: ["member", "manager", "admin"]
  }
});

Posts.addField({
  fieldName: 'topic',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
         group: 'tesco',
         label: 'Topic'
    },
    allowedValues: [
            "Offers",
            "Other",
            "Products",
            "Staff",
            "Store"],    
    editableBy: ["member", "manager", "admin"]
  }
});

Posts.addField({
  fieldName: 'department',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
         group: 'tesco',
         label: 'Assigned to'
    },
    allowedValues: [
            "Store Manager",
            "Bakery",
            "Fresh",
            "Customer Service",
            "Staff Ops"],    
    editableBy: ["manager", "admin"]
  }
});

Users.addField({
  fieldName: 'storeNumber',
  fieldSchema: {
    type: Number,
    optional: true,
    autoform: {
        group: 'tesco',
        label: 'Store Number'
    },    
    editableBy: ["admin"],
  }
});

Users.addField({
  fieldName: 'department',
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
        group: 'tesco',
        label: 'Department'
    },
    allowedValues: [
            "Store Manager",      
            "Bakery",
            "Fresh",
            "Customer Service",
            "Staff Ops"],     
    editableBy: ["admin", "manager"],
  }
});

Users.addField({
  fieldName: 'isManager',
  fieldSchema: {
    type: Boolean,
    optional: true,
    editableBy: ["admin"],
    autoform: {    
      group: 'tesco'
    }
  }
});

Users.addField({
  fieldName: 'jobDescription',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["manager", "admin"],
  }
});

Posts.removeField('url');
Posts.removeField('categories');
Users.removeField('telescope.bio');
Users.removeField('telescope.website');
Users.removeField('telescope.twitterUsername');

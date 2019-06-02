Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    description: {
      type: String,
    },
    descriptionColor: {
      type: String,
      value: '#cecece',
    },
    descriptionSize: {
      type: String,
      value: '16px',
    },
    backgroundColor: {
      type: String,
      value: '#ffffff',
    },
  },
});

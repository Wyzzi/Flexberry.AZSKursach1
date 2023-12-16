import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-a-z-s-kursach-чек-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-a-z-s-kursach-т-ч-товары+товарыСпр':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наим',
            required: true,
            relationName: 'товарыСпр',
            projection: 'ТоварыСпрL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});

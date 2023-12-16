import {
  defineNamespace,
  defineProjections,
  Model as БанкДанMixin
} from '../mixins/regenerated/models/i-i-s-a-z-s-kursach-банк-дан';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БанкДанMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

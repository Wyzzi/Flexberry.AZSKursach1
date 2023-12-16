import {
  defineNamespace,
  defineProjections,
  Model as ЗаправБакMixin
} from '../mixins/regenerated/models/i-i-s-a-z-s-kursach-заправ-бак';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаправБакMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлиентMixin
} from '../mixins/regenerated/models/i-i-s-a-z-s-kursach-клиент';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлиентMixin, Validations, {
});

defineProjections(Model);

export default Model;

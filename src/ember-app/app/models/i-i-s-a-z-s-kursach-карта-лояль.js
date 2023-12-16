import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КартаЛояльMixin
} from '../mixins/regenerated/models/i-i-s-a-z-s-kursach-карта-лояль';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КартаЛояльMixin, Validations, {
});

defineProjections(Model);

export default Model;

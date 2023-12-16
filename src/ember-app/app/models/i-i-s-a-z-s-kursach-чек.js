import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЧекMixin
} from '../mixins/regenerated/models/i-i-s-a-z-s-kursach-чек';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЧекMixin, Validations, {
});

defineProjections(Model);

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаправкаАвтоMixin
} from '../mixins/regenerated/models/i-i-s-a-z-s-kursach-заправка-авто';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаправкаАвтоMixin, Validations, {
});

defineProjections(Model);

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаправБакMixin
} from '../mixins/regenerated/models/i-i-s-a-z-s-kursach-заправ-бак';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаправБакMixin, Validations, {
});

defineProjections(Model);

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БанкДанMixin
} from '../mixins/regenerated/models/i-i-s-a-z-s-kursach-банк-дан';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БанкДанMixin, Validations, {
});

defineProjections(Model);

export default Model;

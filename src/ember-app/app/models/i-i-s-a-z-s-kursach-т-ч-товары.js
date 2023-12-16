import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧТоварыMixin
} from '../mixins/regenerated/models/i-i-s-a-z-s-kursach-т-ч-товары';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧТоварыMixin, Validations, {
});

defineProjections(Model);

export default Model;

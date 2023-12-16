import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  cVV: DS.attr('number'),
  дата: DS.attr('string'),
  номКарт: DS.attr('string')
});

export let ValidationRules = {
  cVV: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-банк-дан.validations.cVV.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-банк-дан.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номКарт: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-банк-дан.validations.номКарт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БанкДанE', 'i-i-s-a-z-s-kursach-банк-дан', {
    номКарт: attr('Номер карты', { index: 0 }),
    cVV: attr('CVV', { index: 1 }),
    дата: attr('Дата', { index: 2 })
  });

  modelClass.defineProjection('БанкДанL', 'i-i-s-a-z-s-kursach-банк-дан', {
    номКарт: attr('Номер карты', { index: 0 }),
    cVV: attr('CVV', { index: 1 }),
    дата: attr('Дата', { index: 2 })
  });
};

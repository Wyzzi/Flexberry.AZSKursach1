import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наим: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  наим: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-товары-спр.validations.наим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-товары-спр.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыСпрE', 'i-i-s-a-z-s-kursach-товары-спр', {
    цена: attr('Цена', { index: 0 }),
    наим: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('ТоварыСпрL', 'i-i-s-a-z-s-kursach-товары-спр', {
    наим: attr('Наименование', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });
};

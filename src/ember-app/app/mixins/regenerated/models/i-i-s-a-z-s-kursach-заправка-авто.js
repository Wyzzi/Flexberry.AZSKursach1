import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колТоп: DS.attr('number'),
  номКол: DS.attr('number'),
  номШл: DS.attr('number'),
  заправБак: DS.belongsTo('i-i-s-a-z-s-kursach-заправ-бак', { inverse: null, async: false })
});

export let ValidationRules = {
  колТоп: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-заправка-авто.validations.колТоп.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номКол: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-заправка-авто.validations.номКол.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номШл: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-заправка-авто.validations.номШл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заправБак: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-заправка-авто.validations.заправБак.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаправкаАвтоE', 'i-i-s-a-z-s-kursach-заправка-авто', {
    номКол: attr('Номер колонки', { index: 0 }),
    номШл: attr('Номер шланга', { index: 1 }),
    колТоп: attr('Количество топлива', { index: 2 }),
    заправБак: belongsTo('i-i-s-a-z-s-kursach-заправ-бак', 'Тип топлива', {

    }, { index: 3, displayMemberPath: 'типТопл' })
  });

  modelClass.defineProjection('ЗаправкаАвтоL', 'i-i-s-a-z-s-kursach-заправка-авто', {
    номКол: attr('Номер колонки', { index: 0 }),
    номШл: attr('Номер шланга', { index: 1 }),
    колТоп: attr('Количество топлива', { index: 2 }),
    заправБак: belongsTo('i-i-s-a-z-s-kursach-заправ-бак', 'Тип топлива', {
      типТопл: attr('Тип топлива', { index: 3 })
    }, { index: -1, hidden: true })
  });
};

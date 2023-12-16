import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  объем: DS.attr('number'),
  техсост: DS.attr('boolean'),
  типТопл: DS.attr('string'),
  уровЗалив: DS.attr('number'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  объем: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-заправ-бак.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  техсост: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-заправ-бак.validations.техсост.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типТопл: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-заправ-бак.validations.типТопл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  уровЗалив: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-заправ-бак.validations.уровЗалив.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-заправ-бак.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаправБакE', 'i-i-s-a-z-s-kursach-заправ-бак', {
    типТопл: attr('Тип топлива', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    уровЗалив: attr('Уровень заливки', { index: 2 }),
    объем: attr('Объем', { index: 3 }),
    техсост: attr('Техническое состояние', { index: 4 })
  });

  modelClass.defineProjection('ЗаправБакL', 'i-i-s-a-z-s-kursach-заправ-бак', {
    типТопл: attr('Тип топлива', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    объем: attr('Объем', { index: 2 }),
    уровЗалив: attr('Уровень заливки', { index: 3 }),
    техсост: attr('Техническое состояние', { index: 4 })
  });
};

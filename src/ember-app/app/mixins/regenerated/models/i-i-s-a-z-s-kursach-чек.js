import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  сумма: DS.attr('decimal'),
  заправкаАвто: DS.belongsTo('i-i-s-a-z-s-kursach-заправка-авто', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-a-z-s-kursach-клиент', { inverse: null, async: false }),
  тЧТовары: DS.hasMany('i-i-s-a-z-s-kursach-т-ч-товары', { inverse: 'чек', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-чек.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-чек.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заправкаАвто: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-чек.validations.заправкаАвто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-чек.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧТовары: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-чек.validations.тЧТовары.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧекE', 'i-i-s-a-z-s-kursach-чек', {
    номер: attr('Номер', { index: 0 }),
    сумма: attr('Сумма', { index: 2 }),
    клиент: belongsTo('i-i-s-a-z-s-kursach-клиент', 'ФИО клиента', {

    }, { index: 1, displayMemberPath: 'наимен' }),
    заправкаАвто: belongsTo('i-i-s-a-z-s-kursach-заправка-авто', 'Заправка автомобиля', {

    }, { index: 3, displayMemberPath: 'колТоп' }),
    тЧТовары: hasMany('i-i-s-a-z-s-kursach-т-ч-товары', 'Товары', {
      количество: attr('Количество', { index: 1 }),
      товарыСпр: belongsTo('i-i-s-a-z-s-kursach-товары-спр', 'Товар', {

      }, { index: 0, displayMemberPath: 'наим' })
    })
  });

  modelClass.defineProjection('ЧекL', 'i-i-s-a-z-s-kursach-чек', {
    номер: attr('Номер', { index: 0 }),
    клиент: belongsTo('i-i-s-a-z-s-kursach-клиент', 'ФИО клиента', {
      наимен: attr('ФИО клиента', { index: 1 })
    }, { index: -1, hidden: true }),
    сумма: attr('Сумма', { index: 2 }),
    заправкаАвто: belongsTo('i-i-s-a-z-s-kursach-заправка-авто', 'Количество топлива', {
      колТоп: attr('Количество топлива', { index: 3 })
    }, { index: -1, hidden: true })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  eMail: DS.attr('string'),
  датаРожд: DS.attr('date'),
  наимен: DS.attr('string'),
  номТел: DS.attr('string'),
  банкДан: DS.belongsTo('i-i-s-a-z-s-kursach-банк-дан', { inverse: null, async: false }),
  картаЛояль: DS.belongsTo('i-i-s-a-z-s-kursach-карта-лояль', { inverse: null, async: false })
});

export let ValidationRules = {
  eMail: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-клиент.validations.eMail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаРожд: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-клиент.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наимен: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-клиент.validations.наимен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номТел: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-клиент.validations.номТел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  банкДан: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-клиент.validations.банкДан.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  картаЛояль: {
    descriptionKey: 'models.i-i-s-a-z-s-kursach-клиент.validations.картаЛояль.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-a-z-s-kursach-клиент', {
    номТел: attr('Номер телефона', { index: 0 }),
    датаРожд: attr('Дата рождения', { index: 1 }),
    наимен: attr('ФИО', { index: 2 }),
    eMail: attr('E mail', { index: 3 }),
    картаЛояль: belongsTo('i-i-s-a-z-s-kursach-карта-лояль', 'Карта лояльности', {

    }, { index: 4, displayMemberPath: 'ном' }),
    банкДан: belongsTo('i-i-s-a-z-s-kursach-банк-дан', 'Банковские данные', {

    }, { index: 5, displayMemberPath: 'номКарт' })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-a-z-s-kursach-клиент', {
    номТел: attr('Номер телефона', { index: 0 }),
    датаРожд: attr('Дата рождения', { index: 1 }),
    наимен: attr('ФИО', { index: 2 }),
    eMail: attr('E mail', { index: 3 }),
    банкДан: belongsTo('i-i-s-a-z-s-kursach-банк-дан', 'Банковская карта', {
      номКарт: attr('Банковская карта', { index: 4 })
    }, { index: -1, hidden: true }),
    картаЛояль: belongsTo('i-i-s-a-z-s-kursach-карта-лояль', 'Карта лояльности', {
      ном: attr('Карта лояльности', { index: 5 })
    }, { index: -1, hidden: true })
  });
};

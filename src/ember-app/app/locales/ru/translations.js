import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISAZSKursachБанкДанLForm from './forms/i-i-s-a-z-s-kursach-банк-дан-l';
import IISAZSKursachЗаправБакLForm from './forms/i-i-s-a-z-s-kursach-заправ-бак-l';
import IISAZSKursachЗаправкаАвтоLForm from './forms/i-i-s-a-z-s-kursach-заправка-авто-l';
import IISAZSKursachКартаЛояльLForm from './forms/i-i-s-a-z-s-kursach-карта-лояль-l';
import IISAZSKursachКлиентLForm from './forms/i-i-s-a-z-s-kursach-клиент-l';
import IISAZSKursachТоварыСпрLForm from './forms/i-i-s-a-z-s-kursach-товары-спр-l';
import IISAZSKursachЧекLForm from './forms/i-i-s-a-z-s-kursach-чек-l';
import IISAZSKursachБанкДанEForm from './forms/i-i-s-a-z-s-kursach-банк-дан-e';
import IISAZSKursachЗаправБакEForm from './forms/i-i-s-a-z-s-kursach-заправ-бак-e';
import IISAZSKursachЗаправкаАвтоEForm from './forms/i-i-s-a-z-s-kursach-заправка-авто-e';
import IISAZSKursachКартаЛояльEForm from './forms/i-i-s-a-z-s-kursach-карта-лояль-e';
import IISAZSKursachКлиентEForm from './forms/i-i-s-a-z-s-kursach-клиент-e';
import IISAZSKursachТоварыСпрEForm from './forms/i-i-s-a-z-s-kursach-товары-спр-e';
import IISAZSKursachЧекEForm from './forms/i-i-s-a-z-s-kursach-чек-e';
import IISAZSKursachБанкДанModel from './models/i-i-s-a-z-s-kursach-банк-дан';
import IISAZSKursachЗаправБакModel from './models/i-i-s-a-z-s-kursach-заправ-бак';
import IISAZSKursachЗаправкаАвтоModel from './models/i-i-s-a-z-s-kursach-заправка-авто';
import IISAZSKursachКартаЛояльModel from './models/i-i-s-a-z-s-kursach-карта-лояль';
import IISAZSKursachКлиентModel from './models/i-i-s-a-z-s-kursach-клиент';
import IISAZSKursachТЧТоварыModel from './models/i-i-s-a-z-s-kursach-т-ч-товары';
import IISAZSKursachТоварыСпрModel from './models/i-i-s-a-z-s-kursach-товары-спр';
import IISAZSKursachЧекModel from './models/i-i-s-a-z-s-kursach-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-a-z-s-kursach-банк-дан': IISAZSKursachБанкДанModel,
    'i-i-s-a-z-s-kursach-заправ-бак': IISAZSKursachЗаправБакModel,
    'i-i-s-a-z-s-kursach-заправка-авто': IISAZSKursachЗаправкаАвтоModel,
    'i-i-s-a-z-s-kursach-карта-лояль': IISAZSKursachКартаЛояльModel,
    'i-i-s-a-z-s-kursach-клиент': IISAZSKursachКлиентModel,
    'i-i-s-a-z-s-kursach-т-ч-товары': IISAZSKursachТЧТоварыModel,
    'i-i-s-a-z-s-kursach-товары-спр': IISAZSKursachТоварыСпрModel,
    'i-i-s-a-z-s-kursach-чек': IISAZSKursachЧекModel
  },

  'application-name': 'АЗС самообслуживания',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'АЗС самообслуживания',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'АЗС самообслуживания',
          title: 'A z s kursach'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'чековые-данные': {
          caption: 'Чековые данные',
          title: 'Чековые данные',
          'i-i-s-a-z-s-kursach-чек-l': {
            caption: 'Чек',
            title: ''
          }
        },
        'клиентские-данные': {
          caption: 'Клиентские данные',
          title: 'Клиентские данные',
          'i-i-s-a-z-s-kursach-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          },
          'i-i-s-a-z-s-kursach-карта-лояль-l': {
            caption: 'Карты лояльности',
            title: 'Карта лояль'
          },
          'i-i-s-a-z-s-kursach-банк-дан-l': {
            caption: 'Банковские данные',
            title: 'Банк дан'
          }
        },
        товары: {
          caption: 'Товары',
          title: 'Товары',
          'i-i-s-a-z-s-kursach-товары-спр-l': {
            caption: 'Товары',
            title: 'Товары спр'
          }
        },
        'а-з-с': {
          caption: 'АЗС',
          title: 'АЗС',
          'i-i-s-a-z-s-kursach-заправ-бак-l': {
            caption: 'Цистерна',
            title: 'Заправ бак'
          },
          'i-i-s-a-z-s-kursach-заправка-авто-l': {
            caption: 'Заправка автомобиля',
            title: 'Заправка авто'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-a-z-s-kursach-банк-дан-l': IISAZSKursachБанкДанLForm,
    'i-i-s-a-z-s-kursach-заправ-бак-l': IISAZSKursachЗаправБакLForm,
    'i-i-s-a-z-s-kursach-заправка-авто-l': IISAZSKursachЗаправкаАвтоLForm,
    'i-i-s-a-z-s-kursach-карта-лояль-l': IISAZSKursachКартаЛояльLForm,
    'i-i-s-a-z-s-kursach-клиент-l': IISAZSKursachКлиентLForm,
    'i-i-s-a-z-s-kursach-товары-спр-l': IISAZSKursachТоварыСпрLForm,
    'i-i-s-a-z-s-kursach-чек-l': IISAZSKursachЧекLForm,
    'i-i-s-a-z-s-kursach-банк-дан-e': IISAZSKursachБанкДанEForm,
    'i-i-s-a-z-s-kursach-заправ-бак-e': IISAZSKursachЗаправБакEForm,
    'i-i-s-a-z-s-kursach-заправка-авто-e': IISAZSKursachЗаправкаАвтоEForm,
    'i-i-s-a-z-s-kursach-карта-лояль-e': IISAZSKursachКартаЛояльEForm,
    'i-i-s-a-z-s-kursach-клиент-e': IISAZSKursachКлиентEForm,
    'i-i-s-a-z-s-kursach-товары-спр-e': IISAZSKursachТоварыСпрEForm,
    'i-i-s-a-z-s-kursach-чек-e': IISAZSKursachЧекEForm
  },

});

export default translations;

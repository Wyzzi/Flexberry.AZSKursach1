import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.чековые-данные.caption'),
          title: i18n.t('forms.application.sitemap.чековые-данные.title'),
          children: [{
            link: 'i-i-s-a-z-s-kursach-чек-l',
            caption: i18n.t('forms.application.sitemap.чековые-данные.i-i-s-a-z-s-kursach-чек-l.caption'),
            title: i18n.t('forms.application.sitemap.чековые-данные.i-i-s-a-z-s-kursach-чек-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиентские-данные.caption'),
          title: i18n.t('forms.application.sitemap.клиентские-данные.title'),
          children: [{
            link: 'i-i-s-a-z-s-kursach-клиент-l',
            caption: i18n.t('forms.application.sitemap.клиентские-данные.i-i-s-a-z-s-kursach-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.клиентские-данные.i-i-s-a-z-s-kursach-клиент-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-a-z-s-kursach-карта-лояль-l',
            caption: i18n.t('forms.application.sitemap.клиентские-данные.i-i-s-a-z-s-kursach-карта-лояль-l.caption'),
            title: i18n.t('forms.application.sitemap.клиентские-данные.i-i-s-a-z-s-kursach-карта-лояль-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-a-z-s-kursach-банк-дан-l',
            caption: i18n.t('forms.application.sitemap.клиентские-данные.i-i-s-a-z-s-kursach-банк-дан-l.caption'),
            title: i18n.t('forms.application.sitemap.клиентские-данные.i-i-s-a-z-s-kursach-банк-дан-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.товары.caption'),
          title: i18n.t('forms.application.sitemap.товары.title'),
          children: [{
            link: 'i-i-s-a-z-s-kursach-товары-спр-l',
            caption: i18n.t('forms.application.sitemap.товары.i-i-s-a-z-s-kursach-товары-спр-l.caption'),
            title: i18n.t('forms.application.sitemap.товары.i-i-s-a-z-s-kursach-товары-спр-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.а-з-с.caption'),
          title: i18n.t('forms.application.sitemap.а-з-с.title'),
          children: [{
            link: 'i-i-s-a-z-s-kursach-заправ-бак-l',
            caption: i18n.t('forms.application.sitemap.а-з-с.i-i-s-a-z-s-kursach-заправ-бак-l.caption'),
            title: i18n.t('forms.application.sitemap.а-з-с.i-i-s-a-z-s-kursach-заправ-бак-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-a-z-s-kursach-заправка-авто-l',
            caption: i18n.t('forms.application.sitemap.а-з-с.i-i-s-a-z-s-kursach-заправка-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.а-з-с.i-i-s-a-z-s-kursach-заправка-авто-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})
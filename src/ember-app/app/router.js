import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-a-z-s-kursach-банк-дан-l');
  this.route('i-i-s-a-z-s-kursach-банк-дан-e',
  { path: 'i-i-s-a-z-s-kursach-банк-дан-e/:id' });
  this.route('i-i-s-a-z-s-kursach-банк-дан-e.new',
  { path: 'i-i-s-a-z-s-kursach-банк-дан-e/new' });
  this.route('i-i-s-a-z-s-kursach-заправ-бак-l');
  this.route('i-i-s-a-z-s-kursach-заправ-бак-e',
  { path: 'i-i-s-a-z-s-kursach-заправ-бак-e/:id' });
  this.route('i-i-s-a-z-s-kursach-заправ-бак-e.new',
  { path: 'i-i-s-a-z-s-kursach-заправ-бак-e/new' });
  this.route('i-i-s-a-z-s-kursach-заправка-авто-l');
  this.route('i-i-s-a-z-s-kursach-заправка-авто-e',
  { path: 'i-i-s-a-z-s-kursach-заправка-авто-e/:id' });
  this.route('i-i-s-a-z-s-kursach-заправка-авто-e.new',
  { path: 'i-i-s-a-z-s-kursach-заправка-авто-e/new' });
  this.route('i-i-s-a-z-s-kursach-карта-лояль-l');
  this.route('i-i-s-a-z-s-kursach-карта-лояль-e',
  { path: 'i-i-s-a-z-s-kursach-карта-лояль-e/:id' });
  this.route('i-i-s-a-z-s-kursach-карта-лояль-e.new',
  { path: 'i-i-s-a-z-s-kursach-карта-лояль-e/new' });
  this.route('i-i-s-a-z-s-kursach-клиент-l');
  this.route('i-i-s-a-z-s-kursach-клиент-e',
  { path: 'i-i-s-a-z-s-kursach-клиент-e/:id' });
  this.route('i-i-s-a-z-s-kursach-клиент-e.new',
  { path: 'i-i-s-a-z-s-kursach-клиент-e/new' });
  this.route('i-i-s-a-z-s-kursach-товары-спр-l');
  this.route('i-i-s-a-z-s-kursach-товары-спр-e',
  { path: 'i-i-s-a-z-s-kursach-товары-спр-e/:id' });
  this.route('i-i-s-a-z-s-kursach-товары-спр-e.new',
  { path: 'i-i-s-a-z-s-kursach-товары-спр-e/new' });
  this.route('i-i-s-a-z-s-kursach-чек-l');
  this.route('i-i-s-a-z-s-kursach-чек-e',
  { path: 'i-i-s-a-z-s-kursach-чек-e/:id' });
  this.route('i-i-s-a-z-s-kursach-чек-e.new',
  { path: 'i-i-s-a-z-s-kursach-чек-e/new' });
});

export default Router;

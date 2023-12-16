import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-a-z-s-kursach-клиент', 'Unit | Model | i-i-s-a-z-s-kursach-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-a-z-s-kursach-банк-дан',
    'model:i-i-s-a-z-s-kursach-заправ-бак',
    'model:i-i-s-a-z-s-kursach-заправка-авто',
    'model:i-i-s-a-z-s-kursach-карта-лояль',
    'model:i-i-s-a-z-s-kursach-клиент',
    'model:i-i-s-a-z-s-kursach-т-ч-товары',
    'model:i-i-s-a-z-s-kursach-товары-спр',
    'model:i-i-s-a-z-s-kursach-чек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

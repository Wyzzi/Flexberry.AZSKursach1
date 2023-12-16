import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-a-z-s-kursach-карта-лояль', 'Unit | Serializer | i-i-s-a-z-s-kursach-карта-лояль', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-a-z-s-kursach-карта-лояль',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

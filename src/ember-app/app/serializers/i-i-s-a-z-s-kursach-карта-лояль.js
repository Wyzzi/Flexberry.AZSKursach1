import { Serializer as КартаЛояльSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a-z-s-kursach-карта-лояль';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КартаЛояльSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

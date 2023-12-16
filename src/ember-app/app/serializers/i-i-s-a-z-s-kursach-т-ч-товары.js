import { Serializer as ТЧТоварыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a-z-s-kursach-т-ч-товары';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧТоварыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

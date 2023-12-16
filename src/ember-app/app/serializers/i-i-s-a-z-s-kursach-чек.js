import { Serializer as ЧекSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a-z-s-kursach-чек';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЧекSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

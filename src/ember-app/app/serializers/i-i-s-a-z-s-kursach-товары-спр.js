import { Serializer as ТоварыСпрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a-z-s-kursach-товары-спр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТоварыСпрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

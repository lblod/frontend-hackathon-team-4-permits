import Model, { attr, hasMany } from '@ember-data/model';

export default class ConceptModel extends Model {
  @attr('string') label;
  @attr('number') order;
  @hasMany('concept') children;
}

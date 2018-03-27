import { pluralize } from 'ember-inflector';
import { helper } from '@ember/component/helper';

export function pluralizeHelper([singular, count]/*, hash*/) {
	return count === 1 ? singular : pluralize(singular);
}

export default helper(pluralizeHelper);

export function initialize(owner) {
  // Set default locale for intl
  const intl = owner.lookup('service:intl');
  intl.setLocale(['nl-be']);
}

export default {
  initialize,
};

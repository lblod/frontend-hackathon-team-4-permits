import Service from '@ember/service';

export default class FastbootService extends Service {
  // mock fostboot implementation
  isFastboot = false;
  get shoebox () { return { retrieve() { return null; } } }
}

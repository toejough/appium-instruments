// transpile:mocha

import { instruments } from '../lib/instruments';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mochawait';

let should = chai.should();
chai.use(chaiAsPromised);

describe('sample', () => {
  it('should exsit',async () => {
    should.exist(instruments);
  });
});

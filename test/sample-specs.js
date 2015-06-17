// transpile:mocha

import { Instruments, quickLaunch } from '../lib/instruments';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mochawait';

let should = chai.should();
chai.use(chaiAsPromised);

describe('sample', () => {
  it('should exsit',async () => {
    should.exist(Instruments);
  });
});

describe('quickLaunch', () => {
  it('should terminate', async () => {
    await quickLaunch("iPhone 6 (8.3 Simulator)");
  });
});

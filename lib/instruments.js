import events from 'events';
import path from 'path';
import { exec } from 'teen_process';
import { getAutomationTraceTemplatePath } from 'appium-xcode';
import sampleApps from 'sample-apps';

// TODO: THIS CLASS IS MAINLY A STUB

// SOME TINY FUNCTIONALITY WAS NEEDED FOR appium-ios-simulator
// so this project was started.

class Instruments extends events.EventEmitter {


}

// convenience method for ios simulators
// this function launches an instruments test with a default test
// that immediately passes. In this way we can start a simulator
// and be notified when it completely launches
//
// this function is outside the Instruments class because it provides a
// a convenience wrapper around a specific flow, and should eventually use
// instruments itself.
async function quickLaunch (udid) {

  let traceTemplatePath = await getAutomationTraceTemplatePath();
  let appPath = sampleApps('TestApp-iphonesimulator');
  let scriptPath = path.resolve('../assets/blank_test.js');
  let traceDocument = path.resolve('/', 'tmp', 'testTrace.trace');
  let resultsPath = path.resolve('/', 'tmp');

  await exec('xcrun', ['instruments', '-D', traceDocument, '-t', traceTemplatePath, '-w', udid, appPath, '-e', 'UIASCRIPT', scriptPath, '-e', 'UIARESULTSPATH', resultsPath]);
}

export { Instruments, quickLaunch };

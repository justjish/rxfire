/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable @typescript-eslint/no-floating-promises */

import firebase from 'firebase/app';
import 'firebase/auth';
import { default as TEST_PROJECT, authEmulatorPort } from './config';

const rando = (): string => Math.random().toString(36).substring(5);

describe('RxFire Auth', () => {
  let app: firebase.app.App;
  let auth: firebase.auth.Auth;

  /**
   * Each test runs inside it's own app instance and the app
   * is deleted after the test runs.
   *
   * Each test is responsible for seeding and removing data. Helper
   * functions are useful if the process becomes brittle or tedious.
   * Note that removing is less necessary since the tests are run
   * against the emulator.
   */
  beforeEach(() => {
    app = firebase.initializeApp(TEST_PROJECT, rando());
    auth = app.auth();
    auth.useEmulator(`http://localhost:${authEmulatorPort}`);
  });

  afterEach(() => {
    app.delete().catch();
  });

  describe('fromTask', () => {
      it('should work', () => {
          expect('a').toEqual('a');
      })
  });

});

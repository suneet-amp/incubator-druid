/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { render } from 'react-testing-library';

import { TransformTable } from './transform-table';

describe('transform table', () => {
  it('matches snapshot', () => {
    const sampleData = {
      header: ['c1'],
      rows: [
        {
          raw: `{"c1":"hello"}`,
          parsed: { c1: 'hello' }
        }
      ]
    };

    const transformTable = <TransformTable
      sampleData={sampleData}
      columnFilter=""
      transformedColumnsOnly={false}
      transforms={[]}
      selectedTransformIndex={-1}
      onTransformSelect={() => null}
    />;

    const { container } = render(transformTable);
    expect(container.firstChild).toMatchSnapshot();
  });
});

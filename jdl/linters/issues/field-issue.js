/**
 * Copyright 2013-2021 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const AbstractIssue = require('./abstract-issue');

class FieldIssue extends AbstractIssue {
  constructor(args) {
    super(args);
    if (!args.fieldName || !args.entityName) {
      throw new Error("A field name and its entity's name must be passed.");
    }
    this.entityName = args.entityName;
    this.fieldName = args.fieldName;
  }
}

module.exports = FieldIssue;

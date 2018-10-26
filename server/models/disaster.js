/**
 * Copyright 2018 (c) Wai All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var mongoose = require('mongoose');

var MyBagSchema = new mongoose.Schema({
    item: {type: String},
    weight: {type: Number}
}, {timestamps: true});
mongoose.model('MyBag', MyBagSchema);

var DisasterSchema = new mongoose.Schema({
    userNum: {type: Number},
    myBag: [MyBagSchema]
}, {timestamps: true});
mongoose.model('Disaster', DisasterSchema);

//example of the array being sent in:
//   [{item: 'cellphone', weight: 2}, {item: 'laptop', weight: 9}]






"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const isString = (string) => {
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (params) => {
    return Object.values(types_1.Weather).includes(params);
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const parseComment = (commentRequest) => {
    if (!isString(commentRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentRequest;
};
const parseDate = (dateRequest) => {
    if (!isString(dateRequest) || !isDate(dateRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateRequest;
};
const parseWeathert = (weatherRequest) => {
    if (!isString(weatherRequest) || !isWeather(weatherRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherRequest;
};
const parseVisibility = (visibilityRequest) => {
    if (!isString(visibilityRequest) || !isVisibility(visibilityRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntri = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeathert(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntri;
};
exports.default = toNewDiaryEntry;

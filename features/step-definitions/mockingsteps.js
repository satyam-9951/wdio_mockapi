import { Given, When, Then } from "@wdio/cucumber-framework";
import axios from 'axios';
let responseData;

Given(/^I navigate to "([^"]*)"$/, async (url) => {
    responseData = await axios.get(url);
});

Then(/^I should see the response message "([^"]*)"$/, async (expectedMessage) => {
    expect(responseData.data.message).toEqual(expectedMessage);
});

Given(/^I navigate to users "([^"]*)"$/, async (url) => {
    responseData = await axios.get(url);
});

Then(/^I should see the response data$/, async () => {
    expect(responseData.data[1].name).toEqual("Jane Smith");
});

Given(/^I navigate to delete users "([^"]*)"$/, async (url) => {
    responseData = await axios.delete(url);
});

Then(/^I should check the deleted result$/, async () => {
    expect(responseData.data.result).toEqual("success");
});


Given(/^I navigate to students detail creation endpoint "([^"]*)"$/, async (url) => {
    responseData = await axios.post(url);
});

Then(/^I should check the status code$/, async () => {
    expect(responseData.statusText).toEqual("Created");
    expect(responseData.data[1].name).toEqual("john snow");
    expect(responseData.status).toEqual(201);
});


Given(/^I navigate to student detail correction endpoint "([^"]*)"$/, async (url) => {
    responseData = await axios.put(url);
});

Then(/^I should check the response$/, async () => {
    expect(responseData.status).toEqual(200);
});


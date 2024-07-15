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


Then(/^I shhould check the delete result$/, async () => {
    expect(responseData.data.result).toEqual("success");
});

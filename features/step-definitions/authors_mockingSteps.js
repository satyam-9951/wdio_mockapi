import { Given, Then } from "@wdio/cucumber-framework";
import axios from "axios";

let responseData;

Given(/^I navigate to get authors "([^"]*)"$/, async (url) => {
  responseData = await axios.get(url);
  // Printing response data to console
  console.log(responseData.data);
});

Then(/^I should see the response data of authors$/, async () => {
  // Printing response data to console
  console.log(responseData.data);
  // Checking status is 200
  expect(responseData.status).toEqual(200);
});

Given(/^I navigate to post authors "([^"]*)"$/, async (url) => {
  responseData = await axios.post(url);
  // Printing response data to console
  console.log(responseData.data);
});

Then(/^I should check the post result$/, async () => {
  console.log(responseData);
  expect(responseData.status).toBe(200);
});

Given(/^I navigate to delete author "([^"]*)"$/, async (url) => {
  responseData = await axios.delete(url);
});

Then(/^I should check the delete result$/, async () => {
  expect(responseData.status).toBe(200);
});

Given(/^I navigate to update author at "([^"]*)"$/, async (url) => {
  responseData = await axios.put(url);
});

Then(/^I should check the update result$/, async () => {
  expect(responseData.status).toBe(200);
});

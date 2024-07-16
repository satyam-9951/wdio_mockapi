import { Given, Then } from "@wdio/cucumber-framework";
import axios from "axios";

let responseData;

Given(/^I navigate to get authors "([^"]*)"$/, async (url) => {
  responseData = await axios.get(url);
});

Then(/^I should see the response data of authors$/, async () => {

  expect(responseData.status).toEqual(200);
});

Given(/^I navigate to post authors "([^"]*)"$/, async (url) => {
  responseData = await axios.post(url);

});

Then(/^I should check the post result$/, async () => {
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

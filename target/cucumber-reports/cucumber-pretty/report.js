$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayStore.feature");
formatter.feature({
  "line": 2,
  "name": "EbayStore",
  "description": "As a customer \nI want to search my \u0027PUMA\u0027  shoes in the list produts using filters search\nIn order to buy",
  "id": "ebaystore",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EbayStore"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "The number of results for brand PUMA",
  "description": "",
  "id": "ebaystore;the-number-of-results-for-brand-puma",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I go to the Ebay page on URL \"https://www.ebay.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill the value \"shoes\" in the text field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select the brand PUMA",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select the size 10",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the number of results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com",
      "offset": 30
    }
  ],
  "location": "EbayStoreSteps.I_go_to_the_Ebay_page_on_url(String)"
});
formatter.result({
  "duration": 4779353657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 18
    }
  ],
  "location": "EbayStoreSteps.I_fill_the_value_in_the_text_field(String)"
});
formatter.result({
  "duration": 149373654,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_click_on_the_search_button()"
});
formatter.result({
  "duration": 4522464265,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_select_the_brand_PUMA()"
});
formatter.result({
  "duration": 1635912781,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_select_the_size_10()"
});
formatter.result({
  "duration": 1349965697,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_should_see_the_results_list()"
});
formatter.result({
  "duration": 137774826,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Print the first 5 products with their prices in console",
  "description": "",
  "id": "ebaystore;print-the-first-5-products-with-their-prices-in-console",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I go to the Ebay page on URL \"https://www.ebay.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I fill the value \"shoes\" in the text field",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select the brand PUMA",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select the size 10",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I order by price ascendant",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should print the first 5 products with their prices in console",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com",
      "offset": 30
    }
  ],
  "location": "EbayStoreSteps.I_go_to_the_Ebay_page_on_url(String)"
});
formatter.result({
  "duration": 3718776860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 18
    }
  ],
  "location": "EbayStoreSteps.I_fill_the_value_in_the_text_field(String)"
});
formatter.result({
  "duration": 228823113,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_click_on_the_search_button()"
});
formatter.result({
  "duration": 4482140781,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_select_the_brand_PUMA()"
});
formatter.result({
  "duration": 1664684384,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_select_the_size_10()"
});
formatter.result({
  "duration": 1838027799,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_order_by_price_ascendant()"
});
formatter.result({
  "duration": 1807929579,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_should_print_the_first_5_products_with_their_prices_in_console()"
});
formatter.result({
  "duration": 4411047144,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Order and print the products by price in descendant mode",
  "description": "",
  "id": "ebaystore;order-and-print-the-products-by-price-in-descendant-mode",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I go to the Ebay page on URL \"https://www.ebay.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I fill the value \"shoes\" in the text field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select the brand PUMA",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select the size 10",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I order by price descendant",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should print the first \"5\" products with their prices in descendant mode",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com",
      "offset": 30
    }
  ],
  "location": "EbayStoreSteps.I_go_to_the_Ebay_page_on_url(String)"
});
formatter.result({
  "duration": 3428608090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 18
    }
  ],
  "location": "EbayStoreSteps.I_fill_the_value_in_the_text_field(String)"
});
formatter.result({
  "duration": 242798020,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_click_on_the_search_button()"
});
formatter.result({
  "duration": 4354100307,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_select_the_brand_PUMA()"
});
formatter.result({
  "duration": 1617172661,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_select_the_size_10()"
});
formatter.result({
  "duration": 1807487851,
  "status": "passed"
});
formatter.match({
  "location": "EbayStoreSteps.I_order_by_price_descendant()"
});
formatter.result({
  "duration": 1349580057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "EbayStoreSteps.I_should_print_the_first_products_with_their_prices_in_descendant_mode(String)"
});
formatter.result({
  "duration": 16776641188,
  "status": "passed"
});
});
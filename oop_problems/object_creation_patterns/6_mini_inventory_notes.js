// Mini Inventory Management System

// System composed of an Item Creator, Item Manager, and Reports Manager
// Item Creator
// - Makes sure all necessary information is present and valid
// Item Manager
// - Responsible for creating items, updating information about items, 
//   deleting items, and querying information about the items
// Report Manager
// - Responsible for generating reports for a specific item or all items
// - Reports for specific items are generated from report objects created from report manager

// Component Specifications
// Item:
// - SKU code
//  - First 3 letters of item and first 2 letters of category
//  - If item name consists of two words and the first word consists of only two letters, 
//    next letter is taken from next word
// - Item name
//  - Minimum 5 characters, not including spaces
// - Category
//  - 5 characters, can only be one word
// - Quantity
//  - Must not be blank
//  - A valid number will be provided

// Item Manager
// - create
//  - creates new item, returns false if not successful
// - update
//  - Accepts a SKU code and an object as an argument and updates any of the information of an item
//  - Valid values will be provided
// - delete
//  - Accepts a SKU code and deletes item from list
//  - Valid SKU will be provided
// - items
//  - Returns all items
// - inStock
//  - Returns all items with a quantity greater than 0
// - itemsInCategory
//  - Returns all items in a given category

// Reports Manager
// init
// - accepts the ItemManager object as an arg and assigns it to the `items` property
// createReporter
// - accepts a KU and returns an object
// - Returned object has one method, `itemInfo`, which logs to the console all the properties of an
//   object as "key:value" pairs (one per line)
// - There are no othe rproperties or methds on the returned object (except for properties/methods inherited)
// reportInStock
// - logs to console the item names of all the items that are in stock as comma separated values

// Notes
// - No need to add the ability to validate uniqueness of SKU, dupes can exist, its fine
// - Each required piece of info for an item corresponds to one property
// - Created item objects should not have any methods/properties on th em other than required info above
// - You may add methods to the item manager as necessary
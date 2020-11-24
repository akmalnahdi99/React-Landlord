[2020-11-25]

- Please Review maintainance list item file to see how it looks now, 
- Please Review OfferListItem to make it follow the exact flow of MaintenanceListItem, use status instead of color 


[2020-11-24]
- Please consider that all html you write will be delivered to end user in one compact app, so we need to reduce the redundant code, please refer to dashBills.js to see how we can use the map function to loop over  items and save space.

- All Images need an alt="Something" <img alt="" /> do not write (photo or image) in alt attribute use the title or anything unique

- Notice that NPM is showing a lot of warning pls fix them as possible


All files that are part of the project (static icons,  setting files, stylesheets except (cdn libraries like bootstrap or fontawsome) ) should go inside assets folder

All files that are dynamic and not part of the project go inside public folder ( like properties images, and others)




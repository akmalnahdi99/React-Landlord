[2020-11-26]
- I did Create a new Branch from master branch (Development), since I noticed that there is a lot of files I deleted that still exists in the Branch Test-Environment
- For all Files Started with PropertyInfo they all can be merged in one file please look at BillsOf
- It is very important to look at the warnings that NPM is generating when you modify files, Please try to solve them befor any further commit make sure that you commit files, with no NPM warnings.


[2020-11-25]
- Please Create a new Branch from the master branch, no need to any pull requests I will do the merges daily
- Please Review maintainance list item file to see how it looks now, 
- Please Review OfferListItem to make it follow the exact flow of MaintenanceListItem, use status instead of color 
- Please review Bills File to see how we pass parameters to represent bill type
- Please repeat the Bills File With Files Start with PI_ and please change it to someThing more clear that PI

[2020-11-24]
- Please consider that all html you write will be delivered to end user in one compact app, so we need to reduce the redundant code, please refer to dashBills.js to see how we can use the map function to loop over  items and save space.

- All Images need an alt="Something" <img alt="" /> do not write (photo or image) in alt attribute use the title or anything unique

- Notice that NPM is showing a lot of warning pls fix them as possible


All files that are part of the project (static icons,  setting files, stylesheets except (cdn libraries like bootstrap or fontawsome) ) should go inside assets folder

All files that are dynamic and not part of the project go inside public folder ( like properties images, and others)




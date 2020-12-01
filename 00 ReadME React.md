[2020-12-1]
- to qhairun : Pls delete non required images from src/assets/imgs there is around 12MB of images, pls also consider resizing the big images or reduce quality , 
- for file invoive and invoice2 Please pass the difference as parameter like type='paid' then you set the className, as discussed previously for DashIconsBox
- for file BillsServiceCharge, I noticed that the path changed from '../../bills_component/Invoice' to './invoice' . if this was done because the element is shared then ok,
  but if this is done as a respond to the previous review then pls consider that I mentioned <Link path=""> only, because in web development the url of website should start form /something
  in react or any other development we have links for internal files, and we have links for the website itself. 

[2020-11-30]
- to qhairun : Pls delete non required images from src/assets/imgs there is around 12MB of images, pls also consider resizing the big images or reduce quality , 
- in Links use absolute path example: /landlord/page1 , not ../landlord/page1
- in file DashPropertyInfo I noticed that a new component created.  it is a copy of DashIconsBox called DashIconsProperty, the difference in components was the links, I modified the files to include the link as parameter, Please consider the fact of reusing existing Components effectively, more components means more files more complex project, and future modifications need to be applied on multiple files. Please consider this in future comonent and existing ones if any.
- for bills items like gas, gasitem, internet item, please review the naming of component look at the file internet item for example, try to use names like service or servicedetail ...

[2020-11-27]
- While development just commit the files into Development Branch ( pull any files first to update your repo), then push the files, no need to any merge

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




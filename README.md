# Simple-MCQ-App 
## [Live Site](https://sawda-hoque-mcq-app.netlify.app/)
## Language and Tools
- HTML
- CSS
- JS
- Netlify(deploy)
## 1.Start-Page
![a](https://user-images.githubusercontent.com/75621881/198891713-6dd2bc8d-0bc7-40a0-91f0-9e238e33ae95.png)
## 2.MCQ Page
![a1](https://user-images.githubusercontent.com/75621881/198891813-06bcd42b-3491-4634-8943-9a3e100e6dd4.png)
## 3.Result Page
![a333](https://user-images.githubusercontent.com/75621881/198891936-7118394c-1833-4ad8-b255-b96c401bfff7.png)
## 4.Timeout Page
![aa111](https://user-images.githubusercontent.com/75621881/198892092-a049d9a2-2308-4094-aa07-5143360713be.png)

 ### when time is Finished is automatically shown timeoutpage
https://user-images.githubusercontent.com/75621881/198892712-1cc48c54-137c-40b8-ab18-c185ce3a1328.mp4

## Functionality
- When user click on the start button he can view MCQ page.
- He have to must checked all the MCQ otherwise he can not see the result page
- He have to answer all the questions within 10 Minutes.
- When time finished he automatically redirect timeout page

## Description
### index.html 
- Here I've created seapatre sections for different pages
- Add script.js file and also declare type is module
- Add style.css for css design
### style.css
- Here i reuse some design like button...etc
### Page.js
- Here firstly i created an object with all page information(pageName,pageDisplay,address) like json data
- After that i create two function show and display.
   ####i.if pageDisplay = true, then the page will be diplayed that means display block otherwise display none.Default false.
### Element.js
-

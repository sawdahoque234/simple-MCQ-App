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
### mcqData.js
 - Here i store all the mcqData
### Page.js
- Here firstly i created an object with all page information(pageName,pageDisplay,address) like json data
- After that i create two function show and display.
   - i.if pageDisplay = true, then the page will be diplayed that means display block otherwise display none.Default false.
### Element.js
- Here i create a elementCreate function for globally.elementCreate function is a Blue print funtion for element creation which function will return a new element
- For this function can avoid repitation of element creation
```html
const elementCreate = (tagName, nameOfclass) => {
  const newElement = document.createElement(tagName);
  newElement.className += nameOfclass;
  return newElement;
};
```
- Then i create mcq question that means i wanted to show the MCQ Creation using js not using direct html

### script.js
- Here firstly i import all data and function from other js file
- Then i delare some global variable and firstly we show the startpage which i declare as a index
```html
let pageName = "index";

const start = () => {
  show(pageName);
  display();
  submit.onclick = calculateResult;
  startBtn.onclick = startMCQ;
  startAgain.onclick = index;
  fStartAgain.onclick = index;
};

window.onload = start;

```
- Then using forEach function i display all mcq
```html
//here mcq comes from element.js file
// load mcq get value from mcqdata
//which will be displayed
//here mcqCard is single mcq-qsn
const startMCQ = () => {
  pageName = "mcq";
  mcqData.forEach((value, index) => {
    const mcqCard = mcq(index + 1, value);
    mcqSection.appendChild(mcqCard);
  });
  
  start();
};
```
- Then i want to findout the answer and score.
- For getting answer first i delare an empty array globally for answerquestion 
- Here i push only checjed value
- if answerquestion data and item's answer match then MCQ point will increment (item means mcq)
- ``` html
let answeredQuestion = [];
// collected data from mcq
const collectedResult = () => {
  mcqData.forEach((item, index) => {
    // only checked value will be collected
    // and push it into answeredQuestion array
    let data = document.querySelector(
      `input[name="${item.title}"]:checked`
    ).value;
    answeredQuestion.push(data);
  });
};
//Get result from answeredQuestion array
// and calculate mcq point
const getResult = () => {
  mcqData.forEach((item, i) => {
    if (answeredQuestion[i] === item.answer) {
      mcqPoint += 1;
    }
  });
};
```
- Then calculate mcq Score here default score is 0
```html
let mcqPoint = 0;
// Result calculation
const calculateResult = () => {
  collectedResult();
  getResult();
  score.innerHTML = `${mcqPoint} out of ${mcqData.length}`;
  pageName = "result";
  start();
};
```
- For timer i use setInterval function

```html
const countDown = () => {
  setInterval(() => {
    document.getElementById("timer").innerHTML = `0${minute} : ${sec}`;
    sec--;
    if (sec < 10) {
      document.getElementById("timer").innerHTML = `0${minute} :0${sec}`;
    }
    if (sec === 0) {
      if (minute === 0) {
        pageName = "timeout";
        start();
      }
      sec = 59;
      minute--;
    }
  }, 1000);
};
 ```
 -Firstly i used this condtion to show the two digit until 09 like 01,02...
 ```html
 if (sec < 10) {
      document.getElementById("timer").innerHTML = `0${minute} :0${sec}`;
    }
             ```
             
             
- When click start button thn,everytime  it's open a new mcq  page.
```html
// reload index page again
const index = () => {
  pageName = "index";
  window.location.reload();
};
```


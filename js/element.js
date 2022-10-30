//elementCreate function is a Blue print funtion for element creation
// elementCreate function will return a new element
const elementCreate = (tagName, nameOfclass) => {
  const newElement = document.createElement(tagName);
  newElement.className += nameOfclass;
  return newElement;
};
//create option list
// value get from mcq function
const optionListCreate = (title, index, option) => {
  // every optin has a list(li)
  // list has input and label element
  const li = elementCreate("li", "");
  const input = elementCreate("input", "");
  const label = elementCreate("label", "");
  //idName will be option1,option2...
  input.setAttribute("id", `option${index + 1}`);
  input.setAttribute("name", `${title}`);
  input.setAttribute("type", "radio");
  input.setAttribute("value", option);
  label.setAttribute("html", `option${index + 1}`);
  label.innerHTML = option;
  li.appendChild(input);
  li.appendChild(label);
  return li;
};

//option has a div
// ul child of optionDiv
// all option list child of ul
const optionCreate = (item) => {
  const optionDiv = elementCreate("div", "option");
  const ul = elementCreate("ul", "");
  //item is mcq option
  //option list or li create from optionListCreate function
  item.options.forEach((opt, index) => {
    const opstion = optionListCreate(item.title, index, opt);
    //every li child appended ul
    ul.appendChild(opstion);
  });
  optionDiv.appendChild(ul);
  return optionDiv;
};

// create question using mcq title
const createQuestion = (value) => {
  const questionBox = elementCreate("div", "mcq-qsn");
  const question = elementCreate("h4", "");
  question.innerHTML = value.title;
  questionBox.appendChild(question);
  return questionBox;
};

// finally make a mcq
// mainly mcq is a card
// card has a question
// and four option
const mcq = (qNumber, value) => {
  const card = elementCreate("div", "mcq-card");
  const div = elementCreate("div", "");
  const questionNumber = elementCreate("span", "");
  questionNumber.innerHTML = qNumber;
  const selectQuiz = createQuestion(value);
  const opstion = optionCreate(value);
  card.appendChild(questionNumber);
  div.appendChild(selectQuiz);
  div.appendChild(opstion);
  card.appendChild(div);
  return card;
};
export { mcq };

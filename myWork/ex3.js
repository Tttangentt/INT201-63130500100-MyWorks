// let quest = { id: 1, quest: 'what is it' }; 
//implicit class => let quest= new Object()
// console.log(typeof quest);

class Question {

  constructor(id, question) {
    this._id = id;
    this._question = question;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get question() {
      console.log('This is getter Question')
    return this._question;
  }

  set question(question) {
      console.log('This is setter Question')
      if(question === '' || question === undefined){
    this._question = 'unknown';
      }
  }

  displayQuestion() {
    return `id: ${this._id}, question: ${this.question} }`;
  }

  getQuestLength() {
    return this._question.length;
  }

}
let quest2 = new Question(2,'What is yur name?');
quest2.question = '';

console.log(quest2);
console.log(quest2.question);
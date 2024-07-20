const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = {};

const fillFormFields = form => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      form.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields(feedbackFormEl);

const onFormFieldChange = event => {
  // const {
  //   target: { value: fieldValue },
  // } = event;

  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem('feedback-form-data');
};

feedbackFormEl.addEventListener('change', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

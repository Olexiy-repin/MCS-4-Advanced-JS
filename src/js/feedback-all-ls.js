const feedbackFormEl = document.querySelector('.js-feedback-form');

const fillFormFields = form => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));

  if (formDataFromLS === null) {
    return;
  }

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      form.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields(feedbackFormEl);

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));

  if (formDataFromLS === null) {
    localStorage.setItem('feedback-form-data', JSON.stringify({ [fieldName]: fieldValue }));

    return;
  }

  formDataFromLS[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-data', JSON.stringify(formDataFromLS));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem('feedback-form-data');
};

feedbackFormEl.addEventListener('change', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

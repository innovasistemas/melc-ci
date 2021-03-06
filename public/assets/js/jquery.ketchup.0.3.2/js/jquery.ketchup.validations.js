jQuery.ketchup

//.validation('required', 'This field is required.', function(form, el, value) {
.validation('required', 'este campo es requerido.', function(form, el, value) {
//  var type = el.attr('type').toLowerCase();
  var type = el.attr('type');
  
  if(type == 'checkbox' || type == 'radio') {
    return (el.attr('checked') == true);
  } else {
    return (value.length != 0);
  }
})

//.validation('minlength', 'This field must have a minimal length of {arg1}.', function(form, el, value, min) {
.validation('minlength', 'este campo debe tener una longitud mínima de {arg1}.', function(form, el, value, min) {
  return (value.length >= +min);
})

//.validation('maxlength', 'This field must have a maximal length of {arg1}.', function(form, el, value, max) {
.validation('maxlength', 'este campo debe tener una longitud máxima de {arg1}.', function(form, el, value, max) {
  return (value.length <= +max);
})

//.validation('rangelength', 'This field must have a length between {arg1} and {arg2}.', function(form, el, value, min, max) {
.validation('rangelength', 'este campo debe tener una longitud entre {arg1} y {arg2}.', function(form, el, value, min, max) {
  return (value.length >= min && value.length <= max);
})

//.validation('min', 'Must be at least {arg1}.', function(form, el, value, min) {
.validation('min', 'debe ser al menos {arg1}.', function(form, el, value, min) {
//  return (this.isNumber(value) && +value >= +min);
    return !isNaN(value) && parseFloat(value) >= min; //Refactorizado
})

//.validation('max', 'Can not be greater than {arg1}.', function(form, el, value, max) {
.validation('max', 'no puede ser mayor que {arg1}.', function(form, el, value, max) {
//  return (this.isNumber(value) && +value <= +max);
    return !isNaN(value) && parseFloat(value) <= max; //Refactorizado
})

//.validation('range', 'Must be between {arg1} and {arg2}.', function(form, el, value, min, max) {
.validation('range', 'Debe estar entre {arg1} y {arg2}.', function(form, el, value, min, max) {
//  return (this.isNumber(value) && +value >= +min && +value <= +max);
return !isNaN(value) && parseFloat(value) >= min && parseFloat(value) <= max; //Refactorizado
})

//.validation('number', 'Must be a number.', function(form, el, value) {
.validation('number', 'debe ser un número.', function(form, el, value) {
//  return this.isNumber(value);
    return (value!== "" && !isNaN(value)); //Refactorizado
})

//.validation('digits', 'Must be digits.', function(form, el, value) {
.validation('digits', 'debe contener solo dígitos.', function(form, el, value) {
  return /^\d+$/.test(value);
})

//.validation('email', 'Must be a valid E-Mail.', function(form, el, value) {
.validation('email', 'debe ser un correo electrónico válido.', function(form, el, value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value);
  //return this.isEmail(value);
})

//.validation('url', 'Must be a valid URL.', function(form, el, value) {
.validation('url', 'debe ser una url válida.', function(form, el, value) {
  return value === "#!" || /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(value);
;
})

//.validation('username', 'Must be a valid username.', function(form, el, value) {
.validation('username', 'debe ser un nombre de usuario válido.', function(form, el, value) {
  return this.isUsername(value);
})

//.validation('match', 'Must be {arg1}.', function(form, el, value, word) {
.validation('match', 'debe ser igual al campo {arg1}.', function(form, el, value, word) {
  //return (el.val() == word);
  return (value == $("#txtClave").val());
})

//.validation('contain', 'Must contain {arg1}', function(form, el, value, word) {
.validation('contain', 'debe contener {arg1}', function(form, el, value, word) {
  return this.contains(value, word);
})

//.validation('date', 'Must be a valid date.', function(form, el, value) {
.validation('date', 'debe ser una fecha válida.', function(form, el, value) {
  return this.isDate(value);
})

//.validation('minselect', 'Select at least {arg1} checkboxes.', function(form, el, value, min) {
.validation('minselect', 'seleccione al menos {arg1} casillas.', function(form, el, value, min) {
  return (min <= this.inputsWithName(form, el).filter(':checked').length);
}, function(form, el) {
  this.bindBrothers(form, el);
})

//.validation('maxselect', 'Select not more than {arg1} checkboxes.', function(form, el, value, max) {
.validation('maxselect', 'seleccione no más de {arg1} casillas.', function(form, el, value, max) {
  return (max >= this.inputsWithName(form, el).filter(':checked').length);
}, function(form, el) {
  this.bindBrothers(form, el);
})

//.validation('rangeselect', 'Select between {arg1} and {arg2} checkboxes.', function(form, el, value, min, max) {
.validation('rangeselect', 'seleccione entre {arg1} y {arg2} casillas.', function(form, el, value, min, max) {
  var checked = this.inputsWithName(form, el).filter(':checked').length;
  
  return (min <= checked && max >= checked);
}, function(form, el) {
  this.bindBrothers(form, el);
});
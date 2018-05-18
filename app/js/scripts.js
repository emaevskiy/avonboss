$(document).ready(function(){

  $('input[name=phone]').inputmask('+7(999)999-99-99');


  $('a[href^="#"]').click(function() {

    let anchor = $(this).attr('href')
    let destination = $(anchor).offset().top;

    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: destination - 50
    }, 800);

    return false;

  });


  $('input[name=agreement]').change(function(){

    if ($(this).prop('checked')) {
      $(this).closest('form').find('button[type=submit]').removeAttr('disabled');
    } else if (!$(this).prop('checked')) {
      $(this).closest('form').find('button[type=submit]').attr('disabled', 'disabled');
    }

  });


  // $('select[name=birthday]').change(function(){

  //   let birthday = '';
  //   let temp = [];

  //   for (let i = 0; i < 3; i++) {

  //     let value = $(this).parent().find('select[name=birthday]:eq('+ i +')').val();
  //     temp[i] = value;

  //   }

  //   birthday = temp[0] + '.' + temp[1] + '.' + temp[2];

  //   $(this).closest('.form-field').find('input[name=birthday]').val(birthday);

  // });

});


/*===================FORM SEND BEGIN===================*/

$('button[type=submit]').on('click', function(e){

  e.preventDefault();

  var sendData = {
    fullname: '',
    // birthday: '',
    // adress: '',
    phone: '',
    email: ''
  };

  let form = $(this).closest('form');

  /* FORM VALIDATION START */

  form.find('input[type=text]').each(function(){

    let inputType = $(this).attr('name');
    let value = $(this).val();

    let data;

    if (inputType == 'fullname') {
      data = isValidFullName(value);
      sendData.fullname = data;
    }
    else if (inputType == 'email') {
      data = isValidEmail(value);
      sendData.email = data;
    }
    else if (inputType == 'phone') {
      data = isValidPhone(value);
      sendData.phone = data;
    }
    // else if (inputType == 'birthday') {
    //   data = isValidBirthday(value);
    //   sendData.birthday = data;
    // }

    if (data === false)
    {
      $(this).focus().addClass('form-field-error');

      let errorMessage = "Поле заполнено некорректно";
      if ( !value.length ) {
        errorMessage = "Поле обязательно для заполнения";
      }

      $(this).parent().find('.form-field-message').remove();
      $(this).after('<div class="form-field-message" style="display: block;">'+ errorMessage +'</div>');
    }
    else
    {
      $(this).removeClass('form-field-error').parent().find('.form-field-message').remove();
    }
  });

  if (form.find('.form-field-error').length)
    return;

  /* FORM VALIDATION END */

  form.find('.loader').show();

  $.post('modules/function.php?form', sendData, function(e){
   console.log(e);
   console.log(sendData); // для отладки
   console.log('Анкета успешно отправлена'); // для отладки
  }); // настроить отправку формы в PHP

  setTimeout(function(){

    form.find('.loader, .form-header, .form-body, .form-footer').hide();
    form.find('.form-success').html('Спасибо, '+ sendData.firstname +'! <br>Ваша анкета успешно отправлена! <br><span>Пожалуйста ожидайте. В ближайщее время с Вами свяжется координатор для оформления документов представителя.</span>').fadeIn(300).css('display', 'flex');

  }, 1500);

});

/*===================FORM SEND END===================*/

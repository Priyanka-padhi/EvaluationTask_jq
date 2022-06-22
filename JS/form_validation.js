$(document).ready(function () {

  $("#form").validate({

    rules: {
      Name: {
        required: true,
        minlength: 2,
        name_val: true
      },
      age: {
        required: true,
        min: 18,
        max: 25
      },
      email: {
        required: true,
        email_val: true
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        phone_val: true
      },
      gender: {
        required: true
      },

      pickupTime1: {

        required: true
      },
      pickupTime2: {
        required: true
      },
      pickupTime3: {
        required: true
      },
      pickupTime4: {
        required: true
      },
      pickupTime5: {
        required: true
      },

      pickupTime6: {
        required: true
      },
      pickupTime7: {
        required: true
      }
    },
    errorPlacement: function (error, element) {
      if (element.attr('name') == 'gender') {
        error.insertAfter("#others");
      }
      else if (element.is(":checkbox")) {
        error.insertAfter("#nextday");
      }
      else {
        error.insertAfter(element);
      }
    }
  })

  // validators
  $.validator.addMethod('name_val', function (value) {
    return /^[a-zA-Z ]*$/.test(value);
  }, 'The field can only contains alphabets and space');
  $.validator.addMethod('email_val', function (value) {
    return /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@tntra([\.])io/.test(value);
  }, 'You need to have tntra domain address');
  $.validator.addMethod('phone_val', function (value) {
    return /[7-9]{1}[0-9]{9}$/.test(value);
  }, 'Phone number must be of 10 digits & starting digit must be of 9 or 8 or 7');
});

//to make days checkbox enabled and disabled
$(document).on('click', '#nextday input[type=checkbox]', function (event) {

  if ($(this).is(':checked')) {
    $('.day input[type=checkbox]').attr('disabled', false).prop("checked", false);

  }
  else {
    $('.day input[type=checkbox] ').attr('disabled', true).prop("checked", false).parent().parent().siblings('.time').children().attr('disabled', true).closest("div.time").find("select").val("").closest("div.time").find("label.error").hide();
  }
});
//to make dropdown enable and disable

$(document).on('click', '.day input[type=checkbox]', function (event) {

  if ($(this).is(':checked')) {
    $(this).parent().parent().siblings('.time').children().attr('disabled', false);

  }
  else {

    $(this).parent().parent().siblings('.time').children().attr('disabled', true).closest("div.time").find("select").val("").closest("div.time").find("label.error").hide();
  }
});



$("#form").submit(function (event) {
  event.preventDefault();



  let Name = $('#Name').val();
  let age = $('#age').val();
  let phone = $("#phone").val();
  let email = $("#email").val();
  let gender = $('input[type=radio][name=gender]:checked').val();
  let sunday = $("#pickupTime1").val();
  let monday = $("#pickupTime2").val();
  let tuesday = $("#pickupTime3").val();
  let wednesday = $("#pickupTime4").val();
  let thursday = $("#pickupTime5").val();
  let friday = $("#pickupTime6").val();
  let saturday = $("#pickupTime7").val();

  if ($('#Name').valid() &&
    $('#age').valid() &&
    $('#email').valid() &&
    $('#phone').valid() &&
    $('input[name=gender]:checked') != undefined &&
    $('#nextday').prop('checked', true) &&
    sunday != "" ||
    monday != "" ||
    tuesday != "" ||
    wednesday != "" ||
    thursday != "" ||
    friday != "" ||
    saturday != ""
  ) {
    //validation for dropdown
    var flag = true;
    for (let i = 1; i < 8; i++) {
      if ($('#pickupTime' + i).parent().parent().children('.day').children().children().is(':checked') && $('#pickupTime' + i).val() == "") {
        // if the days checkbox is checked and the value of pickupTime is null then  flag will be set at false
        flag = false;
      }
    }

    if (flag == true) {

      console.log({
        Name, age, phone, email, gender, sunday, monday, tuesday, wednesday, thursday, friday, saturday
      })

      const Data = {
        'Name': Name,
        'age': age,
        'phone': phone,
        'email': email,
        'gender': gender,
        'sunday': sunday,
        'monday': monday,
        'tuesday': tuesday,
        'wednesday': wednesday,
        'thursday': thursday,
        'friday': friday,
        'saturday': saturday

      }

      const userdata = localStorage.setItem('Data', JSON.stringify(Data));

      console.log('userdata', userdata);
      window.open('../HTML/formData_display.html')
    }
  }

});




















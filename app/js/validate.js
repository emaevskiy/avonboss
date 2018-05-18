function isValidEmail( email ){
  if( !email.length )
    return true;

  let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  let resultEmail = pattern.exec( email );
  if( !resultEmail )
    return false;

  return resultEmail[0];
}

function isValidPhone( phone ){
  if( !phone.length )
    return false;

  phone = phone.replace(/\-/gi, '');
  phone = phone.replace(/\ /gi, '');
  phone = phone.replace(/\)/gi, '');
  phone = phone.replace(/\(/gi, '');

  let pattern = /((\+7|8)[\-\ \(]?)[\d\ \-]+/;
  let resultPhone = pattern.exec( phone );
  if( !resultPhone || resultPhone[0].length != 12 )
    return false;

  return resultPhone[0];
}

function isValidName( name ){
  if( !name.length || name.length < 2 )
    return false;

  return name;
}

function isValidFullName( fullname ){
  if( !fullname.length )
    return false;

  return fullname;
}

// function isValidBirthday( birthday ){
//   if( !birthday.length || birthday.length < 10 )
//     return false;

//   return birthday;
// }



// function isValidPatronymic( patronymic ){
//   if( patronymic.length && patronymic.length < 2 )
//     return false;

//   return patronymic;
// }

// function isValidCity( city ){
//   if( !city.length || city.length < 2 )
//     return false;

//   return city;
// }



/* TEMPLATE */

// function isValidEmail( email ){
//   if( !email.length )
//     return false;

//   let emailP = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
//   let resultEmail = emailP.exec( email );
//   if( !resultEmail )
//     return false;

//   return resultEmail[0];
// }

// function isValidPhone( phone ){
//   if( !phone.length )
//     return false;

//   phone = phone.replace(/\-/gi, '');
//   phone = phone.replace(/\ /gi, '');
//   phone = phone.replace(/\)/gi, '');
//   phone = phone.replace(/\(/gi, '');

//   let phoneP = /((\+7|8)[\-\ \(]?)[\d\ \-]+/;
//   let resultPhone = phoneP.exec( phone );
//   if( !resultPhone || resultPhone[0].length != 12 )
//     return false;

//   return resultPhone[0];
// }

// function isValidName( name ){
//   if( !name.length || name.length < 3 )
//     return false;

//   return name;
// }


/* END TEMPLATE */
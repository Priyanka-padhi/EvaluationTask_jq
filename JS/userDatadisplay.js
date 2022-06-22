
const Data = JSON.parse(localStorage.getItem('Data'));
const { Name, age, phone, email, gender, sunday, monday, tuesday, wednesday, thursday, friday, saturday } = Data;
console.log({
  Name, age, phone, email, gender, sunday, monday, tuesday, wednesday, thursday, friday, saturday
})
$('#disTable tbody').append('<tr class="child"><td>' + Name + '</td><td>' + age + '</td><td>' + email + '</td><td>' + phone + '</td><td>' + gender + '</td><td>' + sunday + '</td><td>' + monday + '</td><td>' + tuesday + '</td><<td>' + wednesday + '</td><td>' + thursday + '</td><td>' + friday + '</td><td>' + saturday + '</td></tr>');


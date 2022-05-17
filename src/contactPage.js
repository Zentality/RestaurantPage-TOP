import './contactPage.css'

let contactPage = (() => {
  let contactPage = document.createElement("div");
  contactPage.classList.add("contactPage")

  let openHoursHeader = document.createElement("h2");
  openHoursHeader.textContent = "We are open 7 days a week!";
  let hoursTable = document.createElement("table");

  let sundayRow = document.createElement("tr");
  let sunday = document.createElement("td");
  sunday.textContent = "Sunday";
  let sundayHours = document.createElement("td");
  sundayHours.textContent = "11am - 9pm";
  sundayRow.append(sunday, sundayHours);

  let mondayRow = document.createElement("tr");
  let monday = document.createElement("td");
  monday.textContent = "Monday";
  let mondayHours = document.createElement("td");
  mondayHours.textContent = "3pm - 9pm";
  mondayRow.append(monday, mondayHours);

  let tuesdayRow = document.createElement("tr");
  let tuesday = document.createElement("td");
  tuesday.textContent = "Tuesday";
  let tuesdayHours = document.createElement("td");
  tuesdayHours.textContent = "3pm - 9pm";
  tuesdayRow.append(tuesday, tuesdayHours);

  let wednesdayRow = document.createElement("tr");
  let wednesday = document.createElement("td");
  wednesday.textContent = "Wednesday";
  let wednesdayHours = document.createElement("td");
  wednesdayHours.textContent = "3pm - 9pm";
  wednesdayRow.append(wednesday, wednesdayHours);

  let thursdayRow = document.createElement("tr");
  let thursday = document.createElement("td");
  thursday.textContent = "Thursday";
  let thursdayHours = document.createElement("td");
  thursdayHours.textContent = "3pm - 11pm";
  thursdayRow.append(thursday, thursdayHours);

  let fridayRow = document.createElement("tr");
  let friday = document.createElement("td");
  friday.textContent = "Friday";
  let fridayHours = document.createElement("td");
  fridayHours.textContent = "3pm - 9pm";
  fridayRow.append(friday, fridayHours);

  let saturdayRow = document.createElement("tr");
  let saturday = document.createElement("td");
  saturday.textContent = "Saturday";
  let saturdayHours = document.createElement("td");
  saturdayHours.textContent = "9am - 11pm";
  saturdayRow.append(saturday, saturdayHours);

  hoursTable.append(sundayRow, mondayRow, tuesdayRow, wednesdayRow, thursdayRow, fridayRow, saturdayRow);


  let phoneHeader = document.createElement("h2");
  phoneHeader.textContent = "Phone";
  let phone = document.createElement("p");
  phone.textContent = "+61 555 999 020";

  let addressHeader = document.createElement("h2");
  addressHeader.textContent = "Located";
  let address = document.createElement("p");
  address.textContent = "742 Evergreen Terrace, Springfield, USA";

  contactPage.append(openHoursHeader, hoursTable, phoneHeader, phone, addressHeader, address);
  return contactPage;
})();

export default contactPage;
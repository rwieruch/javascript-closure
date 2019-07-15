function getEmployeeFactory() {
  let employeeNumber = 1;
  return function(name, country) {
    return { employeeNumber: employeeNumber++, name, country };
  };
}

const getEmployee = getEmployeeFactory();

const employeeOne = getEmployee('Robin', 'Germany');
// employeeNumber = 50; NOT POSSIBLE WITH CLOSURE
const employeeTwo = getEmployee('Markus', 'Canada');

const employees = [employeeOne, employeeTwo];

console.log(employees);

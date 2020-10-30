const getEmployerRole = (employeeName, employees) => {

for (let i = 0; i < employees.length; i++) {
    for (const property in employees[i]) {
        if (employees[i][property] === employeeName) {
            return employees[i]['role'];
        }

        
        //console.log(employees[i]);
    }
}
};

module.exports = getEmployerRole;

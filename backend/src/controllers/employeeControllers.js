const employeeControllers = {};
import employeeModels from "../models/Employee.js"

//SELECT
employeeControllers.getEmployee = async (req, res) => {
    const employee = await employeeModels.find()
    res.json(employee)
}

//INSERT
employeeControllers.insertEmployee = async (req, res) => {
    const {name, birthdate, gender, email, dui, password} = req.body;
    const newEmployee = new employeeModels({name, birthdate, gender, email, dui, password})
    await newEmployee.save()
    res.json({message: "employee saved"});
}

//DELETE
employeeControllers.deleteEmployee = async (req, res) => {
    await employeeModels.findByIdAndDelete(req.params.id);
    res.json({message: "employee deleted"});
}

//UPDATE
employeeControllers.updateEmployee = async (req, res) => {
    const {name, birthdate, gender, email, dui, password} = req.body;
    const updateEmployee = await employeeModels.findByIdAndUpdate(req.params.id, {name, birthdate, gender, email, dui, password}, {new: true})
    res.json({message: "employee updated"});
}

export default employeeControllers;
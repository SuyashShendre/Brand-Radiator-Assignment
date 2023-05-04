import Admin from "../models/admin.js";

const register = async (req, res) => {
  try {
    const reqData = req.body;

    if (!reqData.email && !reqData.password) {
      return res
        .status(400)
        .send({ status: false, message: "All fields are required" });
    }

    const duplicateData = await Admin.findOne({ email: reqData.email });
    if (duplicateData) {
      return res
        .status(400)
        .send({ status: false, message: "Email is already register" });
    }

    const savedData = await Admin.create(reqData);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: savedData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email && !password) {
      return res
        .status(400)
        .send({ status: false, message: "All fields are required" });
    }

    let adminData = await Admin.findOne({ email, password });
    if (adminData) {
      return res.status(200).send({
        status: true,
        message: "Admin login successfull",
        data: {
          adminId: adminData._id,
        },
      });
    } else {
      return res
        .status(400)
        .send({ status: false, message: "Invalid credentials." });
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

export default { login, register };

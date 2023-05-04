import Contact from "../models/contact.js";

const createContact = async (req, res) => {
  try {
    const reqData = req.body;

    if (!reqData.name && !reqData.email && !reqData.message) {
      return res
        .status(400)
        .send({ status: false, message: "All fields are required" });
    }

    const savedData = await Contact.create(reqData);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: savedData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getContacts = async (req, res) => {
  try {
    const page = req.query.page;
    const size = req.query.size;
    const skip = (page - 1) * size;

    const total = await Contact.countDocuments();
    const data = await Contact.find()
      .skip(skip)
      .limit(size)
      .sort({ createdAt: -1 });
    if (data)
      return res.status(200).send({
        status: true,
        message: `${data.length} match found`,
        data: data,
        total: total,
        page: page,
        size: size,
      });
    return res.status(404).send({
      status: false,
      message: "No data found",
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

export default {
  createContact,
  getContacts,
};

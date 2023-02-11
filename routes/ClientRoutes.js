const express = require('express');
const Router = require('express');
const router = express.Router();
const Client = require('../models/Client');
const controller = require('../controllers/clientsController');

const path = require('path');
const uploadPath = path.join('../../ah-tattooista/public', Client.avatarBasePath);

const imageMimeTypes = ['image/jpeg', 'image/jpg', 'image/png'];


// Getting all
router.get('/', controller.getClients);

// Getting one
router.get('/:id', getClient, controller.getClient);

// Creating one

router.post('/', controller.addClient);

/* router.post('/', upload.single('avatar'), async (req, res) => {
  const fileName = req.file != null ? req.file.filename : null;
  const client = new Client({
    fullName: req.body.fullName,
    avatar: fileName,
  });

    const oldData = { ...client.contacts }
    client.contacts = { ...oldData, ...{ [req.body.contact]: req.body.contactValue }}
    try {
      const newClient = await client.save();
      res.status(201).json(newClient);
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
}); */

router.post('/avatar/:id', getClient, async (req, res) => {
  //console.log(path.basename(__filename) + "!!!!");
  const fileName = req.files.avatar !== null ? req.files.avatar.name : null;
  req.files.avatar.mv(uploadPath + fileName);

  res.client.avatar = fileName;
  try {
    const updatedClient = await res.client.save();
    res.status(201).json(updatedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});

router.post('/updateContact/:id', getClient, controller.updateClientContact);

// Deleting one
router.delete('/:id', getClient, controller.deleteClient);

// adding a client from customers

router.post('/customerToClient', controller.customerToClient);

async function getClient(req, res, next) {
  let client;
  try {
    client = await Client.findById(req.params.id);
    if (client == null) {
      return res.status(404).json({ message: 'Cannot find client' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.client = client;
  next();
}

module.exports = router;

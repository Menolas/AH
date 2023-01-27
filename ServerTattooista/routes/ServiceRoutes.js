const express = require('express');
const Router = require('express');
const router = new Router();
const Service = require('../models/Service');
const controller = require('../controllers/serviceController');

//getting all services
router.get('/', controller.getServices);

//add service

router.post('/', controller.addService);

async function getService(req, res, next) {
  let service;

  try {
    service = await Service.findById(req.params.id);
    if (service == null) {
      return res.status(404).json({ message: 'Cannot find service' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  req.service = service;
  next();
}

module.exports = router;

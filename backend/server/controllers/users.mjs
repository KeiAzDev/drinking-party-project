import { validationResult } from "express-validator";
import User from '../../models/User.mjs';

async function getAllUsers(req, res){
  const users = await User.find();
  res.json(users);
};

async function registUser(req, res){
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
      const errs = errors.array();
      return res.status(400).json(errs);
  }

      const user = new User(req.body);
      const newUser = await user.save();
      res.status(201).json(newUser);
};

async function updateUser(req, res) {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
      const errs = errors.array();
      return res.status(400).json(errs);
  }

  const { name, email, role } = req.body;
  const _id = req.params.id;
  const user = await User.findById(_id);

  if(user === null) return res.status(404).json({msg: "Page Not Found"});

  if(name !== undefined) user.name = name;
  if(email !== undefined) user.email = email;
  if(role !== undefined) user.role = role;
  await user.save();
  res.json(user);
};

async function deleteUser(req, res) {
  const _id = req.params.id;
  const {deletedCount} = await User.deleteOne({_id});
  if(deletedCount === 0) return res.status(404).json({msg: "Target User Not Found"});
  res.status(201).json({"msg":"User Delete Succeeded"});
};

export {registUser, updateUser, getAllUsers, deleteUser};
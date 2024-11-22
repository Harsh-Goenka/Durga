// models/Message.js
import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: false },
  phone: { type: String, required: false },
  message: { type: String, required: true },
  isBulkOrder: { type: Boolean, required: false }
});

const Message = mongoose.model('Message', MessageSchema);
export default Message;
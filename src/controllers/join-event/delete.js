const { isAuthorized } = require("../../utils/auth-utils");

const deleteJoinEvent = async (req, res) => {
  try {
    const {
      session,
      db: { JoinEvent },
      params: { userId, eventId },
    } = req;
    if (!isAuthorized(userId, session)) return res.sendStatus(403);
    const del = await JoinEvent.deleteEvent(session.userId, eventId);
    res.status(201).json(del);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteJoinEvent;

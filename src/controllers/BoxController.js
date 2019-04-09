const Box = require("./../models/Box");

class BoxController {
  async store(req, res) {
    const body = req.body;
    const box = await Box.create(body);

    return res.json(box);
  }

  async show(req, res) {
    const body = req.params;

    const box = await Box.findById(body.id).populate({
      path: "files",
      options: {
        sort: { createdAt: -1 }
      }
    });

    res.json(box);
  }
}

module.exports = new BoxController();

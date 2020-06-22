import Peers from "../models/Peers";

class PeersController {
  async store(req, res) {
    const data = req.body;

    const peerExists = await Peers.findByPk(data.id);

    if (peerExists) {
      return res.status(400).json({ error: "This peer already exists." });
    }

    const peer = await Peers.create(data);

    return res.json({ peer });
  }

  async update(req, res) {
    const peer = await Peers.findByPk(req.params.id);

    if (!peer) {
      return res.status(400).json({ error: "Peer does not exists" });
    }

    const data = req.body;

    await peer.update(data);

    return res.json(peer);
  }

  async index(req, res) {
    const peers = await Peers.findAll();

    return res.json(peers);
  }

  async show(req, res) {
    const peer = await Peers.findByPk(req.params.id);

    if (!peer) {
      return res.status(400).json({ error: "Peer does not exists" });
    }

    return res.json(peer);
  }

  async delete(req, res) {
    const peer = await Peers.findByPk(req.params.id);

    if (!peer) {
      return res.status(400).json({ error: "This peer does not exists." });
    }

    peer.destroy();

    return res.json();
  }
}

export default new PeersController();

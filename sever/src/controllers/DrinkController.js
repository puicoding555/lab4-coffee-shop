module.exports = {
  index(req, res) {
    res.send('GET all drinks')
  },

  show(req, res) {
    res.send('GET drink id = ' + req.params.id)
  },

  create(req, res) {
    res.send('CREATE drink: ' + JSON.stringify(req.body))
  },

  update(req, res) {
    res.send(
      'UPDATE drink id = ' +
      req.params.id +
      ' : ' +
      JSON.stringify(req.body)
    )
  },

  delete(req, res) {
    res.send('DELETE drink id = ' + req.params.id)
  }
}

function checkDataTypes(schemaValidator) {
  return (req, res, next) => {
    try {
      const { error } = schemaValidator(req.body);
      if (error)
        return res
          .status(400)
          .send("wrong data types :: " + error.details[0].message)
          .end();
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = checkDataTypes;

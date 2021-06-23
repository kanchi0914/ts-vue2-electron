module.exports.createNewDoc = (number: Number) => {
  return {
    title: `${number}`,
    comment: "",
    tags: [],
    createdAt: "",
    updatedAt: "",
    text: `test test ${number}`
  }
}

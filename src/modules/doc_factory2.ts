module.exports = {
  addNew: (number: number) => {
    return {
      title: `${number}`,
      comment: "",
      tags: [],
      createdAt: "",
      updatedAt: "",
      text: `test test ${number}`
    }
  }
}

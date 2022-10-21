const mutationsEditTree = {
  updateTreesInStore(state, trees) {
    state.treesInStore = trees
  },
  updateName(state, name) {
    state.treeEditedRow.name = name
  },
  updateSpecie(state, specie) {
    state.treeEditedRow.specie = specie
  },
  updatePrice(state, price) {
    state.treeEditedRow.price = price
  },
  updateAbsorptionCo2(state, absorptionCo2) {
    state.treeEditedRow.absorptionCo2 = absorptionCo2
  },
  updateLifeSpan(state, lifeSpan) {
    state.treeEditedRow.lifeSpan = lifeSpan
  },
  updateHeight(state, height) {
    state.treeEditedRow.height = height
  },
  updateInStore(state, inStore) {
    state.treeEditedRow.inStore = inStore
  },
  updateDescription(state, description) {
    state.treeEditedRow.description = description
  },
  updatePicturePath(state, picturePath) {
    state.treeEditedRow.picturePath = picturePath
  },
  editTree2(state, id) {
    state.trees.forEach((tree, i) => {
      if (tree._id === id) {
        state.trees[i].isEdit = true
        state.treeEditedRow = { ...tree }
      }
    })
  },
  editTree(state, id) {
    state.trees.forEach((tree, i) => {
      if (tree._id === id) {
        state.trees[i].isEdit = true
      }
    })
  },
}

export default mutationsEditTree

import allData from './data'

class DataBase {
  constructor() {}

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const asArray = Object.values(allData)
        console.log('allDATA:', asArray)
        await randomDelay()
        resolve(asArray)
      } catch (error) {
        reject(error)
      }
    })
  }

  getById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const project = Object.values(allData).find(
          (project) => project.id === id
        )
        await randomDelay()
        resolve(project)
      } catch (error) {
        reject(error)
      }
    })
  }
}

const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })

export default DataBase
function isInvalid(variable) {
  if (variable === 0 || variable === undefined || variable === null) return true
  return false 
}
export default {
    getSettings: () => {
        if (isInvalid(JSON.parse(localStorage.getItem("__Settings__")))) {
          localStorage.setItem("__Settings__", '{}')
        }
        return JSON.parse(localStorage.getItem("__Settings__"))
    },
    saveSettings: (settings) => {
      localStorage.setItem("__Settings__", JSON.stringify(settings))
    },
    SavePosition: "SavePosition",
}
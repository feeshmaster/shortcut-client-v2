export const Settings = {
    getSettings: () => {
        return JSON.parse(localStorage.getItem("__Settings__"))
    },
    saveSettings: (settings) => {
      localStorage.setItem("__Settings__", JSON.stringify(settings))
    },
    SavePosition: "SavePosition",
}
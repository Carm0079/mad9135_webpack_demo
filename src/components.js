export const listContainer = children => {
  const element = document.createElement('ul')
  element.innerHTML = children
  return element
}

export const header = (children, level = 1) => {
  const element = document.createElement(`h${level}`)
  element.innerHTML = children
  return element
}

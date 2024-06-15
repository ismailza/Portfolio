
/**
 * Scroll to a section by its id
 * @param id - The id of the section to scroll to
 */
const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
  else {
    window.location.href = `/#${id}`
  }
}

export default scrollToSection
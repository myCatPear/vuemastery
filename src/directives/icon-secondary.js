export default {
  beforeMount(el, binding) {
    let iconCLass = `fa fa-${binding.value.icon} text-green-400 text-xl`

    if (binding.value.right) {
      iconCLass += ' float-right'
    }

    el.innerHTML += `<i class="${iconCLass}"></i>`
  }
}

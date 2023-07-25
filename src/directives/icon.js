export default {
  beforeMount(el, binding) {
    let iconCLass = `fa fa-${binding.value}  text-xl`

    if (binding.arg === 'full') {
      iconCLass = binding.value
    }

    if (binding.modifiers.right) {
      iconCLass += ' float-right'
    }

    if (binding.modifiers.yellow) {
      iconCLass += ' text-yellow-400'
    } else {
      iconCLass += ' text-green-400'
    }

    el.innerHTML += `<i class="${iconCLass}"></i>`
  }
}

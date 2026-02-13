// Vite plugin to ensure Vite 7 build globals are defined in production
// Fixes: __DEFINES__, __HMR_CONFIG_NAME__, __BASE__, and other Vite runtime refs

// __DEFINES__ is handled separately below. These are other Vite runtime globals.
const VITE_GLOBALS = [
  ['__HMR_CONFIG_NAME__', '""'],
  ['__HMR_PROTOCOL__', '""'],
  ['__HMR_HOST__', '""'],
  ['__HMR_PORT__', '""'],
  ['__BASE__', '"/"'],
  ['__HMR_ENABLE_OVERLAY__', 'false'],
  ['__SERVER_HOST__', '""'],
]

function getInjections(code) {
  const injections = []
  for (const [name, value] of VITE_GLOBALS) {
    if (!code.includes(name)) continue
    // Already declared in this chunk?
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const hasDecl = new RegExp(`(const|let|var)\\s+${escaped}\\s*=`).test(code)
    if (!hasDecl) {
      injections.push(`var ${name} = ${value};`)
    }
  }
  return injections
}

function fixConstLet(code, name) {
  const regex = new RegExp(`(const|let)(\\s+${name}\\s*=)`, 'g')
  return code.replace(regex, 'var$2')
}

export default function definesPlugin() {
  return {
    name: 'vite-plugin-defines-fix',
    renderChunk(code, chunk, options) {
      let out = code

      // Fix Vite runtime globals const/let (TDZ) - production doesn't use HMR
      for (const name of ['__SERVER_HOST__', '__HMR_PROTOCOL__', '__HMR_HOST__', '__HMR_PORT__', '__DEFINES__']) {
        if (out.includes(name)) {
          out = fixConstLet(out, name)
          if (!new RegExp(`(const|let|var)\\s+${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(out)) {
            const value = name === '__DEFINES__'
              ? '((typeof globalThis !== "undefined" && globalThis.__DEFINES__) || (typeof window !== "undefined" && window.__DEFINES__) || {})'
              : '""'
            out = `var ${name} = ${value};\n${out}`
          }
        }
      }


      // Inject any missing Vite globals at the start of the chunk
      const injections = getInjections(out)
      if (injections.length) {
        out = injections.join('\n') + '\n' + out
      }

      return out !== code ? out : null
    },
  }
}

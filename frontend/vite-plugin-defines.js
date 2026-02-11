<<<<<<< HEAD
// Vite plugin to ensure Vite 7 build globals are defined in production
// Fixes: __DEFINES__, __HMR_CONFIG_NAME__, __BASE__, and other Vite runtime refs

// __DEFINES__ is handled separately below. These are other Vite runtime globals.
const VITE_GLOBALS = [
  ['__HMR_CONFIG_NAME__', '""'],
  ['__BASE__', '"/"'],
  ['__HMR_ENABLE_OVERLAY__', 'false'],
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
=======
// Vite plugin to ensure __DEFINES__ is properly defined
// This fixes the "Uncaught ReferenceError: __DEFINES__ is not defined" error in Vite 7
>>>>>>> origin/main

export default function definesPlugin() {
  return {
    name: 'vite-plugin-defines-fix',
    renderChunk(code, chunk, options) {
<<<<<<< HEAD
      let out = code

      // Fix __DEFINES__ const/let (TDZ)
      if (out.includes('__DEFINES__')) {
        out = fixConstLet(out, '__DEFINES__')
        if (!/(const|let|var)\s+__DEFINES__/.test(out)) {
          const globalRef = '((typeof globalThis !== "undefined" && globalThis.__DEFINES__) || (typeof window !== "undefined" && window.__DEFINES__) || {})'
          out = `var __DEFINES__ = ${globalRef};\n${out}`
        }
      }

      // Inject any missing Vite globals at the start of the chunk
      const injections = getInjections(out)
      if (injections.length) {
        out = injections.join('\n') + '\n' + out
      }

      return out !== code ? out : null
=======
      // Only process chunks that reference __DEFINES__
      if (!code.includes('__DEFINES__')) {
        return null
      }

      // Check if __DEFINES__ is already declared with const/let (causes TDZ issues)
      const hasConstOrLet = /(const|let)\s+__DEFINES__/.test(code)
      
      if (hasConstOrLet) {
        // Replace const/let with var to avoid temporal dead zone
        // This allows __DEFINES__ to be hoisted and accessible before initialization
        return code.replace(
          /(const|let)(\s+__DEFINES__\s*=)/g,
          'var$2'
        )
      }
      
      // If __DEFINES__ is referenced but not declared, add declaration
      // Use var and reference from global object to avoid TDZ
      if (!/(const|let|var)\s+__DEFINES__/.test(code)) {
        const globalRef = '((typeof globalThis !== "undefined" && globalThis.__DEFINES__) || (typeof window !== "undefined" && window.__DEFINES__) || {})'
        return `var __DEFINES__ = ${globalRef};\n${code}`
      }
      
      return null
>>>>>>> origin/main
    },
  }
}

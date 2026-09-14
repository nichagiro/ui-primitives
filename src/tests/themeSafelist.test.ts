import { describe, it, expect } from 'vitest'
import { safelist } from '../lib/themeSafelist'
import {
  textColor,
  bgColor,
  textColorFg,
  bgColorFg,
  accentColor,
  bgColorAlpha,
  borderBgColorAlpha,
  focusRing,
  focusWithinRing,
  peerFocusRing,
  peerCheckedBg,
  peerCheckedBorder,
  peerCheckedBgBorder,
  borderSolidColor,
  borderBgColor,
  solidColor,
  softColor,
} from '../lib/colorSchemes'

const helperOutputs: Record<string, string[]> = {
  textColor: Object.values(textColor()),
  bgColor: Object.values(bgColor()),
  textColorFg: Object.values(textColorFg()),
  bgColorFg: Object.values(bgColorFg()),
  accentColor: Object.values(accentColor()),
  bgColorAlpha_10: Object.values(bgColorAlpha(10)),
  borderBgColorAlpha_5: Object.values(borderBgColorAlpha(5)),
  focusRing: Object.values(focusRing()),
  focusWithinRing: Object.values(focusWithinRing()),
  peerFocusRing: Object.values(peerFocusRing()),
  peerFocusRing_double: Object.values(peerFocusRing(true)),
  peerCheckedBg: Object.values(peerCheckedBg()),
  peerCheckedBorder: Object.values(peerCheckedBorder()),
  peerCheckedBgBorder: Object.values(peerCheckedBgBorder()),
  borderSolidColor: Object.values(borderSolidColor()),
  borderBgColor: Object.values(borderBgColor()),
  solidColor_shadowSm: Object.values(solidColor('shadow-sm')),
  softColor: Object.values(softColor()),
}

const allClasses = safelist.join(' ')

describe('themeSafelist completeness', () => {
  Object.entries(helperOutputs).forEach(([helperName, schemeOutputs]) => {
    it(`${helperName}: all generated classes are in the safelist`, () => {
      schemeOutputs.forEach((output) => {
        output.split(/\s+/).forEach((cls) => {
          if (cls) expect(allClasses, `${cls} missing from safelist (from ${helperName})`).toContain(cls)
        })
      })
    })
  })
})